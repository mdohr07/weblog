import { defineConfig } from 'astro/config';
import rss from '@astrojs/rss';

export default defineConfig({
  integrations: [rss()],
  build: {
    rollupOptions: {
      external: ['astro:content'],
    },
  },
});

