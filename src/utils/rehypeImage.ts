const getImageNodes = (children: Element[], imageNodes: Element[]) =>
  children.forEach((child) => {
    if (child.tagName === 'img') {
      imageNodes.push(child);
    }
    if (child.children) {
      getImageNodes(child.children as Element[], imageNodes);
    }
  });

const processImageNode = async (node: Element, id: string) => {
  const src = node?.properties?.src;
  if (typeof src !== 'string') {
    return;
  }
  const encodedURI = encodeURIComponent(src.split('?')[0]);
  const imageUrl = `https://shinwonse.notion.site/image/${encodedURI}?table=block&id=${id}&cache=v2`;
};

export const rehypeImage =
  (requestId: string) =>
  async ({ children }: { children: Element[] }) => {
    const imageNodes: Element[] = [];
    getImageNodes(children, imageNodes);
    await Promise.all(
      imageNodes.map((imageNode) => processImageNode(imageNode, requestId))
    );
  };
