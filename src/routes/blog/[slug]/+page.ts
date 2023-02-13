import type { PageLoadEvent } from "./$types";

export const prerender = true;

export async function load({ params }: PageLoadEvent) {
	// default is a svelte component, im not going to bother typing it here
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const post: Readonly<{
		metadata: { 
			title: string, 
			description: string,
			major: boolean,
			cover: string
		}, 
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		default: any
	}> = await import(`../../../lib/posts/${params.slug}.md`);

	const { title, description, major, cover } = post.metadata;
	const content = post.default;

	return { Content: content, title, description, major, cover }
}