<script setup lang="ts">
import { ref, watch } from "vue";

const isModalOpen = ref(false);
const isModalOpen2 = ref(false);
const isModalOpen3 = ref(false);
</script>

<template>
  <!-- HERO -->
  <section class="relative w-full min-h-screen overflow-hidden bg-[#F3EBDC]">
    <div class="relative mx-auto max-w-[1440px] max-h-[3254px] min-h-screen">
      <img
        src="/poetry/flower2 4.png"
        class="absolute left-0 top-0 w-[28%] max-w-[400px] z-[30] pointer-events-none"
      />

      <img
        src="/poetry/Untitled_Artwork 8 1.png"
        class="absolute left-0 top-[15vw] w-[27.5%] max-w-[390px] z-[20] pointer-events-none"
      />

      <img
        src="/poetry/flower2 3.png"
        class="absolute left-0 top-[30vw] w-[34%] max-w-[480px] z-[10] pointer-events-none"
      />

      <img
        src="/poetry/leaves-bg.png"
        class="absolute right-0 top-0 w-auto h-full max-w-none pointer-events-none"
      />

      <div class="relative z-40 flex flex-col items-center pt-[10vh]">
        <img
          src="/poetry/Layer_1.png"
          class="w-auto h-full max-w-none pointer-events-none"
        />

        <div
          class="mt-[1vw] px-[4vw] py-[0.7vw] md:px-[2rem] md:py-[0.5rem] border border-[#5A3716] rounded-[150%] text-[#5A3716] text-[clamp(1rem,2vw,28px)] bg-white"
        >
          <p class="text-[40px]">Parent</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTENT SECTION -->
  <section class="w-full py-[10vw]">
    <div class="text-center mb-[10vw]">
      <h2 class="text-[4vw] text-[#F6EBDD] italic font-serif">
        Poetry – Parent
      </h2>
      <p class="text-[#F6EBDD] text-[1.2vw] mt-[1vw] leading-relaxed">
        ขอต้อนรับสู่พื้นที่แห่งความสัมพันธ์ ในหมวดหมู่ ครอบครัว <br />
        ที่ได้ค้นหาไปจนถึงการ กลั่นกรองบทกวี และภาษาดอกไม้
        ที่มีความหมายเกี่ยวข้อง
      </p>
    </div>

    <div
      class="flex items-center gap-[6vw] max-w-[1400px] mx-auto px-[5vw] mb-[10vw]"
    >
      <div class="w-1/2 flex justify-start">
        <img src="/poetry/family-1.png" class="w-[35vw] pointer-events-none" />
      </div>
      <div class="w-1/2 flex flex-col items-end text-right text-[#F6EBDD]">
        <h3 class="text-[3.2vw] mb-[0.2vw]">เพลงยาวถวายโอวาท</h3>
        <p class="text-[1.6vw] mb-[1.5vw]">ผู้แต่ง: สุนทรภู่</p>
        <button
          @click="isModalOpen = true"
          class="bg-[#E76A87] text-white px-[2vw] py-[0.5vw] rounded-full text-[1vw] shadow-md hover:scale-105 transition-transform"
        >
          Read more
        </button>
      </div>
    </div>

    <div
      class="flex items-center justify-between max-w-[1400px] mx-auto px-[5vw]"
    >
      <div class="w-1/2 flex flex-col items-start text-left text-[#F6EBDD]">
        <h3 class="text-[3.2vw] mb-[0.2vw]">สวัสดิรักษา</h3>
        <p class="text-[1.6vw] mb-[1.5vw]">ผู้แต่ง: สุนทรภู่</p>
        <button
          @click="isModalOpen2 = true"
          class="bg-[#E76A87] text-white px-[2vw] py-[0.5vw] rounded-full text-[1vw] shadow-md"
        >
          Read more
        </button>
      </div>
      <div class="w-1/2 flex justify-end">
        <img src="/poetry/family-2.png" class="w-[35vw] pointer-events-none" />
      </div>
    </div>

    <div
      class="flex items-center justify-between max-w-[1400px] mx-auto px-[5vw] mb-[10vw]"
    >
      <div class="w-1/2 flex justify-start">
        <img src="/poetry/family-3.png" class="w-[35vw] pointer-events-none" />
      </div>
      <div class="w-1/2 flex flex-col items-end text-right text-[#F6EBDD]">
        <h3 class="text-[3.2vw] mb-[0.2vw]">ขุนช้างขุนแผน</h3>
        <p class="text-[1.6vw] mb-[1.5vw]">ผู้แต่ง: สุนทรภู่</p>
        <button
         @click="isModalOpen3 = true"
          class="bg-[#E76A87] text-white px-[2vw] py-[0.5vw] rounded-full text-[1vw] shadow-md"
        >
          Read more
        </button>
      </div>
    </div>
  </section>
  <div class="w-full flex justify-center mt-[-5vw]">
    <img
      src="/poetry/the sis 2.png"
      class="w-full h-auto object-cover pointer-events-none"
    />
  </div>

  <Transition name="fade">
    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      @click.self="isModalOpen = false"
    >
      <div
        class="relative w-full max-w-[626px] max-h-[805px] h-[95vh] bg-[#FDFBF7] shadow-2xl flex flex-col overflow-hidden"
      >
        <!-- Close button -->
        <button
          @click="isModalOpen = false"
          class="absolute top-4 right-6 text-gray-400 hover:text-black text-2xl z-50 leading-none"
        >
          ✕
        </button>

        <img
          src="/poetry/leaves-bg.png"
          class="absolute pointer-events-none z-0"
          style="
            right: 0;
            bottom: 0;
            width: 70%;
            object-fit: contain;
            opacity: 0.25;
            filter: saturate(0.5) brightness(0.9);
          "
        />

        <!-- Header -->
        <div
          class="relative px-6 sm:px-10 pt-6 sm:pt-8 pb-0 flex flex-col items-start flex-shrink-0"
        >
          <div class="relative inline-block pr-14">
            <h2
              class="text-[6vw] sm:text-[42px] lg:text-[48px] text-[#F17E6A] italic font-serif leading-tight"
            >
              เพลงยาวถวายโอวาท
            </h2>
            <img
              src="/poetry/butterfly.gif"
              class="absolute right-0 top-0 w-[8vw] sm:w-[50px] lg:w-[60px] scale-x-[-1] pointer-events-none"
            />
          </div>
          <div
            class="mt-2 border border-gray-400 rounded-full px-4 py-1 text-[14px] sm:text-[16px] text-gray-600 inline-block"
          >
            ผู้แต่ง สุนทรภู่
          </div>
        </div>

        <!-- Flower image -->
        <div class="relative w-full flex-shrink-0" style="height: 38%">
          <img
            src="/poetry/image.png"
            class="absolute pointer-events-none"
            style="
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              width: min(500px, 85%);
              object-fit: contain;
              z-index: 10;
            "
          />
        </div>

        <!-- Scrollable content below image -->
        <div class="flex flex-col flex-1 overflow-y-auto px-6 sm:px-10 pb-6">
          <!-- Poem excerpt -->
          <div
            class="italic text-[#472809] text-[clamp(15px,2.8vw,20px)] leading-[1.9] font-serif mt-2"
          >
            อนึ่งเล่าเข้าที่ศรีไสยาสน์<br />
            อย่าประมาทหมั่นคำนับลงกับหมอน<br />
            เป็นนิรันดร์สรรเสริญเจริญพร<br />
            คุณบิดรมารดาคุณอาจารย์
          </div>

          <!-- Meaning section -->
          <div class="mt-4 text-[#472809]">
            <p class="text-[clamp(13px,2.5vw,18px)] leading-relaxed">
              <span class="font-bold border-b border-[#472809] mr-2"
                >ความหมาย:</span
              >
              ก่อนเข้านอนทุกคืน ให้ระลึกถึงและอธิษฐานสรรเสริญบุญคุณของบิดามารดา
              ที่ได้อุ้มท้องและเลี้ยงดูเรามาอย่างมากมาย
              อย่าได้ประมาทหรือละเลยในบุญคุณนี้
            </p>
          </div>
        </div>
      </div>
    </div>
  </Transition>

  <Transition name="fade">
    <div
      v-if="isModalOpen2"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      @click.self="isModalOpen2 = false"
    >
      <div
        class="relative w-full max-w-[626px] max-h-[805px] h-[95vh] bg-[#FDFBF7] shadow-2xl flex flex-col overflow-hidden"
      >
        <!-- Background leaves -->
        <img
          src="/poetry/leaves-bg.png"
          class="absolute pointer-events-none z-0"
          style="
            right: 0;
            bottom: 0;
            width: 70%;
            object-fit: contain;
            opacity: 0.25;
            filter: saturate(0.5) brightness(0.9);
          "
        />

        <!-- Close button -->
        <button
          @click="isModalOpen2 = false"
          class="absolute top-4 right-6 text-gray-400 hover:text-black text-2xl z-50 leading-none"
        >
          ✕
        </button>

        <!-- Header -->
        <div
          class="relative z-10 px-6 sm:px-10 pt-6 sm:pt-8 pb-0 flex flex-col items-start flex-shrink-0"
        >
          <div class="relative inline-block pr-14">
            <h2
              class="text-[6vw] sm:text-[42px] lg:text-[48px] text-[#F17E6A] italic font-serif leading-tight"
            >
              สวัสดิรักษา
            </h2>
            <img
              src="/poetry/butterfly.gif"
              class="absolute right-0 top-0 w-[8vw] sm:w-[50px] lg:w-[60px] scale-x-[-1] pointer-events-none"
            />
          </div>
          <div
            class="mt-2 border border-gray-400 rounded-full px-4 py-1 text-[14px] sm:text-[16px] text-gray-600 inline-block"
          >
            ผู้แต่ง สุนทรภู่
          </div>
        </div>

        <!-- Flower image -->
        <div class="relative z-10 w-full flex-shrink-0" style="height: 38%">
          <img
            src="/poetry/image-2.png"
            class="absolute pointer-events-none"
            style="
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              width: min(500px, 85%);
              object-fit: contain;
              z-index: 10;
            "
          />
        </div>

        <!-- Scrollable content -->
        <div
          class="relative z-10 flex flex-col flex-1 overflow-y-auto px-6 sm:px-10 pb-6"
        >
          <!-- Poem excerpt -->
          <div
            class="italic text-[#472809] text-[clamp(15px,2.8vw,20px)] leading-[1.9] font-serif mt-2 py-[15px] px-15 mt-5"
          >
            อนึ่งอย่าด่าว่าแต่แม่พ่อ<br />
            จะเกิดก้อกรรมบาปให้หยาบช้า<br />
            ถึงร้อยรสบทกลอนอักษรา<br />
            ไม่เทียบค่าเมตตาที่อารี
          </div>

          <!-- Meaning section -->
          <div class="mt-4 text-[#472809]">
            <p class="text-[clamp(13px,2.5vw,18px)] leading-relaxed px-15">
              <span class="font-bold border-b border-[#472809] mr-2"
                >ความหมาย:</span
              >
              การด่าทอหรือล่วงเกินบิดามารดาเป็นบาปหนักและทำให้ชีวิตมัวหมองต่อให้เราจะเป็นคนที่เก่งกาจมีความรู้หรือแต่งคำคมสวยหรูก็ไม่มีคุณค่าเท่ากับการมีความเมตตาและกตัญญูต่อพ่อแม่
            </p>
          </div>
        </div>
      </div>
    </div>
  </Transition>
  <Transition name="fade">
    <div
      v-if="isModalOpen3"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      @click.self="isModalOpen2 = false"
    >
      <div
        class="relative w-full max-w-[626px] max-h-[805px] h-[95vh] bg-[#FDFBF7] shadow-2xl flex flex-col overflow-hidden"
      >
        <!-- Background leaves -->
        <img
          src="/poetry/leaves-bg.png"
          class="absolute pointer-events-none z-0"
          style="
            right: 0;
            bottom: 0;
            width: 70%;
            object-fit: contain;
            opacity: 0.25;
            filter: saturate(0.5) brightness(0.9);
          "
        />

        <!-- Close button -->
        <button
          @click="isModalOpen3 = false"
          class="absolute top-4 right-6 text-gray-400 hover:text-black text-2xl z-50 leading-none"
        >
          ✕
        </button>

        <!-- Header -->
        <div
          class="relative z-10 px-6 sm:px-10 pt-6 sm:pt-8 pb-0 flex flex-col items-start flex-shrink-0"
        >
          <div class="relative inline-block pr-14">
            <h2
              class="text-[6vw] sm:text-[42px] lg:text-[48px] text-[#F17E6A] italic font-serif leading-tight"
            >
              ขุนช้างขุนแผน
            </h2>
            <img
              src="/poetry/butterfly.gif"
              class="absolute right-0 top-0 w-[8vw] sm:w-[50px] lg:w-[60px] scale-x-[-1] pointer-events-none"
            />
          </div>
          <div
            class="mt-2 border border-gray-400 rounded-full px-4 py-1 text-[14px] sm:text-[16px] text-gray-600 inline-block"
          >
            ผู้แต่ง สุนทรภู่
          </div>
        </div>

        <!-- Flower image -->
        <div class="relative z-10 w-full flex-shrink-0" style="height: 38%">
          <img
            src="/poetry/image-3.png"
            class="absolute pointer-events-none"
            style="
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              width: min(500px, 85%);
              object-fit: contain;
              z-index: 10;
            "
          />
        </div>

        <!-- Scrollable content -->
        <div
          class="relative z-10 flex flex-col flex-1 overflow-y-auto px-6 sm:px-10 pb-6"
        >
          <!-- Poem excerpt -->
          <div
            class="italic text-[#472809] text-[clamp(15px,2.8vw,20px)] leading-[1.9] font-serif mt-2 py-[15px] px-15 mt-5"
          >
            แม่รักลูกลูกก็รู้อยู่ว่ารัก <br />
            คนอื่นสักหมื่นแสนไม่แม้นเหมือน <br />
            จะกินนอนวอนว่าเมตตาเตือน <br />
            จะจากเรือนร้างแม่ไปแต่ตัว
          </div>

          <!-- Meaning section -->
          <div class="mt-4 text-[#472809]">
            <p class="text-[clamp(13px,2.5vw,18px)] leading-relaxed px-15">
              <span class="font-bold border-b border-[#472809] mr-2"
                >ความหมาย:</span
              >
              การด่าทอหรือล่วงเกินบิดามารดาเป็นบาปหนักและทำให้ชีวิตมัวหมองต่อให้เราจะเป็นคนที่เก่งกาจมีความรู้หรือแต่งคำคมสวยหรูก็ไม่มีคุณค่าเท่ากับการมีความเมตตาและกตัญญูต่อพ่อแม่
            </p>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ปรับฟอนต์บทกลอนให้ดูเป็นทางการขึ้น */
.font-serif {
  font-family: "Kitti", serif;
}
</style>
