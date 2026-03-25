<script setup lang="ts">
import { flowersList } from "@/data/flowersData";
import NavigationBar from "@/layouts/NavigationBar.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Hero -->
    <div
      class="relative bg-[#F3EBDC] overflow-visible flex flex-col h-[60vw]"
    >
      <img
        src="/flowers/flower-bg.png"
        class="absolute left-0 top-0 h-full w-auto z-[10] pointer-events-none"
      />
      <img
        src="/poetry/leaves-bg.png"
        class="absolute right-0 top-0 h-full w-auto z-[10] pointer-events-none"
      />

      <!-- Navbar -->
      <div
        class="relative z-[50] px-[5vw] md:px-0 scale-[0.85] md:scale-100 origin-top"
      >
        <NavigationBar />
      </div>

      <!-- Flowers title -->
      <div class="relative z-[20] flex items-center justify-center flex-1">
        <img
          src="/flowers/Group 34.png"
          class="pointer-events-none h-auto w-[clamp(150px,28vw,580px)]"
        />
      </div>
    </div>

    <!-- Flower list -->
    <section class="w-full py-[5vw] flex-1">
      <div class="max-w-[900px] mx-auto px-[5vw]">
        <div
          v-for="flower in flowersList"
          :key="flower.id"
          class="flex items-center gap-[4vw] mb-[6vw]"
        >
          <div class="flex-shrink-0">
            <img
              :src="flower.imageSrc"
              class="w-[25vw] max-w-[200px] h-auto object-contain pointer-events-none"
            />
          </div>
          <div class="flex flex-col">
            <h2
              class="text-[#F6EBDD] italic font-serif mb-2"
              style="font-size: clamp(20px, 3vw, 48px)"
            >
              {{ flower.name }}
            </h2>
            <p
              class="text-[#F6EBDD] leading-relaxed"
              style="font-size: clamp(12px, 1.5vw, 22px)"
            >
              {{ flower.meaning }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- หญ้า -->
    <div class="w-full mt-auto">
      <img
        src="/poetry/the sis 2.png"
        class="w-full h-auto object-cover pointer-events-none"
      />
    </div>
  </div>
</template>
