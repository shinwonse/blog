import { Client } from '@notionhq/client';
import camelcaseKeys from 'camelcase-keys';
import dayjs from 'dayjs';

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_SECRET_TOKEN,
});

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
    database_id: 'bf942e3026c44977bf63cb0a28025d91',
  });
  return response.results.map(processPost);
};
