<script setup lang="ts">
import NavigationBar from './NavigationBar.vue';

</script>

<template>
  <div class="w-full min-h-screen bg-[#472809]">

    <NavigationBar />
    <main>
      <slot />
    </main>

  </div>
</template>