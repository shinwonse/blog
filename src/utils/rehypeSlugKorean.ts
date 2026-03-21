import type { Root, Element, Text, RootContent } from 'hast';
import type { VFile } from 'vfile';
import type { TOCItem } from './extractTOC';

const HEADING_TAGS = ['h2', 'h3', 'h4'] as const;

function extractText(node: Element | Text): string {
  if (node.type === 'text') return node.value ?? '';
  if ('children' in node) {
    return node.children.map((child) => extractText(child as Element | Text)).join('');
  }
  return '';
}

function toSlug(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9가-힣]/g, '-');
}

/** Assigns Korean-friendly slug IDs to h2–h4 elements. h3 IDs are scoped under their parent h2. */
function assignHeadingIds(children: RootContent[]): void {
  let currentH2: string | null = null;

  for (const child of children) {
    const el = child as Element;
    if (!HEADING_TAGS.includes(el.tagName as (typeof HEADING_TAGS)[number])) continue;

    const title = extractText(el);

    if (el.tagName === 'h2') {
      currentH2 = title;
      el.properties = { ...el.properties, id: toSlug(title) };
    } else if (el.tagName === 'h3' && currentH2) {
      el.properties = { ...el.properties, id: toSlug(`${currentH2}-${title}`) };
    } else if (el.tagName === 'h4') {
      el.properties = { ...el.properties, id: toSlug(title) };
    }
  }
}

function collectTOC(children: RootContent[]): TOCItem[] {
  return children
    .filter((child) =>
      HEADING_TAGS.includes((child as Element).tagName as (typeof HEADING_TAGS)[number]),
    )
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
    assignHeadingIds(tree.children);
    (file.data as Record<string, unknown>).toc = collectTOC(tree.children);
  };
}
