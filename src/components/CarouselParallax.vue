<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :speed="600"
    :parallax="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper w-full h-full bg-black"
  >
    <!-- Corrigido para o novo padrão de slots -->
    <template #container-start>
      <div
        class="parallax-bg absolute left-0 top-0 w-[130%] h-full bg-cover bg-center"
        :style="{
          'background-image':
            'url(https://www.pontoxtecidos.com.br/static/567/sku/164485009798408.jpg)',
        }"
        data-swiper-parallax="-23%"
      ></div>
    </template>
    <swiper-slide class="flex flex-col justify-center items-center p-10">
      <div
        class="title text-white text-4xl font-light"
        data-swiper-parallax="-300"
      >
        História da Academia
      </div>
      <div class="subtitle text-white text-2xl" data-swiper-parallax="-200">
        Início
      </div>
      <div
        class="text text-white text-base max-w-[400px] leading-relaxed"
        data-swiper-parallax="-100"
      >
        <p>Trecho falando sobre</p>
      </div>
    </swiper-slide>
    <swiper-slide class="flex flex-col justify-center items-center p-10">
      <div
        class="title text-white text-4xl font-light"
        data-swiper-parallax="-300"
      >
        História da academia
      </div>
      <div class="subtitle text-white text-2xl" data-swiper-parallax="-200">
        Mais
      </div>
      <div
        class="text text-white text-base max-w-[400px] leading-relaxed"
        data-swiper-parallax="-100"
      >
        <p>Falando mais sobre a academia</p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Parallax, Pagination, Navigation],
    };
  },
};
</script>
