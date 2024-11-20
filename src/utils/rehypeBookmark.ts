import type { Element } from 'hast';
import { visit } from 'unist-util-visit';

export function rehypeBookmark() {
  return (tree: any) => {
    visit(tree, 'element', (node: Element) => {
      // <p><a>bookmark</a></p> 구조 확인
      if (
        node.tagName === 'p' &&
        node.children?.[0]?.type === 'element' &&
        node.children[0].tagName === 'a' &&
        node.children[0].children?.[0]?.type === 'text' &&
        node.children[0].children[0].value === 'bookmark'
      ) {
        const link = node.children[0];
        const href = link.properties?.href;

        // 북마크 컴포넌트로 변환
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
                    properties: { className: ['bookmark-icon'] },
                    children: [{ type: 'text', value: '🔖' }],
                  },
                  {
                    type: 'element',
                    tagName: 'div',
                    properties: { className: ['bookmark-url'] },
                    children: [{ type: 'text', value: String(href) }],
                  },
                ],
              },
            ],
          },
        ];
      }
    });
  };
}
