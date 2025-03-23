<template>
  <MainLayout>
    <template v-slot:section>
      <div class="max-w-xl mx-auto py-12 px-4">
        <h1
          class="text-center text-4xl font-extrabold text-gray-600 tracking-tight sm:text-5xl"
        >
          HOME VIEW
        </h1>
        <div class="m-4 flex gap-2 justify-center">
          <p class="border p-2 text-center">Mouse position(x): {{ x }}</p>
          <p class="border p-2 text-center">Mouse position(y): {{ y }}</p>
        </div>
      </div>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import useMouse from "@/composables/useMouse";
import MainLayout from "@/layouts/MainLayout.vue";

const { x, y } = useMouse();
</script>

<style scoped></style>
