<script setup lang="ts">
import PoetryModal from "@/components/PoetryModal.vue"
import { poetryList } from "@/data/poetryData"
import type { Poetry } from "@/data/poetryData"
import { ref } from "vue"

// set ค่าให้ layout
const flowerSrc = useState('flowerSrc')
const label = useState('label')
flowerSrc.value = '/warning/yellow.png'
label.value = 'Warning'

const selectedPoem = ref<Poetry | null>(null)

function openPoem(poem: Poetry) {
  selectedPoem.value = poem
  document.body.style.overflow = "hidden"
}

function closePoem() {
  selectedPoem.value = null
  document.body.style.overflow = ""
}
</script>

<template>
  <div class="flex flex-col min-h-screen">


    <section class="w-full py-[10vw] px-[5vw] md:px-0 flex-1">
      <div class="text-center mb-[10vw] max-w-[920px] mx-auto px-[5vw]">
        <h2 class="text-[#F6EBDD] italic font-serif" style="font-size: clamp(24px, 6vw, 14.861vw)">
          Poetry - Warning
        </h2>
        <p class="text-[#F6EBDD] mt-[1vw] leading-relaxed" style="font-size: clamp(14px, 3.5vw, 28px)">
          ขอต้อนรับสู่พื้นที่แห่ง คติธรรมและเครื่องเตือนใจ <br />
          <span>เพราะบทกวีมิได้ร้อยเรียงเพียงเพื่อความเพ้อฝัน และภาษาดอกไม้</span>
          ไม่ได้มีไว้เพียงเพื่อบอกรัก เช่นเดียวกัน
        </p>
      </div>

      <div class="flex items-center gap-[6vw] max-w-[1400px] mx-auto px-[5vw] mb-[10vw]">
        <div class="w-1/2 flex justify-start">
          <img src="/warning/warning 1 1.png" class="w-[35vw] pointer-events-none" />
        </div>
        <div class="w-1/2 flex flex-col items-end text-right text-[#F6EBDD]">
          <h3 class="text-[2.5vw] mb-[0.2vw]">พระอภัยมณี</h3>
          <h3 class="text-[2.5vw] mb-[0.2vw]">ตอนสุดสาครเข้าเมืองการะเวก</h3>
          <p class="text-[1.6vw] mb-[1.5vw]">ผู้แต่ง: สุนทรภู่</p>
          <button
            @click="openPoem(poetryList[3])"
            class="bg-[#E76A87] text-white px-[2vw] py-[0.5vw] rounded-full text-[1vw] shadow-md hover:scale-105 transition-transform"
          >
            Read more
          </button>
        </div>
      </div>
    </section>

    <div class="w-full mt-auto">
      <img src="/poetry/the sis 2.png" class="w-full h-auto object-cover pointer-events-none" />
    </div>

    <PoetryModal
      :is-open="selectedPoem !== null"
      :data="selectedPoem"
      @close="closePoem"
    />
  </div>
</template>