<script setup lang="ts">
import NavigationBar from "@/layouts/NavigationBar.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Hero -->
    <div
      class="relative bg-[#F3EBDC] overflow-visible flex flex-col h-[60vw]"
    >
      <img
        src="/flowers/Flowers.png"
        class="absolute left-0 top-0 h-full w-auto z-[10] pointer-events-none"
      />
      <img
        src="/flowers/กรอบใบไม้.png"
        class="absolute right-0 top-0 h-full w-auto z-[10] pointer-events-none"
      />

      <!-- Navbar -->
      <div
        class="relative z-[50] px-[5vw] md:px-0 scale-[0.85] md:scale-100 origin-top"
      >
        <NavigationBar />
      </div>

      <!-- Flowers title -->
      <div class="relative z-[20] flex items-center justify-center flex-1">
        <img
          src="/flowers/Group 34.png"
          class="pointer-events-none h-auto w-[clamp(150px,28vw,580px)]"
        />
      </div>
    </div>

    <!-- Flower list -->
    <section class="w-full py-[5vw] flex-1">
      <div class="max-w-225 mx-auto px-[5vw]">

        <!-- Anemone Flower -->
        <div class="relative mb-[6vw]">
          <img src="/flowers/anemone.png" class="w-full h-auto pointer-events-none" />
          <div class="absolute inset-0 flex items-center pl-[40%] pr-[5%]">
            <div class="flex flex-col gap-[0.4em] w-full">
              <h2 class="italic font-serif text-[#3d1600]" style="font-size: clamp(12px, 2.5vw, 38px)">Anemone Flower</h2>
              <p class="text-[#3d1600] leading-relaxed" style="font-size: clamp(8px, 1.3vw, 18px)">"ถูกทอดทิ้ง" (FORSAKEN LOVE) สื่อถึงความโศกเศร้า การถูกทอดทิ้ง และความเจ็บปวดเมื่อ แสนปิติ สิ้นสุดลงพร้อมกับความรัก สิ้นเนื้อสิ้น</p>
            </div>
          </div>
        </div>

        <!-- Passion Flower -->
        <div class="relative mb-[6vw]">
          <img src="/flowers/passion flower.png" class="w-full h-auto pointer-events-none" />
          <div class="absolute inset-0 flex items-center pl-[47%] pr-[5%]">
            <div class="flex flex-col gap-[0.4em] w-full">
              <h2 class="italic font-serif text-[#3d1600]" style="font-size: clamp(12px, 2.5vw, 38px)">Passion Flower</h2>
              <p class="text-[#3d1600] leading-relaxed" style="font-size: clamp(8px, 1.3vw, 18px)">"ศรัทธาและความเชื่อมั่น" (FAITH) แสดงถึงความเชื่อมั่นในกุญแจความ ความรักที่ที่มั่นคง และความเชื่อมั่นที่ยึดเกิดผ่านจากจิตใจ</p>
            </div>
          </div>
        </div>

        <!-- Honeysuckle -->
        <div class="relative mb-[6vw]">
          <img src="/flowers/honeysuckle.png" class="w-full h-auto pointer-events-none" />
          <div class="absolute inset-0 flex items-center pt-[5%] pl-[47%] pr-[5%]">
            <div class="flex flex-col gap-[0.4em] w-full">
              <h2 class="italic font-serif text-[#3d1600]" style="font-size: clamp(12px, 2.5vw, 38px)">Honeysuckle</h2>
              <p class="text-[#3d1600] leading-relaxed" style="font-size: clamp(8px, 1.3vw, 18px)">"ความรักที่แสนความผูกพัน" (DEVOTION & AFFECTION) เป็นดอกไม้แทนความรู้สึกผิดชอบ ความผูกพันที่แน้นแฟ้น และความสุขพิเศษที่เกิดจากการให้ความรักอย่างจริงใจ</p>
            </div>
          </div>
        </div>

        <!-- Rose Flower (Apple Blossom) -->
        <div class="relative mb-[6vw]">
          <img src="/flowers/apple blossom.png" class="w-full h-auto pointer-events-none" />
          <div class="absolute inset-0 flex items-center pl-[50%] pr-[5%]">
            <div class="flex flex-col gap-[0.4em] w-full">
              <h2 class="italic font-serif text-[#3d1600]" style="font-size: clamp(12px, 2.5vw, 38px)">Rose Flower</h2>
              <p class="text-[#3d1600] leading-relaxed" style="font-size: clamp(8px, 1.3vw, 18px)">"ความรัก" (LOVE) ดอกกุหลาบสีแดงเป็นสัญลักษณ์ที่เป็นที่นิยมที่สุดในการแสดงออกถึงความรักและความโรแมนติก</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- หญ้า -->
    <div class="w-full mt-auto">
      <img
        src="/poetry/the sis 2.png"
        class="w-full h-auto object-cover pointer-events-none"
      />
    </div>
  </div>
</template>
