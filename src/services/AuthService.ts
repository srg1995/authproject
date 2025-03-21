import { type Ref, ref } from "vue";

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

  async login(email: string, password: string): Promise<boolean> {
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
      console.log(response);

      if ("error" in response) {
        this.error.value = "login failed";
        return false;
      }

      this.jwt.value = response.token;
      return true;
    } catch (error) {
      this.error.value = "login failed";
      return false;
    }
  }
}
export default AuthService;
