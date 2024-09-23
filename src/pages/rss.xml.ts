import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'mdohr’s weblog',
    description: 'A personal blog about web, coding and other things that interest me',
    site: context.site, // Kontext der Site verwenden
    items: await pagesGlobToRssItems(
      // Verwende den relativen Pfad von src/pages für Blog-Posts
      import.meta.glob('./blog/*.{md,mdx}')
    ),
  });
}
