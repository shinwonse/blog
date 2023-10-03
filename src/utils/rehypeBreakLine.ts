import 'server-only';

import type { Element, Literal } from 'hast';

const removeBreakLine = (root: Element) => {
  root.children = root.children.filter(
    (child) => (child as Literal).value !== '\n',
  );
  (root.children as Element[]).forEach((child) => {
    if (child.children) {
      removeBreakLine(child);
    }
  });
};

export const rehypeBreakLine = () => (root: Element) => {
  removeBreakLine(root);
};
