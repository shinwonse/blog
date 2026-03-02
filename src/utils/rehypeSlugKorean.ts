import type { Root, Element, Text, RootContent } from 'hast';
import type { VFile } from 'vfile';

export interface TOCItem {
  id: string;
  tagName: string;
  text: string;
}

const titleTags = ['h2', 'h3', 'h4'];

function extractText(node: Element | Text): string {
  if (node.type === 'text') return node.value ?? '';
  if ('children' in node) {
    return node.children
      .map((child) => extractText(child as Element | Text))
      .join('');
  }
  return '';
}

function validateTOC(children: RootContent[]): void {
  let currentH2: string | null = null;

  for (const child of children) {
    const el = child as Element;
    if (!titleTags.includes(el.tagName)) continue;

    const title = extractText(el);
    const tagName = el.tagName;

    if (tagName === 'h2') {
      currentH2 = title;
      const newId = title.toLowerCase().replace(/[^a-z0-9가-힣]/g, '-');
      el.properties = { ...el.properties, id: newId };
    } else if (tagName === 'h3' && currentH2) {
      const newId = `${currentH2.toLowerCase()}-${title.toLowerCase()}`.replace(
        /[^a-z0-9가-힣]/g,
        '-',
      );
      el.properties = { ...el.properties, id: newId };
    } else if (tagName === 'h4') {
      const newId = title.toLowerCase().replace(/[^a-z0-9가-힣]/g, '-');
      el.properties = { ...el.properties, id: newId };
    }
  }
}

function processTOC(children: RootContent[]): TOCItem[] {
  return children
    .filter((child) => titleTags.includes((child as Element).tagName))
    .map((child) => {
      const el = child as Element;
      return {
        id: (el.properties?.id as string) ?? '',
        tagName: el.tagName,
        text: extractText(el),
      };
    });
}

export function rehypeSlugKorean() {
  return (tree: Root, file: VFile) => {
    validateTOC(tree.children);
    (file.data as Record<string, unknown>).toc = processTOC(tree.children);
  };
}
