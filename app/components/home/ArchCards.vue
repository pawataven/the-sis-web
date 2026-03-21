<script setup lang="ts">
const cards = [
  {
    title: "Flowers",
    description: "ความหมายที่ซ่อนเร้นในดอกไม้",
    image: "/home/card/flower-card.png",
    link: "/flowers",
  },
  {
    title: "Poetry",
    description: "ปลดล็อกความหมายบทกวีด้วยถ้อยคำจากดอกไม้",
    image: "/home/card/poety-card.png",
    link: "/poetry",
  },
  {
    title: "Your Bloom",
    description: "สำรวจดอกไม้และบทกลอนที่บ่งบอกความเป็นคุณ",
    image: "/home/card/yourbloom-card.png",
    link: "/your-bloom",
  },
];
</script>

<template>
  <div
    class="w-full flex flex-col lg:flex-row justify-center items-center lg:items-end gap-6 px-6"
  >
    <NuxtLink
      v-for="card in cards"
      :key="card.title"
      :to="card.link"
      class="group flex flex-col items-center bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 w-[280px] h-[386px] sm:w-[320px] sm:h-[441px] lg:w-[clamp(220px,22vw,350px)] lg:h-[clamp(303px,30.3vw,482px)]"
      style="border-radius: 50% 50% 16px 16px / 36% 36% 16px 16px"
    >
      <!-- ชื่อ -->
      <h2
        class="text-[#472809] text-2xl sm:text-3xl lg:text-[clamp(1.2rem,2.2vw,3rem)] mt-10 text-center px-4"
      >
        {{ card.title }}
      </h2>

      <!-- รูปดอกไม้ -->
      <div
        class="w-full flex justify-center px-6 items-end"
        style="height: 55%"
      >
        <NuxtImg
          :src="card.image"
          class="w-[60%] h-full object-contain select-none"
        />
      </div>

      <!-- คำอธิบาย -->
      <p
        class="text-[#472809] text-sm sm:text-base lg:text-[clamp(14px,1.2vw,20px)] text-center px-6 -mt-3 md:-mt-6 leading-relaxed"
      >
        {{ card.description }}
      </p>

      <!-- ปุ่ม -->
      <div class="mt-auto mb-6">
        <span
          class="bg-[#E86686] border border-black hover:bg-[#df4b6d] text-white text-sm px-6 py-2 rounded-full transition-colors duration-200"
        >
          Read more
        </span>
      </div>
    </NuxtLink>
  </div>
</template>
