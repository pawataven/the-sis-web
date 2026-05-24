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
  <div>
    <!-- CONTENT SECTION -->
    <section class="w-full py-[10vw] flex-1">
      <div class="text-center mb-[10vw]">
        <h2 class="text-[8vw] md:text-[96px] text-[#F6EBDD] italic font-serif">
          Poetry – sadness
        </h2>
        <p
          class="text-[#F6EBDD] text-[3.5vw] md:text-[28px] px-2 text-center mt-[1vw] leading-relaxed"
        >
          ขอต้อนรับสู่พื้นที่แห่งการโอบกอด
          <span class="font-bold">ความโศกเศร้า...</span> <br />
          สถานที่รวบรวมบทกวีและภาษาดอกไม้ ที่ร้อยเรียงจากหยดน้ำตา <br />
          เพื่อสื่อถึงความหมายอันแสนเจ็บปวดในทุกมิติของชีวิต
        </p>
      </div>
      <div class="max-w-275 mx-auto px-[3vw]">

        <!-- บทที่ 1 — รูปซ้าย ข้อความขวา -->
        <div class="relative mb-[6vw]">
          <img src="/sadness/sad 1.png" class="w-full h-auto pointer-events-none" />
          <div class="absolute inset-0 flex items-center pl-[42%] pr-[10%]">
            <div class="flex flex-col items-end text-right gap-[0.6em] w-full">
              <h3 class="italic font-serif text-[#2c1a0e]" style="font-size: clamp(14px, 2.8vw, 42px)">นิราศอิเหนา</h3>
              <p class="text-[#2c1a0e]" style="font-size: clamp(10px, 1.5vw, 24px)">ผู้แต่ง: สุนทรภู่</p>
              <button @click="poetryList[4] && openPoem(poetryList[4])"
                class="bg-[#E76A87] text-white rounded-full shadow-md hover:scale-105 transition-transform"
                style="font-size: clamp(10px, 1.1vw, 16px); padding: clamp(4px,0.5vw,8px) clamp(12px,1.8vw,26px)">
                Read more
              </button>
            </div>
          </div>
        </div>

        <!-- บทที่ 2 — รูปขวา ข้อความซ้าย -->
        <div class="relative mb-[6vw]">
          <img src="/sadness/sad 2.png" class="w-full h-auto pointer-events-none" />
          <div class="absolute inset-0 flex items-center pr-[42%] pl-[10%]">
            <div class="flex flex-col items-start text-left gap-[0.6em] w-full">
              <h3 class="italic font-serif text-[#2c1a0e]" style="font-size: clamp(14px, 2.8vw, 42px)">สวัสดิรักษา</h3>
              <p class="text-[#2c1a0e]" style="font-size: clamp(10px, 1.5vw, 24px)">ผู้แต่ง: สุนทรภู่</p>
              <button @click="poetryList[5] && openPoem(poetryList[5])"
                class="bg-[#E76A87] text-white rounded-full shadow-md hover:scale-105 transition-transform"
                style="font-size: clamp(10px, 1.1vw, 16px); padding: clamp(4px,0.5vw,8px) clamp(12px,1.8vw,26px)">
                Read more
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>

    <div class="w-full">
      <img
        src="/poetry/ท่าเรือ.png"
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
