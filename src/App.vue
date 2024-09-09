<template>
  <div class="flex flex-col h-screen w-screen m-0 p-0">
    <FaedsatNavBarVue
      class="fixed top-0 left-0 w-full bg-white shadow-md z-20"
    />
    <div class="flex-1 mt-20">
      <!-- Adiciona margem superior para empurrar o conteúdo -->
      <router-view />
    </div>
  </div>
</template>

<script>
import FaedsatNavBarVue from "./components/FaedsatNavBar.vue";

export default {
  name: "App",
  components: {
    FaedsatNavBarVue,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
