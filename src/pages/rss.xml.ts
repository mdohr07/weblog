import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mdohr.space',
  integrations: [sitemap()],
  build: {
    rollupOptions: {
      external: ['@astrojs/rss'],
    },
  },
});
