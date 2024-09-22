import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mdohr.space', // Stelle sicher, dass die URL korrekt ist
  integrations: [sitemap()],
});
