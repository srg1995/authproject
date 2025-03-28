import { createApp } from "vue";
import "./styles/main.css";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";
import { createPinia } from "pinia";
import VueCookies from "vue-cookies";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createI18n } from "vue-i18n";
import { messages } from "./lang/messages";

const firebaseConfig = {
  apiKey: "AIzaSyBz9WA3FpX6nQq8N4G_n6DSpiJa3H55anE",
  authDomain: "authproject-2bdef.firebaseapp.com",
  projectId: "authproject-2bdef",
  storageBucket: "authproject-2bdef.firebasestorage.app",
  messagingSenderId: "811471033432",
  appId: "1:811471033432:web:4a543e4178da16953ca62d",
};

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
initializeApp(firebaseConfig);

const i18n = createI18n({
  locale: "es",
  fallbackLocale: "es",
  messages,
});

app.use(pinia);
app.use(router);
app.use(VueCookies);
app.use(i18n);

app.mount("#app");
