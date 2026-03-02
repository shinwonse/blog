export interface TOCItem {
  id: string;
  tagName: string;
  text: string;
}

export function toTOCItems(headings: { depth: number; slug: string; text: string }[]): TOCItem[] {
  return headings
    .filter(h => h.depth >= 2 && h.depth <= 4)
    .map(h => ({
      id: h.slug,
      tagName: `h${h.depth}`,
      text: h.text,
    }));
}
