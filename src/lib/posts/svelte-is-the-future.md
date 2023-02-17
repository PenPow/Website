---
title: "Svelte is the Future of Web Development"
description: "Every JS Framework Claims to be the \"Next Big Thing\", the only difference is that Svelte is."
cover: "svelte.webp"
major: true
---

![days since last js framework released meme](/img/js-framework-meme.webp)

While it has felt like there has been a new framework release every single day for the past few months, with each claiming that they are the "next big thing" which will "revolutionise" web development, very few have stood out as actual contenders for being a major and significant improvement.

Svelte however, is different. Svelte is different from every other framework. While it doesn't bring any revolutionary ideas to the table, it implemenents its tooling well, and is all around fun to use.

# A Quick Backstory

I rewrote this website for the 3rd, maybe 4th time, and each time I tried to use it to learn some new technologies and see what I enjoy working with.

I naturally ask the question --- which UI framework should I use?

So far I have worked with React, Vue and Astro, but none of them stuck out as being the most intuitive. React seemed like an unecessary abstraction over Javascript, Vue was alright, and Astro just had some issues that I couldn't get over.

Svelte has remained at the top of the leaderboards in most loved web technologies. In 2022, it was the highest ranking Javascript Framework, with `75%` of developers saying they loved working with it.

But why?

# No Virtual DOM

React, Vue and Angular all use a rendering architecture known as Virtual DOM. Svelte tells us to think differently.

![think different](/img/think-different.webp)

Rich Harris, the creator of Svelte made a [brilliant article](https://svelte.dev/blog/virtual-dom-is-pure-overhead) on the Svelte blog about Virtual DOM

Svelte compiles our code down to pure JS, which offers some great advantages, such as:

- Reduced Bundle Size
- Speed

And its incredibly easy to debug in the browser as we aren't dealing with a lot of abstractions, everything is just HTML, CSS and JS.

# Its Intuitive

Svelte was the easiest framework to learn out of every single one I have used. Their [official language guide](https://svelte.dev/tutorial/basics) was short but simple, and Svelte code has, for me, been very concise and efficienct.

Another great feature was stores, which has been the easiest implementation of reactive data.

Writing Svelte code is brilliant, as it looks beautiful and is very natural as a JS developer. The implementation of `<script>` tags in particular was amazing and felt natural. Svelte feels like you are writing JS, rather than writing weird abstractions to achieve simple goals.

# Fast and Respected Technologies

While Svelte implements with technologies such as `PostCSS` and `TailwindCSS` well, the best part of the "backend" of Svelte has been the use of [Vite](https://vitejs.dev/).

Vite is fast, and this makes Svelte even more pleasurable to work with, as the DX with the dev server is amazing. As of writing this, the average compile time for the website after the initial compilation is **2.5ms**, which is absurdly low.

In addition to this the tooling for Svelte is amazing, especially with Typescript and SvelteKit.

# The Downsides of Svelte

There are always downsides however, especially when adopting new technologies.

One key one is the lack of ecosystem. Nuxt and Next both have mature CMS systems for blog articles like this, however with Svelte, nothing really exists for that. 

My blog system was hacked together through a mixture of google searches and trial and error, and while it works, it was significantly more difficult than using a dedicated library that handles it all for you.

While the community has expanded rapidly over the past few years from how amazing Svelte is, its still tiny compared to those of React, Angular and Vue.

![NPM Downloads Per Month](/img/svelte-npm.webp)
![Google Trends](/img/svelte-google-trends.webp)

# Conclusion

I love Svelte, and while there are still some issues with it, it is the first really "exciting" development in the JavaScript ecosystem for the past few years.

The main issues with Svelte is the userbase, not the product, and that makes sense, as it takes time to grow your userbase out, especially with the lack of commerical backing.

React has Facebook, Angular has Google, Vue has a massive Open Source community behind it, and only recently did the creator of Svelte get hired full time to work for [Vercel](https://vercel.com/)

Svelte is growing though, and quickly too

![Svelte Growth Statistics](/img/svelte-growth.webp)

and this is a good thing.

Products take time to mature, and I believe once Svelte has matured fully in the ecosystem, then it will become the main library for web development with JavaScript.