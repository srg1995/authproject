<template>
  <header className=" p-4 text-center w-full">
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Bienvenido a Mi Sitio Web</h1>
      <Menu />
      <Navigation />
    </div>
  </header>
</template>

<script lang="ts" setup>
import Menu from "./menu.vue";
import Navigation from "./Navigation.vue";
</script>

<style scoped></style>
