<script>
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Posts from '$lib/components/Posts.svelte';
	import Skills from '$lib/components/Skills.svelte';

</script>

<div class="max-w-3xl px-8 mt-24 mx-auto">
	<img
        src="/img/me.png"
        alt="Its Me!"
        class="w-32 h-32 rounded-3xl inline avatar"
    />

	<About />
	<Divider />
	<Posts all="no" />
	<Divider />
	<Skills />
	<Divider />
	<Projects />
	<Divider />
	<Contact />
</div>