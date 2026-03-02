import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { rehypeSlugKorean } from './src/utils/rehypeSlugKorean';

export default defineConfig({
  site: 'https://wonse.dev',
  integrations: [
    mdx(),
    sitemap(),
    react(),
  ],
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlugKorean, rehypeHighlight],
  },
  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
  },
});
