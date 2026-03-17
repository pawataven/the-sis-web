<script setup lang="ts">
import NavigationBar from "./NavigationBar.vue";

const route = useRoute();
</script>

<template>
  <div class="w-full min-h-screen">
    <main>
      <slot />
    </main>
  </div>
</template>
