<script setup lang="ts">
import PoetryHero from "~/components/poetry-hero.vue"

const route = useRoute()
const flowerSrc = useState('flowerSrc', () => '/poetry/red-flower-bg.png')
const label = useState('label', () => 'Parent')
const normalizedPath = computed(() => route.path.replace(/\/+$/, '') || '/')

const isPoetryPage = computed(() =>
  normalizedPath.value.startsWith('/poem-') || normalizedPath.value === '/flowers'
)
</script>

<template>
  <div class="w-full min-h-screen">
    <PoetryHero 
      v-if="isPoetryPage"
      :flower-src="flowerSrc" 
      :label="label" 
    />
    <main>
      <slot />
    </main>
  </div>
</template>
