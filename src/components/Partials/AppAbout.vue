<template>
  <section id="about-us" class="my-16">
    <div class="container flex flex-col md:flex-row xl:px-32">
      <div class="my-auto md:w-1/2">
        <h2 class="text-blue-500 section-header">Sobre Nós</h2>
        <h3 class="section-subheader">
          Desenvolvemos o presente para ver a beleza do futuro
        </h3>
        <p class="mt-2 text-gray-500 dark:text-gray-400">
          A Asimov Júnior é uma empresa júnior voltada para a área de
          tecnologia, desenvolvendo soluções em Engenharia de Controle e
          Automação, Engenharia Eletrônica e Engenharia de Computação.
          Pertencente à Universidade Federal de Itajubá (UNIFEI) e com sede em
          Itajubá - MG, a Asimov Júnior contribui para o ecossistema
          empreendedor da região auxiliando a modernização desde pequenos
          negócios a grandes indústrias. Ao prestar serviços na área de
          hardware, software e automação, a empresa garante a alta qualidade e
          inovação nos projetos realizados por discentes mediante instrução de
          mestres e doutores da UNIFEI.
        </p>
      </div>
      <div class="my-auto md:w-1/2">
        <IllustrationAbout class="w-full p-5" />
      </div>
    </div>
  </section>
</template>

<script>
import IllustrationAbout from '@/assets/images/home/illustration_about.svg?inline'

export default {
  name: 'AppAboutUs',
  components: {
    IllustrationAbout
  }
}
</script>
