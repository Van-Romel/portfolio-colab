import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const translatedString = z.object({
  'pt-pt': z.string(),
  en: z.string(),
  'pt-br': z.string(),
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
  }),
});

export const collections = { projects };
