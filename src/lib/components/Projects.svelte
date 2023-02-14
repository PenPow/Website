<script lang="ts">
	import Project from "$lib/components/internal/Project.svelte";
	import { slide } from 'svelte/transition';

	interface IProject {
		link: string;
		icon: string;
		name: string;
		color: string;
		description: string;
		major: boolean;
		year: string | null;
	}

	const projects: IProject[] = [
		{
			icon: "presenter.png",
			name: "Presenter",
			link: "about:blank",
			year: "In Development",
			color: "bg-purple-400",
			major: false,
			description: "A new form of powerpoint, designed for rapidly building code oriented presentations in your terminal.",
		},
		{
			icon: "hercules.png",
			name: "Hercules",
			link: "about:blank",
			year: "January 2023 - Present",
			color: "bg-slate-400",
			major: true,
			description: "Freelance project that syncs data between Roblox, Discord and Postgres to share user information between servers",
		},
		{
			icon: "sentry.png",
			name: "Sentry",
			link: "https://github.com/PenPow/Sentry",
			year: "June 2022 - Present",
			color: "bg-emerald-300",
			major: true,
			description: "Discord's Antivirus! Filter your server with on demand file scanning",
		},
		{
			icon: "design-logo.png",
			name: "</design>",
			link: "about:blank",
			year: "June 2020 - Febrary 2023",
			color: "bg-blue-400",
			major: false,
			description: "Now shut down due to a lack of time to contribute, </design> was a 600 member design community that I helped administrate, focusing on providing a welcoming community for web development.",
		}
	];

	let showAllProjects = false;
</script>

<h1 class="mt-4 text-2xl font-bold">My Work</h1>
<div class="flex flex-col mt-2">
	{#each projects as project}
			{#if project.major}
				<Project link={project.link} icon={project.icon} name={project.name} description={project.description} year={project.year} color={project.color} />
			{/if}
	{/each}

	<button class="mt-6 ease-in-out transition-300" on:click={() => showAllProjects = !showAllProjects}>
		{#if !showAllProjects}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="inline" width=16 height=16><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> Show All Projects
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width=16 height=16 class="inline transition duration-300 transform rotate-180"><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> Show All Projects
		{/if}
	</button>

		{#if showAllProjects}
			{#each projects as project}
				{#if !project.major}
					<div class="hover:scale-105 transform ease-in-out duration-300" transition:slide>
						<Project link={project.link} icon={project.icon} name={project.name} description={project.description} year={project.year} color={""} />
					</div>
				{/if}
			{/each}
		{/if}
</div>