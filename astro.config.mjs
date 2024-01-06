import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";
import a11yEmoji from '@fec/remark-a11y-emoji';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';

/** @type {import('astro-expressive-code').AstroExpressiveCodeOptions} */
const astroExpressiveCodeOptions = {
	// Example: Change the themes
	themes: ['github-dark', 'github-light'],
	minSyntaxHighlightingColorContrast: 0,
	defaultLocale: "en-GB",
	styleOverrides: {
		codeFontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
	},
	plugins: [pluginCollapsibleSections()]
}

// https://astro.build/config
export default defineConfig({
  site: "https://www.penpow.dev",
  integrations: [icon(), robotsTxt(), sitemap(), tailwind(), expressiveCode(astroExpressiveCodeOptions), mdx(), compress()],
  markdown: {
	remarkPlugins: [a11yEmoji],
  },
  image: {
    domains: ['avatars.githubusercontent.com']
  }
});