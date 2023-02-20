interface IBaseProject {
	name: string,
	summary: string,
	status: string,
	logo: string,
	overview: string,
	learnt?: string
}

interface ITechnologicalProject extends IBaseProject {
	type: "tech"
	functionalities: string[],
	technologies: string,
	image: string | null,
	demo?: string,
	source?: string
}

interface ICommunityProject extends IBaseProject {
	type: "community",
	impact: string
}

type ProjectType = ICommunityProject | ITechnologicalProject

export const projectNarratives = {
	sentry: {
			name: 'Sentry',
			type: 'tech',
			summary: 'Sentry is a Discord bot designed to prevent well known scams on the platform by assigning each user a "heat" rating. I also coordinated the collection of over 2.8 million domains from 13 different sources to aid user profiling.',
			functionalities: [
				"Malicious Domain Scanning from <a href=\"https://github.com/PenPow/Sentry/tree/main/apps/phishertools/src/sources/lists\" alt=\"Sentry's Phishertools Domain Sources List\">13 Different Sources</a>", 
				"Self-hosted and Isolated Anti-Virus to scan message attachments",
				"At-Rest encryption of the postgres database to secure PII",
				"Custom 2FA solution to authorise sensitive actions"
			],
			technologies: 'typescript,docker,prisma,postgres,redis,nextjs',
			status: 'Currently in maintenance, rewrite in development',
			demo: "https://sentry.penpow.dev/",
			source: "https://github.com/PenPow/Sentry",
			logo: "sentry.webp",
			image: "sentry-project-page.webp",
			overview: `Sentry was my first major development project. I have been refining and building upon the foundations of it since January 2022.
			
			Originally, it started as a fun hobby project in an attempt to learn Typescript by applying it to a real-world idea, but as I progressed through the development, and become more competant with using Typescript, I moved to implement new features that I hadn't seen used before on moderation bots.
			
			As a one man band for this project, I focused on developing a marketing strategy focusing on how Sentry did more than a typical moderation bot.
			
			I also developed the 7 core services, including the website and documentation site.`,
			learnt: `Each time I rewrote Sentry, I used it to expand my knowledge of certain tools, languages, or architectures. From Typescript, to Docker, to Postgres and Next.js, I used each iteration to learn something new, and learn how to overcome the technical challenges I faced.
			
			One of the main issues I experienced while developing the most recent version of Sentry was with the website. At this point, I had little to no experience with React and the wider ecosystem of React meta-frameworks as a whole. I used <a href="https://nextra.site/" alt="Nextra">Nextra</a> as the base for the website, and implemented <a href="https://github.com/skyra-project/discord-components" alt="Discord Components">@skyra/discord-components</a> with some CSS tweaks to produce a stunning front page for Sentry.
			
			Overall, developing and managing Sentry taught me so much, not just development skills, but also about how to release a project, develop branding, and manage a sucessful marketing campaign.`
	},
	hercules: {
			name: 'Hercules',
			type: 'tech',
			summary: 'Hercules was a project that I managed and developed for a client. This project focused on pulling and maintaining data across three separate platforms and provide an accessible interface through Discord to view and update this data.',
			functionalities: [
				"Implemented a user management and permission system",
				"Coordinated an accessible interface to manage data through &nbsp;&nbsp;Discord"
			],
			technologies: 'typescript,docker,prisma,postgres',
			status: 'Actively used by over 150 people daily',
			logo: "hercules.webp",
			image: null,
			overview: `Hercules was a project I developed for a client who wanted a system to manage and store user information for easy recall and modification.
			
			As the development lead on this project, I liased with the client to develop a product under a short time frame that was unique to them and provided a simple but powerful way of interacting and studying their data.`,
	},
	design: {
			type: 'community',
			name: '</design>',
			summary: "</design> was a development community of 600 members on Discord that I co-founded and ultimately ended up running. As the community manager, I grew the server from 0 members up to 600, fostering a welcoming and thriving community of web developers!",
			status: "Shut down as of February 2023",
			logo: "design-logo.webp",
			overview: `&lt;/design&gt; was a community I started with my friend midway through the first COVID-19 lockdown here in the UK.
			
			Over the 1000(-ish) days working as the community manager, I supported a staff team of 12 as I grew the server into a healthy community of web developers.`,
			impact: `While &lt;/design&gt was unfortunately closed earlier this year, due to a lack of time to contribute due to other projects, I am proud of the impact I made on developers around the world.
			
			While we had a permanent community of 600, the true number of people who came and went was a lot higher, and being able to run a small community really meant we were able to give focused support and advice.`,
			learnt: `Running &lt;/design&gt; taught me so many things about managing and sustaining a healthy community, and I learnt many skills that I could apply off of Discord in real life and on my GitHub repos. 
			
			Managing a server of this size taught me about the importance of engaging with healthy discussions with your userbase, and how to interact and moderate situations when things get out of hand.
			
			Running &lt;/design&gt; was a great experience.`
	}
} satisfies Record<string, ProjectType>

export type ProjectKeys = keyof typeof projectNarratives