
  <template>
<div>
    <h1>Hola soi el jom</h1>
    <SlideShow/>
</div>

  </template>
  <script>
import SlideShow from '../components/SlideShow.vue'
    export default {
      name: 'HomeView',
      components: {
        SlideShow
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