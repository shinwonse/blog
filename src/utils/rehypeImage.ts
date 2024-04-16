'use server';

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
  const src = node.properties?.src;
  if (typeof src !== 'string') {
    return;
  }
  /* 원본 이미지 가져오기 */
  const response = await fetch(src);
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

  /* 이미지 업로드 */
  await supabase.storage
    .from('post')
    .upload(`${hashedURL}.webp`, buffer, { cacheControl: '31536000' });
  const {
    data: { publicUrl: publicURL },
  } = supabase.storage.from('post').getPublicUrl(`${hashedURL}.webp`);

  /* node 속성 설정 */
  if (!node.properties) {
    node.properties = {};
  }
  node.properties.src = publicURL;
  node.properties.loading = index ? 'lazy' : 'eager';
  node.properties.width = SIZE;
  node.properties.height = Math.round(height * (SIZE / width));
  node.properties.style = index
    ? `background: url('data:image/webp;base64,${placeholder}')`
    : '';
};

export const rehypeImage = async ({ children }: { children: Element[] }) => {
  const imageNodes: Element[] = [];
  getImageNodes(children, imageNodes);
  await Promise.all(imageNodes.map(processImageNode));
};
