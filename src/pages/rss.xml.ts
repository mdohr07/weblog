import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'mdohr\'s weblog',
    description: 'My personal blog about IT, web and other stuff that interests me',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      customData: post.data.customData,
      // Berechne den RSS link vom Beitrags-`slug`
      // In diesem Beispiel wird davon ausgegangen, dass alle Beiträge als `/blog/[slug]`-Routen gerendert werden
      link: `/blog/${post.slug}/`,
    })),
  });
}
