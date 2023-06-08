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
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactoView.vue"),
    }
  ],
});

export default router