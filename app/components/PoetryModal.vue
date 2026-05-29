<script setup lang="ts">
import { ref, watch } from "vue";
import type { Poetry } from "~/data/poetryData";

const props = defineProps<{
  isOpen: boolean;
  data: Poetry | null;
}>();

const emit = defineEmits(["close"]);

const scrollArea = ref<HTMLElement | null>(null);

// Reset scroll position every time modal opens
watch(
  () => props.isOpen,
  (open) => {
    if (open) {
      nextTick(() => {
        if (scrollArea.value) scrollArea.value.scrollTop = 0;
      });
    }
  }
);
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
          class="modal-card relative w-full max-w-[626px] max-h-[805px] h-[95vh] h-[95dvh] shadow-2xl flex flex-col overflow-hidden"
          style="background-image: url('/popup/Bg popup.png'); background-size: cover; background-position: center;"
        >
          <img
            src="/popup/Bg flower.png"
            class="absolute right-0 bottom-0 w-[70%] opacity-30 z-0 pointer-events-none"
          />

          <button
            @click="emit('close')"
            class="absolute top-2 right-3 sm:top-4 sm:right-6 cursor-pointer text-gray-400 hover:text-black text-xl sm:text-2xl z-50 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
          >
            ✕
          </button>

          <div
            class="relative z-10 px-6 sm:px-10 pt-6 sm:pt-8 pb-0 flex flex-col items-start flex-shrink-0"
          >
            <div class="relative inline-block pr-8 sm:pr-14">
              <h2
                class="text-[6vw] sm:text-[42px] lg:text-[48px] italic font-medium font-serif leading-tight"
                :style="{ color: data.titleColor ?? '#F17E6A' }"
                :class="{ 'underline underline-offset-4': data.hasUnderline }"
              >
                {{ data.title }}
              </h2>
              <img
                src="/poetry/butterfly.gif"
                class="absolute -right-[30px] -top-[10px] w-[60px] sm:-right-[60px] sm:-top-[20px] sm:w-[120px] scale-x-[-1] pointer-events-none"
              />
            </div>

            <p
              v-if="data.subtitle"
              class="text-[16px] font-medium italic font-serif mt-1"
              :style="{ color: data.titleColor ?? '#F17E6A' }"
            >
              {{ data.subtitle }}
            </p>

            <div
              class="mt-2 border border-black rounded-full px-4 py-1 text-[16px] text-[#472809] inline-block"
            >
              ผู้แต่ง {{ data.author }}
            </div>
          </div>

          <div
            ref="scrollArea"
            class="relative z-10 flex flex-col flex-1 overflow-y-auto min-h-0"
          >
            <div class="w-full flex-shrink-0" style="height: 45%; min-height: 200px">
              <img
                :src="data.imageSrc"
                class="absolute w-[85%] max-w-125 object-contain"
                :style="{ left: `calc(50% + ${data.imageOffsetX ?? 0}%)`, top: '50%', transform: `translateX(-50%) translateY(${data.imageOffsetY ?? -50}%)` }"
              />
            </div>

            <div class="px-6 sm:px-10 pb-6">
              <div
                class="poem-display italic text-[#472809] leading-[1.9] font-medium mt-5 sm:mt-16" style="font-size: clamp(13px, 1.5vw, 17px)"
                v-html="data.poem"
              />
              <div class="mt-4 text-[#472809]">
                <p class="text-[16px] leading-relaxed">
                  <span class="font-medium border-b border-[#472809] mr-2"
                    >ความหมาย:</span
                  >
                  <span v-html="data.meaning"></span>
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
/* กลอน: มือถือ → 1 คอลัมน์, desktop → 2 คอลัมน์ตามเดิม */
@media (max-width: 640px) {
  .poem-display :deep(div) {
    grid-template-columns: 1fr !important;
    gap: 0.4em !important;
  }
}

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
