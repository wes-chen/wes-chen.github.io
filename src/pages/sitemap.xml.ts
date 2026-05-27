import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const allPosts = import.meta.glob('./blog/*.md', { eager: true }) as Record<string, any>;
  const publishedPosts = Object.values(allPosts).filter(p => !p.frontmatter.draft);

  const staticPaths = ['/', '/about'];
  const postPaths = publishedPosts.map(p => p.url as string);

  const entries = [...staticPaths, ...postPaths]
    .map(path => `  <url><loc>${new URL(path, site)}</loc></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
