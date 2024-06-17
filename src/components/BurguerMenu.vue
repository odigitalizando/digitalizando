<template>
  <div
    :class="{
      flex: true,
      'flex-col': true,
      darkmode: darkMode,
      'ligth-mode': !darkMode,
    }"
  >
    <div class="px-2 py-2 text-1xl w-full">
      <div v-for="(item, i) in items" :key="i" class="hover: cursor-pointer">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Home" },
        { title: "Curso básico" },
        { title: "Curso bacharel" },
        { title: "Sobre" },
      ],
      isMenuOpen: false,
      icon: "≡",
    };
  },
  computed: {
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
  @include background-color($dark-medium-gray);
  @include text-color($light-light-gray);
}
.lightmode {
  @include background-color($light-light-gray);
  @include text-color($light-text-color);
}
</style>
