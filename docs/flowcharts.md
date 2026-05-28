# Website Flow Charts

เอกสารนี้สรุป flow หลักของเว็บจากโค้ดใน `app/pages`, `app/components`, `app/layouts`, `app/composables` และ `app/data`
โดยอัปเดตให้ครอบคลุมระบบ Find Your Bloom แบบสองภาษา, หน้า result ตามภาษา, เพลงประกอบ quiz, modal ดอกไม้ที่ปรับรูปได้รายรายการ และ flow หน้า home ปัจจุบัน

## 1. Overall Site Map

```mermaid
flowchart TD
  A["ผู้ใช้เข้าเว็บ"] --> B["App shell app.vue"]
  B --> C["MobileMenu"]
  B --> D["BackgroundMusicPlayer"]
  B --> E{"เคยเข้าเว็บใน session นี้แล้วหรือยัง"}
  E -- "ยังไม่เคย" --> F["DoorLoader แสดงประตูและ Click to Enter"]
  F --> G["เปิดประตูและ emit done"]
  E -- "เคยแล้ว" --> H["ข้าม DoorLoader"]
  G --> I["NuxtLayout และ NuxtPage"]
  H --> I

  I --> J["default layout"]
  J --> K{"route เป็น /poem-* หรือ /flowers หรือไม่"}
  K -- "ใช่" --> L["PoetryHero ด้านบนหน้า"]
  K -- "ไม่ใช่" --> M["แสดงหน้าโดยตรง"]
  L --> M

  M --> HOME["/ หน้า Home"]
  M --> FLOWERS["/flowers"]
  M --> QUIZ["/find-your-bloom"]
  M --> RESULT["/quiz-result"]
  M --> LEARN["/learn-more"]
  M --> POETRY{"Poetry routes"}

  POETRY --> FAMILY["/poem-parent"]
  POETRY --> WARNING["/poem-warning"]
  POETRY --> SADNESS["/poem-sadness"]
  POETRY --> LOVE["/poem-love"]

  HOME --> HOME_FLOWERS["Home card: Flowers"]
  HOME --> HOME_POETRY["Home card: Poetry"]
  HOME --> HOME_QUIZ["Home card: Find Your Bloom"]
  HOME --> HOME_GO["Footer GO button"]

  HOME_FLOWERS --> FLOWERS
  HOME_POETRY --> FAMILY
  HOME_QUIZ --> QUIZ
  HOME_GO --> FAMILY
  QUIZ --> RESULT
```

## 2. App Shell Flow

```mermaid
flowchart TD
  A["app.vue mounted"] --> B["สร้าง global components"]
  B --> C["MobileMenu พร้อมใช้ทุกหน้า"]
  B --> D["BackgroundMusicPlayer พร้อม sync เพลง"]
  B --> E["DoorLoader ตรวจ sessionStorage.hasVisited"]

  E --> F{"hasVisited มีค่าแล้วหรือไม่"}
  F -- "มี" --> G["emit done และไม่แสดง overlay"]
  F -- "ไม่มี" --> H["set hasVisited=true"]
  H --> I["แสดงประตูและ lock body scroll"]
  I --> J{"ผู้ใช้คลิก Click to Enter"}
  J -- "ยังไม่คลิก" --> I
  J -- "คลิก" --> K["เริ่ม animation เปิดประตู"]
  K --> L["รอ 2 วินาที"]
  L --> M["emit done, ซ่อน overlay, คืน body scroll"]
```

## 3. Home Page User Flow

```mermaid
flowchart TD
  A["Home /"] --> B["HomePageHero"]
  B --> C["DecorationComp"]
  C --> D["HomeSkyFlowerSection"]
  D --> E{"ขนาดหน้าจอ"}
  E -- "desktop lg ขึ้นไป" --> F["ArchCards"]
  E -- "mobile/tablet" --> G["ArchCardsMobile"]

  F --> H{"ผู้ใช้เลือก card"}
  G --> H
  H -- "ความหมายดอกไม้" --> I["ไปหน้า /flowers"]
  H -- "บทกวีและดอกไม้" --> J["ไปหน้า /poem-parent"]
  H -- "แบบทดสอบ" --> K["ไปหน้า /find-your-bloom"]

  D --> L["อ่านข้อความท้ายหน้า"]
  L --> M["กด GO"]
  M --> J
```

