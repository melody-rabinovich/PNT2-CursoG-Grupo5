<template>
  <div>
        <div class="col-lg-12 carousel shadow-lg rounded">
          <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Cancha_sintetica.jpg/800px-Cancha_sintetica.jpg" class="d-block w-100 carousel_img" alt="una cancha">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Cancha Futbol 5</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>

              <div class="carousel-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM3RtSff5pMvt5n1h-3eiqTMiM8QHwhFY5s55TTzVbMv9CE5zGI3WHpI1zcg_2Qm92AkE&usqp=CAU" class="d-block w-100 carousel_img" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Cancha Futbol 11</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPO6-XlsrYzHJ_A9oYtmyyaovwyjWBEPxBtSsYFeZTHqJmwezRLLK7KABC76eL16vwifA&usqp=CAU" class="d-block w-100 carousel_img" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Cancha Futbol 11</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
</div>
</template>

<script>

    export default {
      name: 'SlideShow',
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
      methods: {
        nextSlideShow(){
          
        }
      },
      
    }
  </script>

  <style>
    .carousel{
      margin: 0;
      margin-bottom:2rem;
      padding:0;
    }

    .carousel_img{
      margin: 0;
      padding: 0;
      width:100%;
      height: 40rem;
    }
  </style>