import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MatriculaView from "../views/MatriculaView.vue";
import UnidadesView from "../views/UnidadesView.vue";
import UnidadeMatriz from "../views/UnidadeMatriz.vue";
import UnidadeNova from "../views/UnidadeNova.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/Matricula",
    name: "Matricula",
    component: MatriculaView,
  },
  {
    path: "/Unidades",
    name: "Unidades",
    component: UnidadesView,
  },

  {
    path: "/UnidadeMatriz",
    name: "Matriz",
    component: UnidadeMatriz,
  },
  {
    path: "/UnidadeNova",
    name: "UnidadeNova",
    component: UnidadeNova,
  },
];

const router = createRouter({
  history: createWebHistory("/"), //// Troca para o caminho correto
  routes,
  scrollBehavior() {
    // Forçar a rolagem para o topo, tanto para o primeiro acesso quanto para o botão "voltar"
    return new Promise((resolve) => {
      setTimeout(() => {
        window.scrollTo(0, 0); // Garante a rolagem até o topo
        resolve({ top: 0 });
      }, 300); // Pequeno atraso para garantir que a rolagem ocorra após a transição de rota
    });
  },
});

export default router;
