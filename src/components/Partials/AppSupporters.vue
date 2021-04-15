<template>
  <section id="supporters" class="my-16">
    <div class="container xl:px-32">
      <div class="mb-5 lg:text-center">
        <h2 class="text-blue-500 section-header">Apoiadores</h2>
        <h3 class="section-subheader">Somos apoiados por gigantes</h3>
        <p class="mt-2 text-gray-500 dark:text-gray-400">
          A nossa jornada é acompanhada por grandes pessoas que acreditam em
          nossos ideais
        </p>
      </div>
      <div class="max-w-md mx-auto">
        <VueSlickCarousel v-bind="carouselOptions">
          <div v-for="supporter in supporters" :id="supporter.name">
            <img
              :src="require(`@/assets/images/home/${supporter.image}`)"
              :alt="supporter.name"
              width="350"
              height="144"
              class="mx-auto"
            />
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'AppSupporters',
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      supporters: [
        {
          name: 'Brasil Júnior',
          image: 'logo_bj.webp'
        },
        {
          name: 'FEJEMG',
          image: 'logo_fejemg.webp'
        },
        {
          name: 'Nucleo Sul',
          image: 'logo_nucleo.webp'
        },
        {
          name: 'Unifei',
          image: 'logo_unifei.webp'
        }
      ],
      carouselOptions: {
        lazyLoad: 'ondemand',
        dots: false,
        arrows: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: 'linear'
      }
    }
  }
}
</script>

<style>
.slick-track[data-v-e4caeaf8] {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.slick-track.slick-center[data-v-e4caeaf8] {
  margin-left: auto;
  margin-right: auto;
}
.slick-track[data-v-e4caeaf8]:after,
.slick-track[data-v-e4caeaf8]:before {
  display: table;
  content: '';
}
.slick-track[data-v-e4caeaf8]:after {
  clear: both;
}
.slick-loading .slick-track[data-v-e4caeaf8] {
  visibility: hidden;
}
.slick-slide[data-v-e4caeaf8] {
  display: none;
  float: left;
  height: 100%;
  min-height: 1px;
}
[dir='rtl'] .slick-slide[data-v-e4caeaf8] {
  float: right;
}
.slick-slide img[data-v-e4caeaf8] {
  display: block;
}
.slick-slide.slick-loading img[data-v-e4caeaf8] {
  display: none;
}
.slick-slide.dragging img[data-v-e4caeaf8] {
  pointer-events: none;
}
.slick-initialized .slick-slide[data-v-e4caeaf8] {
  display: block;
}
.slick-loading .slick-slide[data-v-e4caeaf8] {
  visibility: hidden;
}
.slick-vertical .slick-slide[data-v-e4caeaf8] {
  display: block;
  height: auto;
  border: 1px solid transparent;
}
.slick-arrow.slick-hidden[data-v-21137603] {
  display: none;
}
.slick-slider[data-v-3d1a4f76] {
  position: relative;
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}
.slick-list[data-v-3d1a4f76] {
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.slick-list[data-v-3d1a4f76]:focus {
  outline: none;
}
.slick-list.dragging[data-v-3d1a4f76] {
  cursor: pointer;
  cursor: hand;
}
.slick-dotted.slick-slider {
  margin-bottom: 30px;
}
</style>
