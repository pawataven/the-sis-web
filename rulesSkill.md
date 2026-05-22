# The SIS Master Coding Skill

ใช้ไฟล์นี้เป็นกติกาหลักเวลาเขียน แก้ ตรวจ และรีแฟกเตอร์โค้ดในโปรเจกต์ `the-sis-web` ให้ทำงานเหมือน senior frontend engineer ที่ละเอียดกับ UI, responsive, performance และ maintainability

## Project Context

- Stack หลัก: Nuxt 4, Vue 3 Composition API, TypeScript, Tailwind CSS v4, Nuxt Image, Nuxt Icon, Nuxt Fonts
- Package manager หลัก: Bun เพราะมี `bun.lock`
- โครงสร้างสำคัญ:
  - `app/pages`: route/page level
  - `app/components`: reusable UI components
  - `app/layouts`: layout/navigation layer
  - `app/data`: static content, route data, poetry/flower data
  - `app/composables`: reusable stateful logic
  - `app/assets/css/main.css`: global Tailwind/CSS entry
  - `public`: static images and visual assets

## Master Workflow

1. อ่านบริบทก่อนแก้เสมอ: ใช้ `rg`, เปิดไฟล์ที่เกี่ยวข้อง และดู pattern เดิมของโปรเจกต์
2. แก้เฉพาะ scope ที่จำเป็น ไม่รีแฟกเตอร์ไฟล์อื่นถ้าไม่ได้ช่วยให้โจทย์จบจริง
3. เลือก solution ที่อ่านง่ายก่อน clever code
4. หลังแก้ UI ให้ตรวจอย่างน้อย 3 ขนาดหน้าจอ: mobile, tablet, desktop
5. หลังแก้ logic ให้ตรวจ edge case, lifecycle, cleanup และ type safety
6. ก่อนส่งงานให้รันคำสั่งที่เหมาะสม เช่น `bun run build` หรืออย่างน้อยอธิบายว่าทำไมยังไม่ได้รัน

## Vue And Nuxt Rules

- ใช้ `<script setup lang="ts">` เป็นมาตรฐาน
- ใช้ `ref`, `computed`, `watch`, `onMounted`, `onUnmounted` อย่างมีเหตุผล ไม่สร้าง state เกินจำเป็น
- Logic ที่ใช้ซ้ำหรือมี lifecycle ซับซ้อนให้ย้ายไป `app/composables`
- Static content, nav items, poetry data, flower data ให้เก็บใน `app/data` และใส่ type ให้ชัด
- ใช้ `NuxtLink` สำหรับ navigation ภายในเว็บ
- ใช้ `NuxtImg` สำหรับรูปที่เป็น content หรือ image asset สำคัญ เพื่อช่วยเรื่อง optimization
- อย่า access `window`, `document`, `sessionStorage` นอก client lifecycle เช่น `onMounted`
- ถ้าเปลี่ยน `document.body.style` ต้อง restore state ตอนจบ flow และควรมี cleanup ใน `onUnmounted` เมื่อเหมาะสม

## TypeScript Rules

- หลีกเลี่ยง `any`; สร้าง interface/type ใน `app/types` เมื่อข้อมูลใช้หลายที่
- Function ที่รับ event หรือ data object ควรมี type ชัด
- ถ้า array/object เป็น static data ให้ type ด้วย `satisfies` หรือ explicit type
- อย่าซ่อน bug ด้วย optional chaining เกินจำเป็น ถ้าค่าควรมีจริงให้แก้ที่ source ของข้อมูล

## Tailwind And Styling Rules

- ใช้ Tailwind utility เป็นหลัก และใช้ global CSS เฉพาะ token, base style หรือ animation ที่ใช้ซ้ำจริง
- ใช้ mobile-first: base class สำหรับ mobile แล้วค่อยเพิ่ม `sm:`, `md:`, `lg:`, `xl:`
- Arbitrary values เช่น `pt-85`, `rounded-b-[650px]`, `text-[clamp(...)]` ใช้ได้เมื่อจำเป็นกับงาน art direction แต่ต้องตรวจ responsive ทุกครั้ง
- อย่าใช้ negative margin หรือ absolute positioning โดยไม่มี parent ที่ควบคุมขอบเขตชัดเจน
- ทุก element ที่ format คงที่ เช่น card, arch, menu, loader, image frame ควรมี stable size ด้วย `aspect-*`, `min-*`, `max-*`, `w-*`, `h-*`
- ป้องกัน layout shift ด้วยการกำหนด width/height/aspect ratio ให้รูปสำคัญ
- ใช้ `overflow-hidden` เฉพาะ container ที่ต้อง clip งานภาพจริง อย่าใช้เพื่อปิดบัง bug ของ layout

## Text Stroke Rule

Tailwind ไม่มี text stroke class แบบ built-in สำหรับข้อความปกติ ให้ใช้ arbitrary property:

```html
<p class="text-white [webkit-text-stroke:1px_black]">
  Click to Enter
</p>
```

ถ้าต้องการ outline ที่สม่ำเสมอกว่าในบาง browser ให้ใช้ `text-shadow`:

```html
<p class="text-white [text-shadow:1px_1px_0_black,-1px_1px_0_black,1px_-1px_0_black,-1px_-1px_0_black]">
  Click to Enter
</p>
```

อย่าใช้ `stroke-current` กับข้อความ HTML ปกติ เพราะเหมาะกับ SVG stroke มากกว่า

## Responsive UI Rules

