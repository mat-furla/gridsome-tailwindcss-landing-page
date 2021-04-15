<template>
  <section id="cta" class="text-white bg-blue-500">
    <div class="container p-10 md:py-24 xl:px-32">
      <div
        class="flex flex-col items-start mx-auto sm:flex-row sm:items-center"
      >
        <h3 class="pb-10 section-subheader md:pr-10 md:pb-0">
          Pronto para começar?
          <br class="hidden lg:inline-block" />
          Agende uma reunião gratuita e sem compromissos
        </h3>
        <a
          :href="agendar_link"
          rel="noreferrer"
          target="_blank"
          class="text-blue-500 bg-white cta-button"
          >Agendar</a
        >
      </div>
    </div>
  </section>
</template>

<script>
import external_links from '/content/external_links.json'

export default {
  name: 'AppCTA',
  data() {
    return {
      agendar_link: external_links.agendar
    }
  }
}
</script>
