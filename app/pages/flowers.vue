<script setup lang="ts">
import FlowerModal from "@/components/FlowerModal.vue"
import { flowerList } from "@/data/flowerData"
import type { Flower } from "@/data/flowerData"
import { ref } from "vue"

const selectedFlower = ref<Flower | null>(null)

function openFlower(flower: Flower) {
  selectedFlower.value = flower
  document.body.style.overflow = "hidden"
}

function closeFlower() {
  selectedFlower.value = null
  document.body.style.overflow = ""
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Flower list -->
    <section class="w-full py-[5vw] flex-1">
      <div class="max-w-225 mx-auto px-[5vw]">
        <!-- Anemone Flower -->
        <div class="relative mb-[6vw]">
          <img
            src="/flowers/anemone.png"
            loading="lazy"
            alt="ภาพวาดดอกอะเนมโอนี่สีขาวม่วง สัญลักษณ์แห่งความรักที่ถูกทอดทิ้ง (FORSAKEN LOVE) ในภาษาดอกไม้วิกตอเรีย"
            class="w-full h-auto pointer-events-none"
          />
          <div class="absolute inset-0 flex items-center pl-[40%] pr-[5%]">
            <div class="flex flex-col gap-[0.4em] w-full">
              <h2
                class="font-serif text-[#3d1600]"
                style="font-size: clamp(12px, 2.5vw, 38px)"
              >
                Anemone Flower
              </h2>
              <p
                class="text-[#3d1600] font-light leading-relaxed"
                style="font-size: clamp(8px, 1.3vw, 16px)"
              >
                "ถูกทอดทิ้ง" (FORSAKEN LOVE) สื่อถึงความโศกเศร้า การถูกทอดทิ้ง
                และความเจ็บปวดเมื่อ แสนปิติ สิ้นสุดลงพร้อมกับความรัก
                สิ้นเนื้อสิ้น
              </p>
              <button
                @click="flowerList[0] && openFlower(flowerList[0])"
                class="self-end mr-[2vw] bg-[#E76A87] text-white font-readmore cursor-pointer border border-black rounded-full shadow-md hover:scale-105 transition-transform"
                style="font-size: clamp(7px, 1vw, 14px); padding: clamp(3px, 0.4vw, 6px) clamp(10px, 1.5vw, 22px);"
              >
                Read more
              </button>
            </div>
          </div>
        </div>

        <!-- Passion Flower -->
        <div class="relative mb-[6vw]">
          <img
            src="/flowers/passion flower.png"
            loading="lazy"
            alt="ภาพวาดดอกแพสชั่นฟลาวเวอร์สีขาวม่วง สัญลักษณ์แห่งศรัทธาและความเชื่อมั่น (FAITH) ในภาษาดอกไม้วิกตอเรีย"
            class="w-full h-auto pointer-events-none"
          />
          <div class="absolute inset-0 flex items-center pl-[47%] pr-[5%]">
            <div class="flex flex-col gap-[0.4em] w-full">
              <h2
                class="font-serif text-[#3d1600]"
                style="font-size: clamp(12px, 2.5vw, 38px)"
              >
                Passion Flower
              </h2>
              <p
                class="text-[#3d1600] font-light leading-relaxed"
                style="font-size: clamp(8px, 1.3vw, 16px)"
              >
                "ศรัทธาและความเชื่อมั่น" (FAITH) แสดงถึงความเชื่อมั่นในกุญแจความ
                ความรักที่ที่มั่นคง และความเชื่อมั่นที่ยึดเกิดผ่านจากจิตใจ
              </p>
              <button
                @click="flowerList[1] && openFlower(flowerList[1])"
                class="self-end mr-[2vw] bg-[#E76A87] text-white font-readmore cursor-pointer border border-black rounded-full shadow-md hover:scale-105 transition-transform"
                style="font-size: clamp(7px, 1vw, 14px); padding: clamp(3px, 0.4vw, 6px) clamp(10px, 1.5vw, 22px);"
              >
                Read more
              </button>
            </div>
          </div>
        </div>

        <!-- Honeysuckle -->
        <div class="relative mb-[6vw]">
          <img
            src="/flowers/honeysuckle.png"
            loading="lazy"
            alt="ภาพวาดดอกฮันนี่ซัคเคิลสีเหลือง สัญลักษณ์แห่งความรักและความผูกพัน (DEVOTION & AFFECTION) ในภาษาดอกไม้วิกตอเรีย"
            class="w-full h-auto pointer-events-none"
          />
          <div
            class="absolute inset-0 flex items-center pt-[5%] pl-[47%] pr-[5%]"
          >
            <div class="flex flex-col gap-[0.4em] w-full">
              <h2
                class="font-serif text-[#3d1600]"
                style="font-size: clamp(12px, 2.5vw, 38px)"
              >
                Honeysuckle
              </h2>
              <p
                class="text-[#3d1600] font-light leading-relaxed"
                style="font-size: clamp(8px, 1.3vw, 16px)"
              >
                "ความรักที่แสนความผูกพัน" (DEVOTION & AFFECTION)
                เป็นดอกไม้แทนความรู้สึกผิดชอบ ความผูกพันที่แน้นแฟ้น
                และความสุขพิเศษที่เกิดจากการให้ความรักอย่างจริงใจ
              </p>
              <button
                @click="flowerList[2] && openFlower(flowerList[2])"
                class="self-end mr-[2vw] bg-[#E76A87] text-white font-readmore cursor-pointer border border-black rounded-full shadow-md hover:scale-105 transition-transform"
                style="font-size: clamp(7px, 1vw, 14px); padding: clamp(3px, 0.4vw, 6px) clamp(10px, 1.5vw, 22px);"
              >
                Read more
              </button>
            </div>
          </div>
        </div>

        <!-- Rose Flower (Apple Blossom) -->
        <div class="relative mb-[6vw]">
          <img
            src="/flowers/apple blossom.png"
            loading="lazy"
            alt="ภาพวาดดอกแอปเปิ้ลบลอสซัมสีชมพู สัญลักษณ์แห่งความรัก (LOVE) และความโรแมนติกในภาษาดอกไม้วิกตอเรีย"
            class="w-full h-auto pointer-events-none"
          />
          <div class="absolute inset-0 flex items-center pb-[5%] pl-[50%] pr-[5%]">
            <div class="flex flex-col gap-[0.4em] w-full">
              <h2
                class="font-serif text-[#3d1600] pl-[5%]"
                style="font-size: clamp(12px, 2.5vw, 38px)"
              >
                Rose Flower
              </h2>
              <p
                class="text-[#3d1600] font-light leading-relaxed"
                style="font-size: clamp(8px, 1.3vw, 16px)"
              >
                "ความรัก" (LOVE)
                ดอกกุหลาบสีแดงเป็นสัญลักษณ์ที่เป็นที่นิยมที่สุดในการแสดงออกถึงความรักและความโรแมนติก
              </p>
              <button
                @click="flowerList[3] && openFlower(flowerList[3])"
                class="self-end mr-[2vw] bg-[#E76A87] text-white font-readmore cursor-pointer border border-black rounded-full shadow-md hover:scale-105 transition-transform"
                style="font-size: clamp(7px, 1vw, 14px); padding: clamp(3px, 0.4vw, 6px) clamp(10px, 1.5vw, 22px);"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- หญ้า -->
    <div class="w-full mt-auto">
      <img
        src="/poetry/ท่าเรือ.png"
        loading="lazy"
        alt="ภาพท่าเรือโบราณ ฉากหลังบรรยากาศวรรณคดีไทย"
        class="w-full h-auto -mt-[45%] object-cover pointer-events-none"
      />
    </div>

    <!-- Modal -->
    <FlowerModal
      :is-open="selectedFlower !== null"
      :data="selectedFlower"
      @close="closeFlower"
    />
  </div>
</template>
