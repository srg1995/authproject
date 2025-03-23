import AuthService from "@/services/AuthService";
import { defineStore } from "pinia";
import VueCookies from "vue-cookies";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {
      email: "",
      password: "",
      token: "",
    },
  }),
  getters: {},
  actions: {
    async register(email: string, password: string) {
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
    storage: localStorage,
    paths: ["user"],
  },
});
