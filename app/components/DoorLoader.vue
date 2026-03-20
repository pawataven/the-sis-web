<script setup lang="ts">
import { ref, onMounted } from "vue";

const visible = ref(false);
const open = ref(false);
const clicked = ref(false);

const emit = defineEmits(["done"]);

onMounted(() => {
  const hasVisited = sessionStorage.getItem("hasVisited");
  if (hasVisited) {
    emit("done");
    return;
  }
  sessionStorage.setItem("hasVisited", "true");
  visible.value = true;
});

function handleClick() {
  if (clicked.value) return;
  clicked.value = true;

  setTimeout(() => {
    open.value = true;
  }, 100);

  setTimeout(() => {
    emit("done");
    visible.value = false;
  }, 2000);
}
</script>

<template>
  <div
    v-if="visible"
    class="fixed inset-0 z-[99999] flex overflow-hidden cursor-pointer"
    @click="handleClick"
  >
    <!-- left door — รูปปกติ -->
    <div
      class="w-1/2 h-full overflow-hidden transition-transform duration-[1800ms] ease-in-out"
      :class="open ? '-translate-x-full' : ''"
    >
      <img
        src="/Door/door.jpg"
        class="h-full pointer-events-none"
        style="
          width: 200%;
          max-width: none;
          object-fit: cover;
          object-position: right center;
          margin-left: -100%;
        "
      />
    </div>

    <!-- right door — mirror -->
    <div
      class="w-1/2 h-full overflow-hidden transition-transform duration-[1800ms] ease-in-out"
      :class="open ? 'translate-x-full' : ''"
    >
      <img
        src="/Door/door.jpg"
        class="h-full pointer-events-none"
        style="
          width: 200%;
          max-width: none;
          object-fit: cover;
          object-position: right center;
          transform: scaleX(-1);
        "
      />
    </div>

    <!-- Click to Enter -->
    <div
      class="absolute inset-0 flex items-end justify-center pb-[5vh] z-10 transition-opacity duration-300"
      :class="clicked ? 'opacity-0' : 'opacity-100'"
    >
      <p
        class="text-white text-[clamp(14px,2vw,24px)] animate-pulse tracking-widest drop-shadow-lg"
      >
        Click to Enter
      </p>
    </div>
  </div>
</template>
