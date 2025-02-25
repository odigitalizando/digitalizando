<template>
  <article
    :class="[
      'flex flex-col w-full justify-center text-center', // Classes comuns
      darkMode ? 'darkmode' : 'ligtmode', // Condicional para o modo escuro/claro
    ]"
  >
    <div class="flex flex-col w-full sm:flex-row">
      <div
        class="w-full sm:w-full py-5 flex flex-col justify-center items-center content-center"
      >
        <h1
          class="text-center text-5xl pt-10 sm:pt-0 sm:text-5xl w-full font-bold tracking-tight md:text-7xl"
        >
          Unidade Nova
        </h1>
        <p class="w-4/5 sm:w-4/4">Endereço:</p>
      </div>
    </div>

    <CarouselNova />
    <div>
      <img src="/Imgs/Mosaic3.png" alt="" class="flex sm:hidden" />
      <h2
        class="pt-10 text-3xl font-bold tracking-tight sm:text-4xl text-center pl-5 font-bold tracking-tight pb-5"
      >
        Itens presentes:
      </h2>
      <div class="flex flex-col sm:flex-row w-full justify-around">
        <div class="flex flex-col justify-around py-5">
          <div>
            <span class="material-symbols-outlined"> clear_day </span>
            <h4>Climatizador:</h4>
          </div>
          <div>
            <span class="material-symbols-outlined"> exercise </span>
            <h4>Equipamentos de qualidade</h4>
          </div>
        </div>
        <div class="flex flex-col justify-center py-5">
          <div>
            <span class="material-symbols-outlined"> graphic_eq </span>
            <h4>Som ambiente:</h4>
          </div>
          <div>
            <span class="material-symbols-outlined">
              settings_accessibility
            </span>
            <h4>Aulas de Funcional</h4>
          </div>
        </div>
      </div>
    </div>
    <div
      class="pb-10 flex flex-col w-full justify-center text-center items-center"
    >
      <h2 class="pt-5">Clique aqui:</h2>
      <a
        href="/Matricula"
        class="w-3/5 sm:w-1/5 text-3xl text-white bg-amber-500 rounded-full p-2 hover:bg-amber-400 hover:transform hover:scale-105 transition duration-300"
        >Comece já
        <span class="absolute left-1 ml-2 notranslate hidden group-hover:block"
          >⮕</span
        ></a
      >
    </div>
    <div class="flex justify-center items-center">
      <div class="flex justify-center items-center w-full h-50 mx-auto">
        <iframe
          class="flex w-full"
          height="600"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.1068587776026!2d-46.96279422615941!3d-18.92666368224738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94afb121dd7e48fb%3A0x590bcd94e51f965e!2sAcademia%20Bioforma!5e0!3m2!1spt-BR!2sbr!4v1736789771968!5m2!1spt-BR!2sbr&output=svembed"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </article>
</template>

<script>
import CarouselNova from "../components/CarouselNova.vue";
export default {
  name: "BasicCurso",
  components: {
    CarouselNova,
  },

  computed: {
    darkMode() {
      return this.$store.state.darkMode;
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
</style>
