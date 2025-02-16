import * as cheerio from 'cheerio';
import { NextResponse } from 'next/server';

interface MetaData {
  title: string;
  description: string;
  image: string;
  favicon: string;
  domain: string;
}

async function getMetadata(url: string): Promise<MetaData> {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const domain = new URL(url).hostname;

    return {
      title:
        $('meta[property="og:title"]').attr('content') ||
        $('title').text() ||
        domain,
      description:
        $('meta[property="og:description"]').attr('content') ||
        $('meta[name="description"]').attr('content') ||
        '',
      image: $('meta[property="og:image"]').attr('content') || '',
      favicon:
        $('link[rel="icon"]').attr('href') ||
        $('link[rel="shortcut icon"]').attr('href') ||
        `https://${domain}/favicon.ico`,
      domain,
    };
  } catch (error) {
    return {
      title: url,
      description: '',
      image: '',
      favicon: '',
      domain: new URL(url).hostname,
    };
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  const metadata = await getMetadata(url);
  return NextResponse.json(metadata);
}
