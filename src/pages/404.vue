<template>
  <Layout>
    <div class="flex flex-col items-center">
      <Illustration404 class="max-w-2xl mt-20" />
    </div>
  </Layout>
</template>

<script>
import Illustration404 from '@/assets/images/404/illustration_404.svg?inline'

export default {
  components: {
    Illustration404
  },
  metaInfo: {
    title: 'Erro 404'
  }
}
</script>
