<script setup lang="ts">
import NavigationBar from "@/layouts/NavigationBar.vue";

const route = useRoute();
const normalizedPath = computed(() => route.path.replace(/\/+$/, "") || "/");

const heroMap: Record<
  string,
  {
    flowerSrc: string;
    label: string;
    flowerClass?: string;
    flowerStyle?: string;
    titleSrc?: string;
  }
> = {
  "/poem-parent": {
    flowerSrc: "/poetry/ดอกหน้า Poetry.png",
    label: "Parent",
  },
  "/poem-warning": {
    flowerSrc: "/warning/warning.png",
    label: "Warning",
    flowerStyle: "top: 0; height: 100%; width: auto;",
  },
  "/poem-love": {
    flowerSrc: "/love/Love head.png",
    label: "Love",
    flowerStyle: "top: 0; height: 100%; width: auto;",
  },
  "/poem-sadness": {
    flowerSrc: "/sadness/sadness-bg.png",
    label: "Sadness",
    flowerStyle: "top:6.4%;",
  },
  "/flowers": {
    flowerSrc: "/flowers/Flowers.png",
    label: "Flowers",
    titleSrc: "/flowers/Group 34.png",
  },
};
const current = computed(
  () =>
    heroMap[normalizedPath.value] ?? {
      flowerSrc: "/poetry/red-flower-bg.png",
      label: "",
    },
);
</script>

<template>
  <div>
    <div
      class="relative overflow-visible flex flex-col h-[50vw]"
      style="
        background-image: url('/Learnmore/painted-relief-texture (1).jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    >
      <Transition name="flower" mode="out-in">
        <img
          :key="current.flowerSrc"
          :src="current.flowerSrc"
          class="absolute left-0 z-[10] pointer-events-none h-full w-auto"
          :style="current.flowerStyle ?? 'top: 0; max-width: min(35%, 500px)'"
        />
      </Transition>

      <img
        src="/poetry/leaves-bg.png"
        class="absolute right-0 top-0 h-full w-auto z-[10] pointer-events-none"
      />

      <div
        class="relative z-[50] px-[5vw] md:px-0 scale-[0.85] md:scale-100 origin-top"
      >
        <NavigationBar />
      </div>

      <div
        class="relative z-[20] flex flex-col items-center justify-center flex-1 px-[5vw] md:px-0"
      >
        <!-- custom title image (e.g. /flowers) -->
        <template v-if="current.titleSrc">
          <Transition name="label" mode="out-in">
            <img
              :key="current.titleSrc"
              :src="current.titleSrc"
              class="pointer-events-none h-auto w-[clamp(150px,28vw,580px)]"
            />
          </Transition>
        </template>

        <!-- default: Poetry title + oval label badge -->
        <template v-else>
          <img
            src="/poetry/Layer_1.png"
            class="pointer-events-none h-auto w-[clamp(150px,28vw,580px)]"
          />
          <Transition name="label" mode="out-in">
            <div
              :key="current.label"
              class="border border-[#000000] rounded-[160%] text-[#000000] bg-white mt-1 md:mt-5 mb-[5vw]"
              style="padding: clamp(4px, 0.7vw, 10px) clamp(16px, 4vw, 56px)"
            >
              <p style="font-size: clamp(14px, 4vw, 70px)">{{ current.label }}</p>
            </div>
          </Transition>
        </template>
      </div>
    </div>
    <slot />
  </div>
</template>
<style>
/* ดอกไม้ — slide จากซ้าย */
.flower-enter-active {
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}
.flower-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}
.flower-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}
.flower-leave-to {
  opacity: 0;
  transform: translateX(40px);
}

/* คำในวงรี — fade + scale ขึ้นมา */
.label-enter-active {
  transition:
    opacity 0.5s ease 0.2s,
    transform 0.5s ease 0.2s;
}
.label-leave-active {
  transition: opacity 0.3s ease;
}
.label-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(10px);
}
.label-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
