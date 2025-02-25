<template>
  <div class="flex flex-col mx-auto px-4 py-8">
    <!-- Main Swiper -->
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2 w-3/5 h-1/5 mx-auto"
    >
      <swiper-slide>
        <img class="w-full h-full object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-full object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-full object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-full object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-full object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-full object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-full object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-full object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-full object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-full object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
    </swiper>

    <!-- Thumbnail Swiper -->
    <swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mySwiper w-3/4 mt-6 opacity-75"
    >
      <swiper-slide>
        <img class="w-full h-full object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-full object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-full object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-full object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-full object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-full object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-full object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-full object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-full object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-full h-full object-cover" src="/Imgs/cinza.png" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs],
    };
  },
};
</script>

<style scoped>
/* Custom styles for navigation buttons */
.swiper-button-next,
.swiper-button-prev {
  color: white; /* Button color */
  font-size: 2rem; /* Button size */
}
</style>
