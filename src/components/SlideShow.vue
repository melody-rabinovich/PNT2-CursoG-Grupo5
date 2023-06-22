<template>
  <div class="col-lg-12 carousel shadow-lg rounded">
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button
          v-for="(pagina, index) in paginas"
          :key="index"
          type="button"
          :data-bs-target="'#carouselExampleCaptions'"
          :data-bs-slide-to="index"
          :class="{ active: index === activeIndex }"
          :aria-label="`Slide ${index + 1}`"
        ></button>
      </div>

      <div class="carousel-inner">
        <div
          v-for="(pagina, index) in paginas"
          :key="index"
          class="carousel-item"
          :class="{ active: index === activeIndex }"
        >
          <img :src="pagina.url" class="d-block w-100 carousel_img" :alt="pagina.nombre" />
          <div class="carousel-caption d-none d-md-block my-custom-border">
            <h5>{{ pagina.nombre }}</h5>
            <p>{{ pagina.descripcion }}</p>
          </div>
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
        @click="previousSlide"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
        @click="nextSlide"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideShow",
  data() {
    return {
      paginas: [
        {
          nombre: "Cancha Futbol 5",
          descripcion: "Some representative placeholder content for the first slide.",
          url:
            "https://clubforeverlaplata.files.wordpress.com/2016/04/71ffc-inaguracionforeverfutbol5030.jpg?w=775&zoom=2",
        },
        {
          nombre: "Cancha Futbol 8",
          descripcion: "Some representative placeholder content for the second slide.",
          url:
            "https://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_foto014.jpg",
        },
        {
          nombre: "Cancha Futbol 11",
          descripcion: "Some representative placeholder content for the third slide.",
          url:
            "https://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_power-6-canchas-de-futbol.jpg",
        },
      ],
      activeIndex: 0,
    };
  },
  methods: {
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.paginas.length;
    },
    previousSlide() {
      this.activeIndex = (this.activeIndex - 1 + this.paginas.length) % this.paginas.length;
    },
  },
};
</script>

<style>
.carousel {
  margin: 0;
  margin-bottom: 2rem;
  padding: 0;
}

.carousel_img {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 40rem;
}

.my-custom-border {
  background-color: rgba(245, 245, 220, 0.262);
  color: rgb(0, 0, 0);
}
</style>
