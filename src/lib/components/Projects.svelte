<script lang="ts">
	import Project from "$lib/components/internal/Project.svelte";

	interface Project {
		link: string;
		icon: string;
		name: string;
		color: string;
		description: string;
		year: string | null;
	}

	const projects: Project[] = [
		{
			icon: "presenter.png",
			name: "Presenter",
			link: "about:blank",
			year: "In Development",
			color: "bg-purple-400",
			description: "A new form of powerpoint, designed for rapidly building code oriented presentations in your terminal.",
		},
		{
			icon: "hercules.png",
			name: "Hercules",
			link: "about:blank",
			year: "January 2023 - Present",
			color: "bg-slate-400",
			description: "Freelance project that syncs data between Roblox, Discord and Postgres to share user information between servers",
		},
		{
			icon: "sentry.png",
			name: "Sentry",
			link: "https://github.com/PenPow/Sentry",
			year: "June 2022 - Present",
			color: "bg-emerald-300",
			description: "Discord's Antivirus! Filter your server with on demand file scanning",
		},
		{
			icon: "design-logo.png",
			name: "</design>",
			link: "about:blank",
			year: "June 2020 - Febrary 2023",
			color: "bg-blue-400",
			description: "Now shut down due to a lack of time to contribute, </design> was a 600 member design community that I helped administrate, focusing on providing a welcoming community for web development.",
		}
	];
</script>

<h1 class="mt-4 text-2xl font-bold">My Work</h1>
<div class="flex flex-col mt-2">
	{#each projects as project}
		<Project link={project.link} icon={project.icon} name={project.name} description={project.description} year={project.year} color={project.color} />
	{/each}
</div>