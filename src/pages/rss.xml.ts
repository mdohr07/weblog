import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { settings } from '../settings';  // falls du eine zentrale Settings-Datei hast

export async function get() {
  const posts = await getCollection('blog');  // oder den Ordner, wo deine Posts liegen
  
  return rss({
    title: `${settings.name} Blog`,  // Titel des Blogs
    description: 'Newest blog entries',  // Beschreibung des Feeds
    site: settings.url,  // Deine Website URL
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`,  // Annahme, dass der Blog im `/blog/`-Verzeichnis liegt
    })),
  });
}
