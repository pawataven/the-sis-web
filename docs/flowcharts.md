# Website Flow Charts

เอกสารนี้สรุป flow หลักของเว็บจากโค้ดใน `app/pages`, `app/components`, `app/layouts` และ `app/data` สามารถนำ Mermaid diagram ไปวางใน Markdown viewer ที่รองรับ Mermaid ได้ทันที

## 1. Overall Site Map

```mermaid
flowchart TD
  A([User เข้าเว็บ]) --> B{เคยเข้าเว็บใน session นี้หรือยัง?}
  B -- ไม่เคย --> C[DoorLoader: แสดงประตู Click to Enter]
  C --> D[เปิดประตูและเข้าสู่เว็บ]
  B -- เคยแล้ว --> D

  D --> H[Home /]
  D --> N[Navigation Bar / Mobile Menu]

  N --> H
  N --> P{Poetry menu}
  N --> F[Flowers /flowers]
  N --> Q[Find Your Bloom /find-your-bloom]
  N --> L[Learn More /learn-more]

  P --> PF[Family /poem-parent]
  P --> PW[Warning /poem-warning]
  P --> PS[Sadness /poem-sadness]
  P --> PL[Love /poem-love]

  H --> HC1[Home card: Flowers]
  H --> HC2[Home card: Poetry]
  H --> HC3[Home card: Find Your Bloom]
  H --> HGO[Footer GO button]

  HC1 --> F
  HC2 --> PF
  HC3 --> Q
  HGO --> PF
```

## 2. Home Page User Flow

```mermaid
flowchart TD
  A[Home /] --> B[Hero section]
  B --> C[Decoration section]
  C --> D[Sky flower section]
  D --> E{เลือกการ์ด}

  E -- ความหมายดอกไม้ --> F[ไปหน้า Flowers]
  E -- บทกวีและดอกไม้ --> G[ไปหน้า Poetry - Family]
  E -- แบบทดสอบ --> H[ไปหน้า Find Your Bloom]

  D --> I[อ่านข้อความท้ายหน้า]
  I --> J[กด GO]
  J --> G
```

## 3. Navigation Flow

```mermaid
flowchart TD
  A[NavigationBar desktop] --> B{เมนูที่เลือก}
  A2[MobileMenu mobile] --> B

  B -- HOME --> H[/]
  B -- FLOWERS --> F[/flowers]
  B -- FIND YOUR BLOOM --> Q[/find-your-bloom]
  B -- LEARN MORE --> L[/learn-more]
  B -- POETRY --> P{เปิด dropdown/submenu}

  P -- FAMILY --> PF[/poem-parent]
  P -- WARNING --> PW[/poem-warning]
  P -- SADNESS --> PS[/poem-sadness]
  P -- LOVE --> PL[/poem-love]

  PF --> M[PoetryHero แสดงเฉพาะ poem-* และ flowers]
  PW --> M
  PS --> M
  PL --> M
  F --> M
```

## 4. Poetry Page Flow

ใช้ร่วมกันกับหน้า `poem-parent`, `poem-warning`, `poem-sadness` และ `poem-love`

```mermaid
flowchart TD
  A[เข้า Poetry category page] --> B[แสดงหัวข้อ category]
  B --> C[แสดงรายการบทกวี 5 รายการ]
  C --> D{ผู้ใช้กด Read more?}

  D -- ไม่กด --> C
  D -- กด --> E[เลือก poem จาก poetryList ตาม index]
  E --> F[ตั้ง selectedPoem]
  F --> G[เปิด PoetryModal]
  G --> H[ล็อก body scroll]
  H --> I[แสดงชื่อเรื่อง ผู้แต่ง รูป บทกลอน และความหมาย]

  I --> J{ปิด modal}
  J -- กด X --> K[ล้าง selectedPoem]
  J -- คลิก backdrop --> K
  K --> L[ปิด PoetryModal และคืน body scroll]
  L --> C
```

## 5. Flowers Page Flow

```mermaid
flowchart TD
  A[เข้า Flowers /flowers] --> B[ตั้ง scrollRestoration เป็น manual]
  B --> C[เลื่อนกลับไปบนสุด]
  C --> D[แสดง flowerCards]
  D --> E{ผู้ใช้กด Read more บนการ์ด?}

  E -- ไม่กด --> D
  E -- กด --> F[หา flowerList จาก modalIndex]
  F --> G{พบข้อมูลดอกไม้หรือไม่?}
  G -- ไม่พบ --> D
  G -- พบ --> H[ตั้ง selectedFlower]
  H --> I[เปิด FlowerModal]
  I --> J[ล็อก body scroll]
  J --> K[แสดงชื่อ EN/TH รูป ความหมาย ที่มา และคู่ดอกไม้]

  K --> L{ปิด modal}
  L -- กด X --> M[ล้าง selectedFlower]
  L -- คลิก backdrop --> M
  M --> N[ปิด FlowerModal และคืน body scroll]
  N --> D
```

