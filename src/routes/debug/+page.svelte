<script>
	import { dev, version } from '$app/environment';
</script>

<div class="max-w-3xl px-8 mt-24 mx-auto">
	<h1 class="mt-4 text-4xl font-bold flex md:items-end md:flex-row flex-col">Debug Information</h1>
	<p class="mt-4">
		<b>Running In Development Environment?</b>&nbsp; {dev ? 'Yes' : 'No'}
		<br />
		<b>Version:</b>&nbsp;
		{#if version === "@next"}
			{version}
		{:else}
			<a class="mt-4 font-bold url" href="https://github.com/PenPow/Website/commit/{version}">{version.substring(0, 8)}</a>
		{/if}
	</p>
</div>