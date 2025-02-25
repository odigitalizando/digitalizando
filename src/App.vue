<template>
  <div class="flex flex-col">
    <!-- Cabeçalho fixo -->
    <FaedsatNavBarVue class="fixed top-0 left-0 w-full shadow-md z-20" />

    <!-- Main com padding superior para evitar sobreposição do cabeçalho -->
    <main class="flex-grow mt-20">
      <!-- Conteúdo principal -->
      <HomeView />
    </main>

    <!-- Botão de voltar ao topo -->
    <ButtonTop />

    <!-- Rodapé -->
    <FaedsatFooter class="w-full pb-10 bg-gray-800 text-white" />
  </div>
</template>

<script>
import FaedsatNavBarVue from "./components/FaedsatNavBar.vue";
import ButtonTop from "./components/ButtonTop.vue";
import FaedsatFooter from "./components/FaedsatFooter.vue";
import HomeView from "./views/HomeView.vue";

export default {
  name: "App",
  components: {
    FaedsatNavBarVue,
    FaedsatFooter,
    ButtonTop,
    HomeView,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
a {
  color: rgb(187, 187, 187);
}
body,
html {
  height: 100%;
  margin: 0;
}
</style>
