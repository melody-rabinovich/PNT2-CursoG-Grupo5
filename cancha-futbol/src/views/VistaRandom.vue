
<template>
    <div>
        <div>hola1</div>
        <div>hola2</div>
        <div>hola3</div>
        <div>hola4</div>
        <div>hola5</div>
        <div>hola6</div>
        <form @submit.prevent="getReservas">
            <div class="row">
                <div class="col-m3">
                    <label>Numero de cancha</label>
                    <input type="text" v-model="numeroCancha">
                </div>
            </div>
            <p></p>
            <div class="row">
                <div class="col-m3">
                <button type="submit" class="btn btn-primary">Ver disponibilidad de la cancha</button>
                </div>
            </div>
        </form>
        <p></p>
        <p></p>
        <PasosUso/>
    </div>
</template>
<script>
    import PasosUso from '../components/PasosUso.vue';
    import axiosClient from "../services/axiosClient.js";
    const apiClient = axiosClient.getApiClient();
    
    export default {
        name: 'VistaRandom',
        components: {
            PasosUso
        },
        data() {
            return {
                numeroCancha: '',
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
            async getReservas(){
                console.log(this.numeroCancha)
                let payload = {
                    idCancha: this.numeroCancha
                };
                console.log(payload);
                await apiClient.get("http://localhost:3000/canchas/"+payload.idCancha+"/MisReservas", payload)
                .then(response => {
                    console.log(response);
                })
            }
        }
    }
</script>