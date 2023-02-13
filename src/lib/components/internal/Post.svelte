<script lang="ts">
	export let slug: string;
	export const hidden: boolean = false;
	export let title: string;
	export let cover: string;
	export let description: string;
</script>

<a href="/blog/{slug}" class="flex bg-opacity-30 p-4 my-2 rounded-md hover:scale-105 transform ease-in-out duration-300 bg-slate-300">
	<img src="{cover.startsWith("http") ? cover : `/img/${cover}`}" class="w-12 h-12 object-contain rounded-md" alt="{title}" />
	<div class="ml-4 flex flex-col justify-center">
		<h2 class="text-lg font-bold flex items-center">{title}</h2>
		<p class="Text-sm">{description}</p>
	</div>
</a>