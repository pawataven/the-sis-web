<script setup lang="ts">
import DecorationComp from "~/components/home/DecorationComp.vue";
import ArchCards from "~/components/home/ArchCards.vue";
import TheNavigationBar from "~/layouts/NavigationBar.vue";
import { useAutoSwitch } from "~/composables/useAutoSwitch";
import { POETRY_MESSAGE, FOOTER_CONTENT } from "~/data/homeContent";

const { hovered, resetTimer, handleClick } = useAutoSwitch(10000);
</script>

<template>
  <div class="min-h-screen w-full overflow-x-hidden">
    <div
      class="relative w-full bg-[#7DB2D3] rounded-b-[650px] pb-60 z-0 flex flex-col items-center overflow-hidden"
    >
      <DecorationComp />

      <div class="relative w-full max-w-[1440px]">
        <div class="relative z-10 pt-4 sm:pt-6 md:pt-10 px-4">
          <TheNavigationBar />
        </div>

        <div
          class="relative -mt-5 sm:mt-32 lg:mt-50 w-full flex justify-center items-center"
        >
          <div class="relative w-full">
            <NuxtImg
              src="/home/skyflower.png"
              class="w-full h-auto select-none block"
            />
            <div class="absolute inset-0 flex justify-center items-center">
              <!-- <img
                src="/home/flowergif.gif"
                class="w-[85%] sm:w-[70%] lg:w-[75%] max-w-[1440px] h-auto object-contain select-none z-10"
              /> -->
            </div>
          </div>
        </div>

        <div
          class="relative w-full px-4 -mt-[1%] sm:-mt-[3%] md:-mt-[5%] lg:-mt-[1%] z-20"
        >
          <div class="flex justify-center">
            <NuxtImg
              src="/home/Message-in-flower.png"
              class="w-full max-w-[1200px] h-auto select-none"
            />
          </div>
        </div>

        <div
          class="relative w-full px-6 mt-1 sm:-mt-5 md:-mt-10 lg:-mt-[3%] pb-10 z-20"
        >
          <div class="flex justify-center w-full">
            <div
              class="relative w-full max-w-[922px] aspect-[3/1.2] sm:aspect-[3/1] bg-white border border-black drop-shadow-lg cursor-default"
              style="border-radius: 50%; clip-path: ellipse(50% 50% at 50% 50%)"
              @mouseenter="
                hovered = true;
                resetTimer();
              "
              @mouseleave="
                hovered = false;
                resetTimer();
              "
              @click="handleClick"
            >
              <div
                class="absolute inset-0 flex flex-col justify-center items-center text-center p-[5%] sm:p-8 md:p-12 transition-all duration-500 ease-in-out"
                :class="
                  hovered
                    ? 'opacity-0 -translate-y-3 pointer-events-none'
                    : 'opacity-100 translate-y-0'
                "
              >
                <h1
                  class="font-serif text-[#472809] text-[clamp(1.5rem,4vw,3.75rem)] leading-tight mb-[2%]"
                >
                  {{ POETRY_MESSAGE.title }}
                </h1>
                <p
                  class="text-[#472809] text-[clamp(10px,1.5vw,1.125rem)] max-w-[85%] leading-relaxed"
                >
                  {{ POETRY_MESSAGE.description[0] }}
                  <br class="hidden sm:block" />
                  {{ POETRY_MESSAGE.description[1] }}
                  <br class="hidden sm:block" />{{ POETRY_MESSAGE.description[2] }}
                  <span class="font-bold">{{ POETRY_MESSAGE.description[3] }}</span>
                </p>
              </div>

              <div
                class="absolute inset-0 flex flex-col justify-center items-center text-center p-[5%] sm:p-8 md:p-12 transition-all duration-500 ease-in-out"
                :class="
                  hovered
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-3 pointer-events-none'
                "
              >
                <p
                  class="text-[#472809] text-[clamp(10px,1.5vw,1.125rem)] max-w-[85%] leading-relaxed"
                >
                  <span class="font-bold">{{ POETRY_MESSAGE.florigraphy[0] }}</span>
                  <br />
                  {{ POETRY_MESSAGE.florigraphy[1] }}
                  <br class="hidden sm:block" />
                  {{ POETRY_MESSAGE.florigraphy[2] }}
                  <br class="hidden sm:block" />
                  {{ POETRY_MESSAGE.florigraphy[3] }}
                  <br class="hidden sm:block" />
                  {{ POETRY_MESSAGE.florigraphy[4] }}
                  <br class="hidden sm:block" />
                  {{ POETRY_MESSAGE.florigraphy[5] }}
                  <br class="hidden sm:block" />
                  {{ POETRY_MESSAGE.florigraphy[6] }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="relative w-full px-4 -mt-[10%] sm:-mt-[8%] md:-mt-[5%] lg:-mt-[3%] z-20"
        >
          <div class="flex justify-center">
            <NuxtImg
              src="/home/skyflower2.png"
              class="w-full max-w-[1090px] h-auto select-none"
            />
          </div>
        </div>

        <ArchCards class="relative z-10 mt-5" />

        <div class="relative w-full px-4 -mt-[15%] z-0">
          <div class="flex justify-center">
            <NuxtImg
              src="/home/cloud-bg.png"
              class="w-full max-w-[1090px] h-auto select-none"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="relative w-full">
      <NuxtImg
        src="/home/flower-footer.png"
        class="absolute right-[-5%] bottom-[6%] md:right-[1%] md:bottom-[6%] lg:bottom-[12%] select-none pointer-events-none sm:h-[50vw] md:h-[55vw] lg:h-[55vw] max-h-[800px] w-auto object-cover"
      />

      <div
        class="relative z-20 flex items-center justify-center min-h-[400px] sm:min-h-[500px] px-[5%] sm:px-[6%] lg:px-[8%] py-[5%]"
      >
        <div class="w-full sm:w-[45%] flex flex-col sm:items-center">
          <p
            class="text-white leading-[2.2] text-center sm:text-center text-[clamp(0.9rem,1.5vw,2rem)]"
          >
            {{ FOOTER_CONTENT.description[0] }} <span class="font-bold">{{ FOOTER_CONTENT.description[1] }}</span>
            <br />{{ FOOTER_CONTENT.description[2] }} <br />{{ FOOTER_CONTENT.description[3] }}
            <br />{{ FOOTER_CONTENT.description[4] }} <span class="font-bold italic">{{ FOOTER_CONTENT.description[5] }}</span>
          </p>
          <div class="flex justify-center sm:justify-start mt-6 sm:mt-8">
            <NuxtLink
              :to="FOOTER_CONTENT.buttonLink"
              class="bg-[#E86686] hover:bg-[#df4b6d] text-white rounded-full transition-colors duration-200 text-[clamp(1rem,1.5vw,2rem)] px-10 sm:px-14 py-2 sm:py-3"
            >
              {{ FOOTER_CONTENT.buttonText }}
            </NuxtLink>
          </div>
        </div>

        <div class="hidden sm:block sm:w-[40%]" />
      </div>

      <NuxtImg
        src="/home/grass.png"
        class="relative w-full h-auto select-none pointer-events-none z-10 -mt-[8%]"
      />
    </div>
  </div>
</template>
