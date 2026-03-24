<script setup lang="ts">
import PoetryModal from "@/components/PoetryModal.vue";

import { poetryList } from "@/data/poetryData";
import type { Poetry } from "@/data/poetryData";
import { ref } from "vue";


const selectedPoem = ref<Poetry | null>(null);

function openPoem(poem: Poetry) {
  selectedPoem.value = poem;
  document.body.style.overflow = "hidden";
}

function closePoem() {
  selectedPoem.value = null;
  document.body.style.overflow = "";
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- CONTENT SECTION -->
    <section class="w-full py-[10vw] px-[5vw] md:px-0">
      <div class="text-center mb-[10vw] max-w-[920px] mx-auto px-[5vw]">
        <h2
          class="text-[#F6EBDD] italic font-serif"
          style="font-size: clamp(24px, 6vw, 14.861vw)"
        >
          Poetry - Love
        </h2>
        <p
          class="text-[#F6EBDD] text-[3.5vw] md:text-[28px] mt-[1vw] leading-relaxed"
          style="font-size: clamp(14px, 3.5vw, 28px)"
        >
          ขอต้อนรับสู่พื้นที่แห่งความสัมพันธ์ ในหมวดหมู่ <span class="font-bold">ความรัก</span> <br />
          ที่ได้ค้นหาไปจนถึงการ กลั่นกรองบทกวี และภาษาดอกไม้<br />
          ที่มีความหมายเกี่ยวข้อง
        </p>
      </div>

      <!-- บทที่ 1 -->
      <div
        class="flex flex-col md:flex-row items-center gap-6 md:gap-[6vw] max-w-[1400px] mx-auto px-6 md:px-[5vw] mb-16 md:mb-[10vw]"
      >
        <div class="w-full md:w-1/2 flex justify-center md:justify-start">
          <NuxtImg
            src="/love/love.png"
            class="w-[250px] lg:w-[600px] pointer-events-none"
            format="webp"
          />
        </div>
        <div
          class="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right text-[#F6EBDD]"
        >
          <h3 class="text-[24px] lg:text-[40px] mb-1">พระอภัยมณี</h3>
          <h3 class="text-[20px] lg:text-[36px] mb-1">
            ตอนพระอภัยมณีเกี้ยวนางละเวง
          </h3>
          <p class="text-[16px] lg:text-[32px] mb-4 md:mb-[1.5vw]">
            ผู้แต่ง: สุนทรภู่
          </p>
          <button
            @click="openPoem(poetryList[6])"
            class="bg-[#E76A87] text-white px-6 py-2 md:px-[2vw] md:py-[0.5vw] rounded-full text-[14px] shadow-md hover:scale-105 transition-transform"
          >
            Read more
          </button>
        </div>
      </div>
    </section>

    <div class="w-full mt-auto">
      <NuxtImg
        src="/poetry/the sis 2.png"
        class="w-full h-auto object-contain pointer-events-none"
        format="webp"
      />
    </div>
    <!-- Modal — อันเดียวพอ -->

    <PoetryModal
      :is-open="selectedPoem !== null"
      :data="selectedPoem"
      @close="closePoem"
    />
  </div>
</template>
