<script setup lang="ts">
import type { Flower } from "~/data/Flower/flowerData"

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
          class="modal-card relative flex h-[95vh] max-h-[805px] w-full max-w-[626px] flex-col overflow-hidden shadow-2xl"
          style="background-image: url('/popup/Bg popup.png'); background-size: cover; background-position: center;"
        >
          <img
            src="/popup/Bg flower.png"
            class="pointer-events-none absolute right-0 bottom-0 z-0 w-[70%] opacity-60"
            alt=""
          />

          <button
            @click="emit('close')"
            class="absolute top-4 right-6 cursor-pointer text-gray-400 hover:text-black text-2xl z-50"
          >
            ✕
          </button>

          <div class="relative z-10 flex flex-shrink-0 flex-col items-start px-6 pt-6 pb-0 sm:px-10 sm:pt-8">
            <div class="relative inline-block pr-14">
              <h2 class="font-serif text-[5.5vw] leading-tight italic text-[#472809] uppercase sm:text-[38px] lg:text-[44px]">
                {{ data.titleEn }}
              </h2>
              <img
                src="/poetry/butterfly.gif"
                class="pointer-events-none absolute -top-[20px] -right-[60px] w-[120px] scale-x-[-1]"
                alt=""
              />
            </div>

            <div class="mt-3 inline-block rounded-full border border-black px-4 py-1 text-[14px] text-[#000000]">
              {{ data.titleTh }}
            </div>
          </div>

          <div class="relative z-10 w-full flex-shrink-0" style="height: 45%">
            <img
              :src="data.image"
              :alt="data.titleEn"
              class="absolute top-1/2 left-1/2 max-w-[420px] w-[80%] -translate-x-1/2 -translate-y-1/2 object-contain"
            />
          </div>

          <div class="relative z-10 flex flex-1 flex-col overflow-y-auto px-6 pb-6 sm:px-10">
            <div class="mt-2 text-[#472809]">
              <p class="text-[16px] leading-relaxed">
                <span class="mr-2 border-b border-[#472809] font-medium">ความหมาย:</span>
                {{ data.meaning }}
              </p>
            </div>

            <div v-if="data.origin" class="mt-3.25 text-[#472809]">
              <p class="text-[16px] leading-relaxed">
                <span class="mr-2 border-b border-[#472809] font-medium">ที่มา:</span>
                {{ data.origin }}
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
  from {
    opacity: 0;
    transform: scale(0.85) translateY(20px);
  }

  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes modalClose {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }

  to {
    opacity: 0;
    transform: scale(0.85) translateY(20px);
  }
}
</style>
