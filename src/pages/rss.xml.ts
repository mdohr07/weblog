import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  // Blogposts aus dem richtigen Verzeichnis laden
  const blogPosts = import.meta.glob('./blog/*.{md,mdx}');

  console.log("Gefundene Blogposts: ", blogPosts); // DEBUG: Zeigt die geladenen Blogposts an
  
  return rss({
    title: 'mdohr’s weblog',
    description: 'A personal blog about web, coding and other things that interest me',
    site: context.site, // Stellt sicher, dass der `site`-Wert von der Config genutzt wird
    items: await pagesGlobToRssItems(blogPosts),
  });
}
