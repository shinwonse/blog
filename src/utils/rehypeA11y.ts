import 'server-only';

import type { Element, Literal } from 'hast';

const hasCheckboxInChildren = (children: Element[]) =>
  children.some(
    (child) =>
      child.tagName === 'input' && child.properties?.type === 'checkbox',
  );

const improveCheckboxes = (children: Element[]) =>
  children.forEach((child) => {
    if (child.children && hasCheckboxInChildren(child.children as Element[])) {
      const checkbox = child.children[0] as {
        properties: { [key: string]: string };
      };
      const text = child.children[1] as Literal;
      checkbox.properties['aria-label'] = text.value.substring(1) ?? '';
    }
    if (child.children) {
      improveCheckboxes(child.children as Element[]);
    }
  });

export const rehypeA11y =
  () =>
  async ({ children }: { children: Element[] }) => {
    improveCheckboxes(children);
  };
