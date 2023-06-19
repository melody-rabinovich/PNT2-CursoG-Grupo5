<template>
  <div class="container">
    <h1 class="ui center header">Busqueda de canchas</h1>
    <div class="filter-container">
      <input v-model="filterBy" placeholder="Filter By Last Name" />
    </div>
    <div>
      <date-carousel />
    </div>
    <table class="ui celled table custom-table">
      <thead>
        <tr>
          <th>Avatar</th>
          <th @click="sortBy = 'nombreCancha'">Cancha</th>
          <th @click="sortBy = 'horariosDisponibles'">HorariosDisponibles</th>
          <th @click="sortBy = 'capacidad'">Capacidad</th>
          <th @click="sortBy = 'precio'">Precio</th>
          <th>Realizar Reserva</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cancha, index) in sortedCanchas" :key="index">
          <td>
            <img :src="cancha.photoUrl" class="ui mini rounded image" />
          </td>
          <td>{{ cancha.nombreCancha }}</td>
          <td>
            <table>
              <tr>
                <td
                  v-for="horaDisponible in cancha.horariosDisponibles"
                  :key="horaDisponible"
                >
                  <button
                    class="button"
                    :class="{ active: horaDisponible === cancha.horaSeleccionada }"
                    @click="seleccionarHora(horaDisponible, cancha)"
                    :disabled="!puedeReservar(cancha, horaDisponible)"
                  >
                    {{ horaDisponible }}
                  </button>
                </td>
              </tr>
            </table>
          </td>
          <td>{{ cancha.capacidad }}</td>
          <td>{{ cancha.precio }}</td>
          <td>
            <button
              class="button button-reserva"
              :disabled="!puedeReservar(cancha)"
            >
              <router-link
                :to="{
                  path: '/realizar-reserva',
                  query: reservaSeleccionada,
                }"
              >
                RESERVAR
              </router-link>
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="6">{{ sortedCanchas.length }} canchas</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import DateCarousel from '@/components/DateCarousel.vue';

export default {
  name: "BusquedaCanchas",
  components:{
    DateCarousel,
},
    data() {
    return {
      canchas: [
        {
          nombreCancha: "Messi",
          id: "1",
          photoUrl: "https://randomuser.me/api/portraits/thumb/women/9.jpg",
          horariosDisponibles: ["12:00", "17:40", "22:00"],
          capacidad: 8,
          precio: '$3000',
          horaSeleccionada: null,
        },
        {
          nombreCancha: "Canchita",
          id: "2",
          photoUrl: "https://randomuser.me/api/portraits/thumb/women/79.jpg",
          horariosDisponibles: ["13:00", "14:00", "16:30"],
          capacidad: 5,
          precio: '$5000',
          horaSeleccionada: null,
        },
        {
          nombreCancha: "All Boys",
          id: "3",
          photoUrl: "https://randomuser.me/api/portraits/thumb/women/80.jpg",
          horariosDisponibles: ["15:20", "18:00", "20:20"],
          capacidad: 11,
          precio: '$10000',
          horaSeleccionada: null,
        },
      ],
      sortBy: "horariosDisponibles",
      filterBy: "",
      horaSeleccionada: null,
    };
  },
  methods: {
    arraySorter(a, b) {
      return a.length - b.length;
    },
    numberSorter(a, b) {
      return a - b;
    },
    stringSorter(a, b) {
      return a.localeCompare(b);
    },
    sortByType(columnName) {
      const sortingDictionary = {
        nombreCancha: this.stringSorter,
        horariosDisponibles: this.arraySorter,
        capacidad: this.numberSorter,
        precio: this.numberSorter,
      };
      return sortingDictionary[columnName] ?? (() => 1);
    },
    seleccionarHora(hora, cancha) {
      this.horaSeleccionada = hora;
      cancha.horaSeleccionada = hora;
      this.reservaSeleccionada = {
        cancha: cancha.nombreCancha,
        hora: hora,
        precio: cancha.precio,
      };
    },
    puedeReservar(cancha, hora) {
      return cancha.horaSeleccionada === hora;
    },
  },
  computed: {
    sortedCanchas() {
      return this.canchas
        .map((cancha) => ({ ...cancha }))
        .filter((cancha) => cancha.nombreCancha.includes(this.filterBy))
        .sort((a, b) => {
          let sortFunction = this.sortByType([this.sortBy]);
          return sortFunction(a[this.sortBy], b[this.sortBy]);
        });
    },
    reservaSeleccionada() {
      const canchaSeleccionada = this.canchas.find(
        (cancha) => cancha.horaSeleccionada !== null
      );
      if (canchaSeleccionada) {
        return {
          cancha: canchaSeleccionada.nombreCancha,
          hora: canchaSeleccionada.horaSeleccionada,
          precio: canchaSeleccionada.precio,
        };
      } else {
        return {};
      }
    },
  },
};
</script>

<style scoped>
.ui.container h1 {
  margin-top: 1rem;
}

h1.ui.center.header {
  margin-top: 0rem;
}

.ui.table th:not(:first-child :last-child):hover {
  cursor: pointer;
}

input {
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding: 3px;
  background-color: #a9cfee;
  border-color: #012961;
  border-radius: 5px;
}

.button-reserva,
.button-reserva:hover,
.button-reserva:focus,
.button-reserva:active,
.button-reserva a,
.button-reserva a:hover,
.button-reserva a:focus,
.button-reserva a:active {
  color: black; /* Cambia el color del texto a negro */
  text-decoration: none; /* Elimina el subrayado del texto */
}

.button {
  color: #bdbdbd;
  size: 3rem 5rem 3rem 5rem;
}

.button.button-reserva:hover {
  background-color: #e0c574;
  transform: scale(1.15);
}

.button.active {
  background-color: #3f51b5;
  color: #fff;
}

.button:hover {
  background-color: #3f51b5;
  transform: scale(1.15);
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.custom-table th {
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
  font-weight: bold;
}

.custom-table td {
  padding: 10px;
  border-bottom: 1px solid #205c8c;
}

.custom-table td img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
}

.custom-table button {
  padding: 5px 10px;
  border-radius: 3px;
  background-color: #e0e0e0;
  color: #333;
  border: none;
}

.custom-table button.active {
  background-color: #3f51b5;
  color: #fff;
}

.custom-table button:hover {
  background-color: #3780bc;
  transform: scale(1.1);
}

.container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #66a6da;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
}

.filter-container {
  margin-bottom: 10px;
}
</style>
