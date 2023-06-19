<template>
  <Navegador/>
  <router-view></router-view>
</template>

<script>

import Navegador from './components/Navegador.vue'


export default {
  name: 'App',
  components: {
    Navegador
  }
}
</script>

<style>
body {
  background-color: #3780bc; /* Cambia el color de fondo aquí */
}
</style>