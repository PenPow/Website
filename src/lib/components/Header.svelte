<script lang="ts">
	import Path from '$lib/components/internal/Path.svelte';
	import HomeButton from '$lib/components/internal/HomeButton.svelte';

	let innerWidth = 0
	$: isMobile = innerWidth < 1700
</script>

<svelte:window bind:innerWidth />

<div class="my-4 mx-5">
	<div class="flex flex-row">
		<div class="mr-auto">
			{#if innerWidth !== 0}
				{#if isMobile}
					<HomeButton />
				{:else}
					<Path />
				{/if}
			{/if}
		</div>
	</div>
</div>