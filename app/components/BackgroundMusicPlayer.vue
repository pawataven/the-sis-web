<script setup lang="ts">
const route = useRoute();
const audioRef = ref<HTMLAudioElement | null>(null);
const hasLoggedMissingFile = ref(false);
let removeUnlockListeners: (() => void) | null = null;

const {
  source,
  isEnabled,
  enableQuizBackgroundMusic,
  disableBackgroundMusic,
} = useBackgroundMusic();

const shouldPlayQuizMusic = computed(() => {
  const normalizedPath = route.path.replace(/\/+$/, "") || "/";

  return (
    normalizedPath === "/find-your-bloom" ||
    normalizedPath === "/quiz-result"
  );
});

async function syncPlayback() {
  const audio = audioRef.value;

  if (!audio) {
    return;
  }

  if (!isEnabled.value || !source.value || !shouldPlayQuizMusic.value) {
    audio.pause();
    audio.currentTime = 0;
    return;
  }

  if (audio.src !== new URL(source.value, window.location.origin).href) {
    audio.src = source.value;
    audio.load();
  }

  audio.volume = 0.05;
  try {
    await audio.play();
    removeUnlockListeners?.();
  } catch (error) {
    console.warn("[BackgroundMusic] Playback is waiting for user interaction.", error);
    registerUnlockListeners();
  }
}

function registerUnlockListeners() {
  if (removeUnlockListeners || !import.meta.client) {
    return;
  }

  const unlockPlayback = () => {
    syncPlayback();
  };

  const listenerOptions: AddEventListenerOptions = {
    passive: true,
  };

  window.addEventListener("pointerdown", unlockPlayback, listenerOptions);
  window.addEventListener("keydown", unlockPlayback, listenerOptions);
  window.addEventListener("touchstart", unlockPlayback, listenerOptions);

  removeUnlockListeners = () => {
    window.removeEventListener("pointerdown", unlockPlayback, listenerOptions);
    window.removeEventListener("keydown", unlockPlayback, listenerOptions);
    window.removeEventListener("touchstart", unlockPlayback, listenerOptions);
    removeUnlockListeners = null;
  };
}

watch(
  shouldPlayQuizMusic,
  (shouldPlay) => {
    if (shouldPlay) {
      enableQuizBackgroundMusic();
      return;
    }

    disableBackgroundMusic();
  },
  { immediate: true },
);

watch(
  [source, isEnabled, shouldPlayQuizMusic],
  () => {
    syncPlayback();
  },
  { flush: "post" },
);

onMounted(() => {
  syncPlayback();
});

watch(
  () => isEnabled.value && shouldPlayQuizMusic.value,
  (isActive) => {
    if (!isActive && removeUnlockListeners) {
      removeUnlockListeners();
    }
  },
);

onBeforeUnmount(() => {
  removeUnlockListeners?.();
});

function handleAudioError() {
  if (hasLoggedMissingFile.value) {
    return;
  }

  hasLoggedMissingFile.value = true;
  console.warn(
    "[BackgroundMusic] Missing audio file. Add your music file at /public/audio/Khamwan.mp3",
  );
}
</script>

<template>
  <audio
    ref="audioRef"
    loop
    preload="auto"
    hidden
    @error="handleAudioError"
  />
</template>
