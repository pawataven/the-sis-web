<script setup lang="ts">
import NavigationBar from "~/layouts/NavigationBar.vue"
import { quizResults } from "@/data/quizResultData"
import type { QuizResult } from "@/data/quizResultData"
import { computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

const result = computed<QuizResult>(
  () => quizResults.find((r) => r.id === route.query.type) ?? quizResults[0]!
)
</script>

<template>
  <div
    class="flex flex-col min-h-screen"
    style="
      background-image: url('/Learnmore/painted-relief-texture (1).jpg');
      background-size: cover;
      background-position: center top;
      background-repeat: no-repeat;
      background-attachment: fixed;
    "
  >
    <!-- Navbar -->
    <div class="relative z-50 px-[5vw] md:px-0 scale-[0.85] md:scale-100 origin-top">
      <NavigationBar />
    </div>

    <main class="flex-1 flex flex-col items-center py-[6vw] px-[5vw]">

      <!-- Label -->
      <p class="text-[#2c1a0e] tracking-[0.25em] text-[clamp(11px,1vw,14px)] uppercase mb-3">
        {{ result.label }}
      </p>

      <!-- Title -->
      <h1
        class="text-[#2c1a0e] italic font-serif text-center leading-tight mb-[3vw]"
        style="font-size: clamp(32px, 5.5vw, 80px)"
      >
        {{ result.bouquetTitle }}
      </h1>

      <!-- Bouquet Image -->
      <div class="mb-[3vw]">
        <img
          :src="result.flowerImage"
          :alt="result.bouquetTitle"
          class="h-auto pointer-events-none select-none"
          style="width: clamp(260px, 42vw, 600px)"
        />
      </div>

      <!-- Tags -->
      <div class="flex items-center gap-4 mb-[3vw]">
        <template v-for="(tag, i) in result.tags" :key="tag">
          <span class="text-[#2c1a0e] text-[clamp(13px,1.2vw,18px)] font-serif">
            {{ tag }}
          </span>
          <span
            v-if="i < result.tags.length - 1"
            class="text-[#2c1a0e] opacity-40 text-[18px]"
          >|</span>
        </template>
      </div>

      <!-- Description -->
      <div class="max-w-[700px] text-center mb-[3vw]">
        <p
          class="text-[#2c1a0e] font-serif leading-[2] text-[clamp(13px,1.1vw,16px)]"
        >
          {{ result.description }}
        </p>
      </div>

      <!-- Poem link button -->
      <NuxtLink
        :to="result.poemPath"
        class="bg-[#E76A87] text-white px-8 py-2 rounded-full text-[clamp(13px,1vw,16px)] shadow-md hover:scale-105 transition-transform"
      >
        อ่านบทกวีที่เกี่ยวข้อง →
      </NuxtLink>

    </main>

    <!-- Boat footer -->
    <div class="w-full mt-auto">
      <img
        src="/poetry/ท่าเรือ.png"
        class="w-full h-auto object-cover pointer-events-none"
      />
    </div>
  </div>
</template>
