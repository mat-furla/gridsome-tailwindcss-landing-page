<template>
  <div class="pt-5 -mt-5 top-20 lg:sticky">
    <div v-if="subtitles.length > 0" class="hidden lg:block">
      <h3
        class="pb-3 mb-3 text-xl text-gray-900 border-b-4 border-gray-200 dark:border-gray-800 dark:text-gray-100"
      >
        Sumário
      </h3>
      <ul class="pl-0">
        <li
          v-for="subtitle in subtitles"
          :key="subtitle.value"
          class="py-1"
          :class="{
            'ml-2': subtitle.depth == 2,
            'ml-4': subtitle.depth == 3
          }"
        >
          <a
            class="text-gray-500 dark:text-gray-400 hover:underline"
            :href="subtitle.anchor"
            >{{ subtitle.value }}</a
          >
        </li>
      </ul>
    </div>

    <div
      v-if="record.tags && record.tags.length > 0"
      class="hidden tags d-lg-block d-none lg:block"
      :class="[subtitles.length > 0 ? 'mt-4' : '']"
    >
      <h3
        class="pb-3 mb-3 text-xl text-gray-900 border-b-4 border-gray-200 dark:text-gray-100 dark:border-gray-800"
      >
        Tags
      </h3>
      <div class="tags-items">
        <g-link
          v-for="tag in record.tags"
          :key="tag.id"
          class="p-1 my-4 mr-2 text-gray-500 dark:text-gray-400 hover:underline"
          :to="tag.path"
        >
          #{{ tag.title }}
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    record: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  computed: {
    subtitles() {
      // source: https://github.com/gridsome/gridsome.org/blob/master/src/templates/DocPage.vue
      // Remove h1, h4, h5, h6 titles
      const subtitles = this.record.headings.filter((value, index, arr) => {
        return [1, 2, 3].includes(value.depth)
      })
      return subtitles
    }
  }
}
</script>
