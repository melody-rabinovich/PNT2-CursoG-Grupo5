import axiosClient from './axiosClient.js';
const apiClient = axiosClient.getApiClient();

export default {
    getUsuarios(){
        return apiClient.get('/usuarios');
    },
    getUsuarioById(id){
        return apiClient.get('/usuarios/'+id);
    },
    register(datosUsuario){
        return apiClient.post('/usuarios/register', datosUsuario);
    },
/*  login(usuario) {
        //Utilizo api Client que es el objeto inicializado de axios
        return apiClient.post('/users/login', usuario);
               // axios pero instanciado con la direccion y las caracteristicas de la peticion.
    },*/
    cambiarNombre(id, nuevoNombre){
        return apiClient.put('/usuarios/'+id+'/cambiarnombre', nuevoNombre);
    },
    getMisReservas(id){
        return apiClient.get('/usuarios/'+id+'/MisReservas');
    },
    cancelarReserva(id, idReserva){
        return apiClient.delete('/usuarios/'+id+'/MisReservas', idReserva);
    },
}