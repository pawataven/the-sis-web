<script setup lang="ts">
import NavigationBar from "~/layouts/NavigationBar.vue";
</script>

<template>
  <div
    class="min-h-screen flex flex-col page-bg-fixed"
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
          style="width: clamp(272px, 28vw, 472px)"
        />
        <!-- CSS crop: wrapper clips canvas เหลือแค่ส่วนดอกไม้มุมบนซ้าย -->
        <div
          class="relative overflow-hidden -ml-11 sm:-ml-11 md:-ml-10 lg:-ml-20 flex-none select-none pointer-events-none"
          style="
            width: clamp(160px, 18vw, 260px);
            height: clamp(160px, 18vw, 260px);
          "
        >
          <img
            src="/Learnmore/Flower Learn more.png"
            alt="ภาพดอกไม้ประดับตกแต่งหน้า Learn More สื่อถึงความงดงามของภาษาดอกไม้ Floriography"
            loading="lazy"
            class="absolute top-0 left-0"
            style="width: clamp(730px, 82vw, 232px); transform: rotate(13deg)"
          />
        </div>
      </div>

      <div class="max-w-[1200px] mx-auto px-[3vw]">
        <!-- Body text block 1 -->
        <div
          class="text-[#000000] font-kanit-regular leading-[2.1] text-[clamp(14px,1.35vw,18px)] mb-[3vw] space-y-5"
        >
          <p class="indent-14">
            ในสมัยวิกตอเรีย (ค.ศ. 1837–1901)
            ประเทศอังกฤษได้อยู่ในช่วงเวลาแห่งความเจริญรุ่งเรืองทั้งด้านวัฒนธรรม
            ศิลปกรรม และอุตสาหกรรมส่งผลให้เกิดการเปลี่ยนแปลงทางสังคมและวัฒนธรรมอย่างกว้างขวาง
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
      <div class="max-w-[1200px] mx-auto px-[3vw] mb-11.25">
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
            >
              https://www.bbc.com/culture/article/20221012-the-flowers-that-send-a-hidden-message</a
            >
          </figcaption>
        </figure>
      </div>

      <!-- Two images side by side -->
      <div class="max-w-[1200px] mx-auto px-[3vw] pb-[5vw]">
        <div class="flex gap-[4vw] justify-center items-start mb-[1.5vw]">
          <!-- Lady Mary: fixed height = เท่ากับ Language of Flowers -->
          <figure class="flex flex-col items-center">
            <img
              src="/Learnmore/1984b60f9b1bbebc7775b436e96b184226c2c806.png"
              alt="ภาพเหมือน Lady Mary Wortley Montagu ผู้นำภาษาดอกไม้จากตุรกีสู่ยุโรปในปี ค.ศ. 1717"
              loading="lazy"
              class="border border-[#c9b49a] shadow-sm"
              style="height: clamp(250px, 35vw, 480px); width: auto"
            />
            <figcaption
              class="mt-5.75 text-center text-[clamp(9px,0.9vw,14px)] text-[#000000] font-sans font-light tracking-[1%] uppercase"
            >
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
              style="height: clamp(250px, 35vw, 480px); width: auto"
            />
            <figcaption
              class="mt-5.75 text-center text-[clamp(9px,0.9vw,14px)] text-[#000000] font-sans font-light tracking-[0.15em] uppercase"
            >
              Floriography
            </figcaption>
          </figure>
        </div>

        <!-- Link เดียวตรงกลางใต้ทั้ง 2 รูป -->
        <p
          class="mt-11.25 text-center text-[clamp(9px,0.9vw,12px)] font-medium font-sans text-[#4728097A] tracking-wide"
        >
          ที่มา :
          <a
            href="https://planterraevents.com/blog/floriography-secret-language-flowers-victorian-era"
            class="underline hover:opacity-70 transition-opacity font-bold font-sans break-all uppercase"
            >https://planterraevents.com/blog/floriography-secret-language-flowers-victorian-era</a
          >
        </p>

        <!-- Body text block 2 -->
        <div
          class="text-[#000000] font-kanit-regular leading-[2.1] text-[clamp(14px,1.35vw,18px)] mt-11.25 space-y-5 pb-[5vw]"
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

      <!-- Three portraits -->
      <div class="max-w-[1200px] mx-auto px-[3vw] pb-[5vw]">
        <div
          class="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-[26px] justify-center items-start mb-[1.5vw]"
        >
          <figure
            class="flex flex-col items-center justify-self-center w-full max-w-[260px] md:max-w-[300px]"
          >
            <img
              src="/Learnmore/b28dc7a7484395781cd407a585718c4e747c0e76.png"
              alt="ภาพสุนทรภู่ กวีเอกของไทยที่มีผลงานเกี่ยวกับดอกไม้และธรรมชาติ สื่อถึงความเชื่อมโยงระหว่างวัฒนธรรมภาษาดอกไม้ในยุโรปกับวรรณกรรมไทย"
              loading="lazy"
              class="aspect-[1/1.18] w-full border border-[#c9b49a] object-cover shadow-sm"
            />
            <figcaption
              class="mt-3 text-center text-[clamp(9px,0.9vw,14px)] text-[#000000] font-kanit-regular tracking-[1%]"
            >
              สุนทรภู่
            </figcaption>
          </figure>

          <figure
            class="flex flex-col items-center justify-self-center w-full max-w-[260px] md:max-w-[300px]"
          >
            <img
              src="/Learnmore/28051aabf2c9352624e977a3298909f48747abbf.png"
              alt="รูปคุณสุวรรณ"
              loading="lazy"
              class="aspect-[1/1.18] w-full border border-[#c9b49a] object-cover shadow-sm"
            />
            <figcaption
              class="mt-3 text-center text-[clamp(9px,0.9vw,14px)] text-[#000000] font-kanit-regular tracking-[0.02em]"
            >
              คุณสุวรรณ
            </figcaption>
          </figure>

          <figure
            class="flex flex-col items-center justify-self-center w-full max-w-[260px] md:max-w-[300px]"
          >
            <img
              src="/Learnmore/99d47eed85711434edd84bbe9e974b972cea8d65.png"
              alt="รูปคุณพุ่ม บุษบาท่าเรือจ้าง"
              loading="lazy"
              class="aspect-[1/1.18] w-full border border-[#c9b49a] object-cover shadow-sm"
            />
            <figcaption
              class="mt-3 text-center text-[clamp(9px,0.9vw,14px)] text-[#000000] font-kanit-regular tracking-[0.02em]"
            >
              คุณพุ่ม บุษบาท่าเรือจ้าง
            </figcaption>
          </figure>
        </div>

        <!-- Body text block 2 -->
        <div
          class="text-[#000000] font-kanit-regular leading-[2.1] text-[clamp(14px,1.35vw,18px)] mt-11.25 space-y-5 pb-[2vw]"
        >
          <p class="">
            <b>กล่าวถึงวรรณกรรมในสมัยรัชกาลที่ 3</b> (พ.ศ. 2380 - 2394)
            ซึ่งเป็นปีที่ยังคงอยู่ในช่วงของยุควิกตอเรีย
            จึงทำให้เห็นถึงวัฒนธรรมที่ คล้ายคลึงกันบ้าง
            เนื่องจากได้รับอิทธิพลจากยุกวิคตอเรีย
            จึงเป็นสาเหตุที่ทำให้เกิดการประยุกต์ใช้ภาษาดอกไม้และบทกลอนขึ้นมา
            วรรณกรรมในรัชสมัยนี้มิได้เจริญรุ่งเรืองเทียบเท่ากับในรัชกาลที่ 2
            อันเนื่องมาจากพระราชอัธยาศัยส่วนพระองค์ที่มิได้ทรงโปรดการ
            ประพันธ์เท่าพระราชบิดา (รัชกาลที่ 2
            พระบาทสมเด็จพระพุทธเลิศหล้านภาลัย) พระองค์จึงมิได้ทรงส่งเสริมการ
            แต่งกวีนิพนธ์เป็น พิเศษ
            วรรณกรรมในยุคนี้จึงมีลักษณะเด่นอยู่ที่การแปลและการดัดแปลงวรรณกรรมจากต่างประเทศเป็นสำคัญนอกจากนี้วรรณกรรม
            ในรัชกาลที่ 3
            ยังสะท้อนให้เห็นความศรัทธาในพระพุทธศาสนาของพระมหากษัตริย์
            จึงมุ่งเน้นไปที่การสอดแทรกหลักธรรมและ จริยธรรมในงานประพันธ์
            อย่างไรก็ดีสิ่งที่ทำให้วรรณกรรมในสมัยนี้มีความน่าสนใจ คือ
            การที่สตรีเริ่มเข้ามามีบทบาทในแวดวง วรรณกรรม
            และเป็นที่ยอมรับในฐานะกวีที่มีชื่อเสียง เช่น คุณสุวรรณ คุณพุ่มบุษบา
            อีกทั้งยังมีความเคลื่อนไหวเชิงสร้างสรรค์ที่ แสดง
            ถึงความแปลกใหม่ในการแต่งวรรณกรรมและการกล้าเล่นประเด็นใหม่ๆ
            ตัวอย่างเช่น เรื่อง ระเด่นลันได ประพันธ์โดย พระมหามนตรี (ทรัพย์)
            ที่เล่าเรื่องขอทานผู้ยากไร้ไปหลงรักนางประแดะ
            โดยในบทประพันธ์มีการพรรณนาความงามของนางเปรียบ เสมือน “อูฐ”
            ซึ่งถือเป็นการแหวกขนบเดิมที่มักยกย่องตัวละครเอกให้มีรูปงามหรือฐานะสูง
            อีกทั้งยังสะท้อนลักษณะการล้อเลียน อิเหนา ในเชิงเสียดสีสังคม
            เพลงหมอ่ามเป็นสวรรค์ ที่มีเนื้อหาความรักหญิงกับหญิง นอกจากนี้ยังมี
            พระมะเหลเถไถ ซึ่งเป็นบทประพันธ์ ที่เนื้อหาปราศจากความหมายโดยตรง
            หากแต่รักษาฉันทลักษณ์และสัมผัสได้อย่างถูกต้องครบถ้วน
            แสดงให้เห็นถึงการทดลอง และการเล่นกับโครงสร้างทางภาษา
            อันเป็นหลักฐานของความลื่นไหลและพลวัตในวรรณกรรมไทยช่วงรัชกาลที่ 3
          </p>
        </div>

        <!-- Body text block 2 -->
        <div
          class="text-[#000000] font-kanit-regular leading-[2.1] text-[clamp(14px,1.35vw,18px)] mt-1 space-y-5pb-[5vw]"
        >
          <p class="">
            หลายคนคงรู้จักสุนทรภู่
            โดยสุนทรภู่ยังคงมีชีวิตอยู่ในรัชสมัยนี้แต่ไม่ได้รุ่งเรืองเท่าสมัยรัชกาบที่
            2 ที่เป็นที่โปรดปราน สุนทรภู่อยู่ใน ช่วงชีวิตค่อนข้างตกอับ
            จึงได้มีการลาบวช จึงเป็นที่มาของกลอนนิราศภูเขาทอง
            โดยผลงานของสุนทรภู่ในหลาย ๆ งานยังคงเป็น ที่จดจำ
            สุนทรภู่ได้เข้ารับราชการในกรมพระอาลักษณ์เมื่อ พ.ศ. 2359
            ในรัชสมัยรัชกาลที่ 2 มูลเหตุในการได้เข้ารับราชการนี้
            1.5แนวคิดหนึ่งว่าสุนทรภู่เป็นผู้แต่งกลอนในบัตรสนเท่ห์ ซึ่งปรากฏชุกชุมอยู่ในเวลานั้น
            อีกแนวคิดหนึ่งสืบเนื่องจาก "ช่วงเวลาที่หายไป" ของสุนทรภู่
            ซึ่งน่าจะใช้วิชากลอนทำมาหากินเป็นที่รู้จักเลื่องชื่ออยู่
            ชะรอยจะเป็นเหตุให้ถูกเรียกเข้ารับราชการก็ได้เมื่อแรกสุนทรภู่
            รับราชการเป็นอาลักษณ์ปลายแถว
            มีหน้าที่เฝ้าเวลาทรงพระอักษรเพื่อคอยรับใช้
            แต่มีเหตุให้ได้แสดงฝีมือกลอนของตัว เมื่อพระบาท
            สมเด็จพระพุทธเลิศหล้านภาลัยทรงแต่งกลอนบทละครในเรื่อง "รามเกียรติ์"
            ติดขัดไม่มีผู้ใดต่อกลอนได้ต้องพระราชหฤทัย จึงโปรด
            ให้สุนทรภู่ทดลองแต่ง ปรากฏว่าแต่งได้ดีเป็นที่พอพระทัย
            จึงทรงพระกรุณาฯ เลื่อนให้เป็น ขุนสุนทรโวหาร การต่อกลอนของสุนทรภู่
            คราวนี้เป็นที่รู้จักทั่วไป
            เนื่องจากปรากฏรายละเอียดอยู่ในพระนิพนธ์ ชีวิตและงานของสุนทรภู่ ของสมเด็จฯ
            กรมพระยาดำรงราชา นุภาพ
            บทกลอนในรามเกียรติ์ที่สุนทรภู่ได้แต่งในคราวนั้นคือ
            ตอนนางสีดาผูกคอตาย และตอนศึกสิบขุนสิบรถ ฉากบรรยายรถศึกของ
            ทศกัณฐ์ สุนทรภู่ได้เลื่อนยศเป็น หลวงสุนทรโวหาร ในเวลาต่อมาได้รับพระราชทานบ้านหลวงอยู่ที่ท่าช้าง ใกล้กับวังท่าพระ 
            และมีตำแหน่งเข้าเฝ้าเป็นประจำ
            คอยถวายความเห็นเกี่ยวกับพระราชนิพนธ์และพระนิพนธ์วรรณคดีเรื่องต่าง ๆ
            รวมถึงได้ร่วมใน กิจการฟื้นฟูศิลปวัฒนธรรมช่วงต้นกรุงรัตนโกสินทร์
            โดยเป็นหนึ่งในคณะร่วมแต่ง ขุนช้างขุนแผน ขึ้นใหม่
            ระหว่างรับราชการสุนทรภู่
            ต้องโทษจำคุกเพราะถูกอุทธรณ์ว่าเมาสุราทำร้ายญาติผู้ใหญ่
            แต่จำคุกได้ไม่นานก็โปรดพระราชทานอภัยโทษ เล่ากันว่าเนื่องจาก
            พระบาทสมเด็จพระพุทธเลิศหล้านภาลัยทรงติดขัดบทพระราชนิพนธ์เรื่องสังข์ทอง ไม่มีใครแต่งได้ต้องพระทัย ภายหลังพ้นโทษ
            สุนทรภู่ได้เป็นพระอาจารย์ถวายอักษรสมเด็จพระเจ้าบรมวงศ์เธอ
            เจ้าฟ้าอาภรณ์ พระราชโอรสในรัชกาลที่ 2 เชื่อว่าสุนทรภู่
            แต่งเรื่อง สวัสดิรักษา ในระหว่างเวลานี้ ในระหว่างรับราชการอยู่นี้
            สุนทรภู่แต่งงานใหม่กับแม่นิ่ม มีบุตรด้วยกันหนึ่งคน
            สุนทรภู่รับราชการอยู่เพียง 8 ปี เมื่อถึงปี พ.ศ. 2367
            พระบาทสมเด็จพระพุทธเลิศหล้านภาลัยเสด็จสวรรคตหลังจากนั้นสุนทรภู่ก็ออกบวช
            แต่จะได้ลาออกจากราชการก่อนออกบวชหรือไม่ยังไม่ปรากฏแน่ชั
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.page-bg-fixed {
  position: relative;
  background-image: url('/Learnmore/painted-relief-texture (1).jpg');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
}

.page-bg-fixed::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: -1;
  background-image: url('/Learnmore/painted-relief-texture (1).jpg');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  pointer-events: none;
}
</style>
