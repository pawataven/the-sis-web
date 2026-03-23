<script setup lang="ts">
import PoetryHero from "~/components/poetry-hero.vue"

const route = useRoute()
const flowerSrc = useState('flowerSrc', () => '/poetry/red-flower-bg.png')
const label = useState('label', () => 'Parent')

const isPoetryPage = computed(() => 
  route.path.startsWith('/poem-')
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