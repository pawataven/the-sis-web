export interface Flower {
  id: string
  titleEn: string   // "ANEMONE FLOWER"
  titleTh: string   // "ดอกอะเนมโอนี่"
  image: string     // รูปดอกไม้กลาง modal
  meaning: string   // คำอธิบายความหมาย
}

export const flowerList: Flower[] = [
  {
    id: "anemone",
    titleEn: "ANEMONE FLOWER",
    titleTh: "ดอกอะเนมโอนี่",
    image: "/flowers/anemone-detail.png",
    meaning:
      '"รักที่ถูกทอดทิ้ง" (FORSAKEN LOVE) สื่อถึงความโศกเศร้า ความพลัดพราก และความโดดเดี่ยวของหัวใจที่ยังคงยึดติดกับความทรงจำในอดีต',
  },
  {
    id: "passion-flower",
    titleEn: "PASSION FLOWER",
    titleTh: "ดอกแพสชั่นฟลาวเวอร์",
    image: "/flowers/passion-detail.png",
    meaning:
      '"ศรัทธาและความเชื่อมั่น" (FAITH) แสดงถึงความเชื่อมั่นในกุญแจความ ความรักที่มั่นคง และความเชื่อมั่นที่ยึดเกิดผ่านจากจิตใจ',
  },
  {
    id: "honeysuckle",
    titleEn: "HONEYSUCKLE FLOWER",
    titleTh: "ดอกฮันนี่ซัคเคิล",
    image: "/flowers/honeysuckle-detail.png",
    meaning:
      '"ความรักที่แสนผูกพัน" (DEVOTION & AFFECTION) เป็นดอกไม้แทนความรู้สึกผิดชอบ ความผูกพันที่แน่นแฟ้น และความสุขพิเศษที่เกิดจากการให้ความรักอย่างจริงใจ',
  },
  {
    id: "rose",
    titleEn: "ROSE FLOWER",
    titleTh: "ดอกกุหลาบ",
    image: "/flowers/rose-detail.png",
    meaning:
      '"ความรัก" (LOVE) ดอกกุหลาบสีแดงเป็นสัญลักษณ์ที่เป็นที่นิยมที่สุดในการแสดงออกถึงความรักและความโรแมนติก',
  },
]
