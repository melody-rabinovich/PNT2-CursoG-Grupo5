<template>
<div style="margin-top: 65px">
  <Navegador/>
  <div class="container">
    <h3 class="ui center header">Reservas de la cancha número {{ idCancha }}</h3>
    <table class="ui celled table custom-table">
      <thead>
        <tr>
          <th>Mes</th>
          <th>Día</th>
          <th>Hora</th>
          <th>ID del titular</th>
          <th>Estado</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(reserva, index) in reservas" :key="index">
          <td>{{ reserva.mes+1 }}</td>
          <td>{{ reserva.dia+1 }}</td>
          <td>{{ reserva.hora }}:00</td>
          <td>{{ reserva.idUsuario }}</td>
          <td>{{ reserva.estado }}</td>
          <td>
            <div v-if="reserva.estado == 'Cancelada'">
              <div class="cancelada">
                <button class="button cancelada" disabled>
                  Cancelada
                </button>
              </div>
            </div>
            <div v-else-if="reserva.estado == 'Activa'">
              <div class="activa">
                <button class="activa" @click="cancelarReserva(reserva._id)">
                  Cancelar
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="6">{{ reservas.length }} reservas</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>
</template>

<script>
import Navegador from '../components/Navegador.vue'
import usuarioService from '../services/usuarioService.js';
import canchaService from '../services/canchaService.js';
import { useAuthStore } from '../stores/authStore.js';

export default {
  name: "ReservasCancha",
  components: {
    Navegador,
  },
  data() {
    return {
      idCancha: this.$route.params.idCancha,
      reservas: this.getMisReservas(),
    };
  },
  methods: {
    async getMisReservas() {
      try {
        const response = await canchaService.getMisReservas(this.$route.params.idCancha);
        console.log(response);
        this.reservas = response.data.response;
        console.log("Esta es la primera reserva. Mes: "+this.reservas[0].mes);
      } catch (error) {
        console.error("Error al cargar las canchas:", error);
      }
    },
    async cancelarReserva(idReserva) {
      const authStore = useAuthStore();
      try{
        console.log(authStore._id);
        console.log(idReserva);
        const response = await usuarioService.cancelarReserva(authStore._id, idReserva);
        console.log(response);
//        console.log("Resultado: "+response.data.mensaje);
        window.location.reload();
      } catch (error) {
        console.log("Se produjo un error: ", error);
      }
    },
  },
  computed: {
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

.button.cancelada:hover {
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
/*  position: fixed;*/
  top: 50%;
  left: 50%;
/*  transform: translate(-50%, -50%);*/
  background-color: #66a6da;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
}

.filter-container {
  margin-bottom: 10px;
}

.cancelada {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.button-selected {
  background-color: #3f51b5;
  color: #fff;
  transform: scale(2);
}
</style>
