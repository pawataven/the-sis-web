<script setup lang="ts">
import PoetryModal from "@/components/PoetryModal.vue";
import { poetryList } from "@/data/poetryData";
import type { Poetry } from "@/data/poetryData";
import { ref } from "vue";

// set ค่าให้ layout
const flowerSrc = useState("flowerSrc");
const label = useState("label");
flowerSrc.value = "/sadness/sadness-bg.png";
label.value = "sadness";

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
          class="text-[#F6EBDD] text-[3.5vw] md:text-[28px] px-2 text-center mt-[1vw] leading-relaxed"
        >
          ขอต้อนรับสู่พื้นที่แห่งการโอบกอด <span class="font-bold">ความโศกเศร้า...</span> <br />
          สถานที่รวบรวมบทกวีและภาษาดอกไม้ ที่ร้อยเรียงจากหยดน้ำตา <br />
          เพื่อสื่อถึงความหมายอันแสนเจ็บปวดในทุกมิติของชีวิต
        </p>
      </div>
      <!-- บทที่ 1 -->
      <div
        class="flex flex-col md:flex-row items-center gap-6 md:gap-[4vw] max-w-[1400px] mx-auto px-6 md:px-[5vw] mb-16 md:mb-[10vw]"
      >
        <div class="w-full md:w-[55%] flex justify-center md:justify-start">
          <img
            src="/sadness/sadness-img-1.png"
            class="w-[250px] lg:w-[600px] pointer-events-none"
          />
        </div>
        <div
          class="w-full md:w-[45%] flex flex-col items-center md:items-end text-center md:text-right text-[#F6EBDD]"
        >
          <h3 class="text-[24px] lg:text-[40px] mb-1">นิราศอิเหนา</h3>
          <p class="text-[16px] lg:text-[32px] mb-4 md:mb-[1.5vw]">
            ผู้แต่ง: สุนทรภู่
          </p>
          <button
            @click="openPoem(poetryList[4])"
            class="bg-[#E76A87] text-white px-6 py-2 md:px-[2vw] md:py-[0.5vw] rounded-full text-[14px] shadow-md hover:scale-105 transition-transform"
          >
            Read more
          </button>
        </div>
      </div>

      <!-- บทที่ 2 -->
      <div
        class="flex flex-col md:flex-row items-center gap-6 md:gap-[4vw] max-w-[1400px] mx-auto px-6 md:px-[5vw] mb-16 md:mb-[10vw]"
      >
        <!-- ข้อความก่อนบน mobile, desktop จัดซ้าย -->
        <div
          class="w-full md:w-[45%] flex flex-col items-center md:items-start text-center md:text-left text-[#F6EBDD] order-2 md:order-1"
        >
          <h3 class="text-[24px] lg:text-[40px] mb-1">สวัสดิรักษา</h3>
          <p class="text-[16px] lg:text-[32px] mb-4 md:mb-[1.5vw]">
            ผู้แต่ง: สุนทรภู่
          </p>
          <button
            @click="openPoem(poetryList[5])"
            class="bg-[#E76A87] text-white px-6 py-2 md:px-[2vw] md:py-[0.5vw] rounded-full text-[14px] shadow-md hover:scale-105 transition-transform"
          >
            Read more
          </button>
        </div>
        <!-- รูปอยู่ขวา desktop -->
        <div
          class="w-full md:w-[55%] flex justify-center md:justify-end order-1 md:order-2"
        >
          <img
            src="/sadness/sadness-img-2.png"
            class="w-[250px] lg:w-[600px] pointer-events-none"
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
