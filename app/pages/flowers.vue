<script setup lang="ts">
import FlowerModal from "@/components/FlowerModal.vue"
import { flowerCards, flowerList } from "~/data/Flower/flowerData"
import type { Flower, FlowerCard, FlowerCardLayout } from "~/data/Flower/flowerData"
import { onBeforeUnmount, onMounted, ref } from "vue"

definePageMeta({
  scrollToTop: true,
})

const selectedFlower = ref<Flower | null>(null)
let previousScrollRestoration: ScrollRestoration | null = null

onMounted(() => {
  previousScrollRestoration = window.history.scrollRestoration
  window.history.scrollRestoration = "manual"

  requestAnimationFrame(() => {
    window.scrollTo(0, 0)
  })
})

onBeforeUnmount(() => {
  if (previousScrollRestoration === null) return
  window.history.scrollRestoration = previousScrollRestoration
})

function openFlower(flower: Flower) {
  selectedFlower.value = flower
  document.body.style.overflow = "hidden"
}

function closeFlower() {
  selectedFlower.value = null
  document.body.style.overflow = ""
}

function getContentStyle(layout: FlowerCardLayout) {
  return {
    left: layout.contentLeft,
    right: layout.contentRight,
    top: layout.contentTop,
    bottom: layout.contentBottom,
  }
}

function getTextBoxStyle(layout: FlowerCardLayout) {
  return {
    left: "0",
    right: "4%",
    top: "0",
    bottom: layout.textBottom,
  }
}

function getTitleStyle(layout: FlowerCardLayout) {
  return {
    fontSize: "clamp(18px, 3.2vw, 64px)",
    lineHeight: "1.12",
    paddingLeft: layout.titlePaddingLeft ?? "0",
  }
}

function getButtonStyle(layout: FlowerCardLayout) {
  return {
    right: layout.buttonRight,
    bottom: layout.buttonBottom,
    fontSize: "clamp(9px, 1.5vw, 16px)",
    width: "clamp(60px, 11vw, 100px)",
    height: "clamp(20px, 3.2vw, 34px)",
  }
}

function getBodyTextStyle() {
  return {
    fontSize: "clamp(9px, 1.45vw, 16px)",
    lineHeight: "1.45",
  }
}

function getMobileTextStyle(layout: FlowerCardLayout) {
  const mobileText = layout.mobileText

  return {
    left: mobileText?.left ?? "42%",
    right: mobileText?.right ?? "7%",
    top: mobileText?.top ?? "27%",
    bottom: mobileText?.bottom ?? "22%",
    padding: mobileText?.padding ?? "6px 8px",
  }
}

function getMobileTitleStyle(layout: FlowerCardLayout) {
  return {
    fontSize: layout.mobileText?.titleSize ?? "20px",
  }
}

function getMobileBodyStyle(layout: FlowerCardLayout) {
  return {
    fontSize: layout.mobileText?.bodySize ?? "9px",
    lineHeight: layout.mobileText?.bodyLineHeight ?? "1.15",
    maxHeight: layout.mobileText?.bodyMaxHeight ?? "46px",
  }
}

function modalFlower(card: FlowerCard) {
  return flowerList[card.modalIndex] ?? null
}

function openCard(card: FlowerCard) {
  const flower = modalFlower(card)
  if (!flower) return
  openFlower(flower)
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <section class="w-full flex-1 py-6 sm:py-[5vw]">
      <div class="mx-auto w-full max-w-[430px] px-3 sm:max-w-225 sm:px-[5vw]">
        <div
          v-for="card in flowerCards"
          :key="card.id"
          class="mb-5 sm:mb-[6vw]"
        >
          <div class="relative sm:hidden">
            <NuxtImg
              :src="card.imageSrc"
              loading="lazy"
              :alt="card.alt"
              class="pointer-events-none h-auto w-full"
            />

            <div
              class="absolute flex flex-col overflow-hidden rounded-r-[12px]"
              :style="getMobileTextStyle(card.layout)"
            >
              <h2
                class="truncate font-serif leading-none text-[#3d1600]"
                :style="getMobileTitleStyle(card.layout)"
              >
                {{ card.name }}
              </h2>

              <p
                v-html="card.description"
                class="mt-1 overflow-hidden font-light uppercase text-[#3d1600]"
                :style="getMobileBodyStyle(card.layout)"
              />
            </div>
          </div>

          <div class="mt-1 flex justify-end pr-3 sm:hidden">
            <button
              class="inline-flex h-[26px] min-w-[76px] cursor-pointer items-center justify-center rounded-full border border-black bg-[#E76A87] px-4 text-[10px] text-white shadow-md transition-transform hover:scale-105"
              @click="openCard(card)"
            >
              Submit
            </button>
          </div>

          <div class="relative hidden sm:block">
            <NuxtImg
              :src="card.imageSrc"
              loading="lazy"
              :alt="card.alt"
              class="w-full h-auto pointer-events-none"
            />

            <div
              class="absolute overflow-visible"
              :style="getContentStyle(card.layout)"
            >
              <div
                class="absolute overflow-hidden"
                :style="getTextBoxStyle(card.layout)"
              >
                <div class="space-y-[0.35em] pr-[2%]">
                  <h2
                    class="font-serif text-[#3d1600]"
                    :style="getTitleStyle(card.layout)"
                  >
                    {{ card.name }}
                  </h2>

                  <p
                    v-html="card.description"
                    class="text-[#3d1600] font-light uppercase"
                    :style="getBodyTextStyle()"
                  />
                </div>
              </div>

              <button
                class="absolute inline-flex items-center justify-center whitespace-nowrap rounded-full border border-black bg-[#E76A87] text-white font-NavbarFont shadow-md transition-transform hover:scale-105 cursor-pointer"
                :style="getButtonStyle(card.layout)"
                @click="openCard(card)"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="w-full mt-auto">
      <img
        src="/poetry/ท่าเรือ.png"
        loading="lazy"
        alt="Vintage pier scene background"
        class="w-full h-auto -mt-[45%] object-cover pointer-events-none"
      />
    </div>

    <FlowerModal
      :is-open="selectedFlower !== null"
      :data="selectedFlower"
      @close="closeFlower"
    />
  </div>
</template>
