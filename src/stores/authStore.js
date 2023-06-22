import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('authToken') || null,
    rol: localStorage.getItem('rol') || null,
  }),
  getters: {
    isAuthenticated: (state) => !(!state.token),
    isAdmin: (state) => (state.rol == "Usuario"),
  },
  actions: {
    setToken(token) {
      this.token = token;
      localStorage.setItem('authToken', token);
      console.log("guardé el token: "+token);
    },
    setRol(rol) {
      this.rol = rol;
      localStorage.setItem('rol', rol);
      console.log("guardé el rol: "+rol);
    },
    logout() {
      this.token = null;
      localStorage.removeItem('authToken');
      localStorage.removeItem('rol');
    },
  },
});