- ตรวจ `320px`, `390px`, `768px`, `1024px`, `1440px` เมื่อแก้ layout สำคัญ
- ข้อความต้องไม่ล้น container และไม่ทับรูปหรือปุ่ม
- เมนู dropdown ต้องใช้งานได้ทั้ง hover desktop และ click/tap mobile ถ้ามี mobile UI
- งานภาพที่วางซ้อนกันต้องจัด z-index เป็น layer ที่อธิบายได้ ไม่เพิ่ม `z-[99999]` ยกเว้น overlay ที่ต้องอยู่บนสุดจริง
- ถ้าใช้ `clamp()` ให้กำหนด min/max ที่อ่านได้บน mobile และไม่ใหญ่เกินบน desktop

## Visual Design Rules

- รักษา mood ของเว็บ: floral, poetic, gentle, handmade, storybook
- สีและรูปต้องสอดคล้องกับ asset ที่มีใน `public`
- UI control ต้องชัดเจนต่อการคลิก แต่งานตกแต่งต้อง `pointer-events-none` ถ้าไม่ interactive
- ปุ่มต้องมี hover/focus state ที่เห็นได้
- หลีกเลี่ยง UI ที่เป็น card ซ้อน card ถ้าไม่จำเป็น
- อย่าเพิ่ม decoration ใหม่ที่ไม่เข้ากับ asset เดิม

## Accessibility Rules

- รูป decorative ใช้ empty alt หรือซ่อนจาก screen reader เมื่อเหมาะสม
- รูปที่มีความหมายต้องมี alt ที่อธิบายได้
- Button ต้องเป็น `<button>` ไม่ใช้ `<div>` คลิกแทนปุ่ม
- Dropdown/menu ต้องมี `aria-expanded`, `aria-controls`, `aria-haspopup`, `role="menu"` และ `role="menuitem"` เมื่อเหมาะสม
- Interactive element ต้องรองรับ keyboard focus และมี focus style ที่ไม่หายไป
- Animation ควรไม่ทำให้ผู้ใช้สับสน และไม่ควรบังคับ interaction ที่หลบไม่ได้

## Performance Rules

- ใช้ `NuxtImg` กับรูปสำคัญ และกำหนด class ให้คุมขนาดชัดเจน
- หลีกเลี่ยง watcher หรือ event listener ที่ไม่ cleanup
- อย่าสร้าง timer ซ้อนโดยไม่ clear timer
- Static data ไม่ควรถูกสร้างใหม่ใน template ทุก render
- GIF หรือรูปใหญ่ควรใช้เท่าที่จำเป็น และวางเฉพาะตำแหน่งที่มีผลกับประสบการณ์จริง

## Component Rules

- Component หนึ่งควรมีหน้าที่หลักชัดเจน
- ถ้า template เริ่มยาวเพราะ repeated UI ให้แยกเป็น component หรือ map จาก data
- ตั้งชื่อ component เป็น PascalCase และสื่อความหมาย เช่น `DoorLoader`, `PoetryModal`, `ArchCards`
- Props/emits ต้อง type ชัด และ emit event เป็นชื่อที่บอกผลลัพธ์ เช่น `done`, `close`, `select`
- อย่าให้ page component แบก logic ที่ reusable ได้

## Data Rules

- ข้อความยาว รายการ navigation รายการดอกไม้ และ poetry content ควรอยู่ใน `app/data`
- Data ที่ใช้ render route ต้องมี slug/path ที่ชัด และไม่ hardcode ซ้ำหลายไฟล์
- ถ้ามีรูปใน data ให้ path อ้างจาก `public` เช่น `/home/cloud-bg.png`
- ตรวจชื่อไฟล์ที่มีช่องว่างหรือ case-sensitive path เพราะอาจพังตอน deploy บน Linux

## Debugging Rules

เมื่อเจอ bug ให้ทำตามลำดับนี้:

1. Reproduce: ระบุ page, viewport, action ที่ทำให้เกิดปัญหา
2. Locate: ใช้ DevTools หรืออ่าน component tree เพื่อหา owner ของ UI นั้น
3. Explain: เข้าใจว่า bug มาจาก layout, state, timing, asset หรือ data
4. Fix small: แก้จุดที่เป็น root cause ด้วย diff ที่เล็กที่สุด
5. Verify: ทดสอบ viewport และ interaction ที่เกี่ยวข้อง

## Review Checklist

- Build ผ่านหรือมีเหตุผลชัดว่าทำไมยังไม่ได้รัน
- ไม่มี TypeScript error ที่เพิ่มเข้ามา
- ไม่มี console log/debug code ที่หลุดมา
- Responsive ไม่พังใน mobile/tablet/desktop
- รูปไม่ยืดผิดสัดส่วนและไม่ทำ layout shift รุนแรง
- State/timer/event listener cleanup ถูกต้อง
- Accessibility ของ interactive UI ไม่ถดถอย
- โค้ดใหม่เข้ากับ pattern เดิมของโปรเจกต์

## Definition Of Done

งานถือว่าจบเมื่อ:

- Feature หรือ bug fix ทำงานตามโจทย์
- Code อ่านง่ายและ maintain ต่อได้
- UI ไม่ล้น ไม่ทับ ไม่กระโดด ใน breakpoint หลัก
- มีการตรวจ build/test เท่าที่เหมาะกับความเสี่ยง
- สรุปสิ่งที่แก้และสิ่งที่ตรวจให้ทีมเข้าใจได้ในไม่กี่บรรทัด
