import { Client } from '@notionhq/client';
import camelcaseKeys from 'camelcase-keys';
import dayjs from 'dayjs';
import { NotionToMarkdown } from 'notion-to-md';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';

import { BLOG_DATABASE_ID } from '@/constants/notion';
import { rehypeA11y } from '@/utils/rehypeA11y';
import { rehypeBreakLine } from '@/utils/rehypeBreakLine';
import { rehypeTOC } from '@/utils/rehypeTOC';

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

export const getDatabase = async () => {
  const posts = await notion.databases.retrieve({
    database_id: 'bf942e3026c44977bf63cb0a28025d91',
  });

  return posts;
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
  const mdBlocks = await n2m.pageToMarkdown(response.id);
  const mdString = n2m.toMarkdownString(mdBlocks);
  if (!mdString.parent) {
    throw new Error('Empty content');
  }
  const { data, value } = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeBreakLine)
    .use(rehypeHighlight)
    .use(rehypeRaw)
    .use(rehypeTOC)
    .use(rehypeA11y)
    .use(rehypeStringify)
    .process(mdString.parent.trim());
  return {
    content: value.toString(),
    ...processPost(response),
  };
};
