import { ref, computed } from "vue";
import { createStore } from "vuex";
import axios from "axios";
import userService from "../services/userService";

export default createStore({
  state: {
    token: null
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    }
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
        const usuarioLog = await res.json()
        console.log(usuarioLog.data.token)
        commit('setToken', usuarioLog.data.token)
        localStorage.setItem('token', usuarioLog.data.token)
      } catch (error) {
        console.log('error: ', error)
      }
    },
    obtenerToken({ commit }) {
      if (localStorage.getItem('token')) {
        commit('setToken', localStorage.getItem('token'))
      } else {
        commit('setToken', null)
      }
    }
  }
})
