import { createStore } from "vuex";

export default createStore({
  state: {
    darkMode: false,
  },

  getters: {
    darkMode: (state) => state.darkMode,
  },

  mutations: {
    changeMode(state) {
      if (state.darkMode) {
        state.darkMode = false;
      } else {
        state.darkMode = true;
      }
    },
  },
  actions: {
    changeMode({ commit }) {
      commit("changeMode");
    },
  },
  modules: {},
});
