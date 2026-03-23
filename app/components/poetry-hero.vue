<script setup lang="ts">
import NavigationBar from "@/layouts/NavigationBar.vue";

const props = defineProps<{
  flowerSrc: string;
  label: string;
}>();
</script>

<template>
  <div>
    <div
      class="relative bg-[#F3EBDC] overflow-hidden flex flex-col h-[60vh] md:h-screen"
    >
      <!-- ดอกไม้ซ้าย — -->
      <Transition name="flower" mode="out-in">
        <img
          :key="flowerSrc"
          :src="flowerSrc"
          class="absolute left-0 top-0 h-full w-auto z-[10] pointer-events-none"
          style="min-width: 120px; max-width: min(35%, 500px)"
        />
      </Transition>

      <!-- ใบไม้ขวา -->
      <img
        src="/poetry/leaves-bg.png"
        class="absolute right-0 top-0 h-full w-auto z-[10] pointer-events-none"
        style="min-width: 100px; max-width: min(45%, 650px)"
      />

      <!-- Navbar -->
      <div
        class="relative z-[50] px-[5vw] md:px-0 scale-[0.85] md:scale-100 origin-top"
      >
        <NavigationBar />
      </div>

      <!-- Poetry + label -->
      <div
        class="relative z-[20] flex flex-col items-center justify-center flex-1 px-[5vw] md:px-0"
      >
        <img
          src="/poetry/Layer_1.png"
          class="pointer-events-none h-auto w-[clamp(150px,28vw,580px)]"
        />
        <!-- คำในวงรี  -->
        <Transition name="label" mode="out-in" appear>
          <div
            :key="label"
            class="border border-[#000000] rounded-[160%] text-[#000000] bg-white mt-1 md:mt-5 mb-[5vw]"
            style="padding: clamp(4px, 0.7vw, 10px) clamp(16px, 4vw, 56px)"
          >
            <p style="font-size: clamp(14px, 4vw, 70px)">{{ label }}</p>
          </div>
        </Transition>
      </div>
    </div>

    <!-- content -->
    <slot />
  </div>
</template>

<style>
/* ดอกไม้ — slide จากซ้าย */
.flower-enter-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.flower-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
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
  transition: opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s;
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
