<script setup lang="ts">
import DecorationComp from "~/components/DecorationComp.vue";
import ArchCards from "~/components/home/ArchCards.vue";
import NavigationBar from "~/layouts/NavigationBar.vue";
 
import { ref } from "vue";
const hovered = ref(false);
</script>
 
<template>
  <div class="min-h-screen w-full overflow-x-hidden">
    <div
      class="relative w-full bg-[#7DB2D3] rounded-b-[650px] pb-60 z-0 flex flex-col items-center overflow-hidden"
    >
      <DecorationComp />
 
      <div class="relative w-full max-w-[1440px]">
        <div class="relative z-10 pt-4 sm:pt-6 md:pt-10 px-4">
          <NavigationBar />
        </div>
 
        <div
          class="relative -mt-5 sm:mt-32 lg:mt-50 w-full flex justify-center items-center"
        >
          <div class="relative w-full">
            <NuxtImg
              src="/home/skyflower.png"
              class="w-full h-auto select-none block"
            />
            <div class="absolute inset-0 flex justify-center items-center">
              <!-- <img
                src="/home/flowergif.gif"
                class="w-[85%] sm:w-[70%] lg:w-[75%] max-w-[1440px] h-auto object-contain select-none z-10"
              /> -->
            </div>
          </div>
        </div>
 
        <div
          class="relative w-full px-4 -mt-[1%] sm:-mt-[3%] md:-mt-[5%] lg:-mt-[1%] z-20"
        >
          <div class="flex justify-center">
            <NuxtImg
              src="/home/Message-in-flower.png"
              class="w-full max-w-[1200px] h-auto select-none"
            />
          </div>
        </div>
 
        <div
          class="relative w-full px-6 mt-1 sm:-mt-5 md:-mt-10 lg:-mt-[3%] pb-10 z-20"
        >
          <div class="flex justify-center w-full">
            <div
              class="relative w-full max-w-[922px] aspect-[3/1.2] sm:aspect-[3/1] rounded-[100%] bg-white border border-black drop-shadow-lg overflow-hidden cursor-default"
              @mouseenter="hovered = true"
              @mouseleave="hovered = false"
            >
              <!-- Content A: Default -->
              <div
                class="absolute inset-0 flex flex-col justify-center items-center text-center p-[5%] sm:p-8 md:p-12 transition-opacity duration-500"
                :class="hovered ? 'opacity-0 pointer-events-none' : 'opacity-100'"
              >
                <h1
                  class="font-serif text-[#472809] text-[clamp(1.5rem,4vw,3.75rem)] leading-tight mb-[2%]"
                >
                  Message in Flowers
                </h1>
                <p
                  class="text-[#472809] text-[clamp(10px,1.5vw,1.125rem)] max-w-[85%] leading-relaxed"
                >
                  ปลดล็อกความหมายที่ซ่อนเร้นในบทกวี สู่ถ้อยคำแห่งมวลดอกไม้
                  <br class="hidden sm:block" />
                  ยินดีต้อนรับเข้าสู่แหล่งเรียนรู้
                  <br class="hidden sm:block" />ที่จะเชื่อมคุณกับบทกลอนด้วย
                  <span class="font-bold">ภาษาดอกไม้</span>
                </p>
              </div>
 
              <!-- Content B: On Hover -->
              <div
                class="absolute inset-0 flex flex-col justify-center items-center text-center p-[5%] sm:p-8 md:p-12 transition-opacity duration-500"
                :class="hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'"
              >
                <p
                  class="text-[#472809] text-[clamp(10px,1.5vw,1.125rem)] max-w-[85%] leading-relaxed"
                >
                  <span class="font-bold">ภาษาดอกไม้ หรือ FLORIOGRAPHY</span>
                  <br />
                  คือ การสื่อสารอีกรูปแบบหนึ่งในยุควิคตอเรียโดย
                  ใช้ดอกไม้ในการสื่อสาร
                  <br class="hidden sm:block" />
                  แสดงถึงความรู้สึกส่วนตัวที่ไม่สามารถบอกออกมาเป็นคำพูดได้
                  โดยในแต่ละชนิดของดอกไม้จะมี
                  <br class="hidden sm:block" />
                  ความหมายแตกต่างกัน ซึ่งสามารถใช้แทนความรู้สึก
                  <br class="hidden sm:block" />
                  ความคิด หรือข้อความที่ต้องการสื่อได้
                </p>
              </div>
            </div>
          </div>
        </div>
 
        <div
          class="relative w-full px-4 -mt-[10%] sm:-mt-[8%] md:-mt-[5%] lg:-mt-[3%] z-20"
        >
          <div class="flex justify-center">
            <NuxtImg
              src="/home/skyflower2.png"
              class="w-full max-w-[1090px] h-auto select-none"
            />
          </div>
        </div>
 
        <ArchCards class="relative z-10 mt-5" />
 
        <div class="relative w-full px-4 -mt-[15%] z-0">
          <div class="flex justify-center">
            <NuxtImg
              src="/home/cloud-bg.png"
              class="w-full max-w-[1090px] h-auto select-none"
            />
          </div>
        </div>
      </div>
    </div>
 
    <!--พื้นที่ส่วนน้ำตาล-->
    <div class="relative w-full">
      <!-- ดอกไม้ขวา — ซ่อนบน mobile -->
      <NuxtImg
        src="/home/flower-footer.png"
        class="absolute right-[-5%] select-none pointer-events-none sm:h-[50vw] md:h-[60vw] lg:h-[80vw] max-h-[1000px]"
        style="bottom: 7%"
      />
      <!-- layout -->
      <div
        class="relative z-20 flex items-center justify-center min-h-[400px] sm:min-h-[500px] px-[5%] sm:px-[6%] lg:px-[8%] py-[5%]"
      >
        <!-- ข้อความ + ปุ่ม -->
        <div class="w-full sm:w-[45%] flex flex-col sm:items-center">
          <p
            class="text-white leading-[2.2] text-center sm:text-center text-[clamp(0.9rem,1.5vw,2rem)]"
          >
            เปิดบทเรียนสู่โลก <span class="font-bold">วรรณคดีไทย</span>
            <br />ที่จะพาไปพบกับการถอดรหัสบทกลอน <br />ให้กลับมามีชีวิตชีวา
            <br />ด้วยถ้อยคำจาก <span class="font-bold italic">ดอกไม้</span>
          </p>
          <div class="flex justify-center sm:justify-start mt-6 sm:mt-8">
            <NuxtLink
              to="/poetry"
              class="bg-[#E86686] hover:bg-[#df4b6d] text-white rounded-full transition-colors duration-200 text-[clamp(1rem,1.5vw,2rem)] px-10 sm:px-14 py-2 sm:py-3"
            >
              Go
            </NuxtLink>
          </div>
        </div>
 
        <!-- spacer ขวา -->
        <div class="hidden sm:block sm:w-[40%]" />
      </div>
 
      <!-- หญ้า -->
      <NuxtImg
        src="/home/grass.png"
        class="relative w-full h-auto select-none pointer-events-none z-10"
      />
    </div>
  </div>
</template>