<template>
  <main
    :class="{
      'flex h-6/8 justify-center flex-col': true,
      darkmode: darkMode, // Se estiver ativa, a cor de fundo da div será escura
      'ligth-mode': !darkMode, //Se estiver desativada, a cor de fundo será clara //
    }"
  >
    <div class="w-full justify-center items-center content-center h-3/8 mb-10">
      <img
        class="justify-center items-center content-center"
        src="/Imgs/FirstCarouselInit.png"
        alt="Carrosel de Imagem"
      />
    </div>

    <div class="flex flex-row justify-around">
      <div class="flex flex-rown">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="48px"
        >
          <path
            d="M479-120 189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240L479-120Zm0-308 315-172-315-169-313 169 313 172Zm0 240 230-127v-168L479-360 249-485v170l230 127Zm1-240Zm-1 74Zm0 0Z"
          />
        </svg>

        <p class="text-xl">Curso Básico em Teologia</p>
      </div>
      <div class="flex flex-rown">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="48px"
        >
          <path
            d="M479-120 189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240L479-120Zm0-308 315-172-315-169-313 169 313 172Zm0 240 230-127v-168L479-360 249-485v170l230 127Zm1-240Zm-1 74Zm0 0Z"
          />
        </svg>
        <p class="text-xl">Curso Bacharel em Teologia</p>
      </div>
    </div>

    <div>
      <img
        class="justify-center items-center content-center"
        src="/Imgs/SecondCarouselInit.png"
        alt="Carrosel de Imagem"
      />
    </div>

    <div class="justify-center pt-10 lg: text-center h-2/8 mb-10">
      <div class="w-full">
        <div class="w-full">
          <div class="w-4/5 mx-auto">
            <h1
              class="text-6xl w-full font-bold text-center tracking-tight md:text-7xl sm:text-5xl"
            >
              Explore a Profundidade <br />
              da Teologia
            </h1>

            <p class="mt-6 text-xl leading-6 px-10 mx-10">
              Descubra a riqueza do conhecimento teológico e aprofunde sua
              compreensão espiritual. Junte-se a nós em uma jornada de
              aprendizado e crescimento.
            </p>
            <div class="mt-5 flex items-center justify-center gap-x-6">
              <a
                href="#"
                class="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >Inscreva-se Agora</a
              >
              <a href="#" class="text-sm font-semibold leading-6">
                Saiba Mais <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>Carrosel</div>
    <div>fortificação conteudo</div>
  </main>
</template>
<script>
export default {
  data() {
    // Define os itens do menu
    return {};
  },
  computed: {
    // Retorna o modo atual
    darkMode() {
      return this.$store.state.darkMode;
    },
  },
  methods: {},
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
