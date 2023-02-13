<script lang="ts">
	import Copyright from "$lib/components/Copyright.svelte";
	import Divider from "$lib/components/Divider.svelte";

	import type { PageData } from "./$types";

	export let data: PageData;

	const { Content, title, description, cover } = data;
</script>

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

	<Divider />
	<Copyright />
</div>