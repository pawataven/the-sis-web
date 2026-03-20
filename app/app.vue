<script setup lang="ts">
import { ref } from "vue";
import DoorLoader from "~/components/DoorLoader.vue";

const loaded = ref(false);
</script>

<template>
  <div class="bg-[#472809] min-h-screen w-full overflow-x-hidden font-sans">
    
    <DoorLoader @done="loaded = true" />

    <div
      :class="loaded ? 'blur-0 scale-100 opacity-100' : 'blur-xl scale-110 opacity-60'"
      class="transition-all duration-[2000ms]"
    >
      <NuxtRouteAnnouncer />

      <NuxtLayout>
        <NuxtPage :transition="{
          name: 'page',
          mode: 'out-in'
        }" />
      </NuxtLayout>

    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background: #472809;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page-enter-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(15px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>