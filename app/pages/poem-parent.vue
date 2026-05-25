<script setup lang="ts">
import PoetryHero from "~/components/poetry-hero.vue";
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
  <!-- CONTENT -->
  <section class="w-full pt-[5vw] pb-0">

    <!-- Title card with curtain decorations -->
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
        <h2 class="text-[8vw] md:text-[96px] text-[#2c1a0e] font-serif">
          Poetry - Family
        </h2>
        <p
          class="text-[#2c1a0e] text-[3.5vw] font-light md:text-[24px] mt-[1vw] leading-relaxed"
        >
          ขอต้อนรับสู่พื้นที่แห่งความสัมพันธ์ ในหมวดหมู่ <span class="font-medium">ครอบครัว</span> <br />
          ที่ได้ค้นหาไปจนถึงการ กลั่นกรองบทกวี และภาษาดอกไม้ <br />
          ที่มีความหมายเกี่ยวข้อง
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
        <img src="/poetry/family 1.png" loading="lazy" alt="ภาพประกอบบทกวีเพลงยาวถวายโอวาท ของสุนทรภู่ สื่อถึงความกตัญญูต่อบิดามารดา และคุณค่าของครอบครัวในวรรณคดีไทย" class="w-full h-auto pointer-events-none" />
        <div class="absolute inset-0 flex items-center pl-[42%] pr-[6%] -translate-y-[5%]">
          <div class="flex flex-col items-end text-right gap-[0.6em] w-full">
            <h3 class="font-serif font-medium text-[#2c1a0e]" style="font-size: clamp(14px, 2.8vw, 40px)">เพลงยาวถวายโอวาท</h3>
            <p class="text-[#2c1a0e] font-light" style="font-size: clamp(10px, 1.5vw, 24px)">ผู้แต่ง: สุนทรภู่</p>
            <button @click="poetryList[0] && openPoem(poetryList[0])"
              class="bg-[#E76A87] text-white font-readmore cursor-pointer border border-black rounded-full shadow-md hover:scale-105 transition-transform"
              style="font-size: clamp(10px, 1.1vw, 16px); padding: clamp(4px,0.5vw,8px) clamp(12px,1.8vw,26px)">
              Read more
            </button>
          </div>
        </div>
      </div>

      <!-- บทที่ 2 — รูปขวา ข้อความซ้าย -->
      <div class="relative mb-[6vw]">
        <img src="/poetry/fam 2.png" loading="lazy" alt="ภาพประกอบบทกวีสวัสดิรักษา ของสุนทรภู่ สื่อถึงการอบรมสั่งสอนของผู้ใหญ่ และมารยาทอันดีงามในครอบครัว" class="w-full h-auto pointer-events-none" />
        <div class="absolute inset-0 flex items-center pr-[42%] pl-[10%]">
          <div class="flex flex-col items-start text-left gap-[0.6em] w-full">
            <h3 class="font-serif font-medium text-[#2c1a0e]" style="font-size: clamp(14px, 2.8vw, 40px)">สวัสดิรักษา</h3>
            <p class="text-[#2c1a0e] font-light" style="font-size: clamp(10px, 1.5vw, 24px)">ผู้แต่ง: สุนทรภู่</p>
            <button @click="poetryList[1] && openPoem(poetryList[1])"
              class="bg-[#E76A87] text-white font-readmore cursor-pointer border border-black rounded-full shadow-md hover:scale-105 transition-transform"
              style="font-size: clamp(10px, 1.1vw, 16px); padding: clamp(4px,0.5vw,8px) clamp(12px,1.8vw,26px)">
              Read more
            </button>
          </div>
        </div>
      </div>

      <!-- บทที่ 3 — รูปซ้าย ข้อความขวา -->
      <div class="relative mb-[6vw]">
        <img src="/poetry/fam 3.png" loading="lazy" alt="ภาพประกอบบทกวีขุนช้างขุนแผน ตอนที่สื่อถึงความรักและความผูกพันในครอบครัว จากวรรณคดีไทยของสุนทรภู่" class="w-full h-auto pointer-events-none" />
        <div class="absolute inset-0 flex items-center pl-[42%] pr-[14%]">
          <div class="flex flex-col items-end text-right gap-[0.6em] w-full">
            <h3 class="font-serif font-medium text-[#2c1a0e]" style="font-size: clamp(14px, 2.8vw, 40px)">ขุนช้างขุนแผน</h3>
            <p class="text-[#2c1a0e] font-light" style="font-size: clamp(10px, 1.5vw, 24px)">ผู้แต่ง: สุนทรภู่</p>
            <button @click="poetryList[2] && openPoem(poetryList[2])"
              class="bg-[#E76A87] text-white font-readmore cursor-pointer border border-black rounded-full shadow-md hover:scale-105 transition-transform"
              style="font-size: clamp(10px, 1.1vw, 16px); padding: clamp(4px,0.5vw,8px) clamp(12px,1.8vw,26px)">
              Read more
            </button>
          </div>
        </div>
      </div>

      <!-- บทที่ 4 — รูปขวา ข้อความซ้าย -->
      <div class="relative mb-[6vw]">
        <img src="/poetry/fam 4.png" loading="lazy" alt="ภาพประกอบบทกวีสุภาษิตสอนหญิง ของสุนทรภู่ สื่อถึงคำสอนและมารยาทของสตรีในครอบครัวไทย" class="w-full h-auto pointer-events-none" />
        <div class="absolute inset-0 flex items-center pr-[42%] pl-[10%]">
          <div class="flex flex-col items-start text-left gap-[0.6em] w-full">
            <h3 class="font-serif font-medium text-[#2c1a0e]" style="font-size: clamp(14px, 2.8vw, 40px)">สุภาษิตสอนหญิง</h3>
            <p class="text-[#2c1a0e] font-light" style="font-size: clamp(10px, 1.5vw, 24px)">ผู้แต่ง: สุนทรภู่</p>
            <button @click="poetryList[1] && openPoem(poetryList[1])"
              class="bg-[#E76A87] text-white font-readmore cursor-pointer border border-black rounded-full shadow-md hover:scale-105 transition-transform"
              style="font-size: clamp(10px, 1.1vw, 16px); padding: clamp(4px,0.5vw,8px) clamp(12px,1.8vw,26px)">
              Read more
            </button>
          </div>
        </div>
      </div>

       <!-- บทที่ 5 — รูปซ้าย ข้อความขวา -->
      <div class="relative mb-[6vw]">
        <img src="/poetry/fam 5.png" loading="lazy" alt="ภาพประกอบบทกวีพระอภัยมณี ตอนฤาษีช่วยสุดสาคร ของสุนทรภู่ สื่อถึงความรักและความผูกพันระหว่างบิดาและบุตร" class="w-full h-auto pointer-events-none" />
        <div class="absolute inset-0 flex items-center pl-[42%] pr-[20%] -translate-y-[5%]">
          <div class="flex flex-col items-end text-right gap-[0.6em] w-full">
            <h3 class="font-serif font-medium text-[#2c1a0e]" style="font-size: clamp(14px, 2.8vw, 40px)">พระอภัยมณี <br>ตอนฤาษีช่วยสุดสาคร</h3>
            <p class="text-[#2c1a0e] font-light" style="font-size: clamp(10px, 1.5vw, 24px)">ผู้แต่ง: สุนทรภู่</p>
            <button @click="poetryList[0] && openPoem(poetryList[0])"
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
      loading="lazy"
      alt="ภาพท่าเรือโบราณ ฉากหลังบรรยากาศวรรณคดีไทย"
      class="w-full h-auto object-cover pointer-events-none -mt-[35%]"
    />
  </div>

  <PoetryModal
    :is-open="selectedPoem !== null"
    :data="selectedPoem"
    @close="closePoem"
  />
</template>
