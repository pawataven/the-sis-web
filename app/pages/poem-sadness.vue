<script setup lang="ts">
import PoetryModal from "@/components/PoetryModal.vue";
import NavigationBar from "@/layouts/NavigationBar.vue";
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
    <div
      class="relative bg-[#F3EBDC] overflow-hidden flex flex-col h-[60vh] md:h-screen"
    >
      <!-- ดอกไม้ซ้าย -->
      <img
        src="/sadness/sadness-bg.png"
        class="absolute left-0 bottom-0 w-auto z-[20] pointer-events-none translate-y-[6.5%]"
        style="
          height: min(90%, 650px);
          width: clamp(200px, 32%, 520px);
          max-width: none;
        "
      />

      <!-- ใบไม้ขวา -->
      <img
        src="/poetry/leaves-bg.png"
        class="absolute right-0 bottom-0 w-auto z-[10] pointer-events-none translate-y-[0.5%]"
        style="height: min(90%, 650px); max-width: min(45%, 650px)"
      />
      <!-- Navbar -->
      <div
        class="relative z-[50] px-[5vw] md:px-0 scale-[0.85] md:scale-100 origin-top"
      >
        <NavigationBar />
      </div>

      <!-- Poetry + Parent -->
      <div
        class="relative z-[20] flex flex-col items-center justify-center flex-1 px-[5vw] md:px-0"
      >
        <img
          src="/poetry/Layer_1.png"
          class="pointer-events-none h-auto w-[clamp(150px,28vw,580px)] md:w-[28.611vw] md:h-[14.861vw]"
        />
        <div
          class="border border-[#000000] rounded-[160%] text-[#000000] bg-white mt-1 md:mt-5 mb:pt-5 mb-[5vw]"
          style="padding: clamp(4px, 0.7vw, 10px) clamp(16px, 4vw, 56px)"
        >
          <p style="font-size: clamp(14px, 4vw, 70px)">Sadness</p>
        </div>
      </div>
    </div>
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
