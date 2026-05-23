<script setup lang="ts">
import NavigationBar from "~/layouts/NavigationBar.vue";
</script>

<template>
  <div
    class="min-h-screen flex flex-col"
    style="
      background-image: url(&quot;/Learnmore/painted-relief-texture (1).jpg&quot;);
      background-size: cover;
      background-position: center top;
      background-repeat: no-repeat;
      background-attachment: fixed;
    "
  >
    <!-- Navbar -->
    <div
      class="relative z-[50] px-[5vw] md:px-0 scale-[0.85] md:scale-100 origin-top"
    >
      <NavigationBar />
    </div>

    <!-- Main content -->
    <main class="flex-1 flex flex-col items-center">
      <!-- Title + vase section -->
      <div class="flex justify-center py-[2vw]">
        <div class="relative">
          <img
            src="/bloom/Find-your-Bloom.png"
            alt="Find your Bloom"
            class="h-auto select-none"
            style="width: clamp(200px, 35vw, 520px)"
          />
        </div>
      </div>

      <!-- Scene / main image -->
      <div class="mb-[2vw]">
        <img src="/bloom/bloom-bg.png" alt="scene" class="h-auto"
          style="width: clamp(300px, 59vw, 856px);" />
      </div>

      <!-- Welcome text + Start button -->
      <div class="text-center px-[5vw] max-w-[600px] mb-[3vw]">
        <p
          class="text-[#2c1a0e] font-serif text-[clamp(16px,2vw,28px)] mb-[1.5vw]"
        >
          ยินดีต้อนรับสู่โลกแห่งกวี...
        </p>
        <button
          class="bg-[#E76A87] text-white px-10 py-2 rounded-full text-[clamp(14px,1.2vw,18px)] shadow-md hover:scale-105 transition-transform mb-[2vw]"
        >
          Start
        </button>
        <p
          class="text-[#2c1a0e] font-serif text-[clamp(12px,1.1vw,16px)] leading-relaxed"
        >
          เนื้อหาข้างต้นมีส่วนที่อ้างอิงจากประวัติศาสตร์จริงแต่ไม่ใช่ทั้งหมด
          สร้างขึ้นเพื่อสนับสนุนความรู้ทางการศึกษาและความบันเทิงเท่านั้น
        </p>
      </div>
    </main>

    <!-- Bottom dock image — ผู้ใช้ใส่รูปเอง -->
    <div class="w-full mt-auto">
      <img
        src="/poetry/ท่าเรือ.png"
        class="w-full h-auto object-cover pointer-events-none"
      />
    </div>
  </div>
</template>
