import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Work Sans"', ...defaultTheme.fontFamily.sans],
				mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
				title: ['"Abril Fatface"', '"Work Sans"', ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [],
}
