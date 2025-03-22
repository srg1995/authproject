import { type Ref, ref } from "vue";
import VueCookies from "vue-cookies";

class AuthService {
  private jwt: Ref<string>;
  private error: Ref<string>;

  constructor() {
    this.jwt = ref("");
    this.error = ref("");
  }

  getJwt(): string {
    return this.jwt.value;
  }
  getError(): string {
    return this.error.value;
  }

  async login(email: string, password: string): Promise<any> {
    try {
      const url = "https://reqres.in/api/login";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const response = await res.json();

      if ("error" in response) {
        this.error.value = "login failed";
        return { status: 400, error: this.error.value };
      }

      this.jwt.value = response.token;

      VueCookies.set("token", response.token, 1000);
      return { status: 200, data: { token: response.token } };
    } catch (error) {
      this.error.value = "login failed";
      return { status: 400, error };
    }
  }
}
export default AuthService;
