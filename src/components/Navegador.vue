<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary fixed-top"
    data-bs-theme="dark"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" href="#" to="/" title="Ir al inicio">
        <img src="../icons/football.svg" alt="icono" class="icono" />
        CANCHAPP</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/Reservar"
              >Ver canchas</router-link
            >
          </li>
          <li class="nav-item" v-if="this.isAuthenticated">
            <router-link class="nav-link text-white" to="/MisReservas"
              >Mis reservas</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/SobreNosotros"
              >Contacto</router-link
            >
          </li>
        </ul>
        <button class="btn btn-success" @click="redirectToLogin" v-if="!this.isAuthenticated">Iniciar sesión</button>
        <button class="btn btn-outline-success ms-2" @click="redirectToRegister" v-if="!this.isAuthenticated">Registrarse</button>
        <button class="btn btn-secondary ms-2" @click="logout" v-if="this.isAuthenticated">Cerrar sesión</button>
      </div>
    </div>
  </nav>
</template>

<script>

import { useAuthStore } from '../stores/authStore.js';

export default {
  name: "NavBar",
  data() {
    return {
      token: null,
      isAuthenticated: false,
      isAdmin: false,
      rol: null,
    };
  },
  created() {
    const authStore = useAuthStore();
    if (authStore.isAuthenticated){
      this.token = authStore.token.slice(0, 10);
      this.isAuthenticated = authStore.isAuthenticated;
      this.isAdmin = authStore.isAdmin;
      this.rol = authStore.rol;
      console.log("Miren! Estoy logueado! Esta es una partecita de mi token: "+this.token)
    }
  },
  methods: {
    redirectToHome() {
    this.$router.push('/');
    },
    redirectToLogin() {
    this.$router.push('/Login');
    },
    redirectToRegister() {
      this.$router.push('/Register');
    },
    logout() {
      const authStore = useAuthStore();
      authStore.logout();
      window.location.reload();
      this.$router.push('/');
    },
  }
};
</script>

<style>
.icono {
  width: 35px;
  height: 35px;
}
.navbar-brand {
  font-family: Arial, Helvetica, sans-serif;
}

.nav-item:hover {
  background-color: #3b434a;
  border-radius: 3px;
}
</style>
