<template>
<div>
  <Navegador/>
  <div style="margin-top: 50px" class="register">
    <h1 class="title">Registrarse</h1>
    <form action class="form" @submit.prevent="register">
      <label class="form-label" for="#miNombre">Nombre completo:</label>
      <input
        v-model="miNombre"
        class="form-input"
        type="text"
        id="miNombre"
        required
        placeholder="Nombre completo"
      />
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
        {{ this.error }}
      </p>
      <input class="form-submit" type="submit" value="Registrarse" />
    </form>
  </div>
</div>
</template>

<script>
import Navegador from '../components/Navegador.vue'
import usuarioService from '../services/usuarioService.js';

export default {
  name: 'RegisterView',
  components: {
    Navegador
  },
  data: () => ({
    miNombre: "",
    miMail: "",
    miPass: "",
    error: "",
  }),
  methods: {
    async register() {
      const credentials = {
        nombre: this.miNombre,
        mail: this.miMail,
        password: this.miPass
      };
      console.log(credentials);
      usuarioService.register(credentials)
      .then(() => {
        this.$router.push('/login');
      })
      .catch((error) => {
        this.error = error.response.data.error;
        console.log('error:', error.response);
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.register {
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
</style>