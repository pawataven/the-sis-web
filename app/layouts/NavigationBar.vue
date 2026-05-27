<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import type { NavItem } from "~/types/navItems";
import { NAV_ITEMS } from "~/data/navItems";
import { useNavDropdown } from "~/composables/useNavItems";

const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});

const { navRef, openLabel, toggle, close, isOpen, cancelClose } = useNavDropdown();

const toggleDropdown = (item: NavItem): void => {
  if (!item.dropdown) return;
  if (isMobile.value) {
    toggle(item.label);
  }
};

const handleMouseEnter = (item: NavItem) => {
  if (!isMobile.value) {
    openLabel.value = item.label;
  }
};
</script>

<template>
  <nav
    ref="navRef"
    class="sticky top-0 z-50 w-full flex justify-center gap-3 sm:gap-6 md:gap-10 lg:gap-14.5 pt-5 pb-20 px-2 hidden lg:flex"
  >
    <template v-for="item in NAV_ITEMS" :key="item.label">
      <div
        v-if="item.dropdown"
        class="relative flex flex-col font-medium items-center gap-2 sm:gap-3"
        @mouseenter="handleMouseEnter(item)"
        @mouseleave="close"
      >
        <button
          :aria-expanded="isOpen(item.label)"
          :aria-controls="`dropdown-${item.label}`"
          aria-haspopup="true"
          class="group flex flex-col items-center gap-2 sm:gap-3 cursor-pointer"
          @click="toggleDropdown(item)"
        >
          <NuxtImg
            :src="item.icon"
            :alt="item.alt"
            class="h-[55px] sm:h-[80px] md:h-[95px] lg:h-[115px] w-auto object-contain transition-transform duration-200 group-hover:-translate-y-[7px]"
            :class="{ '-translate-y-[7px]': isOpen(item.label) }"
          />
          <div
            class="flex items-center gap-1 sm:gap-2 whitespace-nowrap rounded-full bg-white cursor-pointer border border-[#8C7662] px-3 py-1 sm:px-4 sm:py-1.5 lg:px-[23px] lg:py-[6px] text-[9px] sm:text-[12px] lg:text-[14px] font-navbar text-[#6B4A34] shadow-sm transition-colors duration-150 hover:brightness-90 active:brightness-75"
            :class="item.label"
          >
            {{ item.label }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-[10px] w-[10px] lg:h-[14px] lg:w-[14px] transition-transform duration-300"
              :class="{ 'rotate-180': isOpen(item.label) }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </button>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div
            v-if="isOpen(item.label)"
            :id="`dropdown-${item.label}`"
            role="menu"
            class="absolute top-full mt-2 w-[140px] font-medium sm:w-[160px] lg:w-[180px] bg-white rounded-2xl border border-[#8C7662] shadow-md overflow-hidden z-50"
            @mouseenter="cancelClose"
          >
            <NuxtLink
              v-for="child in item.dropdown"
              :key="child.label"
              :to="child.to"
              role="menuitem"
              class="relative block px-5 py-3 sm:py-4 text-[10px] sm:text-[12px] lg:text-[14px] font-navbar text-[#6B4A34] after:absolute after:bottom-2 after:left-5 after:h-[1px] after:w-0 after:bg-[#6B4A34] after:transition-all after:duration-300 after:ease-out hover:after:w-[4.2rem]"
              @click="close"
            >
              {{ child.label }}
            </NuxtLink>
          </div>
        </Transition>
      </div>

      <NuxtLink
        v-else
        :to="item.to"
        class="group flex flex-col items-center gap-2 sm:gap-3"
      >
        <NuxtImg
          :src="item.icon"
          :alt="item.alt"
          class="w-auto object-contain transition-transform duration-200 group-hover:-translate-y-[7px]"
          :class="
            item.label === 'HOME'
              ? 'h-13.75 sm:h-20 md:h-23.75 lg:h-28.75'
              : 'h-[55px] sm:h-[80px] md:h-[95px] lg:h-[115px]'
          "
        />
        <div
          class="whitespace-nowrap rounded-full border border-[#8C7662] bg-white px-3 py-1 sm:px-4 sm:py-1.5 lg:px-[23px] lg:py-[6px] text-[9px] sm:text-[12px] lg:text-[14px] font-navbar text-[#6B4A34] shadow-sm transition-colors duration-150 hover:brightness-90 active:brightness-75"
        >
          {{ item.label }}
        </div>
      </NuxtLink>
    </template>
  </nav>
</template>
