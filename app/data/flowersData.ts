export interface Flower {
  id: string;
  name: string;
  imageSrc: string;
  meaning: string;
}

export const flowersList: Flower[] = [
  {
    id: "anemone",
    name: "Anemone Flower",
    imageSrc: "/flowers/anemone.png",

    meaning:
      '"ถูกทอดทิ้ง" (FORSAKEN LOVE) สื่อถึงความโศกเศร้า การถูกทอดทิ้ง และความเจ็บปวดเมื่อ แสนปิติ สิ้นสุดลงพร้อมกับความรัก สิ้นเนื้อสิ้น',
  },
  {
    id: "passion",
    name: "Passion Flower",
    imageSrc: "/flowers/passion.png",

    meaning:
      '"ศรัทธาและความเชื่อมั่น" (FAITH) แสดงถึงความเชื่อมั่นในกุญแจความ ความรักที่ที่มั่นคง และความเชื่อมั่นที่ยึดเกิดผ่านจากจิตใจ',
  },
  {
    id: "honeysuckle",
    name: "Honeysuckle",
    imageSrc: "/flowers/honeysuckle.png",

    meaning:
      '"ความรักที่แสนความผูกพัน" (DEVOTION & AFFECTION) เป็นดอกไม้แทนความรู้สึกผิดชอบ ความผูกพันที่แน้นแฟ้น และความสุขพิเศษที่เกิดจากการให้ความรักอย่างจริงใจ',
  },
  {
    id: "rose",
    name: "Rose Flower",
    imageSrc: "/flowers/rose.png",

    meaning:
      '"ความรัก" (LOVE) ดอกกุหลาบสีแดงเป็นสัญลักษณ์ที่เป็นที่นิยมที่สุดในการแสดงออกถึงความรักและความโรแมนติก',
  },
];
