<script setup lang="ts">
import NavigationBar from "@/layouts/NavigationBar.vue";
</script>

<template>
  <section class="relative w-full h-auto overflow-hidden">
    <NuxtImg
      src="/home/Head home.png"
      class="block w-[calc(100%+2px)] max-w-none h-auto select-none pointer-events-none"
    />

    <div class="absolute inset-0">
      <div
        class="relative z-[50] px-2 pt-2 sm:px-4 sm:pt-4 md:px-0 md:pt-8 scale-[0.78] min-[360px]:scale-[0.88] md:scale-100 origin-top"
      >
        <NavigationBar />
      </div>

      <div
        class="absolute inset-x-0 top-[24%] min-[360px]:top-[28%] sm:top-[31%] md:top-[35%] lg:top-[34%] flex justify-center px-4"
      >
        <NuxtImg
          src="/home/บทกลอนซ่อนบุษบา.png"
          class="min-[360px]:max-w-[161px] sm:max-w-[361px] md:max-w-[361px] lg:max-w-[461px] xl:max-w-[631px] h-auto select-none"
          format="webp"
        />
      </div>
    </div>
  </section>
</template>
