/**
 * Notion Export Script
 *
 * Queries the Notion blog database, converts pages to MDX files,
 * downloads images as WebP, and resolves bookmark metadata.
 *
 * Usage: pnpm tsx scripts/notion-export.ts
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';
import camelcaseKeys from 'camelcase-keys';
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import sharp from 'sharp';

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const BLOG_DATABASE_ID = 'bf942e3026c44977bf63cb0a28025d91';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.resolve(__dirname, '../src/content/posts');

// ---------------------------------------------------------------------------
// Notion client
// ---------------------------------------------------------------------------

const notion = new Client({
  auth: process.env.NOTION_SECRET_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Category {
  name: string;
  color: string;
}

interface PostMeta {
  id: string;
  title: string;
  slug: string; // has leading slash, e.g. "/my-post"
  description: string | null;
  categories: Category[];
  createdTime: string;
  lastEditedTime: string;
}

interface BookmarkMeta {
  url: string;
  title: string;
  description: string;
  image: string;
  favicon: string;
  domain: string;
}

// ---------------------------------------------------------------------------
// Fetch all posts from Notion (paginated)
// ---------------------------------------------------------------------------

async function fetchAllPosts(): Promise<PostMeta[]> {
  const results: any[] = [];
  let hasMore = true;
  let startCursor: string | undefined;

  while (hasMore) {
    const response = await notion.databases.query({
      database_id: BLOG_DATABASE_ID,
      page_size: 100,
      start_cursor: startCursor,
      sorts: [
        {
          timestamp: 'last_edited_time',
          direction: 'descending',
        },
      ],
    });

    results.push(...response.results);
    hasMore = response.has_more;
    startCursor = response.next_cursor ?? undefined;
  }

  return results.map((result) => {
    const { createdTime, lastEditedTime, properties } = camelcaseKeys(result, {
      deep: true,
    }) as any;

    const { category, description, slug, title } = properties;

    return {
      id: result.id,
      title: title.title[0]?.plainText ?? '',
      slug: slug.richText[0]?.plainText ?? '',
      description: description.richText[0]?.plainText ?? null,
      categories: (category.multiSelect as any[]).map((c) => ({
        name: c.name,
        color: c.color,
      })),
      createdTime,
      lastEditedTime,
    };
  });
}

// ---------------------------------------------------------------------------
// Image handling
// ---------------------------------------------------------------------------

/** Extract all image URLs from a markdown string. */
function extractImageUrls(markdown: string): string[] {
  const regex = /!\[.*?\]\((https?:\/\/[^)]+)\)/g;
  const urls: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = regex.exec(markdown)) !== null) {
    urls.push(match[1]);
  }
  return [...new Set(urls)];
}

/**
 * Download an image from `url`, convert to WebP via sharp, and write to `dest`.
 * Returns true on success.
 */
async function downloadImageAsWebP(url: string, dest: string): Promise<boolean> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const buffer = Buffer.from(await response.arrayBuffer());
    await sharp(buffer).webp({ quality: 85 }).toFile(dest);
    return true;
  } catch (err) {
    console.warn(`  [warn] Failed to download image ${url}: ${(err as Error).message}`);
    return false;
  }
}

/**
 * Download all images found in `markdown`, save them as WebP in `postDir`,
 * and rewrite the image URLs to relative paths.
 */
async function processImages(markdown: string, postDir: string): Promise<string> {
  const imageUrls = extractImageUrls(markdown);
  if (imageUrls.length === 0) return markdown;

  fs.mkdirSync(postDir, { recursive: true });

  let result = markdown;
  let index = 0;

  for (const url of imageUrls) {
    const filename = `image-${index}.webp`;
    const dest = path.join(postDir, filename);
    const ok = await downloadImageAsWebP(url, dest);
    if (ok) {
      // Replace all occurrences of this URL in the markdown
      result = result.split(url).join(`./${filename}`);
      index++;
    }
  }

  return result;
}

// ---------------------------------------------------------------------------
// Bookmark handling
// ---------------------------------------------------------------------------

/**
 * Scrape OG / meta data from a URL using cheerio.
 * Mirrors the logic in /api/bookmark/route.ts.
 */
async function scrapeBookmarkMeta(url: string): Promise<BookmarkMeta> {
  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; blog-export-bot/1.0)' },
      signal: AbortSignal.timeout(8000),
    });
    const html = await response.text();
    const $ = cheerio.load(html);
    const domain = new URL(url).hostname;

    const faviconHref =
      $('link[rel="icon"]').attr('href') ||
      $('link[rel="shortcut icon"]').attr('href') ||
      `https://${domain}/favicon.ico`;

    // Resolve relative favicon URLs
    let favicon = faviconHref;
    if (faviconHref && !faviconHref.startsWith('http')) {
      favicon = new URL(faviconHref, url).toString();
    }

    return {
      url,
      title:
        $('meta[property="og:title"]').attr('content') || $('title').text() || domain,
      description:
        $('meta[property="og:description"]').attr('content') ||
        $('meta[name="description"]').attr('content') ||
        '',
      image: $('meta[property="og:image"]').attr('content') || '',
      favicon,
      domain,
    };
  } catch {
    const domain = (() => {
      try {
        return new URL(url).hostname;
      } catch {
        return url;
      }
    })();
    return { url, title: url, description: '', image: '', favicon: '', domain };
  }
}

