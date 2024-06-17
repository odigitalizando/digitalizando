<template>
  <div class="flex flex-col">
    <nav
      :class="{
        darkmode: darkMode,
        'ligth-mode': !darkMode,
        flex: true,
        'flex-rown': true,
        'justify-center': true,
        'items-center py-4 mr-4 px-5': true,
        'w-full': true,
        'h-1/8': true,
      }"
    >
      <div class="flex flex-col p-0 w-full md:flex md:w-1/3">
        <div class="flex flex rown p-0 w-full">
          <button
            @click="toggleMenu"
            class="text-5xl rounded-md p-3 flex focus:outline-none w-1/4 justify-center md:hidden"
          >
            {{ this.$store.state.icon }}
          </button>
          <div
            class="flex w-3/4 justify-center items-center content-center md:w-2/3"
          >
            <img
              src="/Imgs/LgSiteLigth.png"
              alt="Faedsat"
              class="justify-center w-full md:w-3/3"
            />
          </div>
        </div>
      </div>

      <div
        class="hidden md:flex flex-row items-center justify-center space-between w-1/3"
      >
        <div class="flex w-1/3 justify-center p-2">
          <p class="px-2 py-1 rounded-lg hover:font-black hover:text-sky-400">
            Início
          </p>
        </div>
        <div class="flex w-1/3 justify-center p-2 mx-3">
          <p class="px-2 py-1 rounded-lg hover:font-black hover:text-sky-400">
            Cursos
          </p>
        </div>
        <div class="flex w-1/3 justify-center p-2">
          <p class="px-2 py-1 rounded-lg hover:font-black hover:text-sky-400">
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
            'p-2.5',
            'hover:scale-90',
            'rounded-full',
            darkMode ? 'bg-gray-800' : 'bg-gray-200',
          ]"
        >
          <span v-if="darkMode" class="material-icons text-white"
            >wb_sunny</span
          >
          <span v-else class="material-icons text-black">brightness_3</span>
          <span
            class="ml-2"
            :class="[darkMode ? 'text-white' : 'text-black', 'hidden md:flex']"
          >
            {{ darkMode ? "Dia" : "Noite" }}
          </span>
        </button>
      </div>
    </nav>
    <BurguerMenu
      v-if="this.$store.state.isMenuOpen"
      class="flex justify-center md:hidden mt-0"
    />
  </div>
</template>

<script>
import BurguerMenu from "./BurguerMenu.vue";
export default {
  name: "FaedsatNavBar",
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  components: {
    BurguerMenu,
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    },
  },
  methods: {
    toggleMode() {
      this.$store.commit("changeMode");
    },

    toggleMenu() {
      this.$store.commit("changeMenu");
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
