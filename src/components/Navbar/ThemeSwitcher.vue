<template>
  <button
    aria-label="Alterar Tema"
    title="Alterar Tema"
    @click.prevent="toggleTheme"
    class="hover:text-blue-500 dark:hover:text-blue-500"
  >
    <moon-icon v-if="theme === 'theme-light'" size="1.5x"></moon-icon>
    <sun-icon v-else size="1.5x"></sun-icon>
  </button>
</template>

<script>
import { MoonIcon } from 'vue-feather-icons'
import { SunIcon } from 'vue-feather-icons'

export default {
  components: {
    MoonIcon,
    SunIcon
  },
  props: {
    theme: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleTheme() {
      const newTheme =
        this.theme === 'theme-light' ? 'theme-dark' : 'theme-light'
      if (newTheme == 'theme-dark') {
        document.querySelector('html').classList.add('dark')
      } else {
        document.querySelector('html').classList.remove('dark')
      }
      localStorage.setItem('theme', newTheme)
      this.$emit('themeChanged', newTheme)
    }
  }
}
</script>
