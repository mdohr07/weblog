import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rss from '@astrojs/rss'; // RSS-Integration hinzufügen

// https://astro.build/config
export default defineConfig({
  site: "https://mdohr.space", // Basis-URL deiner Seite
  integrations: [
    sitemap(), // Sitemap-Integration
    rss()      // RSS-Integration hinzufügen
  ],
});
