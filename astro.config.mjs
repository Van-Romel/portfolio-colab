// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://van-romel.github.io',
  base: '/portfolio-colab',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-pt', 'pt-br', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
