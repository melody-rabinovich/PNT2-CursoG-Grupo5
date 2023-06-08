<template>
  <Navegador/>
  <router-view></router-view>
  <Footer/>
</template>

<script>

import Navegador from './components/Navegador.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Navegador,
    Footer
  }
}
</script>

