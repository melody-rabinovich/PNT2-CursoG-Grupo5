<template>
<div>
<h1 class="text-center"> Reservá tu cancha en 4 pasos </h1>

<div class="container div_pasos">
  <div class="row">
    <div class="col-md-6">
        <!-- estaría bueno que lleve al buscador -->
        <div class="left-div pasoItemIzquierda pasos_item">
            <h3>1. Buscá tu cancha más cercana </h3>
            <p>Encontrá de manera rápida y sencilla las canchas disponibles más cercanas a tu ubicación. 
                Utilizá nuestro buscador para encontrar la cancha perfecta para tu partido.</p>
        </div>
    </div>
    <div class="col-md-6">
      <div class="right-div pasoItemDerecha pasos_item">
        <h3>2. Consultá los horarios disponibles</h3>
        <p>Revisá los horarios disponibles para cada cancha y elegí aquellos que se ajusten mejor a tus 
            necesidades. Obtené información actualizada sobre la disponibilidad de las canchas y asegurate 
            de reservar en el momento ideal.</p>
      </div>
    </div>

    <div class="col-md-6">
        <div class="left-div pasoItemIzquierda pasos_item">
            <h3>3. Seleccioná horario y fecha deseada</h3>
            <p>Elegí el horario y la fecha perfecta para tu reserva. 
                Seleccioná el día en el que desees jugar y el horario que mejor se adapte a tus preferencias.
                Disfrutá de la flexibilidad de elegir el momento adecuado para disfrutar del deporte. </p>
        </div>
    </div>
    <div class="col-md-6">
      <div class="right-div pasoItemDerecha pasos_item">
        <h3>4. Confirmá tu reserva</h3>
        <p>Verificá los detalles de tu reserva y confirmá todos los datos para asegurarte de que estén 
            correctos. Revisá la cancha seleccionada, el horario, la fecha y cualquier otro detalle 
            importante. Una vez confirmada, ¡Estarás listo para disfrutar de tu juego en la cancha reservada!</p>
      </div>
    </div>
  </div>
</div>

</div>
</template>

<script>
    export default{
        name:'PasosUso'
    }
</script>

<style>
    h1{
        margin: 6rem;
    }
    .div_pasos{
        margin-top:2em;
        padding:1em;
    }

    .pasos_item{
        margin:2em;
        padding:1em;
        border-radius: 17px;
        height: 11rem;
    }
    .pasoItemIzquierda{
        float:left;
        background-color:#36b39a;
    }

    .pasoItemDerecha{
        float:right;
        background-color: #66d096;
    }

    /* no me gusta que dé la sensación de que hay alguna acción al dar click. 
    Pero tampoco me convence que quede estático */
    .pasos_item:hover {
        transform: scale(1.05);
    }
</style>