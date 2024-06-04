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
import { rehypeImage } from '@/utils/rehypeImage';

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
  const { results } = await notion.databases.query({
    database_id: BLOG_DATABASE_ID,
    filter: { and: [{ property: 'slug', rich_text: { equals: `/${slug}` } }] },
  });
  const [response] = results;
  if (!response) {
    notFound();
  }
  const mdBlocks = await n2m.pageToMarkdown(response.id ?? '');
  const mdString = n2m.toMarkdownString(mdBlocks);
  if (!mdString.parent) {
    throw new Error('Empty content');
  }
  const { value } = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight)
    .use(rehypeRaw)
    .use(() => rehypeImage)
    .use(rehypeStringify)
    .process(mdString.parent.trim());
  return {
    content: value.toString(),
    ...processPost(response),
  };
};

/**
 * Get all posts from the Notion database
 */
export const getAllPosts = async () => {
  const response = await notion.databases.query({
    database_id: BLOG_DATABASE_ID,
  });
  return response.results.map(processPost);
};

const PAGE_SIZE = 5;

/**
 * Get all posts from the Notion database with pagination
 */
export const getPaginatedPosts = async (startCursor = undefined) => {
  const response = await notion.databases.query({
    database_id: BLOG_DATABASE_ID,
    page_size: PAGE_SIZE,
    start_cursor: startCursor,
  });

  const posts = response.results.map(processPost);

  return {
    nextCursor: response.has_more ? response.next_cursor : null,
    posts,
  };
};
