export default {
  typescript: {
    shim: false,
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Joshua Clements',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@assets/css/font.css', '@assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/color-mode',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  //   content: {
  // 	markdown: {
  // 		// prism: {
  // 		// 	theme: "prism-themes/themes/prism-one-dark.css"
  // 		// }
  // 		async highlighter() {
  // 			const highlighter = await getHighlighter({ theme: 'nord' });

  // 			return (rawCode, lang) => highlighter.codeToHtml(rawCode, lang);
  // 		}
  // 	}
  //   },

  content: {
    markdown: {
      async highlighter() {
        const highlighter = await require('shiki').getHighlighter({
          theme: 'one-dark-pro',
        })

        return (rawCode, lang) => {
          return highlighter.codeToHtml(rawCode, lang)
        }
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  colorMode: {
    classSuffix: '',
  },

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },
}
