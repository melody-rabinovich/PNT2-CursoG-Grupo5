
import axios from 'axios'
import { useAuthStore } from '../stores/authStore.js';

const axiosClient = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Accept': 'application/json',
        'Authorization': "",
        'Content-Type': 'application/json'
    }
})

axiosClient.interceptors.request.use((config) => {
    const authStore = useAuthStore();
    const token = authStore.token;
  
    if (token) {
      config.headers.Authorization = `${token}`;
    }
  
    return config;
  });

export default {
    getApiClient() {
        return axiosClient;
    }
}
