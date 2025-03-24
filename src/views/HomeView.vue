<template>
  <MainLayout>
    <template v-slot:section>
      <div class="max-w-xl mx-auto py-12 px-4">
        <h1
          class="text-center text-4xl font-extrabold text-gray-600 tracking-tight sm:text-5xl"
        >
          HOME VIEW
        </h1>
        <div name="mouse" tag="div" class="m-4 flex gap-2 justify-center">
          <p class="border p-2 text-center">Mouse position(x): {{ x }}</p>
          <p class="border p-2 text-center">Mouse position(y): {{ y }}</p>
        </div>
      </div>
      <div class="flex justify-center">
        <div>
          <TransitionGroup name="list" tag="ul">
            <li v-for="note in notes" :key="note">{{ note }}</li>
          </TransitionGroup>
        </div>
      </div>
      <div class="flex justify-center gap-3 m-4">
        <input
          class="border rounded-xl p-2"
          type="text"
          v-model="note"
          placeholder="nota"
        />
        <button
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click="handleNote"
        >
          Add Note
        </button>
      </div>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import useMouse from "@/composables/useMouse";
import MainLayout from "@/layouts/MainLayout.vue";
import { Ref, ref } from "vue";

const { x, y } = useMouse();

const notes: Ref = ref([]);
const note: Ref = ref("");

const handleNote = () => {
  notes.value.push(note.value);
  note.value = "";
};
</script>

<style scoped>
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
  color: green;
}
</style>
