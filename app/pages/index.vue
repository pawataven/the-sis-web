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
    <div class="relative z-0 flex flex-col items-center overflow-visible">
      <DecorationComp />

      <HomeSkyFlowerSection />

      <div class="relative z-10 mt-5 hidden w-full lg:block">
        <ArchCards />
      </div>

      <div class="relative z-10 mt-5 block w-full lg:hidden">
        <ArchCardsMobile />
      </div>

      <div class="relative z-0 w-full px-4 mt-1 sm:mt-2 md:mt-4 lg:-mt-[17%]">
        <div class="flex justify-center">
          <NuxtImg
            src="/home/cloud-bg.png"
            class="h-auto w-[70%] max-w-[360px] select-none sm:w-[66%] sm:max-w-[420px] md:w-[62%] md:max-w-[500px] lg:w-full lg:max-w-[990px]"
          />
        </div>
      </div>
    </div>

    <div class="relative z-10 w-full overflow-hidden">
      <div
        class="relative z-30 mx-auto flex min-h-[280px] max-w-[1200px] flex-col items-center justify-center px-[5%] pt-[2%] pb-[12%] sm:min-h-[340px] sm:pt-[3%] sm:pb-[10%] lg:min-h-[560px] lg:pb-[8%] lg:items-start lg:justify-start lg:px-[8%] lg:pt-16"
      >
        <div
          class="flex w-full max-w-[340px] flex-col items-center justify-center rounded-[32px] border border-[#472809] bg-white px-5 py-4 sm:max-w-[460px] sm:rounded-[38px] sm:px-8 sm:py-5 lg:max-w-[464px] lg:rounded-[43px] lg:px-10 lg:py-6 lg:ml-[4%] xl:ml-[-10%]"
        >
          <p
            class="text-[#472809] leading-[1.55] text-center text-[clamp(14px,1.15vw,24px)] sm:leading-[1.65] sm:text-[clamp(16px,1.35vw,1.35rem)] lg:leading-[1.7] lg:text-[clamp(0.9rem,1.5vw,1.5rem)]"
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
              class="inline-flex h-[34px] w-[96px] items-center font-readmore justify-center rounded-full border border-black bg-[#E86686] text-base leading-none text-white transition-colors duration-200 hover:bg-[#df4b6d] sm:h-[36px] sm:w-[104px] sm:text-[1rem] lg:h-[37px] lg:w-[108px] lg:text-lg"
            >
              {{ FOOTER_CONTENT.buttonText }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Dock + Flower wrapper -->
      <div class="relative w-full mt-auto">
        <NuxtImg
          src="/home/End flower.png"
          class="pointer-events-none absolute bottom-[10%] right-[3%] z-10 h-auto w-[30vw] max-w-[960px] select-none"
        />
        <img
          src="/poetry/ท่าเรือ.png"
          class="relative z-20 w-full h-auto object-cover pointer-events-none"
          style="margin-top: clamp(-600px, -42%, -180px)"
        />
      </div>
    </div>
  </div>
</template>
