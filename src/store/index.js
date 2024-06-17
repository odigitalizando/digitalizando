import { createStore } from "vuex";

export default createStore({
  state: {
    darkMode: false,
    isMenuOpen: false,
    icon: "≡",
  },

  getters: {
    darkMode: (state) => state.darkMode,
    isMenuOpen: (state) => state.isMenuOpen,
    icon: (state) => state.icon,
  },

  mutations: {
    changeMode(state) {
      if (state.darkMode) {
        state.darkMode = false;
      } else {
        state.darkMode = true;
      }
    },
    changeMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
      if (state.isMenuOpen) {
        state.icon = "✕";
      } else {
        state.icon = "≡";
      }
    },
  },
  actions: {
    changeMode({ commit }) {
      commit("changeMode");
    },
    changeMenu({ commit }) {
      commit("changeMenu");
    },
  },
  modules: {},
});
