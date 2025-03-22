import { createApp } from "vue";
import "./styles/main.css";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";
import { createPinia } from "pinia";
import VueCookies from "vue-cookies";
const firebaseConfig = {
  apiKey: "AIzaSyBz9WA3FpX6nQq8N4G_n6DSpiJa3H55anE",
  authDomain: "authproject-2bdef.firebaseapp.com",
  projectId: "authproject-2bdef",
  storageBucket: "authproject-2bdef.firebasestorage.app",
  messagingSenderId: "811471033432",
  appId: "1:811471033432:web:4a543e4178da16953ca62d",
};

const pinia = createPinia();
const app = createApp(App);
initializeApp(firebaseConfig);

app.use(pinia);
app.use(router);
app.use(VueCookies);

app.mount("#app");
