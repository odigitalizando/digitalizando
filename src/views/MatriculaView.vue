<template>
  <main
    :class="[
      'flex flex-col w-full justify-center text-center items-center p-10 content-center', // Classes comuns
      darkMode ? 'darkmode' : 'ligtmode', // Condicional para o modo escuro/claro
    ]"
  >
    <h1 class="text-6xl archivo font-bold mt-20 mb-5">
      Academia <span class="archivo text-amber-600">Bioforma</span>
    </h1>

    <a
      href="/Matricula"
      class="w-3/5 sm:w-1/5 text-4xl text-white bg-amber-500 rounded-full p-2 hover:bg-amber-400 hover:transform hover:scale-105 transition duration-300"
    >
      Matrícule-se
      <span class="absolute left-1 ml-2 notranslate hidden group-hover:block"
        >⮕</span
      ></a
    >

    <h2 class="pt-20 mt-20">Alguma Dúvida?</h2>
    <h4>Contate-nos</h4>
    <a
      href="/Matricula"
      class="w-3/5 sm:w-1/5 text-xl text-white bg-green-500 rounded-full p-2 hover:bg-green-400 hover:transform hover:scale-105 transition duration-300"
      >Whatsapp
      <span class="absolute left-1 ml-2 notranslate hidden group-hover:block"
        >⮕</span
      ></a
    >
  </main>
</template>
<script>
export default {
  name: "CursosView",
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    },
  },
  methods: {
    imgVerify() {
      if (this.darkMode) {
        return "/Imgs/LgSiteLigth.png";
      } else {
        return "/Imgs/1.png";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_mixins.scss";

.darkmode {
  @include background-color($dark-background-color);
  @include text-color($light-light-gray);
}

.lightmode {
  @include background-color($light-white);
  @include text-color($light-text-color);
}

.notranslate {
  unicode-bidi: isolate; // Retira a tradução de ícones do Google Tradutor
}
.archivo {
  font-family: "Archivo", serif;
}
.jura {
  font-family: "Jura", serif;
}
.roboto {
  font-family: "Roboto", serif;
}
</style>
