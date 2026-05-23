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
    <section class="w-full py-[10vw] flex-1">
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

      <div class="max-w-275 mx-auto px-[3vw]">

        <!-- บทที่ 1 — รูปซ้าย ข้อความขวา -->
        <div class="relative mb-[6vw]">
          <img src="/warning/warn 1.png" class="w-full h-auto pointer-events-none" />
          <div class="absolute inset-0 flex items-center pl-[42%] pr-[10%]">
            <div class="flex flex-col items-end text-right gap-[0.6em] w-full">
              <h3 class="italic font-serif text-[#2c1a0e]" style="font-size: clamp(14px, 2.8vw, 42px)">พระอภัยมณี</h3>
              <h3 class="italic font-serif text-[#2c1a0e]" style="font-size: clamp(12px, 2vw, 30px)">ตอนสุดสาครเข้าเมืองการะเวก</h3>
              <p class="text-[#2c1a0e]" style="font-size: clamp(10px, 1.5vw, 24px)">ผู้แต่ง: สุนทรภู่</p>
              <button @click="poetryList[3] && openPoem(poetryList[3])"
                class="bg-[#E76A87] text-white rounded-full shadow-md hover:scale-105 transition-transform"
                style="font-size: clamp(10px, 1.1vw, 16px); padding: clamp(4px,0.5vw,8px) clamp(12px,1.8vw,26px)">
                Read more
              </button>
            </div>
          </div>
        </div>

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
