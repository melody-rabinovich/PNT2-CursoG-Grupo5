<template>

<h1 class="text-center"> Reservá tu cancha en 4 pasos </h1>

<div class="container div_pasos">
  <div class="row">
    <div class="col-md-6">
        <!-- estaría bueno que lleve al buscador -->
        <div class="left-div pasoItemIzquierda pasos_item">
            <h3>1. Buscá tu cancha más cercana </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cupiditate, explicabo, mollitia, fugiat animi accusamus iste commodi eos sunt natus assumenda doloremque necessitatibus odio nemo ratione neque fuga dolor a?</p>
        </div>
    </div>
    <div class="col-md-6">
      <div class="right-div pasoItemDerecha pasos_item">
        <h3>2. Consultá los horarios disponibles</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequuntur at hic velit impedit libero amet magni soluta doloremque cum nihil repellat, repudiandae tempora ad voluptate dolorem alias. Ex, vel!</p>
      </div>
    </div>
    <!-- Repite el mismo patrón para más elementos -->
    <div class="col-md-6">
        <div class="left-div pasoItemIzquierda pasos_item">
            <h3>3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cupiditate, explicabo, mollitia, fugiat animi accusamus iste commodi eos sunt natus assumenda doloremque necessitatibus odio nemo ratione neque fuga dolor a?</p>
        </div>
    </div>
    <div class="col-md-6">
      <div class="right-div pasoItemDerecha pasos_item">
        <h3>4</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequuntur at hic velit impedit libero amet magni soluta doloremque cum nihil repellat, repudiandae tempora ad voluptate dolorem alias. Ex, vel!</p>
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