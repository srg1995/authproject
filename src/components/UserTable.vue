<template>
  <tr class="border-b hover:bg-gray-50">
    <td class="px-6 py-4 text-sm text-gray-800">{{ props.content.name }}</td>
    <td class="px-6 py-4 text-sm text-gray-800">{{ props.content.age }}</td>
    <td class="px-6 py-4 text-sm text-gray-800">
      {{ props.content.position }}
    </td>
  </tr>
</template>

<script lang="ts" setup>
const props = defineProps(["content"]);
</script>

<style scoped></style>
