<template>
  <div class="relative w-full max-w-[1440px] overflow-x-clip">
    <div
      class="relative -mt-5 sm:mt-32 lg:mt-50 w-full flex justify-center items-center"
    >
      <div class="relative w-full z-20 mt-40">
        <NuxtImg
          src="/home/skyflower.png"
          class="w-full select-none block mt-20 md:mt-100" 
        />

        <div class="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div class="relative w-[70%]">
            <NuxtImg
              src="/home/วงกลม.png"
              class="block w-full h-auto select-none"
              format="webp"
            />

            <div
              class="absolute left-1/2 top-[66%] z-10 w-[88%] h-[50%] -translate-x-1/2 -translate-y-1/2 overflow-hidden"
            >
              <img
                src="/home/"
                alt="Animated flower"
                class="h-full w-full object-contain object-center"
              >
            </div>

            <div
              class="absolute left-1/2 top-[20%] z-30 w-[80%] -translate-x-1/2 text-center text-[#3A1A05]"
            >
              <img
                src="/home/Message-in-flower.png"
                alt="Message in Flowers"
                class="block w-[50%] h-auto select-none mx-auto mb-2"
                format="webp"
              />

              <p
                class="mt-[3%] text-[clamp(0.45rem,1.6vw,1.25rem)] leading-normal font-medium"
              >
                ปลดล็อกความหมายที่ซ่อนเร้นในบทกวี
                <br />
                สู่ถ้อยคำแห่งมวลดอกไม้ ยินดีต้อนรับเข้าสู่แหล่งเรียนรู้
                <br />
                ที่จะเชื่อมคุณกับบทกลอนด้วย
                <span class="font-bold italic">ภาษาดอกไม้</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="relative w-full px-4 mt-[15%] sm:-mt-10%] md:-mt-[5%] lg:-mt-[-10%] z-20"
    >
      <div class="flex justify-center">
        <NuxtImg
          src="/home/skyflower2.png"
          class="w-full max-w-[1090px] h-auto select-none"
        />
      </div>
    </div>
  </div>
</template>
