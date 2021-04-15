<template>
  <footer id="footer">
    <div class="text-sm text-gray-500 dark:text-gray-400">
      <div class="container justify-between py-10 lg:flex">
        <div
          class="flex flex-col px-2 py-4 space-y-4 lg:py-0 lg:px-4 lg:w-5/12"
        >
          <h4 class="footer-header">Últimos posts</h4>
          <SmallPostCard
            v-for="edge in $static.posts.edges"
            :key="edge.node.id"
            :post="edge.node"
          />
        </div>

        <div class="px-2 py-4 lg:py-0 lg:px-4 lg:w-2/12">
          <h4 class="mb-4 footer-header">Navegação</h4>
          <ul class="space-y-4">
            <li>
              <a href="/" class="hover:underline">Home</a>
            </li>
            <li>
              <a href="/blog" class="hover:underline">Blog</a>
            </li>
            <li>
              <a
                :href="portfolio_link"
                rel="noreferrer"
                target="_blank"
                class="hover:underline"
                >Portfólio</a
              >
            </li>
            <li>
              <a
                href="/sitemap.xml"
                rel="noreferrer"
                target="_blank"
                class="hover:underline"
                >Sitemap</a
              >
            </li>
          </ul>
        </div>

        <div class="px-2 py-4 lg:py-0 lg:px-4 lg:w-4/12">
          <h4 class="mb-4 footer-header">Asimov Jr</h4>
          <p class="mb-4">
            Transformar a sociedade, desenvolvendo soluções tecnológicas
            personalizadas e guiando seus membros a atingirem seu maior
            potencial
          </p>
          <p class="mb-4">Av. BPS, 1300 - Pinheirinho, Itajubá-MG</p>
          <div class="flex flex-row space-x-4">
            <a
              :href="whatsapp_link"
              rel="noreferrer"
              target="_blank"
              title="WhatsApp"
              aria-label="Acessar WhatsApp"
              class="hover:text-blue-500"
            >
              <phone-icon size="2x" class="hover:text-blue-500"></phone-icon>
            </a>
            <a
              :href="instagram_link"
              rel="noreferrer"
              target="_blank"
              title="Instagram"
              aria-label="Acessar Instagram"
              class="hover:text-blue-500"
            >
              <instagram-icon size="2x"></instagram-icon>
            </a>
            <a
              :href="facebook_link"
              rel="noreferrer"
              target="_blank"
              title="Facebook"
              aria-label="Acessar Facebook"
              class="hover:text-blue-500"
            >
              <facebook-icon size="2x"></facebook-icon>
            </a>
            <a
              :href="linkedin_link"
              rel="noreferrer"
              target="_blank"
              title="LinkedIn"
              aria-label="Acessar LinkedIn"
              class="hover:text-blue-500"
            >
              <linkedin-icon size="2x"></linkedin-icon>
            </a>
            <a
              :href="mail_link"
              title="Email"
              aria-label="Acessar email"
              class="hover:text-blue-500"
            >
              <mail-icon size="2x"></mail-icon>
            </a>
          </div>
        </div>

        <div class="flex justify-center m-auto lg:w-1/12">
          <a
            href="#"
            v-scroll-to="'#navbar'"
            title="Voltar ao Topo"
            aria-label="Voltar ao Topo"
            class="hover:text-blue-500"
          >
            <chevrons-up-icon size="2.5x"></chevrons-up-icon>
          </a>
        </div>
      </div>

      <div class="container flex justify-center p-2">
        <span>
          © Asimov Jr {{ new Date().getFullYear() }}. Todos os direitos
          reservados.
        </span>
      </div>
    </div>
  </footer>
</template>

<static-query>
query Posts {
  posts: allPost(sortBy: "date", order: DESC, limit: 2) {
    edges {
      node {
        id
        path
        title
        date(format: "DD/MM/Y")
        image {
          path
          alt
        }
      }
    }
  }
}
</static-query>

<script>
import SmallPostCard from '@/components/Blog/SmallPostCard'
import external_links from '/content/external_links.json'

import {
  ChevronsUpIcon,
  PhoneIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon
} from 'vue-feather-icons'

export default {
  name: 'Footer',
  components: {
    ChevronsUpIcon,
    PhoneIcon,
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,

    SmallPostCard
  },
  data() {
    return {
      whatsapp_link: external_links.whatsapp,
      instagram_link: external_links.instagram,
      facebook_link: external_links.facebook,
      linkedin_link: external_links.linkedin,
      mail_link: external_links.mail,
      portfolio_link: external_links.portfolio
    }
  }
}
</script>

<style>
.footer-header {
  @apply text-sm tracking-tighter uppercase font-display;
}
</style>
