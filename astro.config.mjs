import { defineConfig } from 'astro/config'; // import lit from '@astrojs/lit';

import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: "https://mdohr.space",
  integrations: [sitemap()]
});

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['date-fns'],
    },
  },
});
