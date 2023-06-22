<template>
  <div class="container">
    <ReservaConfirmar />

    <DateCarousel />
  </div>
</template>

<script>
import DateCarousel from "@/components/DateCarousel.vue";
import ReservaConfirmar from "@/components/ReservaConfirmar.vue";

export default {
  name: "RealizarReservaView",
  components: {
    DateCarousel,
    ReservaConfirmar,
  },
};
</script>
