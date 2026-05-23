<script setup lang="ts">
import ArchCards from "~/components/home/ArchCards.vue";
import HomePageHero from "~/components/HomePage-hero.vue";
import HomeSkyFlowerSection from "~/components/home/HomeSkyFlowerSection.vue";
import { FOOTER_CONTENT } from "~/data/homeContent";
import DecorationComp from "~/components/home/DecorationComp.vue";
</script>

<template>
  <div class="min-h-screen w-full bg-[#7DB2D3] mx-auto overflow-hidden">
    <HomePageHero />
    <div class="relative flex flex-col items-center overflow-hidden">
      <DecorationComp />

      <HomeSkyFlowerSection />

      <ArchCards class="relative z-10 mt-5" />

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
          class="flex w-full max-w-[464px] flex-col items-center justify-center rounded-[43px] border border-[#472809] bg-white px-6 py-8 sm:h-[283px] sm:px-10 lg:ml-[4%] xl:ml-[-10%]"
        >
          <p
            class="text-[#472809] leading-[1.7] text-center text-[clamp(0.9rem,1.5vw,1.5rem)]"
          >
            {{ FOOTER_CONTENT.description[0] }}
            <span class="font-bold">{{ FOOTER_CONTENT.description[1] }}</span>
            <br />{{ FOOTER_CONTENT.description[2] }} <br />{{
              FOOTER_CONTENT.description[3]
            }}
            <br />{{ FOOTER_CONTENT.description[4] }}
            <span class="font-bold italic">{{
              FOOTER_CONTENT.description[5]
            }}</span>
          </p>
          <div class="mt-6 flex justify-center">
            <NuxtLink
              :to="FOOTER_CONTENT.buttonLink"
              class="inline-flex h-[37px] w-[108px] items-center justify-center rounded-full border border-black bg-[#E86686] text-lg leading-none text-white transition-colors duration-200 hover:bg-[#df4b6d]"
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
        src="/poetry/ท่าเรือ.png"
        class="relative z-20 -mt-[45%] h-auto w-full select-none pointer-events-none"
      />
    </div>
  </div>
</template>
