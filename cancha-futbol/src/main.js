import { createApp } from "vue";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const apiClient = axios.create({
  baseURL: "http://localhost:3000",
});
app.config.globalProperties.$axios = apiClient;

app.use(createPinia());
app.use(router);

app.mount("#app");
