<template>
  <Header />

  <main className="flex-grow m-4">
    <div className="container mx-auto bg-blue-50 h-full inline-block">
      <slot name="section"></slot>
    </div>
  </main>

  <Footer />
</template>

<script lang="ts" setup>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
</script>

<style scoped></style>
