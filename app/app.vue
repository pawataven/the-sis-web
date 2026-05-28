<script setup lang="ts">
import { ref } from "vue";
import BackgroundMusicPlayer from "~/components/BackgroundMusicPlayer.vue";
import DoorLoader from "~/components/DoorLoader.vue";
import MobileMenu from "~/components/MobileMenu.vue";

const loaded = ref(false);

// Safety net: reset body scroll lock on every route change
// so a stale overflow:hidden from modals never persists after navigation
const router = useRouter();
router.afterEach(() => {
  document.body.style.overflow = "";
});

useHead({
  title: "Message in Flowers",
  htmlAttrs: {
    lang: "th",
  },
  meta: [
    { name: "application-name", content: "Message in Flowers" },
    { property: "og:site_name", content: "Message in Flowers" },
    { property: "og:title", content: "Message in Flowers" },
    { name: "twitter:title", content: "Message in Flowers" },
  ],
  link: [
    { rel: "icon", type: "image/png", href: "/logo/door-icon.png" },
  ],
});
</script>

<template>
  <MobileMenu />
  <BackgroundMusicPlayer />
  <div class=" min-h-screen w-full overflow-x-hidden font-sans">
    <DoorLoader @done="loaded = true" />
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background: #472809;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
