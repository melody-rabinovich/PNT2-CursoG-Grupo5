
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css';

import App from './App.vue'
import router from './router'
//import axiosClient from './services/axiosClient.js';
//import setAuthHeader from './services/setAuthHeader.js';

const app = createApp(App)

app.use(createPinia())
app.use(router)

//Persistencia de sesión logueada
/*
if(!axiosClient.headers){
    localStorage.removeItem('Authorization');
}

if(localStorage.Authorization != null){
    setAuthHeader(localStorage.Authorization);
} else {
    setAuthHeader(false);
}
*/

app.mount('#app')
