<template>
  <NuxtLink
    :to="'/blog/' + link"
    class="flex bg-opacity-30 p-4 my-2 rounded-md"
  >
    <div class="flex flex-row items-center">
      <div class="flex flex-row items-center">
        <img
          :src="
            cover
              ? cover.startsWith('https')
                ? cover
                : require(`@/assets/img/${cover}`)
              : null
          "
          class="w-12 h-12 object-contain rounded-md"
        />
        <div class="ml-4 flex flex-col justify-center">
          <h2 class="text-lg font-bold flex items-center">
            {{ name }}
          </h2>
          <p class="text-sm">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    cover: {
      type: String,
      default: 'avatar.png',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>
