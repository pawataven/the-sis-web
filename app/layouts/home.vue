<script setup lang="ts">
import NavigationBar from './NavigationBar.vue'
</script>

<template>
<div class="w-full min-h-screen bg-[#472809] overflow-x-hidden pb-150">

  <div class="relative w-full flex justify-center overflow-hidden">

    <div
      class="absolute
             top-0
             left-1/2 -translate-x-1/2
             w-[160vw]
             min-h-full
             pb-[40vh]
             bg-[#7DB2D3]
             rounded-b-[100vw]">
    </div>

    <div class="relative z-10 w-full max-w-[1440px] px-4">

      <div class="flex justify-center pt-10">
        <NavigationBar />
      </div>

      <div class="flex justify-center pt-24 pb-40">
        <slot />
      </div>
    </div>
  </div>

</div>
</template>