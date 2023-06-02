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

