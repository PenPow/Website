<template>
  <div class="flex flex-row items-center bg-gray-300 dark rounded-md">
    <div class="ml-4 flex flex-col justify-cente">
      <p class="text-sm dark:text-stone-900">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>
