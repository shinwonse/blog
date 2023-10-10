import { Client } from '@notionhq/client';
import camelcaseKeys from 'camelcase-keys';
import dayjs from 'dayjs';
import { notFound } from 'next/navigation';
import { NotionToMarkdown } from 'notion-to-md';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';

import { BLOG_DATABASE_ID, PROJECT_DATABASE_ID } from '@/constants/notion';

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_SECRET_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

const processPost = (result: any) => {
  const { createdTime, lastEditedTime, properties } = camelcaseKeys(result, {
    deep: true,
  });
  const { category, description, slug, title } = properties;
  return {
    category: category.multi_select,
    createdTime: dayjs(createdTime),
    description: description.richText[0]?.plainText ?? null,
    lastEditedTime: dayjs(lastEditedTime),
    slug: slug.richText[0].plainText,
    title: title.title[0]?.plainText ?? '',
  };
};

const processProject = (result: any) => {
  const { createdTime, lastEditedTime, properties } = camelcaseKeys(result, {
    deep: true,
  });
  const { description, github, service, title } = properties;
  return {
    createdTime: dayjs(createdTime),
    description: description.richText[0]?.plainText ?? null,
    githubUrl: github.url,
    lastEditedTime: dayjs(lastEditedTime),
    serviceUrl: service.url,
    title: title.title[0]?.plainText ?? '',
  };
};

export const getDatabase = async () => {
  const posts = await notion.databases.retrieve({
    database_id: 'bf942e3026c44977bf63cb0a28025d91',
  });
  return posts;
};

export const getProjects = async () => {
  const response = await notion.databases.query({
    database_id: PROJECT_DATABASE_ID,
  });
  return response.results.map(processProject);
};

export const getPosts = async () => {
  const response = await notion.databases.query({
    database_id: BLOG_DATABASE_ID,
  });
  return response.results.map(processPost);
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
    .use(rehypeStringify)
    .process(mdString.parent.trim());
  return {
    content: value.toString(),
    ...processPost(response),
  };
};
