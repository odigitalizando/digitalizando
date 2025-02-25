<template>
  <main
    :class="[
      'flex flex-col w-full justify-center text-center', // Classes comuns
      darkMode ? 'darkmode' : 'lihgtmode', // Condicional para o modo escuro/claro
    ]"
  >
    <CarouselInit />
    <h1 class="text-5xl archivo font-bold my-10">
      Academia <span class="archivo text-amber-600">Bioforma</span>
    </h1>
    <img src="/Imgs/CarouselCourses.png" alt="" />
    <div class="text-center justify-center pt-10">
      <h1
        class="justify-center items-center content-center text-2xl pt-0 sm:pt-10 sm:text-xl w-full tracking-tight md:text-4xl"
      >
        Nossas Unidades
      </h1>
    </div>
    <article
      class="flex-col px-5 justify-center items-center content-center md:flex flex-row justify-center px-20"
    >
      <div
        @click="openMatriz()"
        class="w-full px-5 h-full sm:w-[calc(40%-10px)] md:w-[calc(35%-10px)] sm:flex flex-col pt-4 pb-20 hover:cursor-pointer transform hover:scale-105 transition duration-300"
      >
        <img src="/Imgs/cinza.png" alt="" class="w-full sm:rounded-md" />
        <div class="shadow-lg shadow-sky-500 rounded-md p-4 w-full">
          <h2>Unidade Matriz</h2>
          <p>Endereço:</p>
          <button
            class="bg-amber-500 rounded-br-lg p-2 hover:bg-amber-400 hover:transform hover:scale-105 transition duration-300"
          >
            Saiba mais
          </button>
        </div>
      </div>
      <div
        @click="openNova()"
        class="w-full px-5 h-full sm:w-[calc(50%-15px)] sm:flex flex-col pt-4 pb-20 hover:cursor-pointer transform hover:scale-105 transition duration-30w-full px-5 h-full sm:w-[calc(40%-10px)] md:w-[calc(35%-10px)] sm:flex flex-col pt-4 pb-20 hover:cursor-pointer transform hover:scale-105 transition duration-300"
      >
        <img src="/Imgs/cinza.png" alt="" class="w-full sm:rounded-md" />
        <div class="shadow-lg shadow-cyan-500/50 rounded-md p-4 w-full">
          <h2>Unidade Nova</h2>
          <p>Endereço:</p>
          <button
            class="bg-amber-500 rounded-br-lg p-2 hover:bg-amber-400 hover:transform hover:scale-105 transition duration-300"
          >
            Saiba mais
          </button>
        </div>
      </div>
    </article>

    <h1>Nossa história:</h1>
    <CarouselParallax class="w-3/4 my-10" />
  </main>
</template>

<script>
import CarouselInit from "../components/CarouselInit.vue";
import CarouselParallax from "../components/CarouselParallax.vue";
export default {
  name: "CursosView",

  components: {
    CarouselInit,
    CarouselParallax,
  },
  data() {
    return {
      isBacharel: false,
      isBasico: false,
    };
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    },
  },
  methods: {
    openMatriz() {
      return this.$router.push({ path: "/UnidadeMatriz" });
    },

    openNova() {
      return this.$router.push({ path: "/UnidadeNova" });
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
