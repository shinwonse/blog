import { JSDOM } from 'jsdom';

export function extractCoverImageInfo(html: string): {
  alt?: string;
  src?: string;
} {
  const dom = new JSDOM(html);
  const imgElement = dom.window.document.querySelector('img');

  if (imgElement) {
    return {
      alt: imgElement.getAttribute('alt'),
      src: imgElement.getAttribute('src'),
    };
  }

  return {};
}
