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
        <img src="/poetry/family-1.png" class="w-[35vw] pointer-events-none" />
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
        <img src="/poetry/family-2.png" class="w-[35vw] pointer-events-none" />
      </div>
    </div>

    <!-- บทที่ 3 -->
    <div
      class="flex items-center justify-between max-w-[1400px] mx-auto px-[5vw] mb-[10vw]"
    >
      <div class="w-1/2 flex justify-start">
        <img src="/poetry/family-3.png" class="w-[35vw] pointer-events-none" />
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

  <div class="w-full mt-auto">
    <img
      src="/poetry/the sis 2.png"
      class="w-full h-auto object-cover pointer-events-none"
    />
  </div>

  <PoetryModal
    :is-open="selectedPoem !== null"
    :data="selectedPoem"
    @close="closePoem"
  />
</template>
