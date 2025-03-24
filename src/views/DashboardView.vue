<template>
  <MainLayout>
    <template v-slot:section>
      <article class="max-w-xl mx-auto py-12 px-4">
        <h1
          class="text-center text-4xl font-extrabold text-gray-600 tracking-tight sm:text-5xl"
        >
          DASHBOARD VIEW
        </h1>
        <h2 class="text-center text-2xl my-4">¡Has conseguido hacer login!</h2>
        <p class="text-center">
          Esta pagina es una vista con autenticacion y proteccion de rutas
        </p>
        <div>
          <div class="flex gap-3 justify-center mt-4">
            <button
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              @click="handleLayout(listLayout)"
            >
              List
            </button>
            <button
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              @click="handleLayout(cardLayout)"
            >
              Card
            </button>
            <button
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              @click="handleLayout(tableLayout)"
            >
              Table
            </button>
          </div>
          <div class="m-4 flex justify-center">
            <input
              type="text"
              v-model="search"
              @keyup="hanldeSearch"
              placeholder="Search"
              class="w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
          </div>
          <component :is="layout" :content="filteredUsers" />
        </div>
      </article>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import { User } from "@/interfaces";
import MainLayout from "@/layouts/MainLayout.vue";
import {
  Ref,
  ref,
  defineAsyncComponent,
  onMounted,
} from "vue";

const listLayout = defineAsyncComponent(
  () => import("@/layouts/ListLayout.vue")
);
const cardLayout = defineAsyncComponent(
  () => import("@/layouts/CardLayout.vue")
);
const tableLayout = defineAsyncComponent(
  () => import("@/layouts/TableLayout.vue")
);
const layout = ref(listLayout);

const handleLayout = (cmp: any) => (layout.value = cmp);
const search: Ref<string> = ref("");

interface UserData {
  id: number;
  name: string;
  age: number;
  position: string;
}
const users = ref([
  {
    id: 1,
    name: "Leanne Graham",
    age: 20,
    position: "frontend",
  },
  {
    id: 2,
    name: "Ervin Howell",
    age: 20,
    position: "frontend",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    age: 20,
    position: "frontend",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    age: 20,
    position: "frontend",
  },
]);

let filteredUsers: Ref<UserData[]> = ref([]);
const hanldeSearch = () => {
  filteredUsers.value = users.value.filter((item) =>
    item.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
  );
};
onMounted(() => {
  filteredUsers.value = users.value;
});
</script>

<style scoped></style>
