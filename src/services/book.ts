import camelcaseKeys from 'camelcase-keys';
import dayjs from 'dayjs';

import { notion } from '@/services/notion';

const processBook = (result: any) => {
  const { cover, createdTime, id, lastEditedTime, properties } = camelcaseKeys(
    result,
    {
      deep: true,
    }
  );
  const { author, name } = properties;
  const { file } = cover;
  const encodedURI = encodeURIComponent(file.url.split('?')[0]);
  const imageURI = `https://shinwonse.notion.site/image/${encodedURI}?table=block&id=${id}&cache=v2`;
  return {
    author: author.richText[0]?.plainText ?? '',
    cover: imageURI ?? '',
    createdTime: dayjs(createdTime),
    lastEditedTime: dayjs(lastEditedTime),
    title: name.title[0]?.plainText ?? '',
  };
};

export const getBooks = async () => {
  const response = await notion.databases.query({
    database_id: '14d67f1da4654acbb38d37ff025b7542',
  });
  return response.results.map(processBook);
};
