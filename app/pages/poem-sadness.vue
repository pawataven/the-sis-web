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
    <section class="w-full py-[5vw] flex-1">
     <div class="relative mb-[10vw] mx-[5vw] bg-white rounded-[clamp(16px,2.5vw,36px)] overflow-hidden">
      <!-- ม่านซ้าย (กลับด้าน) -->
      <img
        src="/poetry/bandner-parent.png"
        class="absolute left-0 top-0 h-full w-auto pointer-events-none select-none scale-x-[-1]"
      />
      <!-- ม่านขวา -->
      <img
        src="/poetry/bandner-parent.png"
        class="absolute right-0 top-0 h-full w-auto pointer-events-none select-none"
      />
      <!-- ข้อความ -->
      <div class="relative z-10 text-center py-[clamp(24px,4vw,56px)] px-[clamp(80px,16vw,260px)]">
        <h2 class="text-[8vw] md:text-[96px] text-[#472809] font-serif">
          Poetry - Sadness
        </h2>
        <p
          class="text-[#472809] text-[3vw] font-light md:text-[22px] mt-[1vw] leading-relaxed"
        >
          ขอต้อนรับสู่พื้นที่แห่งการโอบกอด<span class="font-medium">ความโศกเศร้า...</span> <br />
         สถานที่รวบรวมบทกวีและภาษาดอกไม้ ที่ร้อยเรียงจากหยดน้ำตา<br />
          เพื่อสื่อถึงความหมายอันแสนเจ็บปวดในทุกมิติของชีวิต
        </p>
      </div>
    </div>
    <!-- ลายเพชรคั่น -->
    <div class="w-full overflow-hidden flex items-center justify-center my-[2vw]" style="gap: clamp(6px, 1vw, 16px)">
      <img
        v-for="i in 50"
        :key="i"
        src="/poetry/thai.png"
        class="flex-none pointer-events-none select-none"
        style="height: clamp(18px, 2.8vw, 42px); width: auto;"
      />
    </div>

      <div class="max-w-275 mx-auto">

        <!-- บทที่ 1 — รูปซ้าย ข้อความขวา -->
        <div class="relative mb-[6vw]">
          <img src="/sadness/sad 1.png" loading="lazy" alt="ภาพประกอบบทกวีนิราศอิเหนา ของสุนทรภู่ สื่อถึงความโศกเศร้าและความรักที่ตัดไม่ขาด ความโหยหาคนรักที่พลัดพราก" class="w-full h-auto pointer-events-none" />
          <!-- ชื่อ+ผู้แต่ง: ปรับ pl(ซ้าย) pr(ขวา) items-end/start text-right/left -->
          <div class="absolute inset-0 flex items-center pl-[40%] pr-[18%] -translate-x-[-9%] -translate-y-[10%]">
            <div class="flex flex-col items-end text-right gap-[0.6em] w-full">
              <h3 class="font-serif font-medium text-[#472809]" style="font-size: clamp(14px, 2.8vw, 40px)">หม่อมเป็ดสวรรค์</h3>
              <p class="text-[#472809] font-light font-kanit" style="font-size: clamp(10px, 1.5vw, 24px)">ผู้แต่ง: สุนทรภู่</p>
            </div>
          </div>
          <!-- ปุ่ม: bottom=ขึ้นลง, right=ซ้ายขวา (ใช้ left แทนถ้าการ์ดชิดซ้าย) -->
          <button @click="poetryList[10] && openPoem(poetryList[10])"
            class="absolute bg-[#E76A87] -translate-y-[-100%] -translate-x-[-70%] text-white font-readmore cursor-pointer border border-black rounded-full shadow-md hover:brightness-90 active:brightness-75 transition-colors duration-150"
            style="bottom: 33%; right: 18%; font-size: clamp(6px, 2vw, 16px); padding: clamp(2px,0.6vw,8px) clamp(6px,1.8vw,26px)">
            Read more
          </button>
        </div>

        <!-- บทที่ 2 — รูปขวา ข้อความซ้าย -->
        <div class="relative mb-[6vw]">
          <img src="/sadness/sad 2.png" loading="lazy" alt="ภาพประกอบบทกวีสวัสดิรักษา ของสุนทรภู่ สื่อถึงความเจ็บปวดและความโศกเศร้าจากบทกวีวรรณคดีไทย" class="w-full h-auto pointer-events-none scale-x-[-1]" />
          <!-- ชื่อ+ผู้แต่ง: ปรับ pr(ขวา) pl(ซ้าย) -->
          <div class="absolute inset-0 flex items-center pr-[42%] pl-[13%] -translate-y-[10%]">
            <div class="flex flex-col items-start text-left gap-[0.6em] w-full -translate-x-[10%] ">
              <h3 class="font-serif font-medium text-[#472809]" style="font-size: clamp(14px, 2.8vw, 40px)">พระอภัยมณี</h3>
              <p class="text-[#472809] font-light font-kanit" style="font-size: clamp(10px, 1.5vw, 24px)">ผู้แต่ง: สุนทรภู่</p>
            </div>
          </div>
          <!-- ปุ่ม: bottom=ขึ้นลง, left=ซ้ายขวา -->
          <button @click="poetryList[11] && openPoem(poetryList[11])"
            class="absolute bg-[#E76A87] text-white -translate-x-[25%] -translate-y-[-100%] font-readmore cursor-pointer border border-black rounded-full shadow-md hover:brightness-90 active:brightness-75 transition-colors duration-150"
            style="bottom: 33%; left: 12%; font-size: clamp(6px, 2vw, 16px); padding: clamp(2px,0.6vw,8px) clamp(6px,1.8vw,26px)">
            Read more
          </button>
        </div>

        <!-- บทที่ 3 — รูปซ้าย ข้อความขวา -->
        <div class="relative mb-[6vw]">
          <img src="/sadness/sad 3.png" loading="lazy" alt="ภาพประกอบบทกวีขุนช้างขุนแผน ตอนที่สื่อถึงความรักและความผูกพันในครอบครัว จากวรรณคดีไทยของสุนทรภู่" class="w-full h-auto pointer-events-none" />
          <!-- ชื่อ+ผู้แต่ง: ปรับ pl(ซ้าย) pr(ขวา) -->
          <div class="absolute inset-0 flex items-center pl-[42%] pr-[14%] -translate-y-[10%] -translate-x-[-5%]">
            <div class="flex flex-col items-end text-right gap-[0.6em] w-full">
              <h3 class="font-serif font-medium text-[#472809]" style="font-size: clamp(14px, 2.8vw, 40px)">นิราศอิเหนา</h3>
              <p class="text-[#472809] font-light font-kanit" style="font-size: clamp(10px, 1.5vw, 24px)">ผู้แต่ง: สุนทรภู่</p>
            </div>
          </div>
          <!-- ปุ่ม: bottom=ขึ้นลง, right=ซ้ายขวา -->
          <button @click="poetryList[12] && openPoem(poetryList[12])"
            class="absolute bg-[#E76A87] -translate-x-[-35%] -translate-y-[-20%] text-white font-readmore cursor-pointer border border-black rounded-full shadow-md hover:brightness-90 active:brightness-75 transition-colors duration-150"
            style="bottom: 25%; right: 13%; font-size: clamp(6px, 2vw, 16px); padding: clamp(2px,0.6vw,8px) clamp(6px,1.8vw,26px)">
            Read more
          </button>
        </div>

        <!-- บทที่ 4 — รูปขวา ข้อความซ้าย -->
        <div class="relative mb-[6vw]">
          <img src="/sadness/sad 4.png" loading="lazy" alt="ภาพประกอบบทกวีสุภาษิตสอนหญิง ของสุนทรภู่ สื่อถึงคำสอนและมารยาทของสตรีในครอบครัวไทย" class="w-full h-auto pointer-events-none scale-x-[-1]" />
          <!-- ชื่อ+ผู้แต่ง: ปรับ pr(ขวา) pl(ซ้าย) -->
          <div class="absolute inset-0 flex items-center pr-[50%] pl-[18%] -translate-x-[9%] -translate-y-[10%]">
            <div class="flex flex-col items-start text-left gap-[0.6em] w-full">
              <h3 class="font-serif font-medium text-[#472809]" style="font-size: clamp(14px, 2.8vw, 40px)">ระเด่นลันได</h3>
              <p class="text-[#472809] font-light font-kanit" style="font-size: clamp(10px, 1.5vw, 24px)">ผู้แต่ง: สุนทรภู่</p>
            </div>
          </div>
          <!-- ปุ่ม: bottom=ขึ้นลง, left=ซ้ายขวา -->
          <button @click="poetryList[13] && openPoem(poetryList[13])"
            class="absolute bg-[#E76A87] -translate-x-[65%] -translate-y-[-100%] text-white font-readmore cursor-pointer border border-black rounded-full shadow-md hover:brightness-90 active:brightness-75 transition-colors duration-150"
            style="bottom: 33%; left: 18%; font-size: clamp(6px, 2vw, 16px); padding: clamp(2px,0.6vw,8px) clamp(6px,1.8vw,26px)">
            Read more
          </button>
        </div>

        <!-- บทที่ 5 — รูปซ้าย ข้อความขวา -->
        <div class="relative mb-[6vw]">
          <img src="/sadness/sad 5.png" loading="lazy" alt="ภาพประกอบบทกวีพระอภัยมณี ตอนฤาษีช่วยสุดสาคร ของสุนทรภู่ สื่อถึงความรักและความผูกพันระหว่างบิดาและบุตร" class="w-full h-auto pointer-events-none" />
          <!-- ชื่อ+ผู้แต่ง: ปรับ pl(ซ้าย) pr(ขวา) -->
          <div class="absolute inset-0 flex items-center pl-[42%] pr-[8%] -translate-y-[10%]">
            <div class="flex flex-col items-end text-right gap-[0.6em] w-full">
              <h3 class="font-serif font-medium text-[#472809]" style="font-size: clamp(14px, 2.8vw, 40px)">ระเด่นลันได</h3>
              <p class="text-[#472809] font-light font-kanit" style="font-size: clamp(10px, 1.5vw, 24px)">ผู้แต่ง: สุนทรภู่</p>
            </div>
          </div>
          <!-- ปุ่ม: bottom=ขึ้นลง, right=ซ้ายขวา -->
          <button @click="poetryList[14] && openPoem(poetryList[14])"
            class="absolute bg-[#E76A87] -translate-y-[-20%] text-white font-readmore cursor-pointer border border-black rounded-full shadow-md hover:brightness-90 active:brightness-75 transition-colors duration-150"
            style="bottom: 25%; right: 8%; font-size: clamp(6px, 2vw, 16px); padding: clamp(2px,0.6vw,8px) clamp(6px,1.8vw,26px)">
            Read more
          </button>
        </div>

      </div>
    </section>

    <div class="w-full">
      <img
        src="/poetry/ท่าเรือ.png"
        loading="lazy"
        alt="ภาพท่าเรือโบราณ ฉากหลังบรรยากาศวรรณคดีไทย"
        class="w-full h-auto object-cover -mt-[40%] pointer-events-none"
      />
    </div>

    <PoetryModal
      :is-open="selectedPoem !== null"
      :data="selectedPoem"
      @close="closePoem"
    />
  </div>
</template>
