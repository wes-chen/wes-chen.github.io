import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const allPosts = import.meta.glob('./blog/*.md', { eager: true }) as Record<string, any>;
  const posts = Object.values(allPosts)
    .filter(p => !p.frontmatter.draft)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());

  const feedUrl = new URL('/rss.xml', site);

  const items = posts.map(post => {
    const url = new URL(post.url, site);
    const pubDate = new Date(post.frontmatter.date).toUTCString();
    const desc = post.frontmatter.description ?? '';
    return `    <item>
      <title><![CDATA[${post.frontmatter.title}]]></title>
      <description><![CDATA[${desc}]]></description>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${pubDate}</pubDate>
    </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Wesley Chen</title>
    <description>Wesley Chen's writing</description>
    <link>${site}</link>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <language>en-us</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
