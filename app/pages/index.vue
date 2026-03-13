<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const showDetail = ref(false);

let timer: ReturnType<typeof setInterval> | undefined;

const startAuto = () => {
  stopAuto();

  timer = setInterval(() => {
    showDetail.value = !showDetail.value;
  }, 10000);
};

const stopAuto = () => {
  if (timer !== undefined) {
    clearInterval(timer);
    timer = undefined;
  }
};

const hoverOn = () => {
  if (window.innerWidth > 768) {
    stopAuto(); 
    showDetail.value = true;
  }
};

const hoverOff = () => {
  if (window.innerWidth > 768) {
    showDetail.value = false;
    startAuto();
  }
};

const toggle = () => {
  stopAuto();
  showDetail.value = !showDetail.value;
};

onMounted(() => {
  startAuto();
});

onUnmounted(() => {
  stopAuto();
});
</script>

<template>
  <section
    class="relative w-full overflow-hidden bg-[#77B5D9] min-h-screen pb-[1440vw] md:pb-[1440vw]"
  >
    <Navbar />

    <NuxtImg
      src="/home/cloud2.png"
      class="absolute w-[64.8vw] top-[-21.1vw] left-[-47vw] pointer-events-none"
      alt="รุปภาพก้อนเมฆพื้นหลัง"
      format="webp"
    />
    <NuxtImg
      src="/home/cloud2.png"
      class="absolute w-[53.8vw] top-[-26.5vw] left-[55vw] pointer-events-none"
      alt="รุปภาพก้อนเมฆพื้นหลัง"
      format="webp"
    />
    <NuxtImg
      src="/home/cloud2.png"
      class="absolute w-[60vw] top-[-6vw] left-[71vw] pointer-events-none"
      alt="รุปภาพก้อนเมฆพื้นหลัง"
      format="webp"
    />
    <NuxtImg
      src="/home/c2 1.png"
      class="absolute w-[41vw] top-[20vw] pointer-events-none"
      alt="รุปภาพก้อนเมฆพื้นหลัง"
      format="webp"
    />
    <NuxtImg
      src="/home/c1.png"
      class="absolute w-[56vw] top-[40vw] left-[44vw] pointer-events-none"
      alt="รุปภาพก้อนเมฆพื้นหลัง"
      format="webp"
    />
    <NuxtImg
      src="/home/c1.png"
      class="absolute w-[68.5vw] top-[40vw] left-[-9vw] pointer-events-none"
      alt="รุปภาพก้อนเมฆพื้นหลัง"
      format="webp"
    />
    <NuxtImg
      src="/home/c1.png"
      class="absolute w-[40vw] top-[60vw] left-[13vw] pointer-events-none"
      alt="รุปภาพก้อนเมฆพื้นหลัง"
      format="webp"
    />
    <NuxtImg
      src="/home/c1.png"
      class="absolute w-[40vw] top-[38vw] left-[30vw] pointer-events-none"
      alt="รุปภาพก้อนเมฆพื้นหลัง"
      format="webp"
    />
    <NuxtImg
      src="/home/c1.png"
      class="absolute w-[50vw] top-[52vw] left-[40vw] pointer-events-none"
      alt="รุปภาพก้อนเมฆพื้นหลัง"
      format="webp"
    />
    <NuxtImg
      src="/home/c1.png"
      class="absolute w-[40vw] top-[60vw] left-[30vw] pointer-events-none"
      alt="รุปภาพก้อนเมฆพื้นหลัง"
      format="webp"
    />

    <div
      class="relative z-10 flex w-full items-center justify-center pt-[32.7vw]"
    >
      <video
        src="/home/comp1.webm"
        class="w-[86vw] object-contain drop-shadow-2xl pointer-events-none"
        autoplay
        loop
        muted
        playsinline
      ></video>
    </div>

    <img
      src="/home/butterfly.gif"
      class="absolute z-20 w-[30vw] top-[70vw] left-[80vw] object-contain drop-shadow-2xl pointer-events-none transform scale-x-[-1] rotate-[-20deg]"
      alt="ผีเสื้อบิน"
    />

    <div class="relative flex items-center justify-center pt-[6.25vw]">
      <NuxtImg
        src="/home/c1.png"
        class="w-[70vw] pointer-events-none"
        alt="รูปภาพก้อนเมฆพื้นหลัง"
        format="webp"
      />

      <NuxtImg
        src="/home/Layer_1.png"
        class="absolute w-[60vw] pointer-events-none"
        alt="รูปภาพชื่อเว็บไซต์"
        format="webp"
      />
    </div>

    <div>
      <NuxtImg
        src="/home/c1.png"
        class="absolute w-[50vw] top-[110vw] left-[-35vw] pointer-events-none"
        alt="รุปภาพก้อนเมฆพื้นหลัง"
        format="webp"
      />
    </div>

    <img
      src="/home/butterfly.gif"
      class="absolute z-20 w-[30vw] top-[100vw] left-[-10vw] object-contain drop-shadow-2xl pointer-events-none rotate-30"
      alt="ผีเสื้อบิน"
    />

    <div
      class="absolute top-[115vw] left-1/2 -translate-x-1/2 w-[70vw] h-[25vw] bg-white/90 border border-black rounded-[100%/100%] shadow-lg flex flex-col items-center justify-center px-[5vw] py-[2vw] cursor-pointer"
      @mouseenter="hoverOn"
      @mouseleave="hoverOff"
      @click="toggle"
    >
      <transition name="fade" mode="out-in">
        <div v-if="!showDetail" key="intro" class="text-center">
          <h2 class="font-serif text-[#6B4A34] text-[4.5vw] italic mb-[1vw]">
            Message in Flowers
          </h2>

          <div class="font-serif text-[#6B4A34] text-[1.4vw] leading-relaxed">
            <p>ปลดล็อกความหมายที่ซ่อนเร้นในบทกวี สู่ถ้อยคำแห่งมวลดอกไม้</p>
            <p>ยินดีต้อนรับเข้าสู่แหล่งเรียนรู้</p>
            <p>
              ที่เชื่อมคุณกับบทกลอนด้วย
              <span class="italic font-bold">ภาษาดอกไม้</span>
            </p>
          </div>
        </div>
        <div
          v-else
          key="detail"
          class="text-center font-serif text-[#6B4A34] text-[1.4vw] leading-relaxed"
        >
          <p class="text-[2vw] italic mb-[1vw]">ภาษาดอกไม้ หรือ FLORIOGRAPHY</p>

          <p>
            คือ การสื่อสารอีกรูปแบบหนึ่งในยุควิคตอเรียโดย ใช้ดอกไม้ในการสื่อสาร
            แสดงถึงความรู้สึกส่วนตัวที่ไม่สามารถบอกออกมาเป็นคำพูดได้
            โดยในแต่ละชนิดของดอกไม้จะมี ความหมายแตกต่างกัน
            ซึ่งสามารถใช้แทนความรู้สึก ความคิด หรือข้อความที่ต้องการสื่อได้
          </p>
        </div>
      </transition>
    </div>
  </section>
</template>

<style>
body {
  background-color: #77b5d9;
  overflow-x: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-active {
  transition: all 1s ease;
}
</style>
