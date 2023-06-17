<template>
  <div>
    <h1>Acá mostramos todas las canchas</h1>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Capacidad</th>
            <th scope="col">Precio por hora</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cancha in canchas" :key="cancha._id">
            <td>{{ cancha._id }}</td>
            <td>{{ cancha.nombre }}</td>
            <td>{{ cancha.capacidad }}</td>
            <td>{{ cancha.precio }}</td>
            <td>
              <button type="button" class="btn-ver-mas">Ver más</button>
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
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  name: "CanchasList",
  setup() {
    const canchas = ref([]);

    onMounted(() => {
      axios
        .get("http://localhost:3000/canchas") // Ajusta la URL de acuerdo a tu configuración
        .then((response) => {
          canchas.value = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    });

    return {
      canchas,
    };
  },
};
</script>

<style>
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.table th {
  background-color: #f2f2f2;
}

/* Estilos para el botón "Ver más" */
.btn-ver-mas {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-ver-mas:hover {
  background-color: #45a049;
}
</style>