หมายเหตุการแสดงผลล่าสุด:

| จุดที่ปรับ | ผลต่อ flow |
| --- | --- |
| `HomePage-hero.vue` | รูป title รองรับ viewport เล็กมากขึ้นด้วย breakpoint `min-[20px]` |
| `DecorationComp.vue` | รูปผีเสื้อถูกยก z-index เพื่อให้ลอยเหนือ section |
| `HomeSkyFlowerSection.vue` | ลด font clamp ขั้นต่ำของข้อความ เพื่อกันข้อความล้นบนจอเล็ก |

## 4. Navigation Flow

```mermaid
flowchart TD
  A["NavigationBar desktop lg+"] --> C{"เมนูที่เลือก"}
  B["MobileMenu ต่ำกว่า lg"] --> C

  C -- "HOME" --> HOME["/"]
  C -- "FLOWERS" --> FLOWERS["/flowers"]
  C -- "FIND YOUR BLOOM" --> QUIZ["/find-your-bloom"]
  C -- "LEARN MORE" --> LEARN["/learn-more"]
  C -- "POETRY" --> P{"เปิด dropdown หรือ submenu"}

  P -- "FAMILY" --> FAMILY["/poem-parent"]
  P -- "WARNING" --> WARNING["/poem-warning"]
  P -- "SADNESS" --> SADNESS["/poem-sadness"]
  P -- "LOVE" --> LOVE["/poem-love"]

  FAMILY --> HERO["PoetryHero เลือกรูปและ label ตาม route"]
  WARNING --> HERO
  SADNESS --> HERO
  LOVE --> HERO
  FLOWERS --> HERO

  HERO --> CONTENT["แสดงเนื้อหาหน้านั้น"]
```

```mermaid
flowchart TD
  A["MobileMenu"] --> B{"poetry modal เปิดอยู่หรือไม่"}
  B -- "เปิดอยู่" --> C["ซ่อนปุ่ม hamburger"]
  B -- "ปิดอยู่" --> D["แสดงปุ่ม hamburger"]
  D --> E{"ผู้ใช้เปิดเมนู"}
  E -- "เปิด" --> F["แสดง full-screen menu"]
  F --> G{"เลือกเมนูมี dropdown หรือไม่"}
  G -- "มี" --> H["toggle submenu"]
  G -- "ไม่มี" --> I["navigate แล้ว closeMenu"]
  H --> J["เลือก child route แล้ว closeMenu"]
```

## 5. Poetry Page Flow

ใช้ร่วมกับ `poem-parent`, `poem-warning`, `poem-sadness` และ `poem-love`

```mermaid
flowchart TD
  A["เข้า Poetry category page"] --> B["default layout แสดง PoetryHero"]
  B --> C["PoetryHero เลือก heroMap ตาม route"]
  C --> D["แสดง title card ของหมวด"]
  D --> E["แสดงลายคั่นและรายการบทกวี 5 รายการ"]
  E --> F{"ผู้ใช้กด Read more หรือไม่"}

  F -- "ไม่กด" --> E
  F -- "กด" --> G["เลือก poem จาก poetryList ด้วย index ของหมวด"]
  G --> H["ตั้ง selectedPoem"]
  H --> I["ตั้ง poetry-modal-open=true"]
  I --> J["เปิด PoetryModal"]
  J --> K["lock body scroll"]
  K --> L["แสดงชื่อเรื่อง ผู้แต่ง รูป บทกลอน ความหมาย และข้อมูลประกอบ"]

  L --> M{"ปิด modal"}
  M -- "กด X" --> N["ล้าง selectedPoem"]
  M -- "คลิก backdrop" --> N
  N --> O["ตั้ง poetry-modal-open=false และคืน body scroll"]
  O --> E
```

