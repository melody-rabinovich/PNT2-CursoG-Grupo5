<template>
  <!-- Navbar -->
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary fixed-top"
    data-bs-theme="dark"
  >
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Navbar brand-->
      <a class="navbar-brand" href="#">
        <img src="../icons/balls_1_footbal.svg" alt="icono" class="icono" />
        CANCHAPP</a
      >
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/SobreNosotros"
              >Contacto</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/busqueda"
              >Busqueda</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/CanchasView"
              >listaCanchas</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>

        <button class="btn btn-success">Log in</button>
        <button class="btn btn-outline-success ms-2">Sign in</button>

        <!--<form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>-->
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "BusquedaCanchas",
  data() {
    return {
      paginas: [
        {
          nombre: "Home",
          id: "1",
          url: "https://randomuser.me/api/portraits/thumb/women/9.jpg",
        },
        {
          nombre: "Contacto",
          id: "2",
          url: "https://randomuser.me/api/portraits/thumb/women/9.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.icono {
  width: 35px;
  height: 35px;
}
.navbar-brand {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
