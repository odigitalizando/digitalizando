<template>
  <footer class="flex pt-0 h-1/8 shadow-md flex-col lightmode">
    <div
      class="flex-col justify-around sm:flex flex-row h-6/8 justify-between w-full pt-2"
    >
      <div
        class="flex w-full sm:w-1/3 h-1/3 sm:flex-row justify-center items-center sm:justify-around"
      >
        <div
          class="flex-col pt-4 w-2/4 cursor-pointer"
          @click="this.$router.push('/')"
        >
          <span class="material-symbols-outlined notranslate"> home </span>
          <p>Início</p>
        </div>
        <div
          class="flex-col pt-4 w-2/4 cursor-pointer flex justify-center items-center"
        >
          <a
            href="https://www.instagram.com/odigitalizando/"
            class="flex justify-center items-center flex-col hover:text-white"
            ><img src="/Imgs/insta.png" class="size-6 flex" alt="img insta" />
            Instagram</a
          >
        </div>
      </div>

      <div
        @click="this.$router.push('/')"
        class="w-full sm:w-1/3 flex justify-center cursor-pointer"
      >
        <img
          src="/Imgs/digitalizando .png"
          alt="Logo Digitalizando"
          class="w-3/5 h-3/5 object-contain"
        />
      </div>

      <div class="w-full sm:w-1/3 h-1/3 flex justify-center items-center">
        <div class="flex-col pt-4">
          <span class="material-symbols-outlined notranslate"> mail </span>
          <p>digitalizandonow@gmail.com</p>
        </div>
      </div>
    </div>
    <div class="h-1/8 pb-4 text-gray-800 text-xs">© 2025 Digitalizando</div>
  </footer>
</template>
<script>
export default {
  computed: {
    // Retorna o modo atual
    darkMode() {
      console.log("Dark mode state:", this.$store.state.darkMode);
      return this.$store.state.darkMode;
    },
  },
  methods: {},
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
</style>
