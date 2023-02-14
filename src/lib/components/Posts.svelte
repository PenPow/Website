<script lang="ts">
	import { fetchMarkdownPosts } from "$lib/utils/fetchPosts";
	import { onMount } from "svelte";
	import Post from "./internal/Post.svelte";

	export let all: "no" | "yes" = "no";
	export let title = "Recent Publications";

	interface InternalPost {
		meta: { 
			title: string, 
			description: string,
			major: boolean,
			cover: string
		}, 
		path: string
	}
	type IPost = Readonly<InternalPost>

	let posts: IPost[] = [];

	onMount(async () => {
		posts = await fetchMarkdownPosts();
	})
</script>

{#if all === "no"}
<a class="mt-4 text-2xl font-bold url" href="/blog">{title}</a>
{:else}
<h1 class="mt-4 text-3xl font-bold flex md:itmes-end md:flex-row flex-col">{title}</h1>
{/if}

<div class="flex flex-col mt-2">
	{#if all === "no"}
		{#each posts as post}
			{#if post.meta.major}
				<Post slug={post.path} title={post.meta.title} cover={post.meta.cover} description={post.meta.description} />
			{/if}
		{/each}
	{:else}
		{#each posts as post}
			<Post slug={post.path} title={post.meta.title} cover={post.meta.cover} description={post.meta.description} />
		{/each}
	{/if}
</div>