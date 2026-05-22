<script setup lang="ts">
import PoetryHero from "~/components/poetry-hero.vue";
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
  <!-- CONTENT -->
  <section class="w-full pt-[10vw] pb-0">
    <div class="text-center mb-[10vw]">
      <h2 class="text-[8vw] md:text-[96px] text-[#F6EBDD] italic font-serif">
        Poetry – Parent
      </h2>
      <p
        class="text-[#F6EBDD] text-[3.5vw] md:text-[28px] mt-[1vw] leading-relaxed"
      >
        ขอต้อนรับสู่พื้นที่แห่งความสัมพันธ์ ในหมวดหมู่ <span class="font-bold">ครอบครัว</span> <br />
        ที่ได้ค้นหาไปจนถึงการ กลั่นกรองบทกวี และภาษาดอกไม้ <br />
        ที่มีความหมายเกี่ยวข้อง
      </p>
    </div>

    <!-- บทที่ 1 -->
    <div class="relative max-w-[900px] mx-auto mb-16 md:mb-[24vw] px-6 md:px-[5vw]">
      <div class="bg-white rounded-2xl shadow-md py-10 pr-8 md:pr-12" style="padding-left: 44%;">
        <div class="flex flex-col items-end text-right">
          <h3 class="text-[#2c1a0e] text-[22px] lg:text-[36px] mb-1">เพลงยาวถวายโอวาท</h3>
          <p class="text-[#2c1a0e] text-[16px] lg:text-[24px] mb-6">ผู้แต่ง: สุนทรภู่</p>
          <button @click="poetryList[0] && openPoem(poetryList[0])"
            class="bg-[#E76A87] text-white px-6 py-2 rounded-full text-[14px] shadow-md hover:scale-105 transition-transform">
            Read more
          </button>
        </div>
      </div>
      <img src="/poetry/family-1.png"
        class="absolute top-1/2 -translate-y-1/2 pointer-events-none z-10"
        style="left: -2%; width: 50%;" />
    </div>

    <!-- บทที่ 2 -->
    <div class="relative max-w-[900px] mx-auto mb-16 md:mb-[24vw] px-6 md:px-[5vw]">
      <div class="bg-white rounded-2xl shadow-md py-10 pr-8 md:pr-12" style="padding-left: 44%;">
        <div class="flex flex-col items-end text-right">
          <h3 class="text-[#2c1a0e] text-[22px] lg:text-[36px] mb-1">สวัสดิรักษา</h3>
          <p class="text-[#2c1a0e] text-[16px] lg:text-[24px] mb-6">ผู้แต่ง: สุนทรภู่</p>
          <button @click="poetryList[1] && openPoem(poetryList[1])"
            class="bg-[#E76A87] text-white px-6 py-2 rounded-full text-[14px] shadow-md hover:scale-105 transition-transform">
            Read more
          </button>
        </div>
      </div>
      <img src="/poetry/family-2.png"
        class="absolute top-1/2 -translate-y-1/2 pointer-events-none z-10"
        style="left: -2%; width: 50%;" />
    </div>

    <!-- บทที่ 3 -->
    <div class="relative max-w-[900px] mx-auto mb-8 md:mb-[4vw] px-6 md:px-[5vw]">
      <div class="bg-white rounded-2xl shadow-md py-10 pr-8 md:pr-12" style="padding-left: 44%;">
        <div class="flex flex-col items-end text-right">
          <h3 class="text-[#2c1a0e] text-[22px] lg:text-[36px] mb-1">ขุนช้างขุนแผน</h3>
          <p class="text-[#2c1a0e] text-[16px] lg:text-[24px] mb-6">ผู้แต่ง: สุนทรภู่</p>
          <button @click="poetryList[2] && openPoem(poetryList[2])"
            class="bg-[#E76A87] text-white px-6 py-2 rounded-full text-[14px] shadow-md hover:scale-105 transition-transform">
            Read more
          </button>
        </div>
      </div>
      <img src="/poetry/family-3.png"
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
</template>
