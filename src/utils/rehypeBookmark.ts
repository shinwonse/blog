import type { Element, Root } from 'hast';
import { visit } from 'unist-util-visit';

const fetchMetadata = async (url: string) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const apiUrl = `${baseUrl}/api/bookmark?url=${encodeURIComponent(url)}`;

    const response = await fetch(apiUrl);
    return await response.json();
  } catch (error) {
    return null;
  }
};

export const rehypeBookmark = () => {
  return async (tree: Root) => {
    const promises: Promise<void>[] = [];

    try {
      visit(tree, 'element', (node: Element) => {
        if (
          node.tagName === 'p' &&
          node.children?.[0]?.type === 'element' &&
          node.children[0].tagName === 'a' &&
          node.children[0].children?.[0]?.type === 'text' &&
          node.children[0].children[0].value === 'bookmark'
        ) {
          const link = node.children[0];
          const href = link.properties?.href as string;

          promises.push(
            (async () => {
              try {
                const metadata = await fetchMetadata(href);
                if (!metadata) return;

                node.tagName = 'div';
                node.properties = { className: ['bookmark-card'] };
                node.children = [
                  {
                    type: 'element',
                    tagName: 'a',
                    properties: {
                      href,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className: ['bookmark-link'],
                    },
                    children: [
                      {
                        type: 'element',
                        tagName: 'div',
                        properties: { className: ['bookmark-content'] },
                        children: [
                          {
                            type: 'element',
                            tagName: 'div',
                            properties: { className: ['bookmark-info'] },
                            children: [
                              {
                                type: 'element',
                                tagName: 'div',
                                properties: { className: ['bookmark-title'] },
                                children: [
                                  { type: 'text', value: metadata.title },
                                ],
                              },
                              {
                                type: 'element',
                                tagName: 'div',
                                properties: {
                                  className: ['bookmark-description'],
                                },
                                children: [
                                  { type: 'text', value: metadata.description },
                                ],
                              },
                              {
                                type: 'element',
                                tagName: 'div',
                                properties: { className: ['bookmark-domain'] },
                                children: [
                                  {
                                    type: 'element',
                                    tagName: 'img',
                                    properties: {
                                      src: metadata.favicon,
                                      alt: '',
                                      className: ['bookmark-favicon'],
                                    },
                                  },
                                  { type: 'text', value: metadata.domain },
                                ],
                              },
                            ],
                          },
                          metadata.image && {
                            type: 'element',
                            tagName: 'div',
                            properties: { className: ['bookmark-thumbnail'] },
                            children: [
                              {
                                type: 'element',
                                tagName: 'img',
                                properties: {
                                  src: metadata.image,
                                  alt: metadata.title,
                                  className: ['bookmark-image'],
                                },
                              },
                            ],
                          },
                        ].filter(Boolean),
                      },
                    ],
                  },
                ];
              } catch (error) {
                console.error('Error transforming bookmark:', error);
                return;
              }
            })(),
          );
        }
      });

      await Promise.all(promises);
    } catch (error) {
      console.error('Error in rehypeBookmark:', error);
      return tree;
    }
  };
};
