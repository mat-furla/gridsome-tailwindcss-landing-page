<template>
  <div v-if="anchorLink">
    <a
      v-if="$route.path === '/'"
      href="#"
      v-scroll-to="anchorLink"
      class="navbar-menu-link-item"
    >
      <slot />
      <div class="ml-4">
        <span class="text-base text-black dark:text-gray-100">{{ title }}</span>
        <p :v-if="text" class="mt-1 text-sm">
          {{ text }}
        </p>
      </div>
    </a>

    <g-link v-else :to="`/${anchorLink}`" class="navbar-menu-link-item">
      <slot />
      <div class="ml-4">
        <span class="text-base text-black dark:text-gray-100">{{ title }}</span>
        <p :v-if="text" class="mt-1 text-sm">
          {{ text }}
        </p>
      </div>
    </g-link>
  </div>

  <div v-else>
    <a :href="externalLink" class="navbar-menu-link-item">
      <slot />
      <div class="ml-4">
        <span class="text-base text-black dark:text-gray-100">{{ title }}</span>
        <p :v-if="text" class="mt-1 text-sm">
          {{ text }}
        </p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    title: {
      type: String,
      required: true
    },
    text: String,
    anchorLink: String,
    externalLink: String
  }
}
</script>
