import 'server-only';

import type { Element, RootContent, Text } from 'hast';

const titleTags = ['h2', 'h3', 'h4'];

const validateTOC = (children: RootContent[]) => {
  const titles = children
    .filter((child) => titleTags.includes((child as Element).tagName))
    .map((child) =>
      ((child as Element).children[0] as Text).value.toLowerCase(),
    );
  const uniqueTitles = titles.filter(
    (title, index) => titles.indexOf(title) === index,
  );
  if (titles.length !== uniqueTitles.length) {
    throw new Error('Duplicate title');
  }
};

const attachID = (children: RootContent[]) =>
  children
    .filter((child) => titleTags.includes((child as Element).tagName))
    .forEach((child) => {
      const id = ((child as Element).children[0] as Text).value
        .toLowerCase()
        .replace(/[^a-z0-9가-힣]/g, '-');
      (child as Element).properties = {
        ...(child as Element).properties,
        id,
      };
    });

const processTOC = (children: RootContent[]) =>
  children
    .filter((child) => titleTags.includes((child as Element).tagName))
    .map((child) => ({
      id: (child as Element).properties?.id,
      tagName: (child as Element).tagName,
      text: ((child as Element).children[0] as Text).value,
    }));

export const rehypeTOC =
  () =>
  (
    { children }: { children: Element[] },
    { data }: { data: { toc: {}[] } },
  ) => {
    validateTOC(children);
    attachID(children);
    data.toc = processTOC(children);
  };
