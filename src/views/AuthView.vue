<template>
  <MainLayout>
    <template v-slot:section>
      <article class="max-w-xl mx-auto py-6 px-4">
        <h1
          class="text-center text-4xl font-extrabold text-gray-600 tracking-tight sm:text-5xl"
        >
          AUTH VIEW
        </h1>
        <form>
          <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
              <div
                class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
              >
                <div class="sm:col-span-12">
                  <label
                    for="username"
                    class="block text-sm/6 font-medium text-gray-900"
                    >Usuario</label
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
              <div
                class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
              >
                <div class="sm:col-span-12">
                  <label
                    for="username"
                    class="block text-sm/6 font-medium text-gray-900"
                    >Contraseña</label
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
              @click.prevent="handleLogin"
            >
              Accede
            </button>
          </div>
        </form>
      </article>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from "@/layouts/MainLayout.vue";
import { ref, type Ref } from "vue";
import { useAuthStore } from "@/stores/Auth";
import router from "@/router";

let email: Ref<string> = ref("eve.holt@reqres.in");
let password: Ref<string> = ref("cityslicka");

const authStore = useAuthStore();

const handleLogin = async () => {
  const response = await authStore.register(email.value, password.value);
  if (response) {
    router.push({ name: "dashboard" });
  }
};
</script>

<style scoped>
/* Estilos de la transición */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
</style>
