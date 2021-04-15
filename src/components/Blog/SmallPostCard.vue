<template>
  <g-link :to="post.path">
    <div class="flex items-center">
      <g-image
        class="object-cover w-20 h-20 rounded-md"
        width="80"
        :src="post.image.path"
        :alt="post.image.alt"
      />
      <div class="w-9/12 pl-3">
        <p class="text-sm">
          {{ post.title }}
        </p>
        <p class="text-xs md:text-sm">
          {{ post.date }}
        </p>
      </div>
    </div>
  </g-link>
</template>

<script>
export default {
  name: 'SmallPostCard',
  props: {
    post: Object
  }
}
</script>
