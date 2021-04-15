<template>
  <Layout>
    <div class="px-2 sm:px-0">
      <AppHero />
      <AppServices />
      <AppValues />
      <AppSupporters />
      <AppAbout />
      <AppCTA />
    </div>
  </Layout>
</template>

<script>
import AppHero from '@/components/Partials/AppHero'
import AppServices from '@/components/Partials/AppServices'
import AppValues from '@/components/Partials/AppValues'
import AppSupporters from '@/components/Partials/AppSupporters'
import AppAbout from '@/components/Partials/AppAbout'
import AppCTA from '@/components/Partials/AppCTA'

export default {
  components: {
    AppHero,
    AppServices,
    AppValues,
    AppSupporters,
    AppAbout,
    AppCTA
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>
