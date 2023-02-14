<script lang="ts">
	import { fetchMarkdownPosts } from "$lib/utils/fetchPosts";
	import { onMount } from "svelte";
	import { slide } from 'svelte/transition';
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

	let showAllPosts = false;
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

		<button class="mt-6 ease-in-out transition-300 mb-5" on:click={() => showAllPosts = !showAllPosts}>
			{#if !showAllPosts}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="inline" width=16 height=16><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> Show All Posts
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width=16 height=16 class="inline transition duration-300 transform rotate-180"><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> Show All Posts
			{/if}
		</button>

		{#if showAllPosts}
			{#each posts as post}
				{#if !post.meta.major}
					<div class="hover:scale-105 transform ease-in-out duration-300" transition:slide>
						<Post slug={post.path} title={post.meta.title} cover={post.meta.cover} description={post.meta.description} />
					</div>
				{/if}
			{/each}
		{/if}
	{:else}
		{#each posts as post}
			<Post slug={post.path} title={post.meta.title} cover={post.meta.cover} description={post.meta.description} />
		{/each}
	{/if}
</div>