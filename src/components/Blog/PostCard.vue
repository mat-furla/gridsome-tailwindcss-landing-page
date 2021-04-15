<template>
  <g-link
    class="relative flex flex-col h-full transition duration-500 ease-in-out transform aka-post-card hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800"
    :class="{ 'is-large': isLarge }"
    :to="post.path"
  >
    <div class="relative flex flex-auto w-full">
      <g-image
        class="object-cover w-full"
        :class="`${isLarge ? 'h-60 xl:h-96' : 'h-60'}`"
        :alt="post.image.alt"
        :src="post.image.path"
      />
    </div>
    <div class="relative flex flex-col w-full h-full post-card-content">
      <div class="flex-1 overflow-hidden">
        <div class="px-5 pt-5 mb-4 text-2xl font-display dark:text-gray-200">
          {{ post.title }}
        </div>
        <p class="px-5 font-serif text-base text-gray-500 dark:text-gray-400">
          {{ post.excerpt }}...
        </p>
      </div>

      <div class="flex-none p-6 mt-auto overflow-hidde">
        <div class="flex items-center justify-between">
          <g-image
            class="object-cover mr-4 rounded-full w-14 h-14"
            :src="post.author.image"
            :alt="post.author.name"
          />

          <p class="text-xs text-gray-500 dark:text-gray-400 md:text-sm">
            {{ post.date }} <span>&#8226;</span> {{ post.timeToRead }}min
          </p>
        </div>
      </div>
    </div>
  </g-link>
</template>

<script>
export default {
  name: 'PostCard',
  computed: {
    isLarge() {
      return this.index % 3 === 0
    }
  },
  props: {
    post: Object,
    index: Number
  }
}
</script>

<style lang="css" scoped>
@screen xl {
  .aka-post-card.is-large {
    @apply grid;
    grid-template-columns: 60% 1fr;
  }

  .aka-post-card.is-large .post-card-heading {
    @apply text-2xl;
  }

  .aka-post-card.is-large .post-card-content {
    @apply justify-center;
  }
}
</style>
