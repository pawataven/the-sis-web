import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

export function useNavDropdown() {
  const openLabel = ref<string | null>(null);
  const navRef = ref<HTMLElement | null>(null);
  let closeTimeout: ReturnType<typeof setTimeout> | null = null;

  const open = (label: string) => (openLabel.value = label);
  const close = () => {
    if (closeTimeout) clearTimeout(closeTimeout);
    closeTimeout = setTimeout(() => {
      openLabel.value = null;
    }, 100);
  };
  const cancelClose = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }
  };
  const toggle = (label: string) =>
    (openLabel.value = openLabel.value === label ? null : label);
  const isOpen = (label: string) => openLabel.value === label;

  onClickOutside(navRef, () => {
    if (closeTimeout) clearTimeout(closeTimeout);
    openLabel.value = null;
  });

  return { navRef, openLabel, open, close, toggle, isOpen, cancelClose };
}