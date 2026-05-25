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
    <Transition name="modal">
      <div
        v-if="isOpen && data"
        class="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        @click.self="emit('close')"
      >
        <div
          class="modal-card relative w-full max-w-[626px] max-h-[805px] h-[95vh] shadow-2xl flex flex-col overflow-hidden"
          style="background-image: url('/popup/Bg popup.png'); background-size: cover; background-position: center;"
        >
          <img
            src="/popup/Bg flower.png"
            class="absolute right-0 bottom-0 w-[70%] opacity-60 z-0 pointer-events-none"
          />

          <button
            @click="emit('close')"
            class="absolute top-4 right-6 cursor-pointer text-gray-400 hover:text-black text-2xl z-50"
          >
            ✕
          </button>

          <div
            class="relative z-10 px-6 sm:px-10 pt-6 sm:pt-8 pb-0 flex flex-col items-start flex-shrink-0"
          >
            <div class="relative inline-block pr-14">
              <h2
                class="text-[6vw] sm:text-[42px] lg:text-[48px] italic font-serif leading-tight"
                :style="{ color: data.titleColor ?? '#F17E6A' }"
                :class="{ 'underline underline-offset-4': data.hasUnderline }"
              >
                {{ data.title }}
              </h2>
              <img
                src="/poetry/butterfly.gif"
                class="absolute -right-[60px] -top-[20px] w-[120px] scale-x-[-1] pointer-events-none"
              />
            </div>

            <p
              v-if="data.subtitle"
              class="text-[16px] text-[#472809] font-serif mt-1"
            >
              {{ data.subtitle }}
            </p>

            <div
              class="mt-2 border border-black rounded-full px-4 py-1 text-[16px] text-[#472809] inline-block"
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
              class="italic text-[#472809] text-[20px] leading-[1.9] font-medium mt-5"
              v-html="data.poem"
            />
            <div class="mt-4 text-[#472809]">
              <p class="text-[16px] leading-relaxed">
                <span class="font-medium border-b border-[#472809] mr-2"
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
<style scoped>
/* Backdrop */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Card */
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
