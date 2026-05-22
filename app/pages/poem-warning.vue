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
    <section class="w-full py-[10vw] px-[5vw] md:px-0 flex-1">
      <div class="text-center mb-[10vw] max-w-[920px] mx-auto px-[5vw]">
        <h2
          class="text-[#F6EBDD] italic font-serif"
          style="font-size: clamp(24px, 6vw, 14.861vw)"
        >
          Poetry - Warning
        </h2>
        <p
          class="text-[#F6EBDD] mt-[1vw] leading-relaxed"
          style="font-size: clamp(14px, 3.5vw, 28px)"
        >
          ขอต้อนรับสู่พื้นที่แห่ง คติธรรมและเครื่องเตือนใจ <br />
          <span
            >เพราะบทกวีมิได้ร้อยเรียงเพียงเพื่อความเพ้อฝัน และภาษาดอกไม้</span
          >
          ไม่ได้มีไว้เพียงเพื่อบอกรัก เช่นเดียวกัน
        </p>
      </div>

      <div class="relative max-w-[900px] mx-auto mb-16 md:mb-[8vw] px-6 md:px-[5vw]">
        <div class="bg-white rounded-2xl shadow-md py-10 pr-8 md:pr-12" style="padding-left: 44%;">
          <div class="flex flex-col items-end text-right">
            <h3 class="text-[#2c1a0e] text-[22px] lg:text-[36px] mb-1">พระอภัยมณี</h3>
            <h3 class="text-[#2c1a0e] text-[18px] lg:text-[28px] mb-1">ตอนสุดสาครเข้าเมืองการะเวก</h3>
            <p class="text-[#2c1a0e] text-[16px] lg:text-[24px] mb-6">ผู้แต่ง: สุนทรภู่</p>
            <button
              @click="poetryList[3] && openPoem(poetryList[3])"
              class="bg-[#E76A87] text-white px-6 py-2 rounded-full text-[14px] shadow-md hover:scale-105 transition-transform"
            >
              Read more
            </button>
          </div>
        </div>
        <img src="/warning/warning 1 1.png"
          class="absolute top-1/2 -translate-y-1/2 pointer-events-none z-10"
          style="left: -2%; width: 50%;" />
      </div>
    </section>

    <div class="w-full mt-auto">
      <img
        src="/poetry/ท่าเรือ.png"
        class="w-full h-auto object-cover pointer-events-none"
      />
    </div>

    <PoetryModal
      :is-open="selectedPoem !== null"
      :data="selectedPoem"
      @close="closePoem"
    />
  </div>
</template>
