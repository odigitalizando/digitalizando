<template>
  <!-- Tag "nav" é responsável por criar a barra de navegação -->
  <!-- Div que contém a logo e o botão de menu -->
  <nav
    class="flex lightmode justify-center flex-rown p-0 h-1/6 md:flex md:w-full"
  >
    <!-- Div que contém a logo -->
    <!-- Exibe a logo -->
    <img
      src="/Imgs/digitalizando .png"
      alt="Logo Digitalizando criadora de sites e de assistentes de IA"
      class="justify-center flex items-center content-center w-1/8 cursor-pointer md:w-1/8 h-full"
    />
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
      return this.$store.state.darkMode; // Retorna o modo atual
    },
  },
  methods: {
    toggleMode() {
      this.$store.commit("changeMode"); // Muda o modo
    },

    toggleMenu() {
      setTimeout(() => {
        this.$store.commit("changeMenu");
      }, 200);
      // Muda o menu lateral
    },

    DropActive() {
      this.$store.commit("DropActive");
      console.log("working?");
    },
  },
};
</script>

<style lang="scss">
@import "../styles/_mixins.scss";

.darkmode {
  @include background-color($dark-background-color);
  @include text-color($light-light-gray);
  @include border-color($dark-dark-gray);
}

.lightmode {
  @include background-color($light-white);
  @include text-color($light-text-color);
  @include border-color($dark-dark-gray);
}

.notranslate {
  unicode-bidi: isolate; /// retira a tradução de icones do google tradutor
}
.archivo {
  font-family: "Archivo", serif;
}
</style>
