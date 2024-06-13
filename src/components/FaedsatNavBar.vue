<template>
  <nav
    :class="{
      darkmode: darkMode,
      'ligth-mode': !darkMode,
      flex: true,
      'flex-rown': true,
      'justify-center': true,
      'items-center': true,
    }"
  >
    <div v-if="windowWidth <= 724" class="flex justify-start w-1/3">
      <img src="/Imgs/LgSiteLigth.png" alt="" />
    </div>

    <div class="flex flex-row items-center justify-center space-between w-1/3">
      <div class="flex w-1/3 justify-center p-2">
        <p
          class="px-2 py-1 rounded-lg hover:border-b-4 border-cyan-500 -translate-y-0.5"
        >
          Início
        </p>
      </div>
      <div class="flex w-1/3 justify-center p-2 mx-3">
        <p
          class="px-2 py-1 rounded-lg hover:border-b-4 border-cyan-500 -translate-y-0.5"
        >
          Cursos
        </p>
      </div>
      <div class="flex w-1/3 justify-center p-2">
        <p
          class="px-2 py-1 rounded-lg hover:border-b-4 border-cyan-500 -translate-y-0.5"
        >
          Sobre
        </p>
      </div>
    </div>

    <div class="flex w-1/3 justify-end">
      <button
        @click="toggleMode"
        :class="[
          'flex',
          'items-center',
          'p-3',
          'hover:scale-105',
          'rounded-full',
          darkMode ? 'bg-gray-800' : 'bg-gray-200',
        ]"
      >
        <span v-if="darkMode" class="material-icons text-white">wb_sunny</span>
        <span v-else class="material-icons text-black">brightness_3</span>
        <span class="ml-2" :class="darkMode ? 'text-white' : 'text-black'">
          {{ darkMode ? "Dia" : "Noite" }}
        </span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "FaedsatNavBar",
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    },
  },
  methods: {
    toggleMode() {
      this.$store.commit("changeMode");
      console.log("working?");
    },
    updateWindowSize() {
      this.windowWidth = window.innerWidth;
    },
    mounted() {
      this.updateWindowSize();
      window.addEventListener("resize", this.updateWindowSize);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.updateWindowSize);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_mixins.scss";

.darkmode {
  @include background-color($dark-background-color);
  @include text-color($dark-text-color);
}
.lightmode {
  @include background-color($light-white);
  @include text-color($light-text-color);
}
</style>
