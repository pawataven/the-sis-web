import type { NavItem } from "~/types/navItems";

export const NAV_ITEMS: readonly NavItem[] = [
  {
    label: "HOME",
    to: "/",
    icon: "/Navbar/door-icon.png",
    alt: "Home icon",
  },
  {
    label: "POETRY",
    to: "/poetry",
    icon: "/Navbar/Group32.png",
    alt: "Poetry icon",
    dropdown: [
      { label: "PARENT", to: "/poem-parent" },
      { label: "WARNING", to: "/poem-warning" },
      { label: "SADNESS", to: "/poem-sadness" },
      { label: "LOVE", to: "/poem-love" },
    ],
  },
  {
    label: "FLOWERS",
    to: "/flowers",
    icon: "/Navbar/IMG_82421.png",
    alt: "Flowers icon",
  },
  {
    label: "FIND YOUR BLOOM",
    to: "/find-your-bloom",
    icon: "/Navbar/Untitled_Artwork41.png",
    alt: "Find your bloom icon",
  },
] as const;
