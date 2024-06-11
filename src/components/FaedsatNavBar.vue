<template>
  <nav
    :class="{
      darkmode: darkMode,
      'ligth-mode': !darkMode,
      flex: true,
      'flex-rown': true,
      'justify-center': true,
      'items-center': true,
    }"
  >
    <div class="flex justify-start w-1/3">///logo///</div>

    <div class="flex flex-row items-center justify-center space-between w-1/3">
      <div class="flex w-1/3 justify-center">Home</div>
      <div class="flex w-1/3 justify-center">Courses</div>
      <div class="flex w-1/3 justify-center">About</div>
    </div>

    <div class="flex w-1/3 justify-end">
      <button @click="toggleMode">Mudar Cor</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "FaedsatNavBar",
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    },
  },
  methods: {
    toggleMode() {
      this.$store.commit("changeMode");
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
</style>
