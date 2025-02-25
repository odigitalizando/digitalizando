<template>
  <div class="h-50 flex justify-center items-center">
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper w-full max-w-4xl py-12"
    >
      <swiper-slide>
        <img class="w-full h-72 object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-72 object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-72 object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-72 object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-72 object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-72 object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-full h-72 object-cover"
          src="/Imgs/cinza.png/Imgs/cinza.png"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>

<style scoped>
/* Additional Custom Styles (if needed) */
.mySwiper {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
