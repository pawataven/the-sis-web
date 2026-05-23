export interface QuizResult {
  id: "sadness" | "love" | "parent" | "warning"
  label: string        // "BOUQUET PERSONALITY"
  bouquetTitle: string // "LOVER BOUQUET"
  flowerImage: string  // รูปช่อดอกไม้กลางหน้า
  tags: string[]       // ["ความโหยหา", "ความหลงใหล", "ความอุกตัน"]
  description: string  // ย่อหน้าอธิบาย
  poemTitle: string
  poemPath: string
}

export const quizResults: QuizResult[] = [
  {
    id: "love",
    label: "BOUQUET PERSONALITY",
    bouquetTitle: "LOVER BOUQUET",
    flowerImage: "/Result/Result.png",
    tags: ["ความโหยหา", "ความหลงใหล", "ความอุกตัน"],
    description:
      "ในสมัยวิกตอเรีย (ค.ศ. 1837–1901) ประเทศอังกฤษได้อยู่ในช่วงเวลาแห่งความเจริญรุ่งเรืองทั้งด้านวัฒนธรรม ศิลปกรรม และอุตสาหกรรม ส่งผลให้เกิดการเปลี่ยนแปลงทางสังคมและวัฒนธรรมอย่างกว้างขวาง หนึ่งในปรากฏการณ์ทางวัฒนธรรมที่ได้รับความนิยมอย่างยิ่งในสังคมคือ \'ภาษาดอกไม้\' (FLORIOGRAPHY) ซึ่งถูกใช้เป็นเครื่องมือในการถ่ายทอดความรู้สึกแทนการใช้ถ้อยคำโดยตรง",
    poemTitle: "พระอภัยมณี ตอนพระอภัยมณีเกี้ยวนางละเวง",
    poemPath: "/poem-love",
  },
  {
    id: "sadness",
    label: "BOUQUET PERSONALITY",
    bouquetTitle: "SADNESS BOUQUET",
    flowerImage: "/Result/Result.png",
    tags: ["ความเจ็บปวด", "ความโศกเศร้า", "ความอาลัย"],
    description:
      "ความโศกเศร้าคือบทกวีที่ไม่มีคำพูด หัวใจที่รู้สึกลึกซึ้งย่อมเข้าใจความงามของความเจ็บปวด ดอกไม้แห่งความโศกเศร้านั้นงดงามในแบบของตัวเอง เหมือนดั่งบทกวีที่ร้อยเรียงจากหยดน้ำตา เพื่อสื่อถึงความหมายอันแสนเจ็บปวดในทุกมิติของชีวิต",
    poemTitle: "นิราศอิเหนา",
    poemPath: "/poem-sadness",
  },
  {
    id: "parent",
    label: "BOUQUET PERSONALITY",
    bouquetTitle: "FAMILY BOUQUET",
    flowerImage: "/quiz/result-parent.png",
    tags: ["ความผูกพัน", "ความอบอุ่น", "ความกตัญญู"],
    description:
      "ความรักต่อครอบครัวคือรากฐานที่มั่นคงที่สุดของชีวิต คุณผูกพันกับบุพการีและคนที่รักอย่างแน่นแฟ้น ดอกไม้แห่งครอบครัวสะท้อนถึงความอบอุ่นและการดูแลเอาใจใส่ที่ส่งต่อกันจากรุ่นสู่รุ่น",
    poemTitle: "เพลงยาวถวายโอวาท",
    poemPath: "/poem-parent",
  },
  {
    id: "warning",
    label: "BOUQUET PERSONALITY",
    bouquetTitle: "WISDOM BOUQUET",
    flowerImage: "/quiz/result-warning.png",
    tags: ["สติปัญญา", "คติธรรม", "การตระหนักรู้"],
    description:
      "คุณมองโลกด้วยสติปัญญาและความรอบคอบ คำเตือนและคติธรรมคือสิ่งที่คุณให้คุณค่า ดอกไม้แห่งปัญญานั้นออกดอกในยามที่เราหยุดฟังเสียงของหัวใจและเหตุผลไปพร้อมกัน",
    poemTitle: "พระอภัยมณี ตอนสุดสาครเข้าเมืองการะเวก",
    poemPath: "/poem-warning",
  },
]
