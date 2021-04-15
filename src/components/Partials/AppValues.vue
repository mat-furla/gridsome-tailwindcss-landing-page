<template>
  <section id="values" class="my-16">
    <div class="container flex flex-col xl:px-32">
      <div class="mb-5 lg:text-center">
        <h2 class="text-blue-500 section-header">Valores</h2>
        <h3 class="section-subheader">Estamos motivados a sempre melhorar</h3>
        <p class="mt-2 text-gray-500 dark:text-gray-400">
          Temos orgulho dos nossos valores e possuimos convicções claras sobre o
          que prezamos e defendemos, tanto para nossos funcionários quanto para
          os nossos clientes
        </p>
      </div>

      <div class="flex flex-col md:flex-row">
        <div class="w-full my-auto md:w-3/4 lg:w-1/2">
          <IllustrationValues class="m-5" />
        </div>
        <div class="grid grid-cols-2 gap-4 mx-auto">
          <ValueCard
            title="Ownership"
            :colors="['bg-white', 'dark:bg-gray-800']"
          >
            <users-icon size="2x" class="text-blue-500"></users-icon>
          </ValueCard>

          <ValueCard
            title="Profissionalismo"
            :colors="['bg-white', 'dark:bg-gray-800']"
          >
            <briefcase-icon size="2x" class="text-blue-500"></briefcase-icon>
          </ValueCard>

          <ValueCard title="União" :colors="['bg-white', 'dark:bg-gray-800']">
            <heart-icon size="2x" class="text-blue-500"></heart-icon>
          </ValueCard>

          <ValueCard
            title="Pau na Máquina"
            :colors="['bg-white', 'dark:bg-gray-800']"
          >
            <tool-icon size="2x" class="text-blue-500"></tool-icon>
          </ValueCard>

          <ValueCard
            title="Evoluir Sempre"
            :colors="['bg-white', 'dark:bg-gray-800']"
          >
            <trending-up-icon
              size="2x"
              class="text-blue-500"
            ></trending-up-icon>
          </ValueCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ValueCard from '@/components/Home/ValueCard'
import IllustrationValues from '@/assets/images/home/illustration_values.svg?inline'

import {
  UsersIcon,
  BriefcaseIcon,
  HeartIcon,
  ToolIcon,
  TrendingUpIcon
} from 'vue-feather-icons'

export default {
  name: 'AppValues',
  components: {
    ValueCard,
    UsersIcon,
    BriefcaseIcon,
    HeartIcon,
    ToolIcon,
    TrendingUpIcon,
    IllustrationValues
  }
}
</script>
