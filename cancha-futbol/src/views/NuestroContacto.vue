
<template>
<template>
  <div class="contacto">
    <h1>Contacto</h1>
    <form>
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" v-model="mensaje"></textarea>
      </div>
      <button @click="enviarMensaje">Enviar</button>
    </form>
  </div>
</template>

    
</template>
      <script>
      
      </script>