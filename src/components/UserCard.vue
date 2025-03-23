<template>
  <div class="bg-white shadow-lg rounded-2xl overflow-hidden text-center p-4">
    <h3 class="text-2xl font-semibold text-gray-800 mb-2">
      {{ props.content.name }}
    </h3>
    <p class="text-gray-600 mb-4">{{ props.content.age }}</p>
    <p class="text-gray-600 mb-4">{{ props.content.position }}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["content"]);
</script>

<style scoped></style>
