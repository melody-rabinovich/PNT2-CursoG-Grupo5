<template>
<div>
  <Navegador/>
  <div style="margin-top: 50px" class="login">
    <h1 class="title">Iniciar sesión</h1>
    <form action class="form" @submit.prevent="login">
      <label class="form-label" for="#miMail">Correo electrónico:</label>
      <input
        v-model="miMail"
        class="form-input"
        type="email"
        id="miMail"
        required
        placeholder="Correo electrónico"
      />
      <label class="form-label" for="#miPass">Contraseña:</label>
      <input
        v-model="miPass"
        class="form-input"
        type="password"
        id="miPass"
        required
        placeholder="Contraseña"
      />
      <p v-if="error" class="error">
        Has introducido mal el email o la contraseña.
      </p>
      <input class="form-submit" type="submit" value="Iniciar sesión" />
    </form>
    <p class="msg">
      ¿No tienes cuenta?
      <router-link to="/Register">Registrate</router-link>
    </p>
  </div>
</div>
</template>

<script>
import Navegador from '../components/Navegador.vue'
import usuarioService from '../services/usuarioService.js';
import { useAuthStore } from '../stores/authStore.js';
const authStore = useAuthStore();

export default {
  name: 'LoginView',
  components: {
    Navegador
  },
  data: () => ({
    miMail: "",
    miPass: "",
    error: false,
  }),
  methods: {
    async login() {
      const credentials = {
        mail: this.miMail,
        password: this.miPass
      };
      console.log(credentials);
      usuarioService.login(credentials)
      .then((response) => {
//        const authStore = useAuthStore();
        console.log("1 autenticado? "+authStore.isAuthenticated);
        console.log("recibo el token: "+response.data.token);
//        localStorage.setItem('Authorization', response.data.token);
//        setAuthHeader(response.data.token);
        console.log("2 autenticado? "+authStore.isAuthenticated);
        authStore.setToken(response.data.token);
        console.log("3 token guardado "+authStore.token);
        authStore.setRol(response.data.usuario.rol);
        console.log("4 rol guardado "+authStore.rol);
        authStore.setId(response.data.usuario._id);
        console.log("5 id guardado "+authStore._id);
        this.$router.push('/');
      })
      .catch((error) => console.log('error:', error.response))
    }
  },
};
</script>

<style lang="scss" scoped>
.login {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
.msg {
  margin-top: 3rem;
  text-align: center;
}
</style>