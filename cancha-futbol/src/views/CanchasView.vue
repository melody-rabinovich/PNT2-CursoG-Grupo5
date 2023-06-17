<template>
  <div>
    <h1>Esta es la vista de las canchas</h1>
    import ListaDeCanchas from '@/components/listaDeCanchas.vue';
    <listaDeCanchas />
  </div>
</template>

<script>
import listaDeCanchas from "@/components/listaDeCanchas.vue";

export default {
  name: "CanchasView",
  components: {
    listaDeCanchas,
  },
};
</script>

<style>
/* Estilos adicionales para la vista si es necesario */
</style>
