import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import markdoc from "@astrojs/markdoc";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://www.penpow.dev",
  integrations: [icon(), robotsTxt(), markdoc(), sitemap(), tailwind(), compress()],
  image: {
	domains: ['avatars.githubusercontent.com']
  }
});