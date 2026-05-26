<script setup lang="ts">
import ArchCards from "~/components/home/ArchCards.vue";
import HomePageHero from "~/components/HomePage-hero.vue";
import HomeSkyFlowerSection from "~/components/home/HomeSkyFlowerSection.vue";
import { FOOTER_CONTENT } from "~/data/homeContent";
import DecorationComp from "~/components/home/DecorationComp.vue";
import ArchCardsMobile from "~/components/home/ArchCards-Mobile.vue";
</script>

<template>
  <div class="min-h-screen w-full bg-[#7DB2D3] mx-auto overflow-hidden">
    <HomePageHero />
    <div class="relative flex flex-col items-center overflow-hidden">
      <DecorationComp />

      <HomeSkyFlowerSection />

      <div class="relative z-10 mt-5 hidden w-full lg:block">
        <ArchCards />
      </div>

      <div class="relative z-10 mt-5 block w-full lg:hidden">
        <ArchCardsMobile />
      </div>

      <div class="relative w-full px-4 -mt-[17%] z-0">
        <div class="flex justify-center">
          <NuxtImg
            src="/home/cloud-bg.png"
            class="w-full max-w-[990px] h-auto select-none"
          />
        </div>
      </div>
    </div>

    <div class="relative z-10 w-full overflow-hidden">
      <div
        class="relative z-30 mx-auto flex min-h-[400px] max-w-[1200px] flex-col items-center justify-center px-[5%] py-[5%] sm:min-h-[500px] lg:min-h-[560px] lg:items-start lg:justify-start lg:px-[8%] lg:pt-16"
      >
        <div
          class="flex w-full max-w-[260px] flex-col items-center justify-center rounded-[32px] border border-[#472809] bg-white px-5 py-6 sm:max-w-[400px] sm:rounded-[38px] sm:h-[283px] sm:px-8 sm:py-7 lg:max-w-[464px] lg:rounded-[43px] lg:px-10 lg:py-8 lg:ml-[4%] xl:ml-[-10%]"
        >
          <p
            class="text-[#472809] leading-[1.55] text-center text-[clamp(16px,1.15vw,24px)] sm:leading-[1.65] sm:text-[clamp(24px,1.35vw,1.35rem)] lg:leading-[1.7] lg:text-[clamp(0.9rem,1.5vw,1.5rem)]"
          >
            {{ FOOTER_CONTENT.description[0] }}
            <span class="font-bold">{{ FOOTER_CONTENT.description[1] }}</span>
            <br />{{ FOOTER_CONTENT.description[2] }} <br />{{
              FOOTER_CONTENT.description[3] }}                                                    
            <br />{{ FOOTER_CONTENT.description[4] }}
            <span class="font-bold italic">{{
              FOOTER_CONTENT.description[5]
            }}</span>
          </p>
          <div class="mt-5 flex justify-center sm:mt-6">
            <NuxtLink
              :to="FOOTER_CONTENT.buttonLink"
              class="inline-flex h-[34px] w-[96px] items-center justify-center rounded-full border border-black bg-[#E86686] text-base leading-none text-white transition-colors duration-200 hover:bg-[#df4b6d] sm:h-[36px] sm:w-[104px] sm:text-[1rem] lg:h-[37px] lg:w-[108px] lg:text-lg"
            >
              {{ FOOTER_CONTENT.buttonText }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <NuxtImg
        src="/home/End flower.png"
        class="pointer-events-none absolute bottom-[4%] right-0 z-10 hidden h-auto w-full max-w-[180px] select-none sm:block md:max-w-[220px] lg:bottom-[0%] lg:right-[1.5%] lg:max-w-[270px] xl:bottom-[-1%] xl:right-[1%] xl:max-w-[320px]"
      />

      <NuxtImg
        src="/home/ท่าเรือ2.png"
        class="relative z-20 -mt-[45%] h-auto w-full select-none pointer-events-none"
      />
    </div>
  </div>
</template>
