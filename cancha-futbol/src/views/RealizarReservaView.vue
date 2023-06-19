<template>
  <div>
    <Reserva />
  </div>
  <div>
    <DateCarousel />
  </div>
</template>

<script>
import DateCarousel from "@/components/DateCarousel.vue";
import Reserva from "@/components/Reserva.vue";

export default {
  name: "RealizarReservaView",
  components: {
    DateCarousel,
    Reserva,
  },
};
</script>
