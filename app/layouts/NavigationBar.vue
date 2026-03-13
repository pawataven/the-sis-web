<script lang="ts" setup>
// โค้ดส่วนสคริปต์ของ Navbar
</script>

<template>
  <nav class="absolute top-4 md:top-[3vw] left-0 z-50 flex w-full flex-nowrap items-start justify-center gap-2 sm:gap-4 md:gap-[4vw] px-2 md:px-[2vw]">
    
    <NuxtLink to="/" class="group flex flex-col items-center gap-1 md:gap-[0.8vw]">
      <NuxtImg src="/navbar/door-icon.png" format="webp" class="h-10 sm:h-12 md:h-[8vw] w-auto object-contain transition-transform group-hover:-translate-y-1 md:group-hover:-translate-y-[0.5vw]" alt="Home icon" />
      <div class="whitespace-nowrap rounded-full border border-[#8C7662] bg-white px-2 py-0.5 md:px-[1.6vw] md:py-[0.4vw] text-[10px] md:text-[1vw] font-serif text-[#6B4A34] shadow-sm">
        HOME
      </div>
    </NuxtLink>

    <button class="group flex flex-col items-center gap-1 md:gap-[0.8vw]">
      <NuxtImg src="/navbar/Group32.png" format="webp" class="h-10 sm:h-12 md:h-[8vw] w-auto object-contain transition-transform group-hover:-translate-y-1 md:group-hover:-translate-y-[0.5vw]" alt="Poetry icon" />
      <div class="flex items-center gap-1 md:gap-[0.5vw] whitespace-nowrap rounded-full border border-[#8C7662] bg-white px-2 py-0.5 md:px-[1.6vw] md:py-[0.4vw] text-[10px] md:text-[1vw] font-serif text-[#6B4A34] shadow-sm">
        POETRY
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 md:h-[1vw] md:w-[1vw]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </button>

    <NuxtLink to="/flowers" class="group flex flex-col items-center gap-1 md:gap-[0.8vw]">
      <NuxtImg src="/navbar/IMG_82421.png" format="webp" class="h-10 sm:h-12 md:h-[8vw] w-auto object-contain transition-transform group-hover:-translate-y-1 md:group-hover:-translate-y-[0.5vw]" alt="Flowers icon" />
      <div class="whitespace-nowrap rounded-full border border-[#8C7662] bg-white px-2 py-0.5 md:px-[1.6vw] md:py-[0.4vw] text-[10px] md:text-[1vw] font-serif text-[#6B4A34] shadow-sm">
        FLOWERS
      </div>
    </NuxtLink>

    <NuxtLink to="/find-your-bloom" class="group flex flex-col items-center gap-1 md:gap-[0.8vw]">
      <NuxtImg src="/navbar/Untitled_Artwork41.png" format="webp" class="h-10 sm:h-12 md:h-[8vw] w-auto object-contain transition-transform group-hover:-translate-y-1 md:group-hover:-translate-y-[0.5vw]" alt="Find your bloom icon" />
      <div class="whitespace-nowrap rounded-full border border-[#8C7662] bg-white px-2 py-0.5 md:px-[1.6vw] md:py-[0.4vw] text-[10px] md:text-[1vw] font-serif text-[#6B4A34] shadow-sm">
        FIND YOUR BLOOM
      </div>
    </NuxtLink>
  </nav>
</template>