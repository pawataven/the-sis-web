<script setup lang="ts">
import PoetryModal from "@/components/PoetryModal.vue";
import { poetryList } from "@/data/poetryData";
import type { Poetry } from "@/data/poetryData";
import { ref } from "vue";

const selectedPoem = ref<Poetry | null>(null);
const isPoetryModalOpen = useState("poetry-modal-open", () => false);

function openPoem(poem: Poetry) {
  selectedPoem.value = poem;
  isPoetryModalOpen.value = true;
  document.body.style.overflow = "hidden";
}

function closePoem() {
  selectedPoem.value = null;
  isPoetryModalOpen.value = false;
  document.body.style.overflow = "";
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- CONTENT SECTION -->
    <section class="w-full py-[5vw] flex-1">
      <div class="text-center mb-[10vw] max-w-[920px] mx-auto px-[5vw]">
        <h2
          class="text-[8vw] md:text-[96px] text-[#F6EBDD] font-serif"
        >
          Poetry - Love
        </h2>
        <p
          class="text-[#F6EBDD] text-[3.5vw] font-light md:text-[24px] mt-[1vw] leading-relaxed">
          ขอต้อนรับสู่พื้นที่แห่งความสัมพันธ์ ในหมวดหมู่ <span class="font-medium">ความรัก</span> <br />
          ที่ได้ค้นหาไปจนถึงการ กลั่นกรองบทกวี และภาษาดอกไม้<br />
          ที่มีความหมายเกี่ยวข้อง
        </p>
      </div>

      <div class="max-w-275 mx-auto">

        <!-- บทที่ 1 — รูปซ้าย ข้อความขวา -->
        <div class="relative mb-[6vw]">
          <img src="/love/romance 1.png" class="w-full h-auto pointer-events-none" />
          <div class="absolute inset-0 flex items-center pl-[42%] pr-[10%]">
            <div class="flex flex-col items-end text-right gap-[0.6em] w-full">
              <h3 class="font-serif font-medium text-[#2c1a0e]" style="font-size: clamp(14px, 2.8vw, 40px)">พระอภัยมณี</h3>
              <h3 class="font-serif font-medium text-[#2c1a0e]" style="font-size: clamp(12px, 2vw, 36px)">ตอนพระอภัยมณีเกี้ยวนางละเวง</h3>
              <p class="text-[#2c1a0e] font-light" style="font-size: clamp(10px, 1.5vw, 24px)">ผู้แต่ง: สุนทรภู่</p>
              <button @click="poetryList[6] && openPoem(poetryList[6])"
                class="bg-[#E76A87] text-white font-readmore cursor-pointer border border-black rounded-full shadow-md hover:scale-105 transition-transform"
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
        class="w-full h-auto -mt-[35%] object-cover pointer-events-none"
      />
    </div>

    <PoetryModal
      :is-open="selectedPoem !== null"
      :data="selectedPoem"
      @close="closePoem"
    />
  </div>
</template>