## 6. Flowers Page Flow

```mermaid
flowchart TD
  A["เข้า /flowers"] --> B["default layout แสดง PoetryHero แบบ Flowers"]
  B --> C["ตั้ง scrollRestoration เป็น manual"]
  C --> D["เลื่อนกลับไปบนสุด"]
  D --> E["แสดง flowerCards ทั้ง mobile และ desktop layout"]
  E --> F{"ผู้ใช้กด Read more บน card หรือไม่"}

  F -- "ไม่กด" --> E
  F -- "กด" --> G["อ่าน modalIndex จาก flowerCards"]
  G --> H["หา flower จาก flowerList"]
  H --> I{"พบข้อมูลดอกไม้หรือไม่"}
  I -- "ไม่พบ" --> E
  I -- "พบ" --> J["ตั้ง selectedFlower"]
  J --> K["เปิด FlowerModal"]
  K --> L["lock body scroll"]
  L --> M["คำนวณ popup image style"]
  M --> N["แสดงชื่อ EN/TH รูป ความหมาย ที่มา และคู่ดอกไม้"]

  N --> O{"ปิด modal"}
  O -- "กด X" --> P["ล้าง selectedFlower"]
  O -- "คลิก backdrop" --> P
  P --> Q["คืน body scroll"]
  Q --> E
```

```mermaid
flowchart TD
  A["FlowerModal รับ data"] --> B{"data.popupImageStyle มีหรือไม่"}
  B -- "ไม่มี" --> C["ใช้ค่า default width 85%, maxWidth 370px, top/left 50%"]
  B -- "มี" --> D["ใช้ width, maxWidth, height, top, left, scale จากข้อมูล"]
  C --> E["สร้าง inline style ให้รูป popup"]
  D --> E
  E --> F["render image object-contain"]
```

ตัวอย่างข้อมูลที่เพิ่มล่าสุด: `Azalea Flower` ตั้ง `popupImageStyle.width` เป็น `200%` และ `maxWidth` เป็น `530px` เพื่อให้รูปใน modal มีขนาดเหมาะกับภาพจริง

## 7. Find Your Bloom Quiz Flow

```mermaid
flowchart TD
  A["เข้า /find-your-bloom"] --> B["อ่าน query step"]
  B --> C["อ่าน quizLanguage จาก useState find-bloom-language"]
  C --> D["activeQuiz = findBloomQuizByLanguage[quizLanguage]"]
  D --> E{"step ถูกต้องและอยู่ในช่วง activeQuiz หรือไม่"}
  E -- "ไม่ถูกต้องหรือไม่มีค่า" --> F["replace เป็น step=0"]
  E -- "ถูกต้อง" --> G["โหลด currentStep"]
  F --> G

  G --> H{"ประเภท currentStep"}
  H -- "start" --> I["แสดงหน้าเริ่มต้น"]
  H -- "story" --> J["แสดงเนื้อเรื่อง รูป และปุ่ม Next"]
  H -- "question" --> K["แสดงบทกลอน คำถาม และ choices"]

  I --> L["แสดง language switch ไทย/EN"]
  I --> M["แสดงปุ่มเปิด/ปิดเพลง"]
  L --> N{"ผู้ใช้เปลี่ยนภาษาไหม"}
  N -- "เปลี่ยน" --> O["ตั้ง quizLanguage ใหม่"]
  O --> P["ล้าง answers และ finalResultType"]
  P --> G
  N -- "ไม่เปลี่ยน" --> Q["กด Start"]
  M --> R{"ผู้ใช้ toggle เพลง"}
  R -- "เปิด" --> S["enableQuizBackgroundMusic"]
  R -- "ปิด" --> T["disableBackgroundMusic"]

  J --> U["กด Next"]
  K --> V["เลือก choice"]
  V --> W["บันทึก answers ด้วย key เป็น step.id"]
  W --> X["กด Next"]

  Q --> Y{"canNext"}
  U --> Y
  X --> Y
  Y -- "ไม่ได้" --> K
  Y -- "ได้" --> Z{"ถึง step สุดท้ายหรือยัง"}
  Z -- "ยังไม่ถึง" --> AA["navigate query step+1"]
  AA --> G
  Z -- "ถึงแล้ว" --> AB["คำนวณ resultType จากคำตอบ"]
  AB --> AC["บันทึก finalResultType"]
  AC --> AD["ไป /quiz-result"]
```

