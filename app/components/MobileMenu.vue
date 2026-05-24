<script lang="ts" setup>
import { ref } from "vue";
import type { NavItem } from "~/types/navItems";
import { NAV_ITEMS } from "~/data/navItems";

const isOpen = ref(false);
const openSubmenu = ref<string | null>(null);
const isPoetryModalOpen = useState("poetry-modal-open", () => false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  if (!isOpen.value) {
    openSubmenu.value = null;
  }
};

const toggleSubmenu = (label: string) => {
  openSubmenu.value = openSubmenu.value === label ? null : label;
};

const closeMenu = () => {
  isOpen.value = false;
  openSubmenu.value = null;
};
</script>

<template>
     <button
      @click="toggleMenu"
      v-if="!isPoetryModalOpen"
      class="fixed top-4 right-4 z-[10000] p-3 hover:scale-110 transition-transform duration-300 lg:hidden"
      aria-label="Toggle menu"
    >
      <Transition name="icon" mode="out-in">
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          class="w-10 h-10 text-brown-500"
          fill="currentColor"
        >
          <path
            d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          class="w-10 h-10 text-black"
          fill="currentColor"
        >
          <path
            d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
          />
        </svg>
      </Transition>
    </button>
  <div class="relative">
 

    <Transition name="slide">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-white z-[9999] flex flex-col"
      >
        <div class="flex-1 overflow-y-auto px-6 py-20">
          <div class="max-w-2xl mx-auto">
            <template v-for="item in NAV_ITEMS" :key="item.label">
              <div v-if="item.dropdown" class="mb-4">
                <button
                  @click="toggleSubmenu(item.label)"
                  class="w-full flex items-center gap-4 px-4 py-4 rounded-2xl border-2 border-[#8C7662] bg-white hover:bg-[#f5f5f5] transition-colors duration-200"
                >
                  <NuxtImg
                    :src="item.icon"
                    :alt="item.alt"
                    class="w-12 h-12 object-contain"
                  />
                  <span class="flex-1 text-left text-xl font-navbar text-[#6B4A34]">
                    {{ item.label }}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-[#6B4A34] transition-transform duration-300"
                    :class="{ 'rotate-180': openSubmenu === item.label }"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <Transition name="expand">
                  <div
                    v-if="openSubmenu === item.label"
                    class="ml-8 mt-2 space-y-2"
                  >
                    <NuxtLink
                      v-for="child in item.dropdown"
                      :key="child.label"
                      :to="child.to"
                      @click="closeMenu"
                      class="block px-4 py-3 rounded-xl border border-[#8C7662] bg-white hover:bg-[#f5f5f5] transition-colors duration-200 text-lg font-navbar text-[#6B4A34]"
                    >
                      {{ child.label }}
                    </NuxtLink>
                  </div>
                </Transition>
              </div>

              <NuxtLink
                v-else
                :to="item.to"
                @click="closeMenu"
                class="block mb-4 px-4 py-4 rounded-2xl border-2 border-[#8C7662] bg-white hover:bg-[#f5f5f5] transition-colors duration-200"
              >
                <div class="flex items-center gap-4">
                  <NuxtImg
                    :src="item.icon"
                    :alt="item.alt"
                    class="w-12 h-12 object-contain"
                  />
                  <span class="text-xl font-navbar text-[#6B4A34]">
                    {{ item.label }}
                  </span>
                </div>
              </NuxtLink>
            </template>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.icon-enter-active,
.icon-leave-active {
  transition: all 0.3s ease;
}

.icon-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}

.icon-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease-out;
}

.slide-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease-out;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
