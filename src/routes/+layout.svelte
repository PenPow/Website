<script>
	import Copyright from "$lib/components/Copyright.svelte";
	import Divider from "$lib/components/Divider.svelte";
	import Header from "$lib/components/Header.svelte";

	import "$lib/styles/App.css";
</script>

<Header />
<slot />

<div class="max-w-3xl px-8 mx-auto">
	<Divider />
	<Copyright />
</div>