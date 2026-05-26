<script setup lang="ts">
const cards = [
  {
    title: "Flower",
    description:"ความหมายที่ซ่อนเร้นในดอกไม้",
    image: "/home/card/Frame Flower-Mobile.png",
    link: "/flowers",
  },
  {
    title: "Poetry",
    description:"ปลดล็อกความหมายบทกวีด้วยถ้อยคำจากดอกไม้",
    image: "/home/card/Poetry Frame-Mobile.png",
    link: "/poem-parent",
  },
  {
    title: "Your Bloom",
    description:"สำรวจดอกไม้และบทกลอนที่บ่งบอกความเป็นคุณ",
    image: "/home/card/your bloom-Mobile.png",
    link: "/find-your-bloom",
  },
];
</script>

<template>
  <div
    class="w-full flex flex-col lg:flex-row justify-center items-center gap-8"
  >
    <NuxtLink
      v-for="card in cards"
      :key="card.link"
      :to="card.link"
      class="relative transition-transform duration-200 hover:scale-105"
    >
      <NuxtImg :src="card.image" class="w-full h-auto select-none" />
      
      <div
        class="absolute left-[44%] top-[34%] flex h-[88px] w-[44%] flex-col items-start justify-start pr-4 min-[390px]:pr-5 sm:left-[43%] sm:w-[42%] md:left-[42%] md:w-[41%] md:pr-8"
      >
        <h2
          class="mb-[clamp(4px,1.4vw,8px)] font-serif text-[clamp(16px,7vw,52px)] leading-none text-[#5A2D0C]"
        >
          {{ card.title }}
        </h2>
        <p
          v-html="card.description"
          class="w-full max-w-full break-words text-[clamp(10px,3.1vw,24px)] font-medium leading-[1.28] text-[#5A2D0C] sm:leading-[1.35]"
        />
      </div>
    </NuxtLink>
  </div>
</template>

