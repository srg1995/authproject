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
      </article>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from "@/Layouts/MainLayout.vue";
</script>

<style scoped></style>
