import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

export default defineConfig({
  site: "https://www.penpow.dev",
  integrations: [icon(), robotsTxt(), markdoc(), sitemap(), tailwind(), compress()],
  image: {
	domains: ['avatars.githubusercontent.com']
  }
});