ข้อมูลภาษาปัจจุบัน:

| State/Data | หน้าที่ |
| --- | --- |
| `quizLanguages` | จำกัดภาษาที่รองรับเป็น `th` และ `en` |
| `findBloomQuiz` | ชุดคำถามภาษาไทย |
| `findBloomQuizEn` | ชุดคำถามภาษาอังกฤษ |
| `findBloomQuizByLanguage` | map ภาษาไปยัง quiz step ที่ใช้งานจริง |
| `find-bloom-language` | state กลางที่หน้า quiz และหน้า result ใช้ร่วมกัน |

## 8. Quiz Scoring Flow

```mermaid
flowchart TD
  A["answers ของผู้ใช้"] --> B["สร้าง count เริ่มต้น"]
  B --> C["love = 0"]
  B --> D["warning = 0"]
  B --> E["sadness = 0"]
  B --> F["family = 0"]

  C --> G["วนทุก step ใน activeQuiz"]
  D --> G
  E --> G
  F --> G

  G --> H{"step เป็น question หรือไม่"}
  H -- "ไม่ใช่" --> G
  H -- "ใช่" --> I["อ่าน selectedChoiceId จาก answers[step.id]"]
  I --> J{"มีคำตอบหรือไม่"}
  J -- "ไม่มี" --> G
  J -- "มี" --> K["หา choice ที่ id ตรงกัน"]
  K --> L{"พบ choice หรือไม่"}
  L -- "ไม่พบ" --> G
  L -- "พบ" --> M["บวก count ของ choice.answerType +1"]
  M --> G

  G --> N["วนครบทุก step"]
  N --> O["reduce answerTypes เพื่อหา type ที่คะแนนมากที่สุด"]
  O --> P["ผลลัพธ์: love, warning, sadness หรือ family"]
```

หมายเหตุ: ถ้าคะแนนเท่ากัน ระบบจะเลือกตามลำดับใน `answerTypes` คือ `love`, `warning`, `sadness`, `family`
เพราะ logic เปลี่ยนผู้ชนะเฉพาะตอนที่คะแนนของ type ใหม่มากกว่าคะแนนเดิมเท่านั้น

## 9. Quiz Result Flow

```mermaid
flowchart TD
  A["เข้า /quiz-result"] --> B{"มี finalResultType หรือไม่"}
  B -- "ไม่มี" --> C["redirect ไป /find-your-bloom?step=0"]
  B -- "มี" --> D["อ่าน quizLanguage จาก useState"]
  D --> E["activeQuizResults = quizResultsByLanguage[quizLanguage]"]
  E --> F["สร้าง resultByType จาก activeQuizResults"]
  F --> G["หา result ด้วย finalResultType"]

  G --> H{"พบ result หรือไม่"}
  H -- "พบ" --> I["แสดง bouquet image และ description ตามภาษา"]
  H -- "ไม่พบ" --> J["แสดง missing result text ตามภาษา"]

  I --> K{"กด play again"}
  J --> K
  K --> L["ล้าง answers"]
  L --> M["ล้าง finalResultType"]
  M --> N["กลับไป /find-your-bloom?step=0"]
```

ข้อมูล result ปัจจุบัน:

| State/Data | หน้าที่ |
| --- | --- |
| `quizResults` | คำอธิบายผลลัพธ์ภาษาไทย |
| `quizResultsEn` | คำอธิบายผลลัพธ์ภาษาอังกฤษ |
| `quizResultsByLanguage` | map ภาษาไปยัง result data |
| `resultPageText` | เปลี่ยนข้อความปุ่มและข้อความ error ระหว่างไทย/อังกฤษ |

