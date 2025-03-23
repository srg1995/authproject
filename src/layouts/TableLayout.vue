<template>
  <h1 class="text-2xl font-semibold text-gray-800 mb-4 text-center mt-4">
    Table Layout
  </h1>
  <div>
    <table
      class="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden"
    >
      <thead>
        <tr class="bg-gray-200">
          <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700">
            Nombre
          </th>
          <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700">
            Edad
          </th>
          <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700">
            Desempeño
          </th>
        </tr>
      </thead>
      <tbody>
        <UserTable
          v-for="user in props.content"
          :key="user.id"
          :content="user"
        />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import UserTable from "@/components/UserTable.vue";

const props = defineProps(["content"]);
console.log(props);
</script>

<style scoped></style>
