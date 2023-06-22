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
      path: "/Busqueda",
      name: "busqueda",
      component: () => import("../views/BusquedaView.vue"),
    },
    {
      path: "/Login",
      name: "Iniciá tu sesion",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/Register",
      name: "Registrarse",
      component: () => import("../views/RegisterView.vue"),
    }
  ],
});

export default router