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
  <div>
    <!-- CONTENT SECTION -->
    <section class="w-full py-[10vw] flex-1">
      <div class="text-center mb-[10vw]">
        <h2 class="text-[8vw] md:text-[96px] text-[#F6EBDD] italic font-serif">
          Poetry – sadness
        </h2>
        <p
          class="text-[#F6EBDD] text-[3.5vw] md:text-[28px] mt-[1vw] leading-relaxed"
        >
          ขอต้อนรับสู่พื้นที่แห่งความสัมพันธ์ ในหมวดหมู่ ความโศ้กเศร้า <br />
          <span>สถานที่รวบรวมบทกวีและภาษาดอกไม้ ที่ร้อยเรียงจากหยดน้ำตา</span>
          เพื่อสื่อถึงความหมายอันแสนเจ็บปวดในทุกมิติของชีวิต
        </p>
      </div>
      <!-- บทที่ 1 -->
      <div
        class="flex items-center gap-[4vw] max-w-[1400px] mx-auto px-[5vw] mb-[10vw]"
      >
        <div class="w-[55%] flex justify-start">
          <img
            src="/sadness/sadness-img-1.png"
            class="w-full max-w-[45vw] pointer-events-none"
          />
        </div>
        <div class="w-[45%] flex flex-col items-end text-right text-[#F6EBDD]">
          <h3 class="text-[3.2vw] mb-[0.2vw]">นิราศอิเหนา</h3>
          <p class="text-[1.6vw] mb-[1.5vw]">ผู้แต่ง: สุนทรภู่</p>
          <button
            @click="openPoem(poetryList[4])"
            class="bg-[#E76A87] text-white px-[2vw] py-[0.5vw] rounded-full text-[1vw] shadow-md hover:scale-105 transition-transform"
          >
            Read more
          </button>
        </div>
      </div>

      <!-- บทที่ 2 -->
      <div
        class="flex items-center justify-between gap-[4vw] max-w-[1400px] mx-auto px-[5vw] mb-[10vw]"
      >
        <div class="w-[45%] flex flex-col items-start text-left text-[#F6EBDD]">
          <h3 class="text-[3.2vw] mb-[0.2vw]">สวัสดิรักษา</h3>
          <p class="text-[1.6vw] mb-[1.5vw]">ผู้แต่ง: สุนทรภู่</p>
          <button
            @click="openPoem(poetryList[5])"
            class="bg-[#E76A87] text-white px-[2vw] py-[0.5vw] rounded-full text-[1vw] shadow-md hover:scale-105 transition-transform"
          >
            Read more
          </button>
        </div>
        <div class="w-[55%] flex justify-end">
          <img
            src="/sadness/sadness-img-2.png"
            class="w-full max-w-[45vw] pointer-events-none"
          />
        </div>
      </div>
    </section>

    <div class="w-full">
      <img
        src="/poetry/the sis 2.png"
        class="w-full h-auto object-cover pointer-events-none"
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

