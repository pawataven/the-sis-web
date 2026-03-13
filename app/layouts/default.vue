<script setup lang="ts">
import NavigationBar from './NavigationBar.vue';
</script>

<template>
  <div class="relative w-full min-h-screen">
    
    <NavigationBar />

    <slot />

  </div>
</template>