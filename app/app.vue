<script setup lang="ts">
import { ref } from "vue";
import DoorLoader from "~/components/DoorLoader.vue";

const loaded = ref(false);
</script>

<template>
  <div class="bg-[#472809] min-h-screen w-full overflow-x-hidden font-sans">
    <DoorLoader @done="loaded = true" />
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
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
