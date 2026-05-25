<script setup lang="ts">
import NavigationBar from "~/layouts/NavigationBar.vue";
</script>

<template>
  <div
    class="min-h-screen flex flex-col"
    style="
      background-image: url('/Learnmore/painted-relief-texture (1).jpg');
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

    <!-- Content -->
    <main class="w-full flex-1">
      <!-- Title section: title + flower same row -->
      <div
        class="w-full flex justify-center items-center px-6 sm:px-8 md:px-10 lg:px-0 mt-20 md:mt-15 lg:mt-0 py-[2vw] mb-[1vw]"
      >
        <img
          src="/Learnmore/learn more.png"
          alt="หัวข้อ Learn More — เรียนรู้เพิ่มเติมเกี่ยวกับภาษาดอกไม้ Floriography ในยุควิกตอเรีย"
          class="h-auto select-none flex-none"
          style="width: clamp(272px, 28vw, 472px);"
        />
        <!-- CSS crop: wrapper clips canvas เหลือแค่ส่วนดอกไม้มุมบนซ้าย -->
        <div
          class="relative overflow-hidden -ml-11 sm:-ml-11 md:-ml-10 lg:-ml-20 flex-none select-none pointer-events-none"
          style="width: clamp(160px, 18vw, 260px); height: clamp(160px, 18vw, 260px);"
        >
          <img
            src="/Learnmore/Flower Learn more.png"
            alt="ภาพดอกไม้ประดับตกแต่งหน้า Learn More สื่อถึงความงดงามของภาษาดอกไม้ Floriography"
            loading="lazy"
            class="absolute top-0 left-0"
            style="width: clamp(730px, 82vw, 232px); transform: rotate(13deg);"

          />
        </div>
      </div>

      <div class="max-w-[960px] mx-auto px-[3vw]">
        <!-- Body text block 1 -->
        <div
          class="text-[#000000] font-sans font-light leading-[2.1] text-[clamp(14px,1.35vw,18px)] mb-[3vw] space-y-5"
        >
          <p class="indent-14"> 
            ในสมัยวิกตอเรีย (ค.ศ. 1837–1901)
            ประเทศอังกฤษได้อยู่ในช่วงเวลาแห่งความเจริญรุ่งเรืองทั้งด้านวัฒนธรรม
            ศิลปกรรม และอุตสาหกรรม
            ส่งผลให้เกิดการเปลี่ยนแปลงทางสังคมและวัฒนธรรมอย่างกว้างขวาง
            หนึ่งในปรากฏการณ์ทางวัฒนธรรมที่ ได้รับความนิยมอย่างยิ่งในสังคมคือ
            “ภาษาดอกไม้” (Floriography)
            ซึ่งถูกใช้เป็นเครื่องมือในการถ่ายทอดความรู้สึกแทนการ ใช้ถ้อยคำโดยตรง
            ไม่ว่าจะเป็นความสุข ความรัก ความโศกเศร้า ความเขินอาย
            หรือแม้แต่ความเกลียดชัง ลักษณะของสังคมอังกฤษ
            ในยุควิกตอเรียนั้นที่มีความเคร่งครัดทางมารยาทและข้อจำกัดด้านการแสดงออก
            ทำให้การสื่อสารเชิงตรงไปตรงมาถูกจำกัด
            ภาษาดอกไม้จึงกลายเป็นสื่อกลางที่มีบทบาทสำคัญ 
            เนื่องจากความงดงามของดอกไม้สามารถแฝงนัยความหมายได้อย่างลึกซึ้ง
            เกินกว่าการใช้ภาษาเพียงอย่างเดียว ตัวอย่างเช่น ดอกพีโอนี (Peony)
            ในภาษาดอกไม้ยุควิกตอเรียมีความหมายถึง “ความเขินอาย” หรือ
            “ความอับอาย” และมักถูกจัดรวมกับดอกไฮยาซินธ์ (Hyacinth) หรือไวโอเลต
            (Violet) เพื่อใช้ในการสื่อสารความรู้สึก สำนึกผิดและการขอโทษ ดังนั้น
            ภาษาดอกไม้ในยุควิกตอเรียมิได้เป็นเพียงความรื่นรมย์ทางสายตา
            หากยังสะท้อนถึงวิธีคิดและ รูปแบบการสื่อสารของสังคมในยุคนั้น
            เมื่อใดก็ตามที่มีการมอบหรือได้รับช่อดอกไม้
            ความหมายที่ซ่อนอยู่ในดอกไม้แต่ละชนิดและสีสัน
            ที่เลือกย่อมก่อให้เกิดการรับรู้ที่ลึกซึ้งยิ่งขึ้น
          </p>
          <p class="indent-14">
            ปัจจุบันแม้บริบททางสังคมจะ เปลี่ยนแปลงไป
            แต่ภาษาดอกไม้ยังคงถูกนำมาประยุกต์ใช้เป็นส่วนหนึ่งของการสร้างสรรค์
            ของขวัญหรือสิ่งของในโอกาสพิเศษ
            โดยยังคงสืบทอดคุณค่าทางสัญลักษณ์และความหมายเฉพาะของดอกไม้อย่างงดงาม
            และทรงคุณค่า
          </p>
        </div>

      </div>

      <!-- Postcard image — แยกออกจาก max-w ให้ใหญ่ขึ้น -->
      <div class="max-w-[960px] mx-auto px-[3vw] mb-11.25">
        <figure class="flex flex-col">
          <img
            src="/Learnmore/9ce3ba57ca2eeb2ecdc0e2dbca43527650d53f16.png"
            alt="ภาพโปสการ์ดวินเทจยุควิกตอเรีย À la folie แสดงภาพดอกไม้โรแมนติก สื่อถึงวัฒนธรรมภาษาดอกไม้ในยุคนั้น"
            loading="lazy"
            class="w-full h-auto border border-[#c9b49a] shadow-sm"
          />
          <figcaption
            class="mt-[33px] text-center text-[clamp(9px,0.9vw,12px)] font-medium font-sans text-[#4728097A] tracking-wide"
          >
            ที่มา :
            <a
              href="https://www.bbc.com/culture/article/20221012-the-flowers-that-send-a-hidden-message"
              class="underline hover:opacity-70 transition-opacity font-bold font-sans break-all uppercase"
            > https://www.bbc.com/culture/article/20221012-the-flowers-that-send-a-hidden-message</a>
          </figcaption>
        </figure>
      </div>

      <!-- Two images side by side -->
      <div class="max-w-[960px] mx-auto px-[3vw] pb-[5vw]">
        <div class="flex gap-[4vw] justify-center items-start mb-[1.5vw]">
          <!-- Lady Mary: fixed height = เท่ากับ Language of Flowers -->
          <figure class="flex flex-col items-center">
            <img
              src="/Learnmore/1984b60f9b1bbebc7775b436e96b184226c2c806.png"
              alt="ภาพเหมือน Lady Mary Wortley Montagu ผู้นำภาษาดอกไม้จากตุรกีสู่ยุโรปในปี ค.ศ. 1717"
              loading="lazy"
              class="border border-[#c9b49a] shadow-sm"
              style="height: clamp(250px, 35vw, 480px); width: auto;"
            />
            <figcaption class="mt-5.75 text-center text-[clamp(9px,0.9vw,14px)] text-[#000000] font-sans font-light tracking-[1%] uppercase">
              Lady Mary Wortley Montagu
            </figcaption>
          </figure>

          <!-- Language of Flowers: same fixed height -->
          <figure class="flex flex-col items-center">
            <img
              src="/Learnmore/d06d23edbaf5d84aea8eb9f09905219e0efb48b6.png"
              alt="แผนภูมิภาษาดอกไม้ Floriography แสดงความหมายของดอกไม้แต่ละชนิดในยุควิกตอเรีย"
              loading="lazy"
              class="border border-[#c9b49a] shadow-sm"
              style="height: clamp(250px, 35vw, 480px); width: auto;"
            />
            <figcaption class="mt-5.75 text-center text-[clamp(9px,0.9vw,14px)] text-[#000000] font-sans font-light tracking-[0.15em] uppercase">
              Floriography
            </figcaption>
          </figure>
        </div>

        <!-- Link เดียวตรงกลางใต้ทั้ง 2 รูป -->
        <p class="mt-11.25 text-center text-[clamp(9px,0.9vw,12px)] font-medium font-sans text-[#4728097A] tracking-wide">
          ที่มา :
          <a
            href="https://planterraevents.com/blog/floriography-secret-language-flowers-victorian-era"
            class="underline hover:opacity-70 transition-opacity font-bold font-sans break-all uppercase"
          >https://planterraevents.com/blog/floriography-secret-language-flowers-victorian-era</a>
        </p>

        <!-- Body text block 2 -->
        <div
          class="text-[#000000] font-sans font-light leading-[2.1] text-[clamp(14px,1.35vw,18px)] mt-11.25 space-y-5 pb-[5vw]"
        >
          <p class="indent-14">
            โดยภาษาดอกไม้ถูกนำเข้าทวีปยุโรปโดย lady mary wortley montagu
            ที่ไปเจอวัฒนธรรมนี้จากประเทศตุรกี ในปี ค.ศ. 1717
            ระหว่างที่เธอเดินทางติดตามสามีซึ่งดำรงตำแหน่งเอกอัครราชทูตอังกฤษประจำกรุงคอนสแตนติโนเปิล
            (จักรวรรดิออตโตมัน) และนำเข้ามาเผยแพร่วัฒนธรรมในปี ค.ศ. 1717
            จากนั้นเหล่านักเขียนวรรณกรรมได้นำวัฒนธรรมนี้มาตีแผ่และเขียนเป็นตำราขึ้นมา
            จนเผยแพร่เป็นวงกว้าง ด้วยความที่ตัวภาษาดอกไม้
            มีลักษณะวัฒนธรรมที่เข้ากับสังคมเดิมในยุควิกตอเรียอยู่แล้ว
            จึงเป็นที่เผยแพร่ หลายได้ง่าย ผู้เชี่ยวชาญด้านภาษาดอกไม้
            (Floriography) Jessica Roux ผู้เขียนหนังสิอ An Illustrated Guide to
            The Victorian Language of Flowers ได้ให้สัมภาษณ์กับ BBC Culture ว่า
            สัญลักษณ์นั้นเป็นองค์ประกอบที่อยู่คู่กับ วัฒนธรรมมาอย่างยาวนาน
            ในเชิงประวัติศาสตร์
            มนุษยชาติได้ใช้สัญลักษณ์มาตั้งแต่จุดกำเนิดของอารยธรรม
            และใช้สัญลักษณ์เป็น จุดเริ่มต้นของการสื่อสาร
            โดยผนวกความหมายผ่านรูปแบบสัญลักษณ์ที่สร้างขึ้น (Stylised Icons)
            และอักษรภาพ (Hieroglyphics)
            ซึ่งล้วนมีที่มาจากคุณลักษณะและแนวคิดที่มนุษย์ประสบการณ์และรับรู้การสัมผัสในชีวิตประจำวัน
            จากการสำรวจในแง่มุมที่ หลากหลายของภาษาดอกไม้ (Floriography)
            จะเห็นได้ว่ามีพัฒนาการมาจากการหยิบยืมความหมายจากวรรณกรรม ตำนาน ศาสนา
            ตลอดจนรูปลักษณ์ของตัวดอกไม้เอง
            บ่อยครั้งผู้ค้าดอกไม้ก็สร้างสัญลักษณ์ใหม่ให้สอดคล้องกับพันธุ์ไม้ที่เพิ่มเข้ามา
            และความหมายอาจแตกต่างกันตามกาลเวลาและสถานที่
            แม้ในปัจจุบันการใช้ภาษาดอกไม้จะต่างไปจากยุควิกตอเรียน แต่ก็ยังสะท้อน
            ความปรารถนาของผู้คนที่ต้องการเปิดเผยเพียงบางด้านของตนเอง
            คล้ายกับสังคมวิกตอเรียนที่ถูกครอบงำด้วยมารยาทอัน เคร่งครัด
            ทำให้ภาษาดอกไม้กลายเป็นภาษาลับสำหรับการสื่อสาร หนังสือ Le Langage
            des Fleurs ของ Charlotte de la Tour (1819)
            ถือเป็นงานชิ้นสำคัญที่บันทึกรายละเอียดสัญลักษณ์ของดอกไม้ไว้อย่างเป็นระบบ
            และมีอิทธิพลอย่างมากต่อสังคม ตะวันตกในศตวรรษที่ 19
          </p>
        </div>
      </div>
    </main>
  </div>
</template>
