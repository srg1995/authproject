<template>
  <footer className="bg-gray-800 text-white p-4 text-center  bottom-0 w-full">
    <div className="container mx-auto">
      <p className="text-lg font-semibold">
        {{ year }} - Desarrollado por Sergio Sacrist&aacute;n Santero
      </p>
      <p className="text-sm mt-2">
        Gracias por visitar nuestro sitio web. ¡Vuelve pronto!
      </p>
      <div className="mt-4">
        <a
          href="https://www.linkedin.com/in/sergiosacristansantero"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mx-2"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/sergiosacristan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mx-2"
        >
          GitHub
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const date = new Date();
const year = date.getFullYear();
</script>

<style scoped></style>
