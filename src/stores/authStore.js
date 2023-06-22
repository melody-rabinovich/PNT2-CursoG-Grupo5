import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('authToken') || null,
    rol: localStorage.getItem('rol') || null,
    _id: localStorage.getItem('_id') || null,
  }),
  getters: {
    isAuthenticated: (state) => !(!state.token),
    isAdmin: (state) => (state.rol == "Admin"),
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
    setId(_id) {
      this._id = _id;
      localStorage.setItem('_id', _id);
      console.log("guardé el id: "+_id);
    },
    logout() {
      this.token = null;
      localStorage.removeItem('authToken');
      localStorage.removeItem('rol');
      localStorage.removeItem('_id');
    },
  },
});