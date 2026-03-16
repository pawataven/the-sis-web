<script setup>
import { ref, onMounted } from "vue"

const visible = ref(true)
const open = ref(false)

const emit = defineEmits(["done"])

onMounted(() => {

  setTimeout(() => {
    open.value = true
  }, 700)

  setTimeout(() => {
    emit("done")
    visible.value = false
  }, 2500)

})
</script>

<template>
  <div
    v-if="visible"
    class="fixed inset-0 z-[99999] flex overflow-hidden bg-black transition-transform duration-[2200ms]"
    :class="open ? 'scale-110' : 'scale-100'"
  >

    <!-- left door -->
    <div
      class="w-1/2 h-full transition-transform duration-[1800ms] ease-in-out"
      :class="open ? '-translate-x-full' : ''"
    >
      <img
        src="/Door/door.jpg"
        class="h-full w-[200%] object-cover object-left pointer-events-none"
        format="webp"
      />
    </div>

    <!-- right door -->
    <div
      class="w-1/2 h-full transition-transform duration-[1800ms] ease-in-out"
      :class="open ? 'translate-x-full' : ''"
    >
      <img
        src="/Door/door.jpg"
        class="h-full w-[200%] object-cover object-right scale-x-[-1] pointer-events-none"
        format="webp"
      />
    </div>

  </div>
</template>