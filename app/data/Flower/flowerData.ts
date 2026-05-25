export interface Flower {
  id: string
  name: string
  titleEn: string
  titleTh: string
  image: string
  description: string
  meaning: string
  origin: string
}

export interface FlowerCardLayout {
  contentLeft: string
  contentRight: string
  contentTop: string
  contentBottom: string
  textBottom: string
  titlePaddingLeft?: string
  buttonRight: string
  buttonBottom: string
}

export interface FlowerCard {
  id: string
  name: string
  imageSrc: string
  description: string
  meaning: string
  modalIndex: number
  alt: string
  layout: FlowerCardLayout
}

export const flowerList: Flower[] = [
  {
    id: "anemone",
    name: "Anemone Flower",
    titleEn: "Anemone Flower",
    titleTh: "ดอกอะเนมโอนี่",
    image: "/flowers/popupImg/anemone-detail.png",
    description: "รักที่ถูกทอดทิ้ง <br /> (Forsaken Love)",
    meaning:
      '"รักที่ถูกทอดทิ้ง" (FORSAKEN LOVE) สื่อถึงความโศกเศร้า ความพลัดพราก และความโดดเดี่ยวของหัวใจที่ยังคงยึดติดกับความทรงจำในอดีต',
    origin: "กดกดกดกด",
  },
  {
    id: "passion-flower",
    name: "Passion Flower",
    titleEn: "PASSION FLOWER",
    titleTh: "ดอกแพสชั่นฟลาวเวอร์",
    image: "/flowers/popupImg/passion-detail.png",
    description: "ศรัทธาและความเชื่อมั่น <br /> (Faith)",
    meaning:
      '"ศรัทธาและความเชื่อมั่น" (FAITH) แสดงถึงความเชื่อมั่นในกุญแจความรัก ความรักที่มั่นคง และความเชื่อมั่นที่ยึดเกิดผ่านจากจิตใจ',
    origin: "ดกเดเดเดเ",
  },
  {
    id: "honeysuckle",
    name: "Honeysuckle",
    titleEn: "HONEYSUCKLE FLOWER",
    titleTh: "ดอกฮันนี่ซัคเคิล",
    image: "/flowers/popupImg/honeysuckle-detail.png",
    description: "ความภักดีและความเสน่หา <br /> (Devotion & Affection)",
    meaning:
      '"ความรักที่แสนผูกพัน" (DEVOTION & AFFECTION) เป็นดอกไม้แทนความรู้สึกผิดชอบ ความผูกพันที่แน่นแฟ้น และความสุขพิเศษที่เกิดจากการให้ความรักอย่างจริงใจ',
    origin: "กดกดกด",
  },
  {
    id: "appleblossom",
    name: "Apple Blossom",
    titleEn: "APPLE BLOSSOM",
    titleTh: "ดอกแอปเปิ้ลบลอสซัม",
    image: "/flowers/popupImg/apple-blossom-detail.png",
    description: "ความชอบพอ / ความพึงพอใจ <br /> (Preference)",
    meaning:
      '"ความรัก" (LOVE) ดอกกุหลาบสีแดงเป็นสัญลักษณ์ที่เป็นที่นิยมที่สุดในการแสดงออกถึงความรักและความโรแมนติก',
    origin: "กดกดกด",
  },
]

const cardVisuals = [
  {
    imageSrc: "/flowers/anemone.png",
    alt: "Anemone flower card artwork",
  },
  {
    imageSrc: "/flowers/honeysuckle.png",
    alt: "Honeysuckle card artwork",
  },
  {
    imageSrc: "/flowers/passion flower.png",
    alt: "Passion flower card artwork",
  },
  {
    imageSrc: "/flowers/apple blossom.png",
    alt: "Rose flower card artwork",
  },
] as const

export const flowerCards: FlowerCard[] = [
  {
    id: flowerList[0]!.id,
    name: flowerList[0]!.name,
    imageSrc: cardVisuals[0]!.imageSrc,
    description: flowerList[0]!.description,
    meaning: flowerList[0]!.meaning,
    modalIndex: 0,
    alt: cardVisuals[0]!.alt,
    layout: {
      contentLeft: "40%",
      contentRight: "5%",
      contentTop: "20%",
      contentBottom: "18%",
      textBottom: "28%",
      buttonRight: "4%",
      buttonBottom: "6%",
    },
  },
  {
    id: flowerList[1]!.id,
    name: flowerList[1]!.name,
    imageSrc: cardVisuals[1]!.imageSrc,
    description: flowerList[1]!.description,
    meaning: flowerList[1]!.meaning,
    modalIndex: 1,
    alt: cardVisuals[1]!.alt,
    layout: {
      contentLeft: "47%",
      contentRight: "5%",
      contentTop: "26%",
      contentBottom: "18%",
      textBottom: "28%",
      buttonRight: "4%",
      buttonBottom: "6%",
    },
  },
  {
    id: flowerList[2]!.id,
    name: flowerList[2]!.name,
    imageSrc: cardVisuals[2]!.imageSrc,
    description: flowerList[2]!.description,
    meaning: flowerList[2]!.meaning,
    modalIndex: 2,
    alt: cardVisuals[2]!.alt,
    layout: {
      contentLeft: "47%",
      contentRight: "5%",
      contentTop: "20%",
      contentBottom: "18%",
      textBottom: "28%",
      buttonRight: "4%",
      buttonBottom: "6%",
    },
  },
  {
    id: flowerList[3]!.id,
    name: flowerList[3]!.name,
    imageSrc: cardVisuals[3]!.imageSrc,
    description: flowerList[3]!.description,
    meaning: flowerList[3]!.meaning,
    modalIndex: 3,
    alt: cardVisuals[3]!.alt,
    layout: {
      contentLeft: "50%",
      contentRight: "5%",
      contentTop: "20%",
      contentBottom: "18%",
      textBottom: "28%",
      titlePaddingLeft: "5%",
      buttonRight: "4%",
      buttonBottom: "6%",
    },
  },
]
