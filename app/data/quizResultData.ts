import type { AnswerType } from "~/data/findBloomQuiz"

export interface QuizResult {
  id: AnswerType
  description: string
  tags: string[]
  flowers: string[]
  poemPath: string
  // label: string           // "BOUQUET PERSONALITY"
  // bouquetTitleThai: string // "ช่อหยาดน้ำค้าง"
  // bouquetTitle: string    // "SADNESS BOUQUET"
  flowerImage: string     // รูปช่อดอกไม้กลางหน้า
  // poemTitle: string
}

export const quizResults: QuizResult[] = [
  {
    id: "love",
    description:
      "เสน่ห์ของคุณไม่ได้ถูกสร้างด้วยความตั้งใจ แต่เกิดขึ้นเองตามธรรมชาติจากความหลงใหลที่หาได้ยาก คุณมองโลกผ่านสายตาด้วยความรัก และสัมผัสได้ถึงความงามในทุกรายละเอียดเล็ก ๆ ที่คนอื่นมองผ่าน คุณคือตัวแทนของ ช่อพิสมัย จิตวิญญาณแห่งความโรแมนติกและความรัก",
    tags: ["มีสเน่ห์", "ความหลงใหล", "ความอุทิศตน"],
    flowers: ["Apple Blossom", "Rose", "Iris", "Ivy"],
    poemPath: "/poem-love",
    // label: "BOUQUET PERSONALITY",
    // bouquetTitleThai: "ช่อพิสมัย",
    // bouquetTitle: "LOVER BOUQUET",
    flowerImage: "/Result/love-bq.png",
    // poemTitle: "พระอภัยมณี ตอนพระอภัยมณีเกี้ยวนางละเวง",
  },
  {
    id: "sadness",
    description:
      "คุณสัมผัสความรู้สึกได้ลึกกว่าคนอื่น ไม่ใช่เพราะคุณแตกต่าง แต่เพราะคุณเลือกที่จะมองทุกอย่างอย่างละเอียดและเข้าใจอย่างแท้จริง ความอ่อนไหวของคุณไม่ใช่จุดอ่อนมันคือพรที่ทำให้คุณรับรู้ถึงความรู้สึกของคนรอบข้างได้ในแบบที่คนอื่นทำไม่ได้ คุณคือตัวแทนของ ช่อหยาดน้ำค้าง สัมผัสความรู้สึกที่ว่องไวและละเอียดอ่อนเกินกว่าใครจะมองข้ามได้",
    tags: ["อ่อนไหว", "ความเข้าอกเข้าใจ", "ลึกซึ้ง"],
    flowers: ["Hyacinth", "Lily of the Valley", "Cyclamen", "Forget-Me-Not"],
    poemPath: "/poem-sadness",
    // label: "BOUQUET PERSONALITY",
    // bouquetTitleThai: "ช่อหยาดน้ำค้าง",
    // bouquetTitle: "SADNESS BOUQUET",
    flowerImage: "/Result/sad-bq.png",
    // poemTitle: "นิราศอิเหนา",
  },
  {
    id: "family",
    description:
      "คุณมักจะคิดเผื่อก่อนเสมอ ไม่ใช่เพราะกลัว แต่เพราะคุณใส่ใจคนรอบข้างมากพอที่จะไม่ยอมให้ใครต้องเดือดร้อน คุณเลือกที่จะเป็นประโยชน์ต่อคนหมู่มากแม้ต้องแลกกับความสะดวกของตัวเอง และนั่นทำให้คุณเป็นคนที่ทุกคนรู้ว่าพึ่งได้เสมอเมื่อยามต้องการ คุณคือตัวแทนของ ช่อไออุ่น สัญลักษณ์ของความอบอุ่นและความไว้วางใจ",
    tags: ["อบอุ่น", "ความเสียสละ", "เป็นที่พึ่ง"],
    flowers: ["Sunflower", "Daisy", "Jasmine", "Carnation"],
    poemPath: "/poem-parent",
    // label: "BOUQUET PERSONALITY",
    // bouquetTitleThai: "ช่อไออุ่น",
    // bouquetTitle: "FAMILY BOUQUET",
    flowerImage: "/Result/fam-bq.png",
    // poemTitle: "เพลงยาวถวายโอวาท",
  },
  {
    id: "warning",
    description:
      "คุณเป็นคนที่มองสิ่งต่าง ๆ ตามความเป็นจริง และนั่นคือสิ่งที่ทำให้คุณตัดสินใจได้อย่างรวดเร็วและมั่นใจ ความคิดของคุณมาจากสิ่งที่สัมผัสและพิสูจน์ได้จริง ไม่ใช่จากความรู้สึกชั่ววูบ คุณคือตัวแทนของ ช่อเพลิงบุปผา คนที่รู้ว่าต้องทำอะไร และทุกการกระทำล้วนมีเหตุผลเสมอ",
    tags: ["ผู้นำ", "เด็ดขาด", "เป็นตัวของตัวเอง"],
    flowers: ["Marigold", "Tansy", "Oleander", "Black Dahlia"],
    poemPath: "/poem-warning",
    // label: "BOUQUET PERSONALITY",
    // bouquetTitleThai: "ช่อเพลิงบุปผา",
    // bouquetTitle: "WARNING BOUQUET",
    flowerImage: "/Result/warn-bq.png",
    // poemTitle: "พระอภัยมณี ตอนสุดสาครเข้าเมืองการะเวก",
  },
]
