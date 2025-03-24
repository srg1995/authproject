<template>
  <h1 class="text-2xl font-semibold text-gray-800 mb-4 text-center mt-4">
    List Layout
  </h1>
  <ul class="list-disc pl-5 space-y-2 text-gray-800 m-4">
    <UserList v-for="user in props.content" :key="user.id" :content="user" />
  </ul>
</template>

<script lang="ts" setup>
import UserList from "@/components/UserList.vue";
const props = defineProps(["content"]);
</script>

<style scoped></style>
