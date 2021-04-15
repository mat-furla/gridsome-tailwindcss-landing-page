<template>
  <div
    id="navbar"
    :class="{ scrolled: !view.atTopOfPage }"
    class="fixed z-10 w-full text-gray-500 transition-colors ease-linear delay-100 bg-white dark:text-gray-400 dark:bg-gray-900"
  >
    <div
      class="container flex items-center justify-between p-2 md:justify-start md:space-x-10"
    >
      <div class="flex justify-start lg:flex-1">
        <g-link to="/" aria-label="Home" title="Home">
          <LogoLight
            v-if="theme == 'theme-light'"
            class="hidden w-auto h-10 lg:block"
          />
          <LogoDark v-else class="hidden w-auto h-10 lg:block" />
          <LogoMobile class="block w-auto h-12 lg:hidden" />
        </g-link>
      </div>

      <div class="inline-flex items-center md:hidden">
        <theme-switcher :theme="theme" @themeChanged="updateTheme" />
        <button
          @click="mobileMenu = !mobileMenu"
          type="button"
          title="Menu"
          aria-label="Mobile Menu"
          class="ml-6 hover:text-blue-500"
        >
          <menu-icon size="1.5x" v-if="!mobileMenu"></menu-icon>
          <x-icon size="1.5x" v-else></x-icon>
        </button>
      </div>

      <div class="hidden space-x-10 md:flex">
        <div class="relative">
          <button
            @click="homeMenu = !homeMenu"
            type="button"
            aria-label="Home Menu"
            class="inline-flex items-center hover:underline"
          >
            <span class="mr-2">Home</span>
            <chevron-down-icon size="1x"></chevron-down-icon>
          </button>

          <div
            v-if="homeMenu"
            class="absolute z-20 w-screen max-w-md mt-3 transform lg:left-1/2 lg:-translate-x-1/2"
          >
            <div class="bg-white rounded-md shadow-xl dark:bg-gray-800">
              <div class="relative grid gap-8 p-8">
                <MenuItem
                  title="Serviços"
                  text="Tudo o que podemos oferecer para você ou sua empresa"
                  anchorLink="#services"
                >
                  <settings-icon
                    size="1.5x"
                    class="text-blue-500"
                  ></settings-icon>
                </MenuItem>

                <MenuItem
                  title="Valores"
                  text="O que defendemos e o que prezamos nas nossas relações com
                      você e nossos funcionários"
                  anchorLink="#values"
                >
                  <check-circle-icon
                    size="2.3x"
                    class="text-blue-500"
                  ></check-circle-icon>
                </MenuItem>

                <MenuItem
                  title="Apoiadores"
                  text="Pessoas e empresas incríveis que nos ajudam no decorrer
                      da nossa jornada"
                  anchorLink="#supporters"
                >
                  <share-2-icon size="2x" class="text-blue-500"></share-2-icon>
                </MenuItem>

                <MenuItem
                  title="Sobre Nós"
                  text="Conheça um pouco da nossa história e como tudo começou"
                  anchorLink="#about-us"
                >
                  <users-icon size="1.5x" class="text-blue-500"></users-icon>
                </MenuItem>
              </div>
            </div>
          </div>
        </div>

        <a
          :href="portfolio_link"
          rel="noreferrer"
          target="_blank"
          class="hover:underline"
        >
          Portfólio
        </a>
        <a href="/blog" class="hover:underline"> Blog </a>
        <theme-switcher :theme="theme" @themeChanged="updateTheme" />
      </div>

      <div class="justify-end hidden md:flex md:flex-1 lg:w-0">
        <a
          :href="agendar_link"
          rel="noreferrer"
          target="_blank"
          class="text-white bg-blue-500 cta-button"
        >
          Agendar
        </a>
      </div>
    </div>

    <div
      v-if="mobileMenu"
      class="container transition-colors ease-linear delay-100 md:hidden dark:bg-gray-800"
    >
      <nav class="grid gap-8 p-8">
        <MenuItem title="Serviços" anchorLink="#services">
          <settings-icon size="1.5x" class="text-blue-500"></settings-icon>
        </MenuItem>

        <MenuItem title="Valores" anchorLink="#values">
          <check-circle-icon
            size="1.5x"
            class="text-blue-500"
          ></check-circle-icon>
        </MenuItem>

        <MenuItem title="Apoiadores" anchorLink="#supporters">
          <share-2-icon size="1.5x" class="text-blue-500"></share-2-icon>
        </MenuItem>

        <MenuItem title="Sobre Nós" anchorLink="#about-us">
          <users-icon size="1.5x" class="text-blue-500"></users-icon>
        </MenuItem>

        <MenuItem title="Portfólio" :externalLink="portfolio_link">
          <book-open-icon size="1.5x" class="text-blue-500"></book-open-icon>
        </MenuItem>

        <MenuItem title="Blog" externalLink="/blog">
          <message-square-icon
            size="1.5x"
            class="text-blue-500"
          ></message-square-icon>
        </MenuItem>

        <a
          :href="agendar_link"
          rel="noreferrer"
          target="_blank"
          class="text-white bg-blue-500 hover:bg-blue-700 cta-mobile-button"
        >
          <calendar-icon size="1.5x"></calendar-icon>
          <span class="ml-3">Agendar</span>
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
import LogoDark from '@/assets/images/logo_dark.svg?inline'
import LogoLight from '@/assets/images/logo_light.svg?inline'
import LogoMobile from '@/assets/images/logo_mobile.svg?inline'
import MenuItem from '@/components/Navbar/MenuItem'
import ThemeSwitcher from '@/components/Navbar/ThemeSwitcher'
import external_links from '/content/external_links.json'

import {
  BookOpenIcon,
  CalendarIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  MenuIcon,
  MessageSquareIcon,
  SettingsIcon,
  Share2Icon,
  UsersIcon,
  XIcon
} from 'vue-feather-icons'

export default {
  name: 'NavBar',
  components: {
    BookOpenIcon,
    CalendarIcon,
    CheckCircleIcon,
    ChevronDownIcon,
    LogoDark,
    LogoLight,
    LogoMobile,
    MenuIcon,
    MenuItem,
    MessageSquareIcon,
    SettingsIcon,
    Share2Icon,
    ThemeSwitcher,
    UsersIcon,
    XIcon
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted() {
    this.theme = localStorage.getItem('theme') || 'theme-light'
    if (this.theme == 'theme-dark') {
      document.querySelector('html').classList.add('dark')
    }
  },
  data() {
    return {
      mobileMenu: false,
      homeMenu: false,
      view: {
        atTopOfPage: true
      },
      agendar_link: external_links.agendar,
      portfolio_link: external_links.portfolio,
      theme: ''
    }
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.atTopOfPage) this.view.atTopOfPage = false
      } else {
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true
      }
    },
    updateTheme(theme) {
      this.theme = theme
    }
  }
}
</script>

<style>
.scrolled {
  @apply dark:bg-gray-800 shadow-xl;
}
</style>
