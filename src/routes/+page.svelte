<script>
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Posts from '$lib/components/Posts.svelte';
	import Skills from '$lib/components/Skills.svelte';

	import { page } from "$app/stores"
</script>

<svelte:head>
	<meta property="og:title" content="Joshua Clements"/>
	<meta property="og:type" content="profile"/>
	<meta property="og:description" content="Hi! I'm Josh, a backend software engineer who designs tools to help thriving online communities."/>
	<meta property="og:image" content="https://www.penpow.dev/img/me.webp"/>
	<meta property="og:profile:first_name" content="Joshua"/>
	<meta property="og:profile:last_name" content="Clements"/>
	<meta property="og:profile:username" content="PenPow"/>
	<meta property="og:image:type" content="image/webp"/>
	<meta property="og:image:alt" content="Headshot of me"/>
	<meta property="og:url" content="{$page.url.href}"/>
</svelte:head>

<div class="max-w-3xl px-8 mt-24 mx-auto">
	<img
        src="/img/me.webp"
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