import { fetchMarkdownPosts } from "$lib/utils/fetchPosts"
import { json } from "@sveltejs/kit";

export const prerender = false;

export const GET = async () => {
	const posts = await fetchMarkdownPosts();

	return json(posts)
}