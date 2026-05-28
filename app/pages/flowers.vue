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
    fontSize: "clamp(30px, 4vw, 48px)",
    lineHeight: "1.12",
    paddingLeft: layout.titlePaddingLeft ?? "0",
  }
}

function getBodyTextStyle() {
  return {
    fontSize: "clamp(10px, 1.85vw, 16px)",
    lineHeight: "1.4",
  }
}

function bumpPxSize(value: string | undefined, increase: number, fallback: string) {
  if (!value) return fallback

  const match = value.match(/^(\d+(?:\.\d+)?)px$/)
  if (!match) return value

  return `${Number(match[1]) + increase}px`
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
    fontSize: bumpPxSize(layout.mobileText?.titleSize, 3, "20px"),
  }
}

function getMobileBodyStyle(layout: FlowerCardLayout) {
  return {
    fontSize: bumpPxSize(layout.mobileText?.bodySize, 1, "16px"),
    lineHeight: layout.mobileText?.bodyLineHeight ?? "1.3",
    maxHeight: bumpPxSize(layout.mobileText?.bodyMaxHeight, 8, "68px"),
  }
}

function getMobileButtonStyle(layout: FlowerCardLayout) {
  const mb = layout.mobileButton
  return {
    right: mb?.right ?? "7%",
    bottom: mb?.bottom ?? "18%",
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
          <div class="flower-card-mobile relative sm:hidden">
            <NuxtImg
              :src="card.imageSrc"
              loading="lazy"
              :alt="card.alt"
              class="pointer-events-none h-auto w-full"
            />

            <div
              class="absolute overflow-hidden rounded-r-[12px]"
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

            <div class="absolute" :style="getMobileButtonStyle(card.layout)">
              <button
                class="flower-card-mobile-button bg-[#E76A87] text-white font-readmore cursor-pointer border border-black rounded-full shadow-md hover:brightness-90 active:brightness-75 transition-colors duration-150"
                @click="openCard(card)"
              >
                Read more
              </button>
            </div>
          </div>

          <div class="flower-card relative hidden sm:block">
            <NuxtImg
              :src="card.imageSrc"
              loading="lazy"
              :alt="card.alt"
              class="w-full h-auto pointer-events-none"
            />

            <div
              class="absolute flex flex-col overflow-visible"
              :style="getContentStyle(card.layout)"
            >
              <div
                class="overflow-hidden"
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

              <div class="mt-auto flex justify-end pt-[6%]" :style="{ paddingRight: card.layout.buttonRight }">
                <button
                  class="flower-card-button bg-[#E76A87] text-white font-readmore cursor-pointer border border-black rounded-full shadow-md hover:brightness-90 active:brightness-75 transition-colors duration-150"
                  @click="openCard(card)"
                >
                  Read more
                </button>
              </div>
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

<style scoped>
.flower-card-mobile,
.flower-card {
  container-type: inline-size;
}

.flower-card-mobile-button {
  min-width: clamp(66px, 24cqw, 92px);
  height: clamp(24px, 8cqw, 32px);
  padding-inline: clamp(10px, 4cqw, 18px);
  font-size: clamp(9px, 3.2cqw, 12px);
}

.flower-card-button {
  width: clamp(74px, 30cqw, 112px);
  height: clamp(28px, 10cqw, 40px);
  font-size: clamp(11px, 4.2cqw, 18px);
}
</style>
