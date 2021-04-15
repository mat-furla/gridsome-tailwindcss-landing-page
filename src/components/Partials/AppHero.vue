<template>
  <section id="hero" class="mt-20">
    <div class="container flex flex-col md:flex-row xl:px-32">
      <div class="my-auto md:w-5/12">
        <div class="text-center md:text-left">
          <ClientOnly>
            <vue-typer
              class="text-5xl tracking-tighter font-display lg:text-7xl"
              initial-action="erasing"
              :text="['Inove', 'Avance', 'Conquiste']"
              :pre-erase-delay="6000"
              :erase-delay="50"
              :type-delay="100"
              erase-style="backspace"
              caret-animation="smooth"
            />
          </ClientOnly>
          <h1 class="header">
            através da <br />
            automação
          </h1>
          <p class="my-5 text-gray-500 dark:text-gray-400">
            Mude a maneira com a qual você interage
            <br class="hidden lg:inline-block" />
            com seu produto e com seu cliente
          </p>
        </div>
        <div class="flex flex-col items-center md:flex-row md:items-start">
          <a
            :href="agendar_link"
            rel="noreferrer"
            target="_blank"
            class="mb-4 text-white bg-blue-500 cta-button md:mr-4 md:mb-0"
          >
            Agendar
          </a>
          <a
            v-scroll-to="'#services'"
            href="#"
            class="text-blue-500 dark:text-gray-400 dark:bg-gray-800 cta-button"
          >
            Saiba Mais
          </a>
        </div>
      </div>
      <div class="md:w-7/12">
        <IllustrationHero class="m-5" />
      </div>
    </div>
  </section>
</template>

<script>
import IllustrationHero from '@/assets/images/home/illustration_hero.svg?inline'
import external_links from '/content/external_links.json'

export default {
  name: 'AppHero',
  components: {
    IllustrationHero,
    VueTyper: () =>
      import('vue-typer')
        .then((m) => m.VueTyper)
        .catch()
  },
  data() {
    return {
      agendar_link: external_links.agendar
    }
  }
}
</script>

<style>
.dark .vue-typer .custom.char {
  color: #f3f4f6;
}

.dark .vue-typer .custom.caret {
  background-color: #f3f4f6;
}
</style>
