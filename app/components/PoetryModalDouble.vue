<script setup lang="ts">
import type { Poetry } from "~/data/poetryData";

defineProps<{
  isOpen: boolean;
  dataLeft: Poetry | null;
  dataRight: Poetry | null;
}>();

const emit = defineEmits(["close"]);
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen && dataLeft"
        class="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 backdrop-blur-sm p-2 sm:p-4"
        @click.self="emit('close')"
      >
        <div class="flex gap-2 sm:gap-3 w-full max-w-[1280px] h-[95vh] max-h-[805px] justify-center">

          <!-- Card Left -->
          <div
            class="modal-card relative flex-1 min-w-0 shadow-2xl flex flex-col overflow-hidden"
            style="background-image: url('/popup/Bg popup.png'); background-size: cover; background-position: center;"
          >
            <img src="/popup/Bg flower.png" class="absolute right-0 bottom-0 w-[70%] opacity-30 z-0 pointer-events-none" />
            <button @click="emit('close')" class="absolute top-3 right-4 cursor-pointer text-gray-400 hover:text-black text-xl z-50">✕</button>

            <div class="relative z-10 px-4 sm:px-8 pt-4 sm:pt-7 pb-0 flex flex-col items-start flex-shrink-0">
              <div class="relative inline-block pr-10 sm:pr-14">
                <h2
                  class="text-[5.5vw] sm:text-[34px] lg:text-[42px] italic font-medium font-serif leading-tight"
                  :style="{ color: dataLeft!.titleColor ?? '#F17E6A' }"
                  :class="{ 'underline underline-offset-4': dataLeft!.hasUnderline }"
                >{{ dataLeft!.title }}</h2>
                <img src="/poetry/butterfly.gif" class="absolute -right-[40px] sm:-right-[55px] -top-[14px] sm:-top-[18px] w-[80px] sm:w-[110px] scale-x-[-1] pointer-events-none" />
              </div>
              <p v-if="dataLeft!.subtitle" class="text-[11px] sm:text-[14px] font-medium italic font-serif mt-1" :style="{ color: dataLeft!.titleColor ?? '#F17E6A' }">{{ dataLeft!.subtitle }}</p>
              <div class="mt-2 border border-black rounded-full px-3 py-0.5 text-[11px] sm:text-[14px] text-[#472809] inline-block">ผู้แต่ง {{ dataLeft!.author }}</div>
            </div>

            <div class="relative z-10 w-full flex-shrink-0" style="height: 34%">
              <img
                :src="dataLeft!.imageSrc"
                class="absolute w-[80%] object-contain"
                :style="{ left: `calc(50% + ${dataLeft!.imageOffsetX ?? 0}%)`, top: '50%', transform: `translateX(-50%) translateY(${dataLeft!.imageOffsetY ?? -50}%)` }"
              />
            </div>

            <div class="relative z-10 flex flex-col flex-1 overflow-y-auto px-4 sm:px-8 pb-4">
              <div
                class="poem-display italic text-[#472809] leading-[1.8] font-medium mt-3 sm:mt-10"
                style="font-size: clamp(10px, 1.2vw, 15px)"
                v-html="dataLeft!.poem"
              />
              <div class="mt-3 text-[#472809]">
                <p style="font-size: clamp(10px, 1.1vw, 14px)" class="leading-relaxed">
                  <span class="font-medium border-b border-[#472809] mr-2">ความหมาย:</span>{{ dataLeft!.meaning }}
                </p>
              </div>
            </div>
          </div>

          <!-- Card Right -->
          <div
            v-if="dataRight"
            class="modal-card relative flex-1 min-w-0 shadow-2xl flex flex-col overflow-hidden"
            style="background-image: url('/popup/Bg popup.png'); background-size: cover; background-position: center;"
          >
            <img src="/popup/Bg flower.png" class="absolute right-0 bottom-0 w-[70%] opacity-30 z-0 pointer-events-none" />
            <button @click="emit('close')" class="absolute top-3 right-4 cursor-pointer text-gray-400 hover:text-black text-xl z-50">✕</button>

            <div class="relative z-10 px-4 sm:px-8 pt-4 sm:pt-7 pb-0 flex flex-col items-start flex-shrink-0">
              <div class="relative inline-block pr-10 sm:pr-14">
                <h2
                  class="text-[5.5vw] sm:text-[34px] lg:text-[42px] italic font-medium font-serif leading-tight"
                  :style="{ color: dataRight.titleColor ?? '#F17E6A' }"
                  :class="{ 'underline underline-offset-4': dataRight.hasUnderline }"
                >{{ dataRight.title }}</h2>
                <img src="/poetry/butterfly.gif" class="absolute -right-[40px] sm:-right-[55px] -top-[14px] sm:-top-[18px] w-[80px] sm:w-[110px] scale-x-[-1] pointer-events-none" />
              </div>
              <p v-if="dataRight.subtitle" class="text-[11px] sm:text-[14px] font-medium italic font-serif mt-1" :style="{ color: dataRight.titleColor ?? '#F17E6A' }">{{ dataRight.subtitle }}</p>
              <div class="mt-2 border border-black rounded-full px-3 py-0.5 text-[11px] sm:text-[14px] text-[#472809] inline-block">ผู้แต่ง {{ dataRight.author }}</div>
            </div>

            <div class="relative z-10 w-full flex-shrink-0" style="height: 34%">
              <img
                :src="dataRight.imageSrc"
                class="absolute w-[80%] object-contain"
                :style="{ left: `calc(50% + ${dataRight.imageOffsetX ?? 0}%)`, top: '50%', transform: `translateX(-50%) translateY(${dataRight.imageOffsetY ?? -50}%)` }"
              />
            </div>

            <div class="relative z-10 flex flex-col flex-1 overflow-y-auto px-4 sm:px-8 pb-4">
              <div
                class="poem-display italic text-[#472809] leading-[1.8] font-medium mt-3 sm:mt-10"
                style="font-size: clamp(10px, 1.2vw, 15px)"
                v-html="dataRight.poem"
              />
              <div class="mt-3 text-[#472809]">
                <p style="font-size: clamp(10px, 1.1vw, 14px)" class="leading-relaxed">
                  <span class="font-medium border-b border-[#472809] mr-2">ความหมาย:</span>{{ dataRight.meaning }}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
@media (max-width: 640px) {
  .poem-display :deep(div) {
    grid-template-columns: 1fr !important;
    gap: 0.4em !important;
  }
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active .modal-card {
  animation: modalOpen 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.modal-leave-active .modal-card {
  animation: modalClose 0.25s ease forwards;
}
@keyframes modalOpen {
  from { opacity: 0; transform: scale(0.85) translateY(20px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);    }
}
@keyframes modalClose {
  from { opacity: 1; transform: scale(1)    translateY(0);    }
  to   { opacity: 0; transform: scale(0.85) translateY(20px); }
}
</style>
