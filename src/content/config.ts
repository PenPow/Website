import { defineCollection, z } from "astro:content";
import { rssSchema } from '@astrojs/rss';

const postsCollection = defineCollection({
	type: 'content',
	schema: rssSchema.extend({ hidden: z.boolean().optional().default(false), description: z.string(), title: z.string(), pubDate: z.date() }),
});

export const collections = {
	'posts': postsCollection
}