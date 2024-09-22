/*
import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'mdohr’s Blog',
    description: 'This is my blog about my IT learning journey, some art, some games and road cycling. Just anything that personally interests me.',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./blog/*.{md,mdx}'),
    ),
  });
} */