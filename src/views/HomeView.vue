<template>
  <div style="margin-top: 60px">
    <Navegador/>
    <SlideShow />
    <PasosUso />
  </div>
  <div>
    <button class="button button-reserva">
      <router-link
        :to="{
          path: '/realizar-reserva',
          query: reservaSeleccionada,
        }"
      >
        REALIZAR RESERVA
      </router-link>
    </button>
  </div>
</template>
<script>
import Navegador from '../components/Navegador.vue'
import SlideShow from "../components/SlideShow.vue";
import PasosUso from "../components/PasosUso.vue";

export default {
  name: "HomeView",
  components: {
    Navegador,
    SlideShow,
    PasosUso,
},
  data() {
    return {

    };
  },
};
</script>

<style>
.button {
  text-align: center;
  display: block;
  margin: 2rem;
  margin-left: auto;
  margin-right: auto;
  background-color: azure;
  border: 0px;
  border-radius: 2px;
}

.button:hover {
  transform: scale(1.01);
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
</style>
