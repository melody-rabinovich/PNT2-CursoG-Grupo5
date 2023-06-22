<template>
<div>
  <Navegador/>
  <div style="margin-top: 60px">
    <div class="ui container">
    <h1>Busqueda de canchas</h1>

      <input v-model="filterBy" placeholder="Filter By Last Name">
      <table class="ui celled table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th @click="sortBy = 'nombreCancha'">Cancha</th>
            <th @click="sortBy = 'horariosDisponibles'">horariosDisponibles</th>
            <th @click="sortBy = 'capacidad'">capacidad</th>
            <th @click="sortBy = 'precio'">precio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cancha, index) in sortedCanchas" :key="index">
            <td>
              <img :src="cancha.photoUrl" class="ui mini rounded image" />
            </td>
            <td>{{ cancha.nombreCancha }}</td>
            <td>{{ cancha.horariosDisponibles }}</td>
            <td>{{ cancha.capacidad }}</td>
            <td>{{ cancha.precio }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colspan="6">{{sortedCanchas.length}} canchas</th>
          </tr>
        </tfoot>
      </table>
      <p>Esa fue una bonita tabla hardcodeada, pero mira esta:</p>
      <table class="ui celled table text-center">
        <thead>
          <tr>
            <th class="w-5" @click="sortBy = 'numero'">Número</th>
            <th class="w-5" @click="sortBy = 'nombre'">Cancha</th>
            <th @click="sortBy = 'capacidad'">Capacidad</th>
            <th @click="sortBy = 'precio'">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cancha, index) in canchasBackend" :key="index">
            <td class="w-5">{{ cancha.numero }}</td>
            <td class="w-5">{{ cancha.nombre }}</td>
            <td>{{ cancha.tamanio }}</td>
            <td>{{ cancha.precio }}</td>
            <button class="btn btn-outline-success me-2" @click="redirectToDatos(cancha.numero)">Ver datos</button>
            <button class="btn btn-outline-success me-2" @click="redirectToReservas(cancha.numero)">Ver reservas</button>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colspan="6">{{canchasBackend.length}} canchas</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</div>
</template>
  
<script>
import Navegador from '../components/Navegador.vue'
import canchaService from '../services/canchaService.js';

export default {
  name: 'BusquedaCanchas',
  components: {
        Navegador,
  },
  data() {
    return {
      canchas: [
        {
          "nombreCancha": "Messi",
          "id": "1",
          "photoUrl": "https://randomuser.me/api/portraits/thumb/women/9.jpg",
          "horariosDisponibles": [12,22,10],
          "capacidad": 7,
          "precio": 3000
        },
        {
          "nombreCancha": "Canchita",
          "id": "2",
          "photoUrl": "https://randomuser.me/api/portraits/thumb/women/79.jpg",
          "horariosDisponibles":[1,2,4],
          "capacidad": 5,
          "precio": 5000
        }
      ],
      canchasBackend: this.getCanchasBackend(),
      sortBy: "horariosDisponibles",
      filterBy: ""
    }
  },
  methods: {
    arraySorter(a,b){
      return a.length-b.length;
    },
    numberSorter(a,b){
      return a-b;
    },
    stringSorter(a,b){
      return a.localeCompare(b)
    },
    sortByType(columnName){
      const sortingDictionary = {
        nombreCancha:this.stringSorter,
        horariosDisponibles:this.arraySorter,
        capacidad:this.numberSorter,
        precio:this.numberSorter
      }
      console.log(sortingDictionary[columnName]??(()=>1))
      return sortingDictionary[columnName]??(()=>1)
    },
    async getCanchasBackend() {
      try {
        const response = await canchaService.getCanchas();
        this.canchasBackend = response.data; // Suponiendo que los datos se encuentran en la propiedad "data" de la respuesta
        console.log("Esta es la primera cancha. Se llama : "+this.canchasBackend[0].nombre);
      } catch (error) {
        console.error("Error al cargar las canchas:", error);
      }
    },
    async redirectToDatos(id) {
    try {
        const response = await canchaService.getCanchaById(id);
        this.canchaBackend = response.data;
        console.log(this.canchaBackend.nombre);
      } catch (error) {
        console.error("Error al cargar la cancha:", error);
      }
    },
    async redirectToReservas(id) {
    try {
        const response = await canchaService.getMisReservas(id);
        this.reservas = response.data.response;
        console.log(this.reservas[0]);
      } catch (error) {
        console.error("Error al cargar la cancha:", error);
      }
    },
  },
  computed: {
    sortedCanchas() {
      return this.canchas.map(l=>l).filter(
        employee => employee.nombreCancha.includes(this.filterBy)
      ).sort(
        (a, b) => {let sortFunction = this.sortByType([this.sortBy]);console.log("sortedBy:",this.sortBy);return sortFunction(a[this.sortBy],b[this.sortBy])}
      );
    }
  }
}
</script>

<!--   
  <style scoped>
    h1.ui.center.header {
      margin-top: 3em;
    }
  
    .ui.table th:not(:first-child):hover {
      cursor: pointer;
    }
  
    input {
      padding: 3px;
    }
  </style> -->