## 10. Background Music Flow

```mermaid
flowchart TD
  A["BackgroundMusicPlayer mounted"] --> B["คำนวณ shouldPlayQuizMusic จาก route.path"]
  B --> C{"route คือ /find-your-bloom หรือ /quiz-result หรือไม่"}
  C -- "ใช่" --> D["enableQuizBackgroundMusic"]
  C -- "ไม่ใช่" --> E["disableBackgroundMusic"]

  D --> F{"isEnabled และ source พร้อมหรือไม่"}
  E --> G["pause audio และ reset currentTime"]
  F -- "ไม่พร้อม" --> G
  F -- "พร้อม" --> H["ตั้ง audio src และ volume 0.1"]
  H --> I["พยายาม play"]
  I --> J{"browser อนุญาต autoplay หรือยัง"}
  J -- "อนุญาต" --> K["เล่นเพลง loop"]
  J -- "ยังไม่อนุญาต" --> L["register pointerdown, keydown, touchstart unlock listeners"]
  L --> M["ผู้ใช้ interaction"]
  M --> I

  K --> N{"ออกจาก quiz route หรือกดปิดเพลง"}
  N -- "ใช่" --> G
  N -- "ไม่ใช่" --> K
```

## 11. Modal State Flow

```mermaid
stateDiagram-v2
  [*] --> Closed
  Closed --> Open: click Read more
  Open --> Open: display selected data
  Open --> Closed: click X
  Open --> Closed: click backdrop

  state Open {
    [*] --> BodyScrollLocked
    BodyScrollLocked --> ContentVisible
  }

  Closed: selectedPoem/selectedFlower = null
  Closed: body overflow restored
  Open: selectedPoem/selectedFlower has data
  Open: body overflow hidden
```

```mermaid
flowchart TD
  A["Poetry modal เปิด"] --> B["set poetry-modal-open=true"]
  B --> C["MobileMenu ซ่อน hamburger"]
  C --> D["ปิด PoetryModal"]
  D --> E["set poetry-modal-open=false"]
  E --> F["MobileMenu แสดง hamburger ได้อีกครั้ง"]
```

## 12. Data Relationships

```mermaid
flowchart LR
  A["NAV_ITEMS"] --> B["NavigationBar"]
  A --> C["MobileMenu"]

  D["homeContent FOOTER_CONTENT"] --> E["Home footer GO"]

  F["flowerCards"] --> G["/flowers card list"]
  H["flowerList"] --> I["FlowerModal"]
  F --> J["modalIndex"]
  J --> H

  K["poetryList"] --> L["Poetry pages"]
  L --> M["PoetryModal"]

  N["findBloomQuiz"] --> O["findBloomQuizByLanguage.th"]
  P["findBloomQuizEn"] --> Q["findBloomQuizByLanguage.en"]
  O --> R["/find-your-bloom activeQuiz"]
  Q --> R

  S["quizResults"] --> T["quizResultsByLanguage.th"]
  U["quizResultsEn"] --> V["quizResultsByLanguage.en"]
  T --> W["/quiz-result activeQuizResults"]
  V --> W
```

## 13. Important Routes

| Route | Purpose |
| --- | --- |
| `/` | หน้าแรกและทางเข้าไปยัง flow หลัก |
| `/poem-parent` | Poetry category: Family |
| `/poem-warning` | Poetry category: Warning |
| `/poem-sadness` | Poetry category: Sadness |
| `/poem-love` | Poetry category: Love |
| `/flowers` | รายการดอกไม้และ Flower modal |
| `/find-your-bloom` | แบบทดสอบ Find Your Bloom แบบ step-by-step รองรับไทย/อังกฤษ |
| `/quiz-result` | แสดงผลลัพธ์ bouquet ตามคะแนนและภาษาที่เลือก |
| `/learn-more` | หน้าเนื้อหาความรู้เพิ่มเติม |
