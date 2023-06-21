import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import userService from "../services/userService";

export const useCounterStore = defineStore("counter", {
  state: () => {
    token = null;
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const res = await fetch('http://localhost:3000/usuarios/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        })
/*
        const res2 = await apiClient.post("http://localhost:3000/usuarios/login", payload)
        .then(response => {
            console.log(response);
        }).catch(e => console.log('error:', e.response.data.error, e))
*/
        const usuarioLog = await res.json()
        console.log(usuarioLog.data.token)
        commit('setToken', usuarioLog.data.token)
        localStorage.setItem('token', usuarioLog.data.token)
      } catch (error) {
        console.log('error: ', error)
      }
    },
    async obtenerToken({ commit }) {
      if (localStorage.getItem('token')) {
        commit('setToken', localStorage.getItem('token'))
      } else {
        commit('setToken', null)
      }
    },
    async setToken(state, payload) {
      state.token = payload
    }
  }
})