import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'mdohr’s weblog',
    description: 'A personal blog about web, coding and other things that interest me',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./pages/blog/*.{md,mdx}'),
    ),
  });
}
