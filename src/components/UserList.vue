<template>
  <li class="text-xl font-semibold">
    {{ props.content.name }} - {{ props.content.age }} -
    {{ props.content.position }}
  </li>
</template>

<script lang="ts" setup>
const props = defineProps(["content"]);
</script>

<style scoped></style>
