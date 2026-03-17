<script setup lang="ts">
import NavigationBar from "~/layouts/NavigationBar.vue";
</script>

<template>
  <div class="relative min-h-screen overflow-hidden mb-100">
    <div
      class="absolute inset-x-0 top-0 h-full bg-[#7DB2D3] rounded-b-[100vw] scale-x-[1.3] origin-top z-0"
    />

    <div class="relative z-10 pt-10">
      <NavigationBar />
    </div>

    <!-- CONTENT -->
    <div class="">
      <NuxtImg src="" />
    </div>
  </div>
</template>