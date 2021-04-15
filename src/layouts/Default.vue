<template>
  <div
    class="flex flex-col min-h-screen transition-colors ease-linear delay-100 bg-white dark:bg-gray-900"
  >
    <NavBar />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/Partials/NavBar'
import Footer from '@/components/Partials/Footer'

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>
