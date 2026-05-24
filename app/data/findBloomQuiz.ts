export const answerTypes = ["love", "warning", "sadness", "family"] as const;

export type AnswerType = (typeof answerTypes)[number];

export type QuizChoice = {
  id: string;
  label: string;
  answerType: AnswerType;
};

export type QuizStep =
  | {
      id: string;
      page: number;
      type: "start";
      content: string[];
      description?: string;
      buttonLabel: string;
    }
  | {
      id: string;
      page: number;
      type: "story";
      content: string[];
      buttonLabel: string;
    }
  | {
      id: string;
      page: number;
      type: "question";
      content?: string[];
      poemRows?: {
        left: string;
        right: string;
      }[];
      question: string;
      choices: QuizChoice[];
      buttonLabel: string;
    };

export const findBloomQuiz: QuizStep[] = [
  {
    id: "page-1",
    page: 1,
    type: "start",
    content: ["ยินดีต้อนรับสู่โลกแห่งกวี..."],
    description:
      "เนื้อหาข้างต้นมีส่วนที่อ้างอิงจากประวัติศาสตร์จริงแต่ไม่ใช่ทั้งหมด สร้างขึ้นเพื่อสนับสนุนความรู้ทางการศึกษาและความบันเทิงเท่านั้น",
    buttonLabel: "Start",
  },

  {
    id: "page-2",
    page: 2,
    type: "story",
    content: [
      "ในขณะนี้คุณได้ย้อนยุคมาสู่ในรัชสมัยรัชกาลที่ 3",
      "ต่อไปนี้คุณต้องเป็นผู้พายเรือให้กับสุนทรภู่ เพื่อล่องเรือ",
      "ไปนมัสการเจดีย์ภูเขาทองที่จังหวัดพระนครศรีอยุธยา",
    ],
    buttonLabel: "Next",
  },

  {
    id: "page-3",
    page: 3,
    type: "story",
    content: [
      "แต่ไม่ต้องกังวลใจ เรามีวิธีพาคุณกลับไปยังโลกปัจจุบัน ดังนั้นตั้งใจทำหน้าที่ให้ดีแล้ววิธีจะปรากฏ",
    ],
    buttonLabel: "Next",
  },

  {
    id: "page-4",
    page: 4,
    type: "question",
    content: [
      "แสงสว่างได้ปรากฏต่อหน้าและค่อย ๆ จางไป เมื่อคุณลืมตาขึ้นมากลับพบว่าสถานที่ตรงหน้า มิใช่ยุคปัจจุบันอีกต่อไป",
    ],
    question: "คุณจะ…",
    choices: [
      {
        id: "page-4-choice-1",
        label: "กระวนกระวายแต่ตั้งสติได้",
        answerType: "sadness",
      },
      {
        id: "page-4-choice-2",
        label: "สับสนอยู่สักพักแล้วปล่อยให้เป็นไปตามสถานการณ์",
        answerType: "family",
      },
      {
        id: "page-4-choice-3",
        label: "ค่อย ๆ สังเกตการณ์สิ่งรอบข้างและตัวเอง",
        answerType: "family",
      },
      {
        id: "page-4-choice-4",
        label: "หาคนที่ท่าทางเป็นมิตรเพื่อสอบถามในทันที",
        answerType: "love",
      },
      {
        id: "page-4-choice-5",
        label: "สำรวจพื้นที่รอบข้างในทันที",
        answerType: "warning",
      },
    ],
    buttonLabel: "Next",
  },

  {
    id: "page-5",
    page: 5,
    type: "question",
    content: [
      "คุณถูกเรียกโดยเสียงของหนุ่มวัยกลางคน โดยเขาต้องการให้คุณเป็นผู้พายเรือให้",
      "คุณได้นึกถึงคำแนะนำที่เคยได้ยิน คุณจึงตระหนักถึงเสียงแจ้งเมื่อก่อนจะลืมตาได้ว่า นี่อาจจะเป็นเสียงของนักกวี “สุนทรภู่” คุณจึงได้ทำตาม",
      "ก่อนออกเดินทางคุณมีความสงสัยในใจ คุณจึงเลือกที่จะถามบุคคลข้างหน้าว่า…",
    ],
    question: "คุณเลือกที่จะถามว่า…",
    choices: [
      {
        id: "page-5-choice-1",
        label: "ท่านกำลังจะไปที่ใด",
        answerType: "love",
      },
      {
        id: "page-5-choice-2",
        label: "ทำไมเราจึงต้องเป็นผู้พายเรือให้ท่าน",
        answerType: "warning",
      },
      {
        id: "page-5-choice-3",
        label: "ที่นี่คือที่ไหนหรือ",
        answerType: "sadness",
      },
      {
        id: "page-5-choice-4",
        label: "ท่านคือสุนทรภู่ใช่หรือไม่",
        answerType: "family",
      },
      {
        id: "page-5-choice-5",
        label: "มีผู้เดินทางเพียงแค่เราหรือ",
        answerType: "warning",
      },
    ],
    buttonLabel: "Next",
  },

  {
    id: "page-6",
    page: 6,
    type: "story",
    content: [
      "สุนทรภู่แปลกใจกับคำถามของคุณ แต่คิดว่าวันนี้คุณอาจจะพักผ่อนน้อยจึงมีสติเลอะเลือนบ้างไม่ได้ถือสาอะไร และได้อธิบายว่า “เพลานี้เราจะล่องเรือไปนมัสการเจดีย์ภูเขาทองที่พระนคร อาจใช้เวลาสัก 4-5  ยาม ต้องล่องเรือไปทางเหนือ ยังไงก็เป็นหน้าที่เจ้าอยู่แล้ว ฝากด้วยแล้วกันนะ” คุณจึงพอเข้าใจสถานการณ์และสถานะตัวเองอยู่บ้างจึงได้ตามน้ำไป",
    ],
    buttonLabel: "Next",
  },

  {
    id: "page-7",
    page: 7,
    type: "question",
    poemRows: [
      {
        left: "ถึงม้วยดินสิ้นฟ้ามหาสมุทร",
        right: "ไม่สิ้นสุดความรักสมัครสมาน",
      },
      {
        left: "แม้นเกิดในใต้ฟ้าสุธาธาร",
        right: "ขอพบพานพิศวาสไม่คลาดคลา",
      },
    ],
    question:
      "การเดินทางค่อย ๆ ผ่านไป คุณได้ยินสุนทรภู่แต่งบทกลอนดังกล่าว คุณรู้สึกอย่างไรเมื่อได้ฟัง",
    choices: [
      {
        id: "page-7-choice-1",
        label: "คิดถึงคนรักของตนเอง",
        answerType: "love",
      },
      {
        id: "page-7-choice-2",
        label: "นึกถึงช่วงเวลาเก่า ๆ",
        answerType: "sadness",
      },
      {
        id: "page-7-choice-3",
        label: "อยากกลับไปยังยุคปัจจุบัน",
        answerType: "warning",
      },
      {
        id: "page-7-choice-4",
        label: "เข้าอกเข้าใจผู้แต่ง",
        answerType: "family",
      },
      {
        id: "page-7-choice-5",
        label: "ซาบซึ้งกินใจ",
        answerType: "sadness",
      },
    ],
    buttonLabel: "Next",
  },

  {
    id: "page-8",
    page: 8,
    type: "question",
    poemRows: [
      {
        left: "สวาทไหนหรือจะเปรียบสวาทมิ่ง",
        right: "สวาทแม่นี่ยิ่งเป็นที่สุด",
      },
      {
        left: "ที่หวังเสกเป็นเอกอนงค์นุช",
        right: "อนงค์ไหนมิได้สุดสวาทเรียม",
      },
    ],
    question:
      "การเดินทางค่อย ๆ ผ่านไป สุนทรภู่เห็นคุณดูสนใจจึงให้ดูบทกลอนที่เขียนไว้บ้าง คุณคิดอย่างไรเมื่อได้อ่าน",

    choices: [
      {
        id: "page-8-choice-1",
        label: "หวานปานจะกลืนกิน",
        answerType: "love",
      },
      {
        id: "page-8-choice-2",
        label: "ขวยเขิน",
        answerType: "sadness",
      },
      {
        id: "page-8-choice-3",
        label: "เท่ห์ไปเลย",
        answerType: "family",
      },
      {
        id: "page-8-choice-4",
        label: "สุนทรภู่แต่งได้อย่างไรในระยะเวลาสั้น ๆ",
        answerType: "sadness",
      },
      {
        id: "page-8-choice-5",
        label: "สงสัยในคำที่ใช้แต่ง",
        answerType: "warning",
      },
    ],
    buttonLabel: "Next",
  },

  {
    id: "page-9",
    page: 9,
    type: "question",
    poemRows: [
      {
        left: "แล้วสอนว่าอย่าไว้ใจมนุษย์",
        right: "มันแสนสุดลึกล้ำเหลือกำหนด",
      },
      {
        left: "ถึงเถาวัลย์พันเกี่ยวที่เลี้ยวลด",
        right: "ก็ไม่คดเหมือนหนึ่งในน้ำใจคน",
      },
    ],
    question:
      "การเดินทางค่อย ๆ ผ่านไป บัดนี้เป็นเวลาพระอาทิตย์อยู่ขอบฟ้าใกล้จะดับสนิท คุณรู้สึกอย่างไรเมื่อได้ฟัง",

    choices: [
      {
        id: "page-9-choice-1",
        label: "หวานปานจะกลืนกิน",
        answerType: "love",
      },
      {
        id: "page-9-choice-2",
        label: "ขวยเขิน",
        answerType: "sadness",
      },
      {
        id: "page-9-choice-3",
        label: "เท่ห์ไปเลย",
        answerType: "family",
      },
      {
        id: "page-9-choice-4",
        label: "สุนทรภู่แต่งได้อย่างไรในระยะเวลาสั้น ๆ",
        answerType: "sadness",
      },
      {
        id: "page-9-choice-5",
        label: "สงสัยในคำที่ใช้แต่ง",
        answerType: "warning",
      },
    ],
    buttonLabel: "Next",
  },
];
