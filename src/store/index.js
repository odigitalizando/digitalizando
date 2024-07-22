import { createStore } from "vuex";

export default createStore({
  // Estado inicial da loja
  state: {
    darkMode: false, // modo escuro da interface
    isMenuOpen: false, // estado do menu aberto ou fechado
    icon: "≡", // ícone do menu
    openDropdown: false, // estado do dropdown aberto ou fechado
  },

  // Getters
  getters: {
    darkMode: (state) => state.darkMode, // retorna o estado do modo escuro
    isMenuOpen: (state) => state.isMenuOpen, // retorna o estado do menu aberto
    icon: (state) => state.icon, // retorna o ícone do menu
    DropActive: (state) => state.openDropdown, // retorna o estado do dropdown aberto
  },

  // Mutations
  mutations: {
    // Troca o estado do modo escuro
    changeMode(state) {
      state.darkMode = !state.darkMode;
    },
    // Troca o estado do menu
    changeMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
      if (state.isMenuOpen) {
        state.icon = "✕"; // troca o ícone para "✕" quando o menu está aberto
      } else {
        state.icon = "≡"; // troca o ícone para "≡" quando o menu está fechado
      }
    },
    // Troca o estado do dropdown
    DropActive(state) {
      state.openDropdown = !state.openDropdown;
    },
  },

  // Actions
  actions: {
    // Chamada a mutação changeMode
    changeMode({ commit }) {
      commit("changeMode");
    },
    // Chamada a mutação changeMenu
    changeMenu({ commit }) {
      commit("changeMenu");
    },
    // Chamada a mutação DropActive
    DropActive({ commit }) {
      commit("DropActive");
    },
  },

  // Módulos
  modules: {},
});
