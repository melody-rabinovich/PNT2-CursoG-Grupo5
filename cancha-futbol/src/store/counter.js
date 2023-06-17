import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      count: ref(0),
      userName: "",
      lista: [
        { id: 1, marca: "FORD", modelo: "MUSTANG" },
        { id: 2, marca: "CITROEN", modelo: "3CV" },
      ],
      listaUsers: [],
    };
  },
  actions: {
    borrar(id) {
      let index = this.lista.findIndex((auto) => auto.id == id);
      this.lista.splice(index, 1);
      console.log(this.lista);
    },
    agregar(auto) {
      this.lista.push({ ...auto });
      this.count++;
      console.log(this.count);
    },
    async fetchUsers() {
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.listaUsers = data.data;
        console.log(this.listaUsers);
        console.log("Bajamos la lista de usuarios" + this.listaUsers[0].name);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  getters: {
    getTablaUsuarios() {
      if (this.listaUsers.length <= 0) {
        this.fetchUsers();
        return this.listaUsers;
      } else {
        return this.listaUsers;
      }
    },
  },
});
