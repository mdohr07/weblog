import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rss from '@astrojs/rss';

// Konfigurationsobjekt wird direkt zurückgegeben
export default defineConfig({
  site: "https://mdohr.space",  // Basis-URL der Website
  integrations: [
    sitemap(),  // Sitemap-Integration
    rss()       // RSS-Integration
  ],
});
