import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'mdohr’s weblog',
    description: 'A personal blog about web, coding and other things that interest me',
    site: context.site, // Stellt sicher, dass der `site`-Wert von der Config genutzt wird
    items: await pagesGlobToRssItems(
      import.meta.glob('./blog/*.{md,mdx}') // Stelle sicher, dass der Pfad relativ zu `src/pages` ist
    ),
  });
}
