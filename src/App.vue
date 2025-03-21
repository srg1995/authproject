<template>
  <nav class="bg-white shadow-md p-4 flex items-center justify-center m-4">
    <div
      class="m-1 p-2 cursor-pointer hover:bg-blue-300 hover:text-white rounded-md"
    >
      <router-link :to="{ name: 'home' }">Home</router-link>
    </div>

    <div>|</div>
    <div
      class="m-1 p-2 cursor-pointer hover:bg-blue-300 hover:text-white rounded-md"
    >
      <router-link :to="{ name: 'auth' }">Auth</router-link>
    </div>

    <div>|</div>
    <div
      class="m-1 p-2 cursor-pointer hover:bg-blue-300 hover:text-white rounded-md"
    >
      <router-link :to="{ name: 'firebase' }">Firebase Auth</router-link>
    </div>

    <div>|</div>
    <div
      class="m-1 p-2 cursor-pointer hover:bg-blue-300 hover:text-white rounded-md"
    >
      <router-link :to="{ name: 'social' }">Social Auth</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script setup lang="ts"></script>

<style scoped></style>
