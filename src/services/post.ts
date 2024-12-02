import camelcaseKeys from 'camelcase-keys';
import dayjs from 'dayjs';
import { notFound } from 'next/navigation';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';

import { BLOG_DATABASE_ID } from '@/constants/notion';
import { n2m, notion } from '@/services/notion';
import { rehypeBookmark } from '@/utils/rehypeBookmark';
import { rehypeImage } from '@/utils/rehypeImage';
import { rehypeTOC } from '@/utils/rehypeTOC';

import type { TOCItem } from './../types/notion';

// Constants for query configuration
const QUERY_CONFIG = {
  database_id: BLOG_DATABASE_ID,
  page_size: 10,
} as const;

// Common database query function
const queryNotionDatabase = async (options = {}) => {
  return notion.databases.query({
    ...QUERY_CONFIG,
    ...options,
  });
};

// Separated remark pipeline
const remarkPipeline = remark()
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeHighlight)
  .use(rehypeRaw)
  .use(rehypeTOC as any)
  .use(rehypeImage as any)
  .use(rehypeBookmark as any)
  .use(rehypeStringify);

const processPost = (result: any) => {
  const { createdTime, lastEditedTime, properties } = camelcaseKeys(result, {
    deep: true,
  });
  const { category, description, slug, title } = properties;
  return {
    category: category.multiSelect,
    createdTime: dayjs(createdTime),
    description: description.richText[0]?.plainText ?? null,
    lastEditedTime: dayjs(lastEditedTime),
    slug: slug.richText[0].plainText,
    title: title.title[0]?.plainText ?? '',
  };
};

export const getPost = async (slug: string) => {
  const { results } = await queryNotionDatabase({
    filter: { and: [{ property: 'slug', rich_text: { equals: `/${slug}` } }] },
  });

  const [response] = results;
  if (!response) notFound();

  const mdBlocks = await n2m.pageToMarkdown(response.id ?? '');
  const mdString = n2m.toMarkdownString(mdBlocks);
  if (!mdString.parent) throw new Error('Empty content');

  const {
    value,
    data: { toc },
  } = await remarkPipeline.process(mdString.parent.trim());

  return {
    content: value.toString(),
    toc: toc as TOCItem[],
    ...processPost(response),
  };
};

export const getAllPosts = async () => {
  const { results } = await queryNotionDatabase();
  return results.map(processPost);
};

export const getPaginatedPosts = async (startCursor?: string) => {
  const response = await queryNotionDatabase({
    start_cursor: startCursor,
  });

  return {
    nextCursor: response.has_more ? response.next_cursor : null,
    posts: response.results.map(processPost),
  };
};
