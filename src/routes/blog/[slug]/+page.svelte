<script lang="ts">
	import Divider from "$lib/components/Divider.svelte";

	import type { PageData } from "./$types";

	export let data: PageData;

	const { Content, title, description, cover } = data;

	import { page } from "$app/stores"
</script>

<svelte:head>
	<meta property="og:title" content="{title}"/>
	<meta property="og:type" content="article"/>
	<meta property="og:description" content="{description}"/>
	<meta property="og:image" content="{cover.startsWith("http") ? cover : `https://www.penpow.dev/img/${cover}`}"/>
	<meta property="og:image:type" content="image/png"/>
	<meta property="og:image:alt" content="{title}"/>
	<meta property="og:url" content="{$page.url.href}"/>
</svelte:head>

<div class="max-w-3xl px-8 mt-24 mx-auto">
	<div class="max-w-xl">
		<img src="{cover.startsWith("http") ? cover : `/img/${cover}`}" class="w-28 h-28 object-contain rounded-md inline" alt="{title}" />
		<h1 class="mt-4 text-4xl font-bold flex md:items-end md:flex-row flex-col">
			{title}
		</h1>
		<p class="mt-4 prose prose-base">
			{description}
		</p>
	</div>

	<Divider />

	<article class="mt-4 prose prose-base prose-img:rounded-xl">
		<p>
			<Content />
		</p>
	</article>
</div>