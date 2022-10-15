<template>
  <div>
    <div v-if="all === 'no' || few">
      <NuxtLink to="/blog" class="mt-4 text-2xl font-bold url">
        {{ text }}
      </NuxtLink>
    </div>
    <div v-else>
      <h1
        class="mt-4 text-3xl font-bold flex md:items-end md:flex-row flex-col"
      >
        {{ text }}
      </h1>
    </div>

    <div class="flex flex-col mt-2">
      <p v-if="$fetchState.pending">Loading...</p>
      <div v-else>
        <div v-if="all === 'no' && !few">
          <Post
            v-for="article in majorPosts"
            :key="article.title"
            :name="article.title"
            :link="article.slug"
            :description="article.description"
            :cover="article.cover"
          />
        </div>
        <div v-else>
          <Post
            v-for="article in all_posts"
            :key="article.title"
            :name="article.title"
            :link="article.slug"
            :description="article.description"
            :cover="article.cover"
          />
        </div>
      </div>
    </div>
    <button
      v-if="all === 'no' && !few"
      class="mt-6"
      @click="showAll = !showAll"
    >
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="transition duration-300 transform"
        :class="showAll ? '-rotate-180' : ''"
      />
      Show All Posts
    </button>
    <transition name="slide">
      <div v-if="showAll" class="flex flex-col mt-2">
        <Post
          v-for="article in posts"
          :key="article.title"
          :name="article.title"
          :link="article.slug"
          :description="article.description"
          :cover="article.cover"
        />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    all: {
      type: String,
      default: 'no',
    },
    text: {
      type: String,
      default: 'Recent Publications',
    },
  },
  data: () => ({
    posts: [],
    majorPosts: [],
    showAll: false,
    all_posts: [],
    few: false,
  }),
  async fetch() {
    this.posts = await this.$content('articles')
      .only(['title', 'description', 'cover', 'slug'])
      .fetch()

    this.all_posts = [...this.posts]

    if (this.posts.length <= 3) {
      // eslint-disable-next-line vue/no-mutating-props
      // this.all = "yes"
      this.few = true
      return
    }

    this.majorPosts = [this.posts[0], this.posts[1], this.posts[2]]
    this.posts.splice(0, 3)
  },
}
</script>
