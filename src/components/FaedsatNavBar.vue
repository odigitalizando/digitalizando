<template>
  <!-- Tag "nav" é responsável por criar a barra de navegação -->
  <div class="flex flex-col">
    <nav
      :class="{
        darkmode: darkMode, // Se a moda estiver ativa, a cor de fundo da barra será escura
        'ligth-mode': !darkMode, // Se a moda estiver desativada, a cor de fundo será clara
        flex: true, // A barra terá display flex
        'flex-rown': true, // A barra será uma linha
        'justify-center': true, // centraliza o conteúdo na horizontal
        'items-center py-4 mr-4 px-3': true, // centraliza o conteúdo na vertical e adiciona padding
        'w-full': true, // a barra ocupa toda a largura disponível
        'h-1/8': true, // a barra tem altura de 1/8 da altura da tela
      }"
    >
      <!-- Div que contém a logo e o botão de menu -->
      <div class="flex flex-col p-0 w-full md:flex md:w-1/3">
        <div
          class="flex flex rown p-0 w-full justify-center content-center items-center"
        >
          <!-- Botão de menu, que ao ser clicado, abre o menu lateral -->
          <button
            @click="toggleMenu"
            class="text-5xl rounded-md p-3 flex focus:outline-none w-1/4 justify-center notranslate md:hidden"
          >
            <!-- Exibe a ícone correspondente ao modo atual -->
            {{ this.$store.state.icon }}
          </button>
          <!-- Div que contém a logo -->
          <div
            class="flex w-3/4 justify-center items-center content-center md:w-full h-full"
          >
            <!-- Exibe a logo -->
            <img
              src="/Imgs/LgSiteLigth.png"
              alt="Faedsat"
              class="justify-center items-center content-center w-full md:w-screen h-full"
            />
          </div>
        </div>
      </div>

      <!-- Div que contém os links da barra de navegação -->
      <div class="hidden md:flex flex-row justify-center w-1/3">
        <!-- Link "Início" -->
        <div class="flex w-1/3 p-2">
          <p class="px-2 py-1 rounded-lg hover:font-black hover:text-sky-400">
            Início
          </p>
        </div>

        <!-- Link "Cursos" -->
        <div class="flex w-1/3 p-2">
          <p class="px-2 py-1 rounded-lg hover:font-black hover:text-sky-400">
            Cursos
          </p>
        </div>

        <!-- Link "Sobre" -->
        <div class="flex w-1/3 p-2">
          <p class="px-2 py-1 rounded-lg hover:font-black hover:text-sky-400">
            Saiba mais
          </p>
        </div>
      </div>

      <!-- Div que contém o botão de mudar o modo (modo escuro ou claro) -->
      <div class="flex w-1/3 justify-center md:justify-end w-1/3">
        <button
          @click="toggleMode"
          :class="[
            'flex',
            'items-center',
            'p-2',
            'hover:scale-90',
            'rounded-full',
            darkMode ? 'bg-gray-800' : 'bg-gray-200',
          ]"
        >
          <!-- Exibe o ícone correspondente ao modo atual -->
          <span v-if="darkMode" class="material-icons text-white notranslate"
            >wb_sunny</span
          >
          <span v-else class="material-icons text-black notranslate"
            >brightness_3</span
          >
          <!-- Exibe o texto correspondente ao modo atual -->
          <span
            class="ml-2"
            :class="[darkMode ? 'text-white' : 'text-black', 'hidden md:flex']"
          >
            {{ darkMode ? "Dia" : "Noite" }}
          </span>
        </button>
      </div>
    </nav>
    <!-- Componente que contém o menu lateral, que é exibido quando o botão de menu é clicado -->
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
      return this.$store.state.darkMode; // Retorna o modo atual
    },
  },
  methods: {
    toggleMode() {
      this.$store.commit("changeMode"); // Muda o modo
    },

    toggleMenu() {
      this.$store.commit("changeMenu"); // Muda o menu lateral
    },

    DropActive() {
      this.$store.commit("DropActive");
      console.log("working?");
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
.notranslate {
  unicode-bidi: isolate; /// retira a tradução de icones do google tradutor
}
</style>
