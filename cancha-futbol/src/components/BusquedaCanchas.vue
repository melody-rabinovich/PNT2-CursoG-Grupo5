

<template>
    <div>
    <!-- <h1>Busqueda de canchas</h1>

      <input v-model="filterBy" placeholder="Filter By Last Name">
      <table class="ui celled table"> -->
        <!-- <thead>
          <tr>
            <th>Avatar</th>
            <th @click="sortBy = 'nombreCancha'">Cancha</th>
            <th @click="sortBy = 'horariosDisponibles'">horariosDisponibles</th>
            <th @click="sortBy = 'capacidad'">capacidad</th>
            <th @click="sortBy = 'precio'">precio</th>
          </tr>
        </thead> -->
        <!-- <tbody> -->
          <div v-for="(cancha, index) in canchas" :key="index">
            <h3>{{ cancha.nombreCancha }}</h3>
            <div>
              <!-- <div class="cancha-image-container">
                <img :src="cancha.photoUrl" class="cancha-image" />
                
              </div> -->
              <!-- <h3>{{cancha.nombre}}</h3> -->
              <DateCarousel :cancha="cancha"/>
            </div>
            
            <!-- <td>
              
            </td>
            <td></td>
            <td>{{ cancha.horariosDisponibles }}</td>
            <td>{{ cancha.capacidad }}</td>
            <td>{{ cancha.precio }}</td> -->
          </div>
        <!-- </tbody> -->
        <!-- <tfoot>
          <tr>
            <th colspan="6">{{sortedCanchas.length}} canchas</th>
          </tr>
        </tfoot>
      </table> -->
    </div>
  </template>
  
  <script>
import DateCarousel from './DateCarrousel.vue';
import axios from "axios"
    export default {
      name: 'BusquedaCanchas',
      components: {
            DateCarousel
        },
      data() {
        return {
          canchas: [],
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
            }
        },
      computed: {
        // sortedCanchas() {
            

        //   return this.canchas.map(l=>l).filter(
        //     employee => employee.nombreCancha.includes(this.filterBy)
        //   ).sort(
        //     (a, b) => {let sortFunction = this.sortByType([this.sortBy]);console.log("this.sortBy]",this.sortBy);return sortFunction(a[this.sortBy],b[this.sortBy])}
        //   );
        
        // }
      },
      mounted() {
        const axiosClient = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Accept': 'application/json',
        'Authorization': "",
        'Content-Type': 'application/json'
        // configurar el token y pasarle user.token
    }})
    axiosClient.get('/canchas/')
      .then(response => {
        console.log(response)
        this.canchas = response.data;
      })
      .catch(error => {
        console.error("error axios",error);
      });
  }
      
    }
  </script>
  
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
    .cancha-image-container{
      width: 100px;
      height: 100px;
      float: left;
    }
    .cancha-image{
      width: 100%;
      height: 100%;
    }
  </style>