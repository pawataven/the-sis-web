<script lang="ts" setup></script>

<template>
  <nav
    class="sticky top-0 z-50 w-full flex justify-center gap-3 sm:gap-6 md:gap-10 lg:gap-14.5 pt-5 pb-20 px-2"
  >
    <NuxtLink to="/" class="group flex flex-col items-center gap-2 sm:gap-3">
      <NuxtImg
        src="/Navbar/door-icon.png"
        class="h-13.75 sm:h-20 md:h-23.75 lg:h-28.75 w-auto object-contain transition-transform group-hover:-translate-y-1.75"
        alt="Home icon"
      />

      <div
        class="whitespace-nowrap rounded-full border border-[#8C7662] bg-white px-3 py-1 sm:px-4 sm:py-1.5 lg:px-[23px] lg:py-[6px] text-[9px] sm:text-[12px] lg:text-[14px] font-serif text-[#6B4A34] shadow-sm"
      >
        HOME
      </div>
    </NuxtLink>

    <button class="group flex flex-col items-center gap-2 sm:gap-3">
      <NuxtImg
        src="/Navbar/Group32.png"
        class="h-[55px] sm:h-[80px] md:h-[95px] lg:h-[115px] w-auto object-contain transition-transform group-hover:-translate-y-[7px]"
        alt="Poetry icon"
      />

      <div
        class="flex items-center gap-1 sm:gap-2 whitespace-nowrap rounded-full border border-[#8C7662] bg-white px-3 py-1 sm:px-4 sm:py-1.5 lg:px-[23px] lg:py-[6px] text-[9px] sm:text-[12px] lg:text-[14px] font-serif text-[#6B4A34] shadow-sm"
      >
        POETRY
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-[10px] w-[10px] lg:h-[14px] lg:w-[14px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </button>

    <NuxtLink
      to="/flowers"
      class="group flex flex-col items-center gap-2 sm:gap-3"
    >
      <NuxtImg
        src="/Navbar/IMG_82421.png"
        class="h-[55px] sm:h-[80px] md:h-[95px] lg:h-[115px] w-auto object-contain transition-transform group-hover:-translate-y-[7px]"
        alt="Flowers icon"
      />

      <div
        class="whitespace-nowrap rounded-full border border-[#8C7662] bg-white px-3 py-1 sm:px-4 sm:py-1.5 lg:px-[23px] lg:py-[6px] text-[9px] sm:text-[12px] lg:text-[14px] font-serif text-[#6B4A34] shadow-sm"
      >
        FLOWERS
      </div>
    </NuxtLink>
    <NuxtLink
      to="/find-your-bloom"
      class="group flex flex-col items-center gap-2 sm:gap-3"
    >
      <NuxtImg
        src="/Navbar/Untitled_Artwork41.png"
        class="h-[55px] sm:h-[80px] md:h-[95px] lg:h-[115px] w-auto object-contain transition-transform group-hover:-translate-y-[7px]"
        alt="Find your bloom icon"
      />

      <div
        class="whitespace-nowrap rounded-full border border-[#8C7662] bg-white px-3 py-1 sm:px-4 sm:py-1.5 lg:px-[23px] lg:py-[6px] text-[9px] sm:text-[12px] lg:text-[14px] font-serif text-[#6B4A34] shadow-sm"
      >
        FIND YOUR BLOOM
      </div>
    </NuxtLink>
  </nav>
</template>
