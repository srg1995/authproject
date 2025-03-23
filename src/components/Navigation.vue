<template>
  <nav class="bg-white shadow-md p-4 flex items-center justify-center m-4">
    <div
      class="m-1 p-2 cursor-pointer hover:bg-blue-300 hover:text-white rounded-md"
      v-if="auth"
    >
      <router-link :to="{ name: 'home' }">Home</router-link>
    </div>

    <div v-if="auth">|</div>
    <div
      class="m-1 p-2 cursor-pointer hover:bg-blue-300 hover:text-white rounded-md"
      v-if="!auth"
    >
      <router-link :to="{ name: 'auth' }">Auth</router-link>
    </div>

    <div v-if="!auth">|</div>
    <div
      class="m-1 p-2 cursor-pointer hover:bg-blue-300 hover:text-white rounded-md"
      v-if="!auth"
    >
      <router-link :to="{ name: 'firebase' }">Firebase Auth</router-link>
    </div>

    <div v-if="!auth">|</div>
    <div
      class="m-1 p-2 cursor-pointer hover:bg-blue-300 hover:text-white rounded-md"
      v-if="!auth"
    >
      <router-link :to="{ name: 'social' }">Social Auth</router-link>
    </div>

    <div
      class="m-1 p-2 cursor-pointer hover:bg-blue-300 hover:text-white rounded-md"
      v-if="auth"
    >
      <router-link :to="{ name: 'dashboard' }">Dashboard Auth</router-link>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useAuthStore } from "@/stores/Auth";
const auth = !!useAuthStore()?.user?.token;
</script>

<style scoped></style>
