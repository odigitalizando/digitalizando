<template>
  <button
    v-if="isVisible"
    @click="scrollToTop"
    class="fixed bottom-20 right-4 p-3 bg-gradient-to-b from-[#172243] to-[#ece5da] text-white rounded-full shadow-lg z-30 hover:bg-sky-400"
  >
    <span class="material-symbols-outlined notranslate"> arrow_upward </span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    checkScroll() {
      this.isVisible = window.scrollY > 450;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.checkScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.checkScroll);
  },
};
</script>

<style scoped>
.notranslate {
  unicode-bidi: isolate;
}
</style>
