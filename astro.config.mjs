import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rss from '@astrojs/rss';

// https://astro.build/config
export default defineConfig({
  site: "https://mdohr.space", // Die Basis-URL deiner Website
  integrations: [
    sitemap(), // Sitemap-Integration
    rss()      // RSS-Integration hinzufügen
  ],
});
