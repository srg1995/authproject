import AuthView from "../views/AuthView.vue";
import HomeView from "../views/HomeView.vue";

import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "home", component: HomeView },
  { path: "/auth", name: "auth", component: AuthView },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
