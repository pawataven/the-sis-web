<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const visible = ref(true)
const open = ref(false)

const emit = defineEmits(["done"])

const openDoor = () => {
  if (open.value) return

  open.value = true

  setTimeout(() => {
    emit("done")
    visible.value = false
  }, 1800)
}

const keyHandler = (e) => {
  if (e.code === "Space" || e.code === "Enter") {
    openDoor()
  }
}

onMounted(() => {
  window.addEventListener("click", openDoor)
  window.addEventListener("keydown", keyHandler)
})

onUnmounted(() => {
  window.removeEventListener("click", openDoor)
  window.removeEventListener("keydown", keyHandler)
})
</script>

<template>
  <div
    v-if="visible"
    class="fixed inset-0 z-[99999] flex overflow-hidden bg-black"
  >

    <!-- left door -->
    <div
      class="w-1/2 h-full transition-transform duration-[1800ms] ease-in-out"
      :class="open ? '-translate-x-full' : ''"
    >
      <img
        src="/Door/door.jpg"
        class="h-full w-[200%] object-cover object-left"
      />
    </div>

    <!-- right door -->
    <div
      class="w-1/2 h-full transition-transform duration-[1800ms] ease-in-out"
      :class="open ? 'translate-x-full' : ''"
    >
      <img
        src="/Door/door.jpg"
        class="h-full w-[200%] object-cover object-right scale-x-[-1]"
      />
    </div>

  </div>
</template>