<script setup lang="ts">
const cards = [
  {
    description: "ความหมายที่ซ่อนเร้นในดอกไม้",
    image: "/home/card/Frame Flowers.png",
    link: "/flowers",
  },
  {
    description: "ปลดล็อกความหมายบทกวีด้วย<br />ถ้อยคำจากดอกไม้",
    image: "/home/card/Poetry Frame.png",
    link: "/poem-parent",
  },
  {
    description: "สำรวจดอกไม้และบทกลอน<br />ที่บ่งบอกความเป็นคุณ",
    image: "/home/card/your bloom.png",
    link: "/your-bloom",
  },
];
</script>

<template>
  <div class="w-full flex flex-col lg:flex-row justify-center items-center gap-8">
    <NuxtLink
      v-for="card in cards"
      :key="card.link"
      :to="card.link"
      class="relative transition-transform duration-200 hover:scale-105"
    >
      <NuxtImg :src="card.image" class="w-[381px] h-auto select-none" />

      <div
        class="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[72%] h-[70px] flex items-start justify-center text-center"
      >
<p
  v-html="card.description"
  class="
    text-[#5A2D0C]
    text-[18px]
    leading-[1.5]
    font-medium
  "
/>
      </div>
    </NuxtLink>
  </div>
</template>
