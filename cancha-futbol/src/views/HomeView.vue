
<template>
<div>
  <Navegador/>
  <div style="margin-top: 60px">
  <SlideShow/>
  </div>
  <PasosUso/>
</div>
</template>

<script>
import Navegador from '../components/Navegador.vue'
import SlideShow from '../components/SlideShow.vue';
import PasosUso from '../components/PasosUso.vue';

export default {
  name: 'HomeView',
  components: {
    SlideShow,
    Navegador,
    PasosUso
  },
  data() {
    return {
      paginas: [
        {
          "nombre": "Home",
          "id": "1",
          "url": "https://randomuser.me/api/portraits/thumb/women/9.jpg"
        },
        {
          "nombre": "Contacto",
          "id": "2",
          "url": "https://randomuser.me/api/portraits/thumb/women/9.jpg"
        }
      ]
    }
  }      
}
</script>
