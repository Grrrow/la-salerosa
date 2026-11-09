import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
	const siteUrl = (
		import.meta.env.PUBLIC_SITE_URL || "https://www.marmoransoprano.com/lasalerosa"
	).replace(/\/$/, "");
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>2026-11-09</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${siteUrl}/images/cover-1800.jpg</image:loc>
      <image:title>La Salerosa — Mar Morán y Aurelio Viribay | Canciones Líricas de Cristóbal Oudrid</image:title>
      <image:caption>Portada oficial del álbum La Salerosa, primera grabación mundial de las Canciones Líricas de Cristóbal Oudrid por la soprano Mar Morán y el pianista Aurelio Viribay.</image:caption>
    </image:image>
    <image:image>
      <image:loc>${siteUrl}/portada-la-salerosa-desktop.jpg</image:loc>
      <image:title>Mar Morán — La Salerosa (Canciones Líricas de Cristóbal Oudrid)</image:title>
    </image:image>
  </url>
</urlset>`;

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
		},
	});
};
