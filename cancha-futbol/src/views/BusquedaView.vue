<template>
    <div class="ui container">
    <h1>Busqueda de canchas</h1>
    <BusquedaCanchas/>
    </div>
  </template>
  
  <script>
import BusquedaCanchas from '../components/BusquedaCanchas.vue';
    export default {
      name: 'BusquedaView',
      components :{
        BusquedaCanchas,
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
        sortedCanchas() {
            

          return this.canchas.map(l=>l).filter(
            employee => employee.nombreCancha.includes(this.filterBy)
          ).sort(
            (a, b) => {let sortFunction = this.sortByType([this.sortBy]);console.log("this.sortBy]",this.sortBy);return sortFunction(a[this.sortBy],b[this.sortBy])}
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