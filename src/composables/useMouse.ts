import { Ref, ref, onMounted, onUnmounted } from "vue";

export default function useMouse() {
  const x: Ref = ref(0);
  const y: Ref = ref(0);
  function update(event: MouseEvent) {
    x.value = event.pageX;
    y.value = event.pageY;
  }
  onMounted(() => window.addEventListener("mousemove", update));
  onUnmounted(() => window.removeEventListener("mousemove", update));
  return { x, y };
}
