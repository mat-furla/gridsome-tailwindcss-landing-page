<template>
  <div class="flex">
    <div
      class="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-blue-500 rounded-md"
    >
      <slot />
    </div>
    <div class="ml-4">
      <dt class="text-lg dark:text-gray-100">
        {{ title }}
      </dt>
      <dd class="mt-1 text-base text-gray-500 dark:text-gray-400">
        {{ text }}
      </dd>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceItem',
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>
