<script setup lang="ts">
import NavigationBar from './NavigationBar.vue';

</script>

<template>
  <NavigationBar />
  <div class="w-full min-h-screen ">

    
    <main>
      <slot />
    </main>

  </div>
</template>