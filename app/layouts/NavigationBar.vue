<template>
<nav class="absolute top-0 left-0 z-50 flex w-full flex-wrap justify-center gap-4 px-2 pt-16 sm:gap-6 sm:pt-40 md:gap-10 md:pt-30 lg:gap-30 lg:pt-30">
    
    <NuxtLink to="/" class="group flex flex-col items-center gap-2 sm:gap-3">
      <NuxtImg 
        src="/Navbar/door-icon.png" 
        class="h-16 w-auto object-contain transition-transform duration-300 group-hover:-translate-y-2 sm:h-20 lg:h-31.75" 
        alt="Home icon"
      />
      <div class="whitespace-nowrap rounded-full border border-[#8C7662] bg-white px-3 py-1 text-[10px] font-serif text-[#6B4A34] shadow-sm transition-colors group-hover:bg-[#fcf8f5] sm:px-6 sm:py-1.5 sm:text-xs md:text-sm">
        HOME
      </div>
    </NuxtLink>

    <button class="group flex flex-col items-center gap-2 sm:gap-3">
      <NuxtImg 
        src="/Navbar/Group 32.png" 
        class="h-16 w-auto object-contain transition-transform duration-300 group-hover:-translate-y-2 sm:h-20 lg:h-31.75" 
        alt="Poetry icon"
      />
      <div class="flex items-center gap-1 whitespace-nowrap rounded-full border border-[#8C7662] bg-white px-3 py-1 text-[10px] font-serif text-[#6B4A34] shadow-sm transition-colors group-hover:bg-[#fcf8f5] sm:gap-2 sm:px-6 sm:py-1.5 sm:text-xs md:text-sm">
        POETRY
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </button>

    <NuxtLink to="/flowers" class="group flex flex-col items-center gap-2 sm:gap-3">
      <NuxtImg 
        src="/Navbar/IMG_8242 1.png" 
        class="h-16 w-auto object-contain transition-transform duration-300 group-hover:-translate-y-2 sm:h-20 lg:h-31.75" 
        alt="Flowers icon"
      />
      <div class="whitespace-nowrap rounded-full border border-[#8C7662] bg-white px-3 py-1 text-[10px] font-serif text-[#6B4A34] shadow-sm transition-colors group-hover:bg-[#fcf8f5] sm:px-6 sm:py-1.5 sm:text-xs md:text-sm">
        FLOWERS
      </div>
    </NuxtLink>

    <NuxtLink to="/find-your-bloom" class="group flex flex-col items-center gap-2 sm:gap-3">
      <NuxtImg 
        src="/Navbar/Untitled_Artwork 4 1.png" 
        class="h-16 w-auto object-contain transition-transform duration-300 group-hover:-translate-y-2 sm:h-20 lg:h-31.75" 
        alt="Find your bloom icon"
      />
      <div class="whitespace-nowrap rounded-full border border-[#8C7662] bg-white px-3 py-1 text-[10px] font-serif text-[#6B4A34] shadow-sm transition-colors group-hover:bg-[#fcf8f5] sm:px-6 sm:py-1.5 sm:text-xs md:text-sm">
        FIND YOUR BLOOM
      </div>
    </NuxtLink>

  </nav>
</template>

<script lang="ts" setup>

</script>

<style>

</style>