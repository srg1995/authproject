import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import { useAuthStore } from "@/stores/Auth";
import HomeView from "@/views/HomeView.vue";
import AuthView from "@/views/AuthView.vue";
import FirebaseView from "@/views/FirebaseView.vue";
import SocialView from "@/views/SocialView.vue";
import DashboardView from "@/views/DashboardView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requireAuth: false },
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthView,
    meta: { requireAuth: false },
  },
  {
    path: "/firebase",
    name: "firebase",
    component: FirebaseView,
    meta: { requireAuth: false },
  },
  {
    path: "/social",
    name: "social",
    component: SocialView,
    meta: { requireAuth: false },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
    meta: { requireAuth: true },
  },
];

const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach((to, from, next) => {
  useAuthStore;
  const auth = useAuthStore().user.token;
  const needAuth = to.meta.requireAuth;
  console.log(auth);

  if (needAuth && !auth) {
    next("auth");
  } else {
    next();
  }
});

export default router;