/** Escape a string for use inside a JSX attribute value (double-quoted). */
function escapeAttr(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

/**
 * Find all bookmark patterns `[bookmark](https://...)` and replace them with
 * `<Bookmark ... />` MDX components, scraping metadata for each URL.
 */
async function processBookmarks(markdown: string): Promise<string> {
  // Match lines like: [bookmark](https://example.com)
  const bookmarkRegex = /\[bookmark\]\((https?:\/\/[^)]+)\)/g;
  const matches: { full: string; url: string }[] = [];
  let match: RegExpExecArray | null;

  while ((match = bookmarkRegex.exec(markdown)) !== null) {
    matches.push({ full: match[0], url: match[1] });
  }

  if (matches.length === 0) return markdown;

  let result = markdown;

  for (const { full, url } of matches) {
    console.log(`  [bookmark] Scraping ${url}`);
    const meta = await scrapeBookmarkMeta(url);
    const component =
      `<Bookmark` +
      ` url="${escapeAttr(meta.url)}"` +
      ` title="${escapeAttr(meta.title)}"` +
      ` description="${escapeAttr(meta.description)}"` +
      ` image="${escapeAttr(meta.image)}"` +
      ` favicon="${escapeAttr(meta.favicon)}"` +
      ` domain="${escapeAttr(meta.domain)}"` +
      ` />`;
    // Replace only the first occurrence to avoid off-by-one if same URL appears twice
    result = result.replace(full, component);
  }

  return result;
}

// ---------------------------------------------------------------------------
// Frontmatter generation
// ---------------------------------------------------------------------------

function buildFrontmatter(meta: PostMeta): string {
  const categoriesYaml = meta.categories
    .map((c) => `  - name: "${escapeAttr(c.name)}"\n    color: "${escapeAttr(c.color)}"`)
    .join('\n');

  const lines: string[] = [
    '---',
    `title: "${escapeAttr(meta.title)}"`,
  ];

  if (meta.description) {
    lines.push(`description: "${escapeAttr(meta.description)}"`);
  }

  lines.push(`slug: "${escapeAttr(meta.slug)}"`);

  if (meta.categories.length > 0) {
    lines.push('categories:');
    lines.push(categoriesYaml);
  } else {
    lines.push('categories: []');
  }

  lines.push(`createdTime: "${new Date(meta.createdTime).toISOString()}"`);
  lines.push(`lastEditedTime: "${new Date(meta.lastEditedTime).toISOString()}"`);
  lines.push('---');

  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Main export logic
// ---------------------------------------------------------------------------

async function exportPost(meta: PostMeta): Promise<void> {
  // Strip leading slash for directory/file naming
  const slugWithoutSlash = meta.slug.startsWith('/') ? meta.slug.slice(1) : meta.slug;

  if (!slugWithoutSlash) {
    console.warn(`  [warn] Post "${meta.title}" has empty slug after stripping slash, skipping.`);
    return;
  }

  console.log(`Processing: ${meta.slug} — ${meta.title}`);

  // Convert Notion blocks to markdown
  const mdBlocks = await n2m.pageToMarkdown(meta.id);
  const mdStringResult = n2m.toMarkdownString(mdBlocks);
  let markdown = mdStringResult.parent?.trim() ?? '';

  // Process images: download, convert to WebP, rewrite URLs
  const postDir = path.join(POSTS_DIR, slugWithoutSlash);
  markdown = await processImages(markdown, postDir);

  // Process bookmarks: scrape metadata, replace with MDX component
  markdown = await processBookmarks(markdown);

  // Build final MDX content
  const frontmatter = buildFrontmatter(meta);
  const mdxContent = `${frontmatter}\n\n${markdown}\n`;

  // Write MDX file at src/content/posts/<slug>.mdx
  const outputPath = path.join(POSTS_DIR, `${slugWithoutSlash}.mdx`);
  fs.writeFileSync(outputPath, mdxContent, 'utf-8');
  console.log(`  Written: ${outputPath}`);
}

async function main(): Promise<void> {
  if (!process.env.NOTION_SECRET_TOKEN) {
    console.error('Error: NOTION_SECRET_TOKEN environment variable is not set.');
    process.exit(1);
  }

  fs.mkdirSync(POSTS_DIR, { recursive: true });

  console.log('Fetching posts from Notion...');
  const posts = await fetchAllPosts();
  console.log(`Found ${posts.length} posts.\n`);

  let succeeded = 0;
  let failed = 0;

  for (const post of posts) {
    try {
      await exportPost(post);
      succeeded++;
    } catch (err) {
      console.error(`  [error] Failed to export post "${post.title}" (${post.slug}):`, err);
      failed++;
    }
  }

  console.log(`\nDone. ${succeeded} succeeded, ${failed} failed.`);
}

main();
