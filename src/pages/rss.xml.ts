import rss from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'mdohr’s weblog',
    description: 'A personal blog about web, coding and other things that interest me',
    site: context.site,
    items: [
      {
        title: 'Test Post',
        description: 'This is a test post for the RSS feed.',
        pubDate: new Date(),
        link: '/blog/2024-09-23_about-blogging-more/', // Link zu einem Beispiel-Blogpost
      },
    ],
  });
}
