<script lang="ts">
	export let link: string = "about:blank";
	export let icon: string;
	export let name: string;
	export let color: string;
	export let description: string;
	export let year: string | null;
</script>

<a href={link} target="_blank" rel="noreferrer" class="flex-1 bg-opacity-30 p-4 my-2 rounded-md hover:scale-105 transform ease-in-out duration-300 {color}">
	<div class="flex flex-row items-center">
		<img
          src="{icon.startsWith("http") ? icon : `/img/${icon}`}"
          alt={name}
          class="w-12 h-12 object-contain rounded-md"
        />

		<div class="ml-4 flex flex-col justify-center">
			<h2 class="text-lg font-bold flex items-center">
				{name}
			
				{#if year !== null}
					<span class="text-sm font-normal ml-4 hidden sm:block">[{year}]</span>
				{/if}
			</h2>
			<p class="text-sm">{description}</p>
		</div>
	</div>
</a>