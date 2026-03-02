import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    slug: z.string(),
    categories: z.array(z.object({
      name: z.string(),
      color: z.string(),
    })).default([]),
    createdTime: z.coerce.date(),
    lastEditedTime: z.coerce.date(),
  }),
});

export const collections = { posts };
