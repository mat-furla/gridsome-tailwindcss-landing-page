// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '@/assets/styles/tailwind.css'
import '@fontsource/poppins/600.css'
import '@fontsource/dm-sans/400.css'

import VueScrollTo from 'vue-scrollto'
import VueSocialSharing from 'vue-social-sharing'
import DefaultLayout from '@/layouts/Default.vue'

export default function (Vue) {
  Vue.use(VueScrollTo, {
    duration: 1000,
    offset: -100,
    easing: 'ease'
  })
  Vue.use(VueSocialSharing)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
