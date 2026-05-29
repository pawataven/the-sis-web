<script setup lang="ts">
import { ref, watch } from "vue";
import type { Flower } from "~/data/Flower/flowerData"

const props = defineProps<{
  isOpen: boolean
  data: Flower | null
}>()

const emit = defineEmits(["close"])

const scrollArea = ref<HTMLElement | null>(null);

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

function getPopupImageStyle(data: Flower) {
  const imageStyle = data.popupImageStyle
  const scale = imageStyle?.scale ?? 1

  return {
    width: imageStyle?.width ?? "85%",
    maxWidth: imageStyle?.maxWidth ?? "370px",
    height: imageStyle?.height ?? "auto",
    top: imageStyle?.top ?? "50%",
    left: imageStyle?.left ?? "50%",
    transform: `translate(-50%, -50%) scale(${scale})`,
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen && data"
        class="fixed inset-0 z-[10000] uppercase flex items-center justify-center bg-black/50 backdrop-blur-sm p-6 sm:p-4"
        @click.self="emit('close')"
      >
        <div
          ref="scrollArea"
          class="modal-card relative flex h-[75vh] h-[75dvh] sm:h-[95vh] sm:h-[95dvh] max-h-[805px] w-full max-w-[626px] flex-col overflow-y-auto shadow-2xl rounded-xl"
          style="background-image: url('/popup/Bg popup.png'); background-size: cover; background-position: center; -webkit-overflow-scrolling: touch;"
        >
          <img
            src="/popup/Bg flower.png"
            class="pointer-events-none absolute right-0 bottom-0 z-0 w-[70%] opacity-60"
            alt=""
          />

          <!-- Sticky close button — always visible -->
          <button
            @click="emit('close')"
            class="sticky top-0 self-end cursor-pointer text-gray-500 hover:text-black text-xl sm:text-2xl z-50 w-10 h-10 flex items-center justify-center mr-1 mt-1 sm:mr-2 sm:mt-2 flex-shrink-0"
          >
            ✕
          </button>

          <div class="relative z-10 flex flex-shrink-0 flex-col items-start px-6 pb-0 sm:px-10 -mt-4">
            <div class="relative inline-block pr-8 sm:pr-14">
              <h2 class="font-serif text-[5.5vw] leading-tight text-[#472809] uppercase sm:text-[38px] lg:text-[44px]">
                {{ data.titleEn }}
              </h2>
              <img
                src="/poetry/butterfly.gif"
                class="pointer-events-none absolute -top-[10px] -right-[30px] w-[60px] sm:-top-[20px] sm:-right-[60px] sm:w-[120px] scale-x-[-1]"
                alt=""
              />
            </div>

            <div class="mt-3 inline-block rounded-full border border-black px-4 py-1 text-[14px] text-[#000000]">
              {{ data.titleTh }}
            </div>
          </div>

          <div class="relative z-10 w-full flex-shrink-0" style="height: 45%; min-height: 220px">
            <img
              :src="data.image"
              :alt="data.titleEn"
              class="absolute object-contain"
              :style="getPopupImageStyle(data)"
            />
          </div>

          <div
            class="relative z-10 flex flex-col px-6 pb-6 sm:px-10"
          >
            <div class="mt-2 text-[#472809]">
              <p class="text-[15px] leading-relaxed font-light">
                <span class="mr-2 border-b border-[#472809] font-medium">ความหมาย:</span>
                {{ data.meaning }}
              </p>
            </div>

            <div v-if="data.origin" class="mt-3.25 text-[#472809]">
              <p class="text-[15px] leading-relaxed font-light">
                <span class="mr-2 border-b border-[#472809] font-medium">ที่มา:</span>
                {{ data.origin }}
              </p>
            </div>

            <div v-if="data.duo" class="mt-3.25 text-[#472809]">
              <p class="text-[15px] leading-relaxed font-light">
                <span class="mr-2 border-b border-[#472809] font-medium">สามารถจับคู่กับ:<br></span>
                <span v-html="data.duo" />
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
