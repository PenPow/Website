<script lang="ts">
	import Divider from "$lib/components/Divider.svelte";

	import type { PageData } from "./$types";

	import { page } from "$app/stores"

	export let data: PageData;
</script>

<svelte:head>
	<meta property="og:title" content="{data.name}"/>
	<meta property="og:type" content="article"/>
	<meta property="og:description" content="{data.summary}"/>
	<meta property="og:image" content="{data.logo.startsWith("http") ? data.logo : `https://www.penpow.dev/img/${data.logo}`}"/>
	<meta property="og:image:type" content="image/webp"/>
	<meta property="og:image:alt" content="{data.name}"/>
	<meta property="og:url" content="{$page.url.href}"/>
</svelte:head>

<div class="max-w-3xl px-8 mt-24 mx-auto">
	<div class="max-w-xl">
		<img src="{data.logo.startsWith("http") ? data.logo : `/img/${data.logo}`}" class="w-28 h-28 object-contain rounded-md inline" alt="{data.name}" />
		<h1 class="mt-4 text-4xl font-bold flex md:items-end md:flex-row flex-col">{data.name}</h1>
		<p class="mt-4 prose prose-base mb-3">{data.summary}</p>
		<div class="mt-3 mb-3"><b>Status:&nbsp;</b>{data.status}</div>

		{#if data.demo || data.source}
			{#if data.source}
				<a href="{data.source}" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="mt-3 inline" viewBox="0 0 496 512" width=24 height=24><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
			{/if}

			{#if data.demo}
				<a href="{data.demo}" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="mt-3 inline" viewBox="0 0 496 512" width=24 height=24><path d="M432 64H208c-8.8 0-16 7.2-16 16V96H128V80c0-44.2 35.8-80 80-80H432c44.2 0 80 35.8 80 80V304c0 44.2-35.8 80-80 80H416V320h16c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zM0 192c0-35.3 28.7-64 64-64H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192zm64 32c0 17.7 14.3 32 32 32H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32 14.3-32 32z"/></svg></a>
			{/if}
		{/if}
	</div>

	<Divider />

	<article class="mt-4 prose prose-base prose-img:rounded-xl">
		<h1>Project Brief and Description</h1>
		<p class="whitespace-pre-line">{@html data.overview}</p>

		{#if data.type === "tech"}
			<h1>Functionalities</h1>
			<p class="whitespace-pre-line">{@html "• " + data.functionalities.join('\n• ')}</p>

			<h2 class="mt-3">Technologies</h2>
			<img src="https://skillicons.dev/icons?theme=light&i={data.technologies}" alt="Tooling that I am interested In"/>
		{:else}
			<h1>Impact</h1>
			<p class="whitespace-pre-line">{@html data.impact}</p>
		{/if}

		{#if data.image}
			<img src="{data.image.startsWith("http") ? data.image : `/img/${data.image}`}" class="object-contain rounded-md inline" alt="{data.name}" />
		{/if}

		{#if data.learnt}
			<h1 class="mt-3">Lessons Learnt</h1>
			<p class="whitespace-pre-line">{@html data.learnt}</p>
		{/if}
	</article>
</div>