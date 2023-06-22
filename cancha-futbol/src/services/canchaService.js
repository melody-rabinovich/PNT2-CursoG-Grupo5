import axiosClient from './axiosClient.js';
const apiClient = axiosClient.getApiClient();

export default {
    getCanchas(){
        return apiClient.get('/canchas');
        /*
        {
            nada
        }
        */
    },
    getCanchaById(id){
        return apiClient.get('/canchas/'+id);
        /* EL ID DE LA CANCHA ES EL NUMERO DE LA CANCHA, COMO UN STRING (cancha.numero es tipo string)
        {
            nada
        }
        */
    },
    crearCancha(datosCancha){
        return apiClient.post('/canchas', datosCancha);
        /*
        {
            "numero": "2",                                  //string
            "nombre": "messi2",                             //string
            "tamanio": 5,                                   //int
            "precio": 200                                   //double o int, da iwal
        }
        */
    },
    getDisponibilidadPorDia(id, mes, dia, ){
        return apiClient.get('/canchas/'+id+'/reservar/mes='+mes+'/dia='+dia);
        /*
        {
            nada
        }
        */
    },
    reservar(id, datos){
        return apiClient.post('/canchas/'+id+'/reservar', datos);
        /*
        {
            "fecha": "2023/01/01 00:00:00",                 //string
            "hora": "3",                                    //string
            "idUsuario": "648e901191dc4011e1566c92"         //string
        }
        */
    },
    getMisReservas(id){
        return apiClient.get('/canchas/'+id+'/MisReservas');
        /*
        {
            nada
        }
        */
    },
    cancelarReserva(id, mes, dia, idReserva){
        return apiClient.delete('/canchas/'+id+'/MisReservas/mes='+mes+'/dia='+dia+'/'+idReserva);
        /*
        {
            nada
        }
        */
    },
}