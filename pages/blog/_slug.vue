<template>
  <div>
    <div class="my-4 mx-5">
      <div class="flex flex-row">
        <div class="mr-auto">
          <HomeButton />
        </div>
        <div class="ml-auto">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
    <div class="max-w-3xl px-8 mt-24 mx-auto">
      <div class="max-w-xl">
        <h1
          class="mt-4 text-3xl font-bold flex md:items-end md:flex-row flex-col"
        >
          <div>{{ article.title }}</div>
          <div class="flex md:ml-3">
            <div class="text-lg">
              Last Updated:
              {{ new Date(Date.parse(article.updatedAt)).toLocaleDateString() }}
            </div>
          </div>
        </h1>
        <p class="mt-4 prose prose-base dark:prose-invert">
          {{ article.description }}
        </p>
      </div>

      <Divider />

      <article
        class="mt-4 prose prose-base dark:prose-invert prose-img:rounded-xl dark:prose-code:background"
      >
        <p>
          <nuxt-content :document="article" />
        </p>
      </article>

      <Divider />

      <Posts all="no" text="Further Reading" />

      <Divider />

      <div class="copyright text-center mb-8">
        &copy; {{ new Date().getFullYear() }} Joshua Clements
        <a class="url" href="mailto:josh@penpow.dev">&lt;josh@penpow.dev&gt;</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
}
</script>
