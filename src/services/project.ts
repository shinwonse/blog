import camelcaseKeys from 'camelcase-keys';
import dayjs from 'dayjs';

import { PROJECT_DATABASE_ID } from '@/constants/notion';
import { notion } from '@/services/notion';

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

export const getProjects = async () => {
  const response = await notion.databases.query({
    database_id: PROJECT_DATABASE_ID,
  });
  return response.results.map(processProject);
};
