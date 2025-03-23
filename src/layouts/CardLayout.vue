<template>
  <h1 class="text-2xl font-semibold text-gray-800 mb-4 text-center mt-4">
    Card Layout
  </h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
    <UserCard v-for="user in props.content" :key="user.id" :content="user" />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import UserCard from "@/components/UserCard.vue";

const props = defineProps(["content"]);
</script>

<style scoped></style>
