<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'auth' }">Auth</router-link>
  </nav>
  <router-view />
</template>

<script setup lang="ts"></script>

<style scoped></style>
