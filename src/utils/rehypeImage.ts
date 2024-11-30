import 'server-only';

import type { Element } from 'hast';
import sharp from 'sharp';
import { v5 as uuidv5 } from 'uuid';

import { supabase } from '@/services/supabase';

const SIZE = 768;

const getImageNodes = (children: Element[], imageNodes: Element[]) =>
  children.forEach((child) => {
    if (child.tagName === 'img') {
      imageNodes.push(child);
    }
    if (child.children) {
      getImageNodes(child.children as Element[], imageNodes);
    }
  });

const processImageNode = async (node: Element, index: number) => {
  try {
    const src = node.properties?.src;
    if (typeof src !== 'string') {
      console.warn('Invalid image source:', src);
      return;
    }

    // Fetch image with error handling
    const response = await fetch(src);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    const originImage = await response.arrayBuffer();

    /* 이미지 최적화 */
    const image = sharp(originImage)
      .resize({ width: SIZE * 2 })
      .webp({ effort: 6 });
    const { height = SIZE, width = SIZE } = await image.metadata();
    const buffer = await image.toBuffer();

    const placeholder = await image
      .blur(256)
      .resize(4)
      .toBuffer()
      .then((data) => data.toString('base64'));

    const urlWithQuery = new URL(src);
    const url = urlWithQuery.host + urlWithQuery.pathname;
    const hashedURL = uuidv5(url, uuidv5.URL);
    const filename = `${hashedURL}.webp`;

    // 먼저 파일이 존재하는지 확인
    const { data: existingFile } = await supabase.storage.from('post').list('', {
      search: filename,
    });

    // 파일이 존재하지 않을 때만 업로드
    if (!existingFile?.length) {
      const { error: uploadError } = await supabase.storage.from('post').upload(filename, buffer, {
        contentType: 'image/webp',
        cacheControl: '31536000',
        upsert: false,
      });

      if (uploadError) {
        console.error('Upload error:', uploadError);
        return;
      }
    }

    const {
      data: { publicUrl: publicURL },
    } = supabase.storage.from('post').getPublicUrl(filename);

    /* node 속성 설정 */
    if (!node.properties) {
      node.properties = {};
    }
    node.properties.src = publicURL;
    node.properties.loading = index ? 'lazy' : 'eager';
    node.properties.width = SIZE;
    node.properties.height = Math.round(height * (SIZE / width));
    node.properties.style = index ? `background: url('data:image/webp;base64,${placeholder}')` : '';
  } catch (error) {
    console.error('Image processing failed:', error);
    // Keep original image source if processing fails
    return;
  }
};

export const rehypeImage = () => {
  return async (tree: Element) => {
    const imageNodes: Element[] = [];
    getImageNodes([tree], imageNodes);
    await Promise.all(imageNodes.map(processImageNode));
    return tree;
  };
};
