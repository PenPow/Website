<script lang="ts">
	import { goto as gotoPath } from "$app/navigation";

	import Icon from '@iconify/svelte';
	import homeIcon from '@iconify/icons-ion/home';
</script>

<button title="home button" class="w-10 h-10 bg-gray-700 rounded-md text-gray-200 items-center flex justify-center transition duration-200" on:click={() => { gotoPath("/") }}>
	<!-- <svg xmlns="https://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" height=24 width=24>
	  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
      <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
	</svg> -->
	<Icon icon={homeIcon} color="#E5E7EB" width="24" height="24" />
</button> 