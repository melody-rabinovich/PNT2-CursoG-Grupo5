
  <template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Página principal</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/busqueda" class="nav-link">Busqueda</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Opción
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item">Opción 1</a></li>
            <li><a class="dropdown-item">Opción 2</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
        <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contacto</router-link>
        </li>
        <li class="nav-item" v-if="!userLogged">
            <router-link to="/login" class="nav-link">Iniciar sesión</router-link>
        </li>
        <li class="nav-item" v-if="!userLogged">
            <router-link to="/register" class="nav-link">Registrarse</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/" class="nav-link" @click="logOut">Cerrar sesión</router-link>
        </li>
        <li class="nav-item" v-if="userLogged">
            <router-link to="/" class="nav-link">Usuario: {{userLogged}}</router-link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
  </nav>
  </template>
  <script>
    import auth from "../logic/auth";
    export default {
      name: 'NavegadorComp',
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
      computed:{
        userLogged() {
          return auth.getUserLogged();
        },
        logOut() {
          return auth.deleteUserLogged();
        },
      }
    }
  </script>