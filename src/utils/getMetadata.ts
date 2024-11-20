import { load } from 'cheerio';
import { NodeHtmlMarkdown } from 'node-html-markdown';

interface Metadata {
  title: string;
  description: string | null;
  image: string | null;
}

export async function getMetadata(url: string): Promise<Metadata> {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = load(html);

    // Open Graph 태그나 일반 메타 태그에서 정보 추출
    const title =
      $('meta[property="og:title"]').attr('content') ||
      $('title').text() ||
      $('meta[name="title"]').attr('content') ||
      '';

    const description =
      $('meta[property="og:description"]').attr('content') ||
      $('meta[name="description"]').attr('content') ||
      null;

    const image =
      $('meta[property="og:image"]').attr('content') ||
      $('meta[name="image"]').attr('content') ||
      null;

    // HTML 엔티티 디코딩 및 마크다운 변환
    const nhm = new NodeHtmlMarkdown();
    const cleanTitle = nhm.translate(title).replace(/\n/g, ' ').trim();
    const cleanDescription = description
      ? nhm.translate(description).replace(/\n/g, ' ').trim()
      : null;

    return {
      title: cleanTitle,
      description: cleanDescription,
      image,
    };
  } catch (error) {
    console.error(`Failed to fetch metadata for ${url}:`, error);

    // 에러 발생 시 기본값 반환
    return {
      title: url,
      description: null,
      image: null,
    };
  }
}
