<template>
<div style="margin-top: 65px">
  <Navegador/>
  <div class="container">
    <h3 class="ui center header">Realice sus reservas</h3>
    <div class="date-carousel">
    <button class="arrow-button" @click="previousWeek">&#8249;</button>
    <div
      v-for="(date, index) in dates"
      :key="index"
      class="box_date"
      :data-id="date.id"
      @click="setFecha(date)"
    >
      <span v-bind:class = "(date.enabled)?'':'disabled'" class="dia">{{ date.day.toUpperCase() }}</span>
      <span class="mes">{{ date.month.toUpperCase() }}</span>
      <span class="nro">{{ date.date }}</span>
    </div>
    <button class="arrow-button" @click="nextWeek">&#8250;</button>
    </div>
    <table class="ui celled table custom-table">
      <thead>
        <tr>
          <th>Número</th>
          <th>Nombre</th>
          <th>Horarios disponibles para el {{ diaSeleccionado }} de {{ mesSeleccionado }}</th>
          <th>Tamaño</th>
          <th>Precio</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cancha, index) in canchas" :key="index">
          <td>{{ cancha.numero }}</td>
          <td>{{ cancha.nombre }}</td>
          <td>
            <table>
              <tr>
                <td
                  v-for="(horaDisponible, index2) in this.horariosDisponibles[index]"
                  :key="index2"
                >{{ horaDisponible }}
<!--                  <button
                    class="button"
                    :class="{ active: horaDisponible === cancha.horaSeleccionada }"
                    @click="seleccionarHora(horaDisponible, cancha)"
                    :disabled="!puedeReservar(cancha, horaDisponible)"
                  >
                    {{ horaDisponible }}
                  </button>-->
                </td>
              </tr>
            </table>
          </td>
          <td>{{ cancha.tamanio }}</td>
          <td>{{ cancha.precio }}</td>
          <td>
            <button
              class="button button-reserva"
              :disabled="!puedeReservar(cancha)"
            >
              <router-link
                :to="{
                  path: '/RealizarReserva',
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
          <th colspan="6">{{ canchas.length }} canchas</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>
</template>

<script>
import Navegador from '../components/Navegador.vue'
import canchaService from '../services/canchaService.js';

export default {
  name: "BusquedaCanchas",
  components: {
    Navegador,
  },
  data() {
    return {
      dates: [],
      currentWeek: new Date(), // Fecha actual
      canchas: this.getCanchas(),
      horariosDisponibles: [],
      horaSeleccionada: null,
      diaSeleccionado: null,
      mesSeleccionado: null,
    };
  },
  mounted() {
    this.generateDates();
    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      const months = [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
      ];
    const date = new Date(this.currentWeek);
    const day = daysOfWeek[date.getDay()];
    const month = months[date.getMonth()];
    const dateNumber = date.getDate();
    const id = `${date.getMonth() + 1}.${dateNumber}.${date.getFullYear()}`;

    const fechaInicializada = {
      day,
      month,
      date: dateNumber,
      id,
      enabled:date>=this.addDays(new Date(),-1)
    }

    this.setFecha(fechaInicializada);

  },
  methods: {
    async getCanchas() {
      try {
        const response = await canchaService.getCanchas();
        this.canchas = response.data; // Suponiendo que los datos se encuentran en la propiedad "data" de la respuesta
        console.log("Esta es la primera cancha. Se llama : "+this.canchas[0].nombre);
      } catch (error) {
        console.error("Error al cargar las canchas:", error);
      }
    },
    generateDates() {
      const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      const months = [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
      ];
      for (let i = 0; i < 7; i++) {
        const date = new Date(this.currentWeek); // Clonar la fecha actual
        date.setDate(date.getDate() + i);

        const day = daysOfWeek[date.getDay()];
        const month = months[date.getMonth()];
        const dateNumber = date.getDate();
        const id = `${date.getMonth() + 1}.${dateNumber}.${date.getFullYear()}`;

        this.dates.push({
          day,
          month,
          date: dateNumber,
          id,
          enabled:date>=this.addDays(new Date(),-1)
        });
      }
    },
    previousWeek() {
      this.currentWeek.setDate(this.currentWeek.getDate() - 7);
      this.updateDates();
    },
    nextWeek() {
      this.currentWeek.setDate(this.currentWeek.getDate() + 7);
      this.updateDates();
    },
    updateDates() {
      this.dates = []; // Reiniciar el arreglo de fechas
      this.generateDates(); // Generar las nuevas fechas
    },
    addDays(date, days) {
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    },
    async setFecha(date) {
      this.horariosDisponibles = [];
      this.mesSeleccionado = date.month;
      this.diaSeleccionado = date.date;
      console.log("Clicked date:", date);
      let mesConsulta = ((new Date(date.id)).getMonth())+1;
      let diaConsulta = ((new Date(date.id)).getDate());
      console.log("Clicked month:", mesConsulta);
      console.log("Clicked day:", diaConsulta);
      for(let i = 0; i < this.canchas.length; i++){
        this.horariosDisponibles.push((await canchaService.getDisponibilidadPorDia(this.canchas[i].numero, mesConsulta, diaConsulta)).data.response);
      }
      console.log(this.horariosDisponibles[0])
      console.log(this.horariosDisponibles[1])
      console.log(this.horariosDisponibles.length)
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

.disabled {
  opacity: 0.6;
  pointer-events: none;
  cursor: not-allowed;
}

.dia {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #87b04e;
  box-sizing: border-box;
  flex-grow: 1; /* Ocupa todo el espacio disponible dentro de la caja */
}

.nro {
  font-family: "Trebuchet MS", sans-serif;
  font-size: larger;
}

.date-carousel {
  margin-top: 1rem;
  margin-left: 10rem;
  margin-right: 10rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
}

.box_date {
  width: 100px;
  height: 75px;
  margin-right: 10px;
  text-align: center;
  border: 1px solid;
  border-radius: 3px;
  background-color: #ffffff;
  display: flex; /* Utiliza flexbox para alinear el contenido */
  flex-direction: column; /* Alinear el contenido en columnas */
  justify-content: center; /* Centrar verticalmente el contenido */
}

.box_date:hover {
  cursor: pointer;
}

.arrow-button {
  margin-right: 10px;
  border: 1px;
  border-radius: 2px;
}
.date-table{
  background-color: aliceblue;
  width: 80%;
  margin: auto;
}
td,th{
  border-color: rgb(0, 0, 0);
    border-style: solid;
    border-width: 1px;
    padding: 6px;
}
td{
  height: 70px;
}


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
