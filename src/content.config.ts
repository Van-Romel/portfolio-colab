import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const translatedString = z.object({
  en: z.string(),
  pt: z.string(),
  fr: z.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    title: translatedString,
    description: translatedString,
    dev: z.string(),
    techStack: z.array(z.string()),
    githubUrl: z.string(),
    demoUrl: z.string(),
    order: z.number(),
    visible: z.boolean().optional().default(true),
  }),
});

export const collections = { projects };
