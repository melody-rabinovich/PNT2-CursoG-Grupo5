
<template>
    <div>
    <Navegador/>
    <div style="margin-top: 65px">
        <form @submit.prevent="iniciarSesion">
            <div class="row">
                <div class="col-m3">
                    <label>Mail</label>
                    <input type="text" v-model="miMail">
                </div>
            </div>
            <p></p>
            <div class="row">
                <div class="col-m3">
                    <label>Contraseña</label>
                    <input type="text" v-model="miPass">
                </div>
            </div>
            <p></p>
            <div class="row">
                <div class="col-m3">
                <button type="submit" class="btn btn-primary">Log in</button>
                </div>
            </div>
        </form>
        <p></p>
        <p></p>
        <form @submit.prevent="getDisponibilidad">
            <div class="row">
                <div class="col-m3">
                    <label>Número de cancha</label>
                    <input type="text" v-model="numeroCancha">
                </div>
            </div>
            <p></p>
            <div class="row">
                <div class="col-m3">
                    <label>Mes</label>
                    <input type="text" v-model="miMes">
                </div>
            </div>
            <p></p>
            <div class="row">
                <div class="col-m3">
                    <label>Día</label>
                    <input type="text" v-model="miDia">
                </div>
            </div>
            <p></p>
            <div class="row">
                <div class="col-m3">
                <button type="submit" class="btn btn-primary">Ver disponibilidad</button>
                </div>
            </div>
        </form>
        <p></p>
        <p></p>
        <form @submit.prevent="prueba">
        <button type="submit" class="btn btn-danger">Prueba</button>
        </form>
        <p></p>
        <p></p>
        <PasosUso/>
    </div>
    </div>
</template>
<script>
import Navegador from '../components/Navegador.vue'
import PasosUso from '../components/PasosUso.vue';
//import setAuthHeader from '../services/setAuthHeader.js';
import axiosClient from "../services/axiosClient.js";
const apiClient = axiosClient.getApiClient();
import usuarioService from '../services/usuarioService.js';
import canchaService from '../services/canchaService.js';
import { useAuthStore } from '../stores/authStore.js';

    export default {
        name: 'VistaRandom',
        components: {
            Navegador,
            PasosUso
        },
        data() {
            return {
                mes: "1",
                dia: 1,
                idReserva: "6491ed8a05ba25de293415b9",
                idUsuario: "6491de1d4c266f483bb77a34",
                mail: "trevor@user.com",
                password: "123456",
                numero: 1,
                nombre: "messi2",
                tamanio: 5,
                precio: 200,
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
            async iniciarSesion(){
                const credentials = {
                    mail: this.miMail,
                    password: this.miPass
                };
                console.log(credentials);
                usuarioService.login(credentials)
                .then((response) => {
                    localStorage.setItem('Authorization', response.data.token);
//                    setAuthHeader(response.data.token);
                    
                    const authStore = useAuthStore()
                    authStore.setToken(response.data.token);
                 })
                .catch((error) => console.log('error:', error.response))
            },
            async getDisponibilidad(){
                let payload = {
                    mes: this.miMes,
                    dia: this.miDia
                };
                console.log(payload);
                await apiClient.get("http://localhost:3000/canchas/"+this.numeroCancha+"/reservar/mes="+this.miMes+"/dia"+this.miDia, payload)
                .then(response => {
                    console.log(response);
                }).catch(e => console.log('error:', e))
            },
            async prueba(){
                let payload = {
                    mes: 1,
                    dia: "1",
                    hora: "04",
                    idUsuario: this.idUsuario
                };
                console.log(payload);
//                await apiClient.delete("http://localhost:3000/usuarios/"+this.idUsuario+"/MisReservas/"+this.idReserva, payload)          Borrar reserva
//                await apiClient.HTTP("http://localhost:3000/canchas/"+this.numero+"/MisReservas/mes="+this.mes+"/dia="+this.dia+"/"+this.idReserva")      algo
//                await apiClient.post("http://localhost:3000/usuarios/", payload)
                await canchaService.reservar(this.numero, payload)
                .then(response => {
                    console.log(response);
                }).catch(e => console.log('error:', e.response.data.error, e))
            }
        }
    }
</script>