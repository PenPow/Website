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
      <Posts all="yes" />

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
