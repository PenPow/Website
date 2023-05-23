<script lang="ts">
	import { goto as gotoPath } from "$app/navigation";
	import { page } from '$app/stores';  

	import Icon from '@iconify/svelte';
	import folderFill from '@iconify/icons-bi/folder-fill';
</script>

<div class="h-10 rounded-md text-gray-700 flex items-center gap-4 fixed">
	<a href="/">
		<Icon icon={folderFill} color="#374151" width="32" height="32" />
	</a>

	{#if $page.url.pathname === '/'}
		<p>/ </p>
	{:else if $page.error}
		<p>/ </p>
		<p class="hover:bg-gray-200 pl-2 pr-2 rounded-md">404</p>
	{:else}
		{#each $page.url.pathname.split('/') as path}
			{#if path !== ''}
				<p>/ </p>
				<button class="hover:bg-gray-200 pl-2 pr-2 rounded-md" on:click={() => { path === 'projects' ? gotoPath('/') : gotoPath($page.url.pathname.split('/').slice(0, $page.url.pathname.split('/').indexOf(path) + 1).join('/')) }}>{path}</button>
			{/if}
		{/each}
	{/if}
	
</div>