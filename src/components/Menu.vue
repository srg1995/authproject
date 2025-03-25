<template>
  <select v-model="$i18n.locale">
    <option
      v-for="locale in $i18n.availableLocales"
      :key="`locale-${locale}`"
      :value="locale"
    >
      {{ locale }}
    </option>
  </select>

  {{ $t("message.HOME_VIEW_TITLE") }}
</template>

<script lang="ts" setup></script>

<style scoped></style>
