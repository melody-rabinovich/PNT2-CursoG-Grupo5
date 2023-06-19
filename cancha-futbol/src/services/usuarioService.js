import axiosClient from './axiosClient.js';
const apiClient = axiosClient.getApiClient();

export default {
    getUsuarios(){
        return apiClient.get('/usuarios');
        /*
        {
            nada
        }
        */
    },
    getUsuarioById(id){
        return apiClient.get('/usuarios/'+id);
        /*
        {
            nada
        }
        */
    },
    register(datosUsuario){
        return apiClient.post('/usuarios/register', datosUsuario);
        /*
        {
            "nombre": "trevor",                             //string
            "mail": "trevor@user.com",                      //string
            "password": "123"                               //string
        }
        */
    },
    /*
    login(usuario) {
        //Utilizo api Client que es el objeto inicializado de axios
        return apiClient.post('/users/login', usuario);
               // axios pero instanciado con la direccion y las caracteristicas de la peticion.
    },
    */
    cambiarNombre(id, nuevoNombre){
        return apiClient.put('/usuarios/'+id+'/cambiarnombre', nuevoNombre);
        /*
        este método lo hice de prueba, hay que evaluar si queremos que la api permita cambiar el nombre
        por mí, no
        {
            "_id": "648cbd6f6351616559f8b510",              //string
            "id": 2,                                        //int
            "nombre": "Jaime",                              //string
            "mail": "lucas1235@hotmail.com"                 //string
        }
        */
    },
    getMisReservas(id, datos){
        return apiClient.get('/usuarios/'+id+'/MisReservas', datos);
        /*
        {
            "mail": "(esto es un mail)"                     //string
        }
        */
    },
    cancelarReserva(id, idReserva){
        return apiClient.delete('/usuarios/'+id+'/MisReservas', idReserva);
        /*
        {
            "idReserva": "648f9eee0b182076563d0d10"         //string
        }
        */
    },
}