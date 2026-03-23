import { ref, onMounted, onUnmounted } from "vue";

export function useAutoSwitch(interval: number = 10000) {
  const hovered = ref(false);
  let autoTimer: ReturnType<typeof setInterval> | null = null;

  const startAutoSwitch = () => {
    autoTimer = setInterval(() => {
      hovered.value = !hovered.value;
    }, interval);
  };

  const resetTimer = () => {
    if (autoTimer) clearInterval(autoTimer);
    startAutoSwitch();
  };

  const handleClick = () => {
    hovered.value = !hovered.value;
    resetTimer();
  };

  onMounted(() => startAutoSwitch());
  onUnmounted(() => {
    if (autoTimer) clearInterval(autoTimer);
  });

  return {
    hovered,
    resetTimer,
    handleClick,
  };
}
