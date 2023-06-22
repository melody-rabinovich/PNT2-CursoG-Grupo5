<template>
  <div class="date-carousel">
    <button class="arrow-button" @click="previousWeek">&#8249;</button>
    <div
      v-for="(date, index) in dates"
      :key="index"
      class="box_date"
      :data-id="date.id"
      @click="createGrid(date)"
    >
      <span v-bind:class = "(date.enabled)?'':'disabled'" class="dia">{{ date.day.toUpperCase() }}</span>
      <span class="mes">{{ date.month.toUpperCase() }}</span>
      <span class="nro">{{ date.date }}</span>
    </div>
    <button class="arrow-button" @click="nextWeek">&#8250;</button>
  </div>
</template>

<script>
export default {
  name: "DateCarousel",
  data() {
    return {
      dates: [],
      currentWeek: new Date(), // Fecha actual
    };
  },
  mounted() {
    this.generateDates();
  },
  methods: {
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
createGrid(date) {
  console.log("Clicked date:", date);
  },
  },
};
</script>

<style>
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
</style>
