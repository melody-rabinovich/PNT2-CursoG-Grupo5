import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory("./"),
  routes: [
    {
      path: "/",
      name: "home",
      component:  () => import("../views/HomeView.vue"),
    },
    {
      path: "/busqueda",
      name: "busqueda",
      component: () => import("../views/BusquedaView.vue"),
    }
  ],
});

export default router