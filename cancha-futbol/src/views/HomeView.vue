
<template>
  <div>
    <h1>Hola soi el jom</h1>
    <p v-if="userLogged">User loggued: {{userLogged}}</p>
    <SlideShow/>
  </div>
</template>

<script>
  import auth from "../logic/auth";
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
    },
    computed: {
      userLogged() {
        return auth.getUserLogged();
      },
    }
  }
</script>