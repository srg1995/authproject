import { AuthActions, authState } from "@/interfaces";
import AuthService from "@/services/AuthService";
import { defineStore } from "pinia";
import VueCookies from "vue-cookies";

export const useAuthStore = defineStore<"auth", authState, {}, AuthActions>(
  "auth",
  {
    state: () => ({
      user: {
        email: "",
        password: "",
        token: "",
      },
    }),
    getters: {},
    actions: {
      async register(email: string, password: string): Promise<boolean> {
        this.user.email = email;
        this.user.password = password;

        const authService = new AuthService();
        const response = await authService.login(
          this.user.email,
          this.user.password
        );

        if (response.status === 200) {
          this.user.token = response.data.token;
          return true;
        } else {
          return false;
        }
      },
    },
    persist: {
      key: "auth",
      storage: localStorage,
      paths: ["user"],
    },
  }
);
