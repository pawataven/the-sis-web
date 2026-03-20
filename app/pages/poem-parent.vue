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
  <div>
    <div
      class="relative bg-[#F3EBDC] overflow-hidden flex flex-col h-[vh] md:h-screen"
    >
      <img
        src="/poetry/red-flower-bg.png"
        class="absolute left-0 top-0 h-full w-auto z-[10] pointer-events-none"
        style="min-width: 120px; max-width: min(35%, 500px)"
      />

      <img
        src="/poetry/leaves-bg.png"
        class="absolute right-0 top-0 h-full w-auto z-[10] pointer-events-none"
        style="min-width: 100px; max-width: min(45%, 650px)"
      />

      <!-- Navbar -->
      <div class="relative z-[50] px-[5vw] md:px-0 scale-[0.85] md:scale-100 origin-top">
        <NavigationBar />
      </div>

      <!-- Poetry + Parent -->
      <div
        class="relative z-[20] flex flex-col items-center justify-center flex-1 px-[5vw] md:px-0"
      >
        <img
          src="/poetry/Layer_1.png"
          class="pointer-events-none h-auto w-[clamp(150px,28vw,580px)] md:w-[28.611vw] md:h-[14.861vw] "
        />
        <div
          class="border border-[#000000] rounded-[160%] text-[#000000] bg-white mt-1 md:mt-5 mb:pt-5  mb-[5vw]"
          style="padding: clamp(4px, 0.7vw, 10px) clamp(16px, 4vw, 56px)"
        >
          <p style="font-size: clamp(14px, 4vw, 70px)">Parent</p>
        </div>
      </div>
    </div>
    <!-- CONTENT SECTION -->
    <section class="w-full py-[10vw]">
      <div class="text-center mb-[10vw]">
        <h2 class="text-[8vw] md:text-[96px] text-[#F6EBDD] italic font-serif">
          Poetry – Parent
        </h2>
        <p
          class="text-[#F6EBDD] text-[3.5vw] md:text-[28px] mt-[1vw] leading-relaxed"
        >
          ขอต้อนรับสู่พื้นที่แห่งความสัมพันธ์ ในหมวดหมู่ ครอบครัว <br />
          <span>ที่ได้ค้นหาไปจนถึงการ กลั่นกรองบทกวี และภาษาดอกไม้</span>
          ที่มีความหมายเกี่ยวข้อง
        </p>
      </div>

      <!-- บทที่ 1 -->
      <div
        class="flex items-center gap-[6vw] max-w-[1400px] mx-auto px-[5vw] mb-[10vw]"
      >
        <div class="w-1/2 flex justify-start">
          <img
            src="/poetry/family-1.png"
            class="w-[35vw] pointer-events-none"
          />
        </div>
        <div class="w-1/2 flex flex-col items-end text-right text-[#F6EBDD]">
          <h3 class="text-[3.2vw] mb-[0.2vw]">เพลงยาวถวายโอวาท</h3>
          <p class="text-[1.6vw] mb-[1.5vw]">ผู้แต่ง: สุนทรภู่</p>
          <button
            @click="openPoem(poetryList[0])"
            class="bg-[#E76A87] text-white px-[2vw] py-[0.5vw] rounded-full text-[1vw] shadow-md hover:scale-105 transition-transform"
          >
            Read more
          </button>
        </div>
      </div>

      <!-- บทที่ 2 -->
      <div
        class="flex items-center justify-between max-w-[1400px] mx-auto px-[5vw] mb-[10vw]"
      >
        <div class="w-1/2 flex flex-col items-start text-left text-[#F6EBDD]">
          <h3 class="text-[3.2vw] mb-[0.2vw]">สวัสดิรักษา</h3>
          <p class="text-[1.6vw] mb-[1.5vw]">ผู้แต่ง: สุนทรภู่</p>
          <button
            @click="openPoem(poetryList[1])"
            class="bg-[#E76A87] text-white px-[2vw] py-[0.5vw] rounded-full text-[1vw] shadow-md hover:scale-105 transition-transform"
          >
            Read more
          </button>
        </div>
        <div class="w-1/2 flex justify-end">
          <img
            src="/poetry/family-2.png"
            class="w-[35vw] pointer-events-none"
          />
        </div>
      </div>

      <!-- บทที่ 3 -->
      <div
        class="flex items-center justify-between max-w-[1400px] mx-auto px-[5vw] mb-[10vw]"
      >
        <div class="w-1/2 flex justify-start">
          <img
            src="/poetry/family-3.png"
            class="w-[35vw] pointer-events-none"
          />
        </div>
        <div class="w-1/2 flex flex-col items-end text-right text-[#F6EBDD]">
          <h3 class="text-[3.2vw] mb-[0.2vw]">ขุนช้างขุนแผน</h3>
          <p class="text-[1.6vw] mb-[1.5vw]">ผู้แต่ง: สุนทรภู่</p>
          <button
            @click="openPoem(poetryList[2])"
            class="bg-[#E76A87] text-white px-[2vw] py-[0.5vw] rounded-full text-[1vw] shadow-md hover:scale-105 transition-transform"
          >
            Read more
          </button>
        </div>
      </div>
    </section>

    <div class="w-full flex justify-center mt-[-5vw]">
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
