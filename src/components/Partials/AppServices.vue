<template>
  <section id="services" class="my-16">
    <div class="container xl:px-32">
      <div class="mb-5 lg:text-center">
        <h2 class="text-blue-500 section-header">Serviços</h2>
        <h3 class="section-subheader">Somos mais do que só automação</h3>
      </div>

      <dl
        class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
      >
        <ServiceItem
          title="Desenvolvimento de Sites"
          text="Desenvolvimento de sites, páginas estáticas ou portfólio online para sua empresa"
        >
          <globe-icon size="1.5x" class="text-white"></globe-icon>
        </ServiceItem>

        <ServiceItem
          title="Desenvolvimento de Ecommerces"
          text="Criação de lojas virtuais para que sua empresa possa vender online"
        >
          <shopping-bag-icon size="1.5x" class="text-white"></shopping-bag-icon>
        </ServiceItem>

        <ServiceItem
          title="Consultoria em Automação"
          text="Mapeamos processos passíveis de automatização e soluções que
              aumentam a sua produtividade, modernizam a sua empresa e garantem
              a qualidade do seu produto final. Além disso adequamos os
              processos já automatizados da sua empresa aos requisitos da norma
              NR-12"
        >
          <sliders-icon size="1.5x" class="text-white"></sliders-icon>
        </ServiceItem>

        <ServiceItem
          title="Consultoria em Instrumentação Industrial"
          text="Apresentamos melhorias no setor de instrumentação dos projetos,
              propondo a adição ou troca de instrumentos que tragam
              confiabilidade nas medições e controles aplicados no seu processo"
        >
          <settings-icon size="1.5x" class="text-white"></settings-icon>
        </ServiceItem>

        <ServiceItem
          title="Desenvolvimento de Software"
          text="Aplicações para desktop e mobile personalizadas a gosto do
              cliente, atendendo as suas demandas e garantindo o melhor
              funcionamento do empreendimento"
        >
          <code-icon size="1.5x" class="text-white"></code-icon>
        </ServiceItem>

        <ServiceItem
          title="Desenvolvimento de Circuitos Impressos"
          text="Desenvolvemos circuitos eletrônicos para as aplicações requeridas,
              garantindo seu funcionamento a partir de simulações e prototipagem
              das PCI"
        >
          <cpu-icon size="1.5x" class="text-white"></cpu-icon>
        </ServiceItem>

        <ServiceItem
          title="Desenvolvimento de Soluções Tecnológicas"
          text="Soluções que tornam suas ideias em empreendimentos reais, com
              auxílio de todas as áreas de desenvolvimento da empresa unindo
              software ao hardware"
        >
          <compass-icon size="1.5x" class="text-white"></compass-icon>
        </ServiceItem>

        <ServiceItem
          title="Automação Residencial"
          text="Conecte sua casa para que tudo seja feito de forma automática e
              remota. Abra portões, controle sua iluminação de acordo com a luz
              solar, sensores de presença, controle de temperatura automáticos e
              muito mais"
        >
          <home-icon size="1.5x" class="text-white"></home-icon>
        </ServiceItem>
      </dl>
    </div>
  </section>
</template>

<script>
import ServiceItem from '@/components/Home/ServiceItem'

import {
  GlobeIcon,
  ShoppingBagIcon,
  SlidersIcon,
  SettingsIcon,
  CodeIcon,
  CpuIcon,
  CompassIcon,
  HomeIcon
} from 'vue-feather-icons'

export default {
  name: 'AppServices',
  components: {
    ServiceItem,
    GlobeIcon,
    ShoppingBagIcon,
    SlidersIcon,
    SettingsIcon,
    CodeIcon,
    CpuIcon,
    CompassIcon,
    HomeIcon
  }
}
</script>
