import type { APIRoute } from 'astro';

export const prerender = false;

const SITE = process.env.SITE_URL ?? 'http://localhost:4321';

const text = (body: string) =>
  new Response(body, {
    status: 200,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });

export const GET: APIRoute = async () => {
  const site = SITE.replace(/\/$/, '');
  const lines = ['User-agent: *', 'Allow: /', '', `Sitemap: ${site}/sitemap.xml`];
  return text(lines.join('\n') + '\n');
};
