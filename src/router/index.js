import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory("./"),
  routes: [
    {
      path: "/",
      name: "Index",
      component:  () => import("../views/HomeView.vue"),
    },
    {
      path: "/Home",
      name: "Home",
      component:  () => import("../views/HomeView.vue"),
    },
    {
      path: "/Reservar",
      name: "Reservar",
      component: () => import("../views/ReservarView.vue"),
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
    },
    {
      path: "/MisReservas",
      name: "Mis reservas",
      component: () => import("../views/MisReservasView.vue"),
    },
    {
      path: "/Reservas/:idCancha",
      name: "ReservasCancha",
      component: () => import("../views/ReservasCanchaView.vue"),
    },
  ],
});

export default router