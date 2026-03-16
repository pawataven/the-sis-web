<script setup lang="ts">
import { ref } from "vue";
import DoorLoader from "~/components/DoorLoader.vue";

const loaded = ref(false);
</script>

<template>
  <div class="bg-[#472809] min-h-screen w-full overflow-x-hidden font-sans">
    
    <DoorLoader @done="loaded = true" />

    <div
      :class="
        loaded ? 'blur-0 scale-100 opacity-100' : 'blur-xl scale-110 opacity-60'
      "
      class="transition-all duration-[2000ms]"
    >
      <NuxtRouteAnnouncer />

      <NuxtLayout>
        <NuxtPage />
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
</style>