import axiosClient from './axiosClient.js';
const apiClient = axiosClient.getApiClient();

export default {
    getCanchas(){
        return apiClient.get('/canchas');
    },
    getCanchaById(id){
        return apiClient.get('/canchas/'+id);
    },
    crearCancha(datosCancha){
        return apiClient.post('/canchas', datosCancha);
    },
    getDisponibilidadPorDia(id, datos){
        return apiClient.get('/canchas/'+id+'/reservar', datos);
    },
    reservar(id, datos){
        return apiClient.put('/canchas/'+id+'/reservar', datos);
    },
    getMisReservas(id){
        return apiClient.get('/canchas/'+id+'/MisReservas');
    },
    cancelarReserva(id, idReserva){
        return apiClient.delete('/canchas/'+id+'/MisReservas', idReserva);
    },
}