<template>
  <main
    :class="{
      'flex h-6/8 justify-center flex-col mt-1 sm:mt-2': true,
      darkmode: darkMode, // Se estiver ativa, a cor de fundo da div será escura
      'ligth-mode': !darkMode, //Se estiver desativada, a cor de fundo será clara //
    }"
  >
    <div class="w-full justify-center items-center content-center h-3/8 mb-0">
      <img
        class="justify-center items-center content-center"
        src="/Imgs/FirstCarouselInit.png"
        alt="Carrosel de Imagem"
      />
    </div>

    <div class="flex flex-row justify-around py-5 sm:flex md:py-10">
      <div class="hidden sm:flex flex-col justify-center items-center">
        <svg
          v-if="darkMode === false"
          class="mx-2 mb-3 justify-center items-center content-center"
          xmlns="http://www.w3.org/2000/svg"
          height="58px"
          viewBox="0 -960 960 960"
          width="58px"
        >
          <path
            d="M479-120 189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240L479-120Zm0-308 315-172-315-169-313 169 313 172Zm0 240 230-127v-168L479-360 249-485v170l230 127Zm1-240Zm-1 74Zm0 0Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          v-if="darkMode"
          class="mx-2 mb-3"
          height="58px"
          viewBox="0 -960 960 960"
          width="58px"
          fill="#FFFFFF"
        >
          <path
            d="M479-120 189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240L479-120Zm0-308 315-172-315-169-313 169 313 172Zm0 240 230-127v-168L479-360 249-485v170l230 127Zm1-240Zm-1 74Zm0 0Z"
          />
        </svg>

        <p class="text-sm sm:text-xl hover:text-sky-800">
          <a
            href=""
            :class="{
              'text-decoration-none': true,
              'text-gray-50': darkMode,
              'text-gray-800 ': !darkMode,
            }"
            >Curso Básico em Teologia</a
          >
        </p>
      </div>
      <div class="hidden sm:flex flex-col justify-center items-center">
        <svg
          v-if="darkMode === false"
          class="mx-2 mb-3 justify-center items-center content-center"
          xmlns="http://www.w3.org/2000/svg"
          height="58px"
          viewBox="0 -960 960 960"
          width="58px"
        >
          <path
            d="M479-120 189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240L479-120Zm0-308 315-172-315-169-313 169 313 172Zm0 240 230-127v-168L479-360 249-485v170l230 127Zm1-240Zm-1 74Zm0 0Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          v-if="darkMode"
          class="mx-2 mb-3"
          height="58px"
          viewBox="0 -960 960 960"
          width="58px"
          fill="#FFFFFF"
        >
          <path
            d="M479-120 189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240L479-120Zm0-308 315-172-315-169-313 169 313 172Zm0 240 230-127v-168L479-360 249-485v170l230 127Zm1-240Zm-1 74Zm0 0Z"
          />
        </svg>

        <p class="text-sm sm:text-xl hover:text-sky-800">
          <a
            href=""
            :class="{
              'text-decoration-none': true,
              'text-gray-50': darkMode,
              'text-gray-800 ': !darkMode,
            }"
            >Curso Bacharel em Teologia</a
          >
        </p>
      </div>
    </div>

    <div class="hidden sm:flex mb-20">
      <a href="/">
        <img
          class="justify-center items-center content-center"
          src="/Imgs/SecondCarouselInit.png"
          alt="Carrosel de Imagem"
        />
      </a>
    </div>

    <div class="pt-0 sm:justify-center pt-20 lg:text-center h-2/8 mb-10">
      <div class="flex sm:hidden">
        <a href="/">
          <img
            class="justify-center items-center content-center align-center pb-3"
            src="/Imgs/1.png"
            alt="Carrosel de Imagem"
          />
        </a>
      </div>
      <div class="w-full">
        <div class="w-full">
          <div class="w-4/5 mx-auto">
            <h1
              class="text-4xl pt-0 sm:pt-20 sm:text-5xl w-full font-bold text-start tracking-tight md:text-7xl"
            >
              Nossa missão é criar conhecedores <br />
              da palavra<span class="text-sky-300"> de Deus </span>
            </h1>

            <p class="text-lg sm:mt-6 text-xl leading-6 text-start">
              Descubra a riqueza do conhecimento teológico e aprofunde sua
              compreensão espiritual. Junte-se a nós em uma jornada de
              aprendizado e crescimento.
            </p>
            <a href="/">
              <button
                class="mt-8 text-xl font-bold font-sans text-black justify-center items-center content-center hover:text-sky-300 bg-sky-400 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 rounded-full px-4 py-2"
              >
                comece agora
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex sm:hidden">
      <a href="/">
        <img
          class="justify-center items-center content-center"
          src="/Imgs/SecondCarouselInit.png"
          alt="Carrosel de Imagem"
        />
      </a>
    </div>
    <div
      :class="{
        'flex flex-col sm:flex-row w-full justify-around pt-5': true,
        'bg-gray-800': darkMode,
        'bg-gray-50 sm:bg-gray-200': !darkMode,
      }"
    >
      <div class="flex flex-column justify-start items-start content-start p-4">
        <span class="material-symbols-outlined notranslate"> menu_book </span>
        <h3>Conteúdo</h3>
        <p class="text-start">
          Explore nossos materiais ricos e variados que cobrem desde fundamentos
          teológicos até estudos aprofundados e escritos. Obtenha acesso a uma
          ampla gama de recursos.
        </p>
      </div>

      <div class="flex flex-column justify-start items-start content-start p-3">
        <span class="material-symbols-outlined notranslate"> group </span>
        <h3>Docentes</h3>
        <p class="text-start">
          Conheça nossa equipe de docentes altamente qualificados, com anos de
          experiência em diversas áreas da teologia e estudos bíblicos. Eles
          estão prontos para guiá-lo em uma jornada de crescimento espiritual e
          intelectual.
        </p>
      </div>
      <div class="flex flex-column justify-start items-start content-start p-3">
        <span class="material-symbols-outlined notranslate"> feedback </span>
        <h3>Suporte</h3>
        <p class="text-start">
          Estamos aqui para ajudar! Nossa equipe de suporte está disponível para
          responder suas dúvidas sobre nossos cursos, materiais e recursos.
          Entre em contato conosco a qualquer momento para obter assistência
          personalizada.
        </p>
      </div>
      <div class="flex flex-column justify-start items-start content-start p-3">
        <span class="material-symbols-outlined notranslate"> live_tv </span>
        <h3>Lives</h3>
        <p class="text-start">
          Participe das nossas lives semanais e interaja com professores e
          alunos ao vivo! Aproveite a diversidade de conteúdos e aprenda muito
          mais.
        </p>
      </div>
    </div>
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
.notranslate {
  unicode-bidi: isolate; /// retira a tradução de icones do google tradutor
}
</style>
