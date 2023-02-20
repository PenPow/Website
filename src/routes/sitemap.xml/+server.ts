import type { RequestHandler } from './$types';
import { fetchMarkdownPosts } from "$lib/utils/fetchPosts"
import { projectNarratives } from '$lib/data/projects';

let posts: Awaited<ReturnType<typeof fetchMarkdownPosts>> | null  = null;
const projects = projectNarratives;
 
export const GET = (async () => {
	if(!posts) posts = await fetchMarkdownPosts();

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		<url>
			<loc>https://www.penpow.dev/</loc>
  		</url>
		<url>
			<loc>https://www.penpow.dev/blog</loc>
		</url>
		${posts.map(({ path }) => `<url><loc>https://www.penpow.dev/blog/${path}</loc></url>`).join('\n')}
		${Object.keys(projects).map((slug) => `<url><loc>https://www.penpow.dev/projects/${slug}</loc></url>`).join('')}
	</urlset>`

	return new Response(sitemap, { headers: { "Cache-Control": "max-age=0 s-maxage=3600", "Content-Type": "application/xml" }})
}) satisfies RequestHandler;