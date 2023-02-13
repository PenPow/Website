import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkGFM from "remark-gfm";
import remarkGithub from "remark-github";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

import shiki from 'shiki';
const shikiHighlighter = await shiki.getHighlighter({ theme: "one-dark-pro" });

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},
	
	highlight: {
		highlighter: async (code, lang) => {
			return shikiHighlighter.codeToHtml(code, { lang });
		}
	},

	remarkPlugins: [remarkGFM, remarkGithub],
	rehypePlugins: [rehypeAccessibleEmojis]
});

export default config;