## 6. Find Your Bloom Quiz Flow ถึงตรงนี้

```mermaid
flowchart TD
  A[เข้า /find-your-bloom] --> B[อ่าน query step]
  B --> C{step ถูกต้องหรือไม่?}
  C -- ไม่ถูกต้อง/ไม่มีค่า --> D[replace เป็น step=0]
  C -- ถูกต้อง --> E[โหลด currentStep]
  D --> E

  E --> F{ประเภท step}
  F -- start --> S[แสดงหน้าเริ่มต้น]
  F -- story --> T[แสดงเนื้อเรื่อง]
  F -- question --> Q[แสดงคำถามและ choices]

  S --> N{กดปุ่ม Next/Start}
  T --> N
  Q --> R[เลือก choice]
  R --> V[บันทึก answers ตาม step id]
  V --> N

  N --> W{canNext?}
  W -- ไม่ได้ --> Q
  W -- ได้ --> X[เปิดเพลง quiz background]
  X --> Y{ยังไม่ใช่ step สุดท้าย?}
  Y -- ใช่ --> Z[ไป step ถัดไปด้วย query step+1]
  Z --> E
  Y -- ไม่ใช่ --> AA[คำนวณ resultType]
  AA --> AB[บันทึก finalResultType]
  AB --> AC[ไป /quiz-result]
```

## 7. Quiz Result Logic

```mermaid
flowchart TD
  A[เข้า /quiz-result] --> B{มี finalResultType หรือไม่?}
  B -- ไม่มี --> C[redirect ไป /find-your-bloom?step=0]
  B -- มี --> D[ค้นหา result จาก quizResults]

  D --> E{พบ result หรือไม่?}
  E -- พบ --> F[แสดง bouquet image และ description]
  E -- ไม่พบ --> G[แสดงข้อความไม่พบผลลัพธ์]

  F --> H{กด เล่นใหม่}
  G --> H
  H --> I[ล้าง answers]
  I --> J[ล้าง finalResultType]
  J --> K[กลับไป /find-your-bloom?step=0]
```

## 8. Quiz Scoring Flow

```mermaid
flowchart TD
  A[answers ของผู้ใช้] --> B[สร้าง count เริ่มต้น]
  B --> C[love = 0]
  B --> D[warning = 0]
  B --> E[sadness = 0]
  B --> F[family = 0]

  C --> G[วนทุก step ใน findBloomQuiz]
  D --> G
  E --> G
  F --> G

  G --> H{step เป็น question หรือไม่?}
  H -- ไม่ใช่ --> G
  H -- ใช่ --> I[หา selectedChoiceId จาก answers]
  I --> J{มีคำตอบหรือไม่?}
  J -- ไม่มี --> G
  J -- มี --> K[หา choice ที่ตรงกับ id]
  K --> L{พบ choice หรือไม่?}
  L -- ไม่พบ --> G
  L -- พบ --> M[บวก count ของ answerType นั้น +1]
  M --> G

  G --> N[ครบทุก step]
  N --> O[เลือก type ที่ count มากที่สุด]
  O --> P[ผลลัพธ์: love / warning / sadness / family]
```

หมายเหตุ: ถ้าคะแนนเท่ากัน ระบบจะเลือกตามลำดับใน `answerTypes` คือ `love`, `warning`, `sadness`, `family` เพราะใช้ `reduce` และเปลี่ยนค่าเฉพาะเมื่อคะแนนมากกว่าเท่านั้น

## 9. Modal State Flow

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

## 10. Important Routes

| Route | Purpose |
| --- | --- |
| `/` | หน้าแรกและทางเข้าไปยัง flow หลัก |
| `/poem-parent` | Poetry category: Family |
| `/poem-warning` | Poetry category: Warning |
| `/poem-sadness` | Poetry category: Sadness |
| `/poem-love` | Poetry category: Love |
| `/flowers` | รายการดอกไม้และ Flower modal |
| `/find-your-bloom` | แบบทดสอบแบบ step-by-step |
| `/quiz-result` | แสดงผลลัพธ์จากแบบทดสอบ |
| `/learn-more` | หน้าเนื้อหาให้ความรู้เพิ่มเติม |
