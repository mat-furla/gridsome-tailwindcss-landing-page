<template>
  <div
    class="flex flex-col items-center justify-center p-5 text-center rounded-md shadow-xl"
    :class="colors"
  >
    <slot />
    <span class="text-lg dark:text-gray-100">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'ValueCard',
  props: {
    title: {
      type: String,
      required: true
    },
    colors: {
      type: Array,
      required: false
    }
  }
}
</script>
