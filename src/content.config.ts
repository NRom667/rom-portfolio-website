import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    description: z.string(),
    technologies: z.array(z.string()),
    image: z.string(),
    imageFallback: z.string(),
    accent: z.enum(['cyan', 'pink', 'lime']).default('cyan'),
    order: z.number(),
  }),
});

export const collections = { works };
