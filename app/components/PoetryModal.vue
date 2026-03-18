<script setup lang="ts">
import type { Poetry } from "~/types/poetry";

defineProps<{
  isOpen: boolean;
  data: Poetry | null;
}>();

const emit = defineEmits(["close"]);
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isOpen && data"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        @click.self="emit('close')"
      >
        <div
          class="relative w-full max-w-[626px] max-h-[805px] h-[95vh] bg-[#FDFBF7]  shadow-2xl flex flex-col overflow-hidden"
        >
          <img
            src="/poetry/leaves-bg.png"
            class="absolute right-0 bottom-0 w-[70%] opacity-25 z-0 pointer-events-none"
          />

          <button
            @click="emit('close')"
            class="absolute top-4 right-6 text-gray-400 hover:text-black text-2xl z-50"
          >
            ✕
          </button>

          <div
            class="relative z-10 px-6 sm:px-10 pt-6 sm:pt-8 pb-0 flex flex-col items-start flex-shrink-0"
          >
            <div class="relative inline-block pr-14">
              <h2
                class="text-[6vw] sm:text-[42px] lg:text-[48px] text-[#F17E6A] italic font-serif leading-tight"
              >
                {{ data.title }}
              </h2>
              <img
                src="/poetry/butterfly.gif"
                class="absolute right-0 top-0 w-[50px] scale-x-[-1]"
              />
            </div>

            <p
              v-if="data.subtitle"
              class="text-[16px] text-[#472809] font-serif mt-1"
            >
              {{ data.subtitle }}
            </p>

            <div
              class="mt-2 border border-gray-400 rounded-full px-4 py-1 text-[14px] text-gray-600 inline-block"
            >
              ผู้แต่ง {{ data.author }}
            </div>
          </div>

          <div class="relative z-10 w-full flex-shrink-0" style="height: 38%">
            <img
              :src="data.imageSrc"
              class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-[500px] object-contain"
            />
          </div>

          <div
            class="relative z-10 flex flex-col flex-1 overflow-y-auto px-6 sm:px-10 pb-6"
          >
            <div
              class="italic text-[#472809] text-[20px] leading-[1.9] font-serif mt-5"
              v-html="data.poem"
            />
            <div class="mt-4 text-[#472809]">
              <p class="text-[18px] leading-relaxed">
                <span class="font-bold border-b border-[#472809] mr-2"
                  >ความหมาย:</span
                >
                {{ data.meaning }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
