<template>
  <section class="max-w-xl mx-auto py-12 px-4">
    <h1
      class="text-center text-4xl font-extrabold text-gray-600 tracking-tight sm:text-5xl"
    >
      FIREBASE VIEW
    </h1>
    <form>
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-12">
              <label
                for="username"
                class="block text-sm/6 font-medium text-gray-900"
                >Username</label
              >
              <div class="mt-2">
                <div
                  class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
                >
                  <input
                    type="text"
                    name="username"
                    id="username"
                    class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    placeholder="Usuario"
                    v-model="email"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-12">
              <label
                for="username"
                class="block text-sm/6 font-medium text-gray-900"
                >Password</label
              >
              <div class="mt-2">
                <div
                  class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
                >
                  <input
                    type="text"
                    name="username"
                    id="username"
                    class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    placeholder="********"
                    v-model="password"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-center">
        <button
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click.prevent="authUser"
        >
          Accede
        </button>
      </div>
    </form>
  </section>
</template>

<script lang="ts" setup>
import { ref, type Ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

let email: Ref<string> = ref("sergiosac@sergio.com");
let password: Ref<string> = ref("112233");

const authUser = async () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      alert("Login exitoso" + " - " + userCredential.user.email);
    })
    .catch((error) => {
      alert("Login erroneo" + " - " + error.code + " - " + error.message);
    });
};
</script>

<style scoped></style>
