<template>
  <!-- Div que contém todo o menu lateral -->
  <div
    :class="{
      flex: true, // Div com display flex
      'flex-col': true, // Div com display flex em coluna
      darkmode: darkMode, // Se a moda estiver ativa, a cor de fundo da div será escura
      'ligth-mode': !darkMode, // Se a moda estiver desativada, a cor de fundo será clara
    }"
  >
    <!-- Div que contém os itens do menu -->
    <div class="px-2 py-2 text-1xl w-full text-center">
      <!-- Percorre a lista de itens do menu -->
      <div
        v-for="(item, i) in items"
        :key="i"
        class="divide-y divide-white divide-dashed hover:cursor-pointer"
      >
        <!-- Div que contém o título do item do menu -->
        <p
          class="divide-y divide-white divide-dashed border-b-2 p-2 hover:font-black"
        >
          <!-- Exibe o título do item do menu -->
          {{ item.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // Define os itens do menu
    return {
      items: [{ title: "Home" }, { title: "Cursos" }, { title: "Saiba mais" }],
    };
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
  @include background-color($dark-medium-gray); // Cor de fundo escura
  @include text-color($light-light-gray); // Cor do texto claro
  @include border-color($dark-dark-gray); // Cor da borda escura
}
.lightmode {
  @include background-color($light-white); // Cor de fundo clara
  @include text-color($light-text-color); // Cor do texto claro
  @include border-color($dark-dark-gray); // Cor da borda escura
}
</style>
