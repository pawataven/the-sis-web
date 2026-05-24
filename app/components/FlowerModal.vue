<script setup lang="ts">
import type { Flower } from "@/data/flowerData"

defineProps<{
  isOpen: boolean
  data: Flower | null
}>()

const emit = defineEmits(["close"])
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen && data"
        class="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        @click.self="emit('close')"
      >
        <div
          class="modal-card relative w-full max-w-[626px] max-h-[805px] h-[95vh] bg-[#FDFBF7] shadow-2xl flex flex-col overflow-hidden"
        >
          <!-- Background watermark -->
          <img
            src="/poetry/leaves-bg.png"
            class="absolute right-0 bottom-0 w-[70%] opacity-25 z-0 pointer-events-none"
          />


          <!-- Close button -->
          <button
            @click="emit('close')"
            class="absolute top-4 right-6 cursor-pointer text-gray-400 hover:text-black text-2xl z-50"
          >
            ✕
          </button>

          <!-- Header -->
          <div class="relative z-10 px-6 sm:px-10 pt-6 sm:pt-8 pb-0 flex flex-col items-start flex-shrink-0">
            <!-- Title EN + butterfly -->
            <div class="relative inline-block pr-14">
              <h2 class="text-[5.5vw] sm:text-[38px] lg:text-[44px] italic font-serif leading-tight text-[#472809]">
                {{ data.titleEn }}
              </h2>
              <img
                src="/poetry/butterfly.gif"
                class="absolute -right-[60px] -top-[20px] w-[120px] scale-x-[-1] pointer-events-none"
              />
            </div>

            <!-- Thai name tag -->
            <div class="mt-3 border border-black rounded-full px-4 py-1 text-[14px] text-[#000000] inline-block">
              {{ data.titleTh }}
            </div>
          </div>

          <!-- Flower image -->
          <div class="relative z-10 w-full flex-shrink-0" style="height: 45%">
            <img
              :src="data.image"
              :alt="data.titleEn"
              class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[420px] object-contain"
            />
          </div>

          <!-- Meaning -->
          <div class="relative z-10 flex flex-col flex-1 overflow-y-auto px-6 sm:px-10 pb-6">
            <div class="mt-2 text-[#472809]">
              <p class="text-[16px] leading-relaxed">
                <span class="font-medium border-b border-[#472809] mr-2">ความหมาย:</span>
                {{ data.meaning }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
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
