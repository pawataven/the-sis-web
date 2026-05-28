export const answerTypes = ["love", "warning", "sadness", "family"] as const;

export type AnswerType = (typeof answerTypes)[number];

export const quizLanguages = ["th", "en"] as const;

export type QuizLanguage = (typeof quizLanguages)[number];

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
      contenttwo: string[];
      imageSrc?: string;
      imageAlt?: string;
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
      "ในขณะนี้คุณได้ย้อนยุคมาสู่ในรัชสมัยรัชกาลที่ 3 ต่อไปนี้คุณต้องเป็นผู้พายเรือให้กับสุนทรภู่ เพื่อล่องเรือไปนมัสการเจดีย์ภูเขาทองที่จังหวัดพระนครศรีอยุธยา",
      "",
      "",
    ],
    imageSrc: "/bloom/42ebc04c5987d293.png",
    imageAlt: "Boat journey scene",
    contenttwo: [],
    buttonLabel: "Next",
  },

  {
    id: "page-3",
    page: 3,
    type: "story",
    content: [
      "แต่ไม่ต้องกังวลใจ เรามีวิธีพาคุณกลับไปยังโลกปัจจุบัน ดังนั้นตั้งใจทำหน้าที่ให้ดีแล้วโชคชะตาจะนำพาเอง...",
    ],
    imageSrc: "/bloom/img1.png",
    imageAlt: "Boat journey scene",
    contenttwo: [],
    buttonLabel: "Next",
  },

  {
    id: "page-4",
    page: 4,
    type: "question",
    content: [
      "",
    ],
    question: "แสงสว่างได้ปรากฎต่อหน้าแลค่อย ๆ จางไป เมื่อคุณลืมตาขึ้นมากลับพบว่าสถานที่ตรงหน้า ไม่ใช่ยุคปัจจุบันอีกต่อไป คุณจะ…",
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
      "",
    ],
    question: "คุณถูกเรียกโดยเสียงของหนุ่มวัยกลางคน โดยเขาต้องการให้คุณเป็นผู้พายเรือให้คุณได้นึกถึงคำแนะนำที่เคยได้ยิน คุณจึงตระหนักถึงเสียงเมื่อสักครู่ได้ว่านี่อาจจะเป็นเสียงของนักกวี “สุนทรภู่” คุณจึงได้ทำตาม ก่อนออกเดินทางคุณมีความสงสัยในใจ คุณจึงเลือกที่จะถามบุคคลข้างหน้าว่า…",
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
    imageSrc: "/bloom/7730ecf29e2808e46cadcc79353063c050e05d8a.png",
    imageAlt: "Boat journey scene",
    content: [
      "สุนทรภู่แปลกใจกับคำถามของคุณ แต่คิดว่าวันนี้คุณอาจจะพักผ่อนน้อยจึงมีสติเลอะเลือนบ้างไม่ได้ถือสาอะไร และได้อธิบายว่า “เพลานี้เราจะล่องเรือไปนมัสการเจดีย์ภูเขาทองที่อยุธยาต้องล่องเรือไปทางเหนือ ยังไงก็ต้องเป็นหน้าที่เจ้าอยู่แล้ว” คุณจึงพอเข้าใจสถานการณ์และสถานะตัวเองอยู่บ้างจึงได้ตามน้ำไป",
    ],
    contenttwo: [],
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
      "การเดินทางค่อยๆ ผ่านไป คุณได้ยินสุนทรภู่แต่งบทกลอนดังกล่าว คุณรู้สึกอย่างไรเมื่อได้ฟัง",
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
      "การเดินทางค่อยๆ ผ่านไป สุนทรภู่เห็นคุณดูสนใจจึงให้ดูบทกลอนที่เขียนไว้บ้าง<br>คุณคิดอย่างไรเมื่อได้อ่าน  ",

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
      "การเดินทางค่อยๆ ผ่านไป บัดนี้เป็นเวลาพระอาทิตย์อยู่ขอบฟ้าใกล้จะดับสนิท<br>คุณรู้สึกอย่างไรเมื่อได้ฟัง",

    choices: [
      {
        id: "page-9-choice-1",
        label: "สอนใจ",
        answerType: "warning",
      },
      {
        id: "page-9-choice-2",
        label: "เห็นด้วย",
        answerType: "family",
      },
      {
        id: "page-9-choice-3",
        label: "ลึกซึ้ง",
        answerType: "love",
      },
      {
        id: "page-9-choice-4",
        label: "ละเอียดละออ",
        answerType: "sadness",
      },
      {
        id: "page-9-choice-5",
        label: "กินใจ",
        answerType: "sadness",
      },
    ],
    buttonLabel: "Next",
  },

  {
    id: "page-10",
    page: 10,
    type: "story",
    imageSrc: "/bloom/e34110572ef7321ff7b4a009ae384f2b0603781f.png",
    imageAlt: "Boat journey scene",
    content: [
      "ตะวันลับฟ้า แสงสุริยาเลือนลับไป สีสดใสของฟ้าได้แปรเปลี่ยนเป็นสีมืดเข้ม เป็นสัญลักษณ์ที่แจ้งเตือนว่า บัดนี้เป็นเวลาพลบค่ำแล้ว ตอนนี้คุณและสุนทรภู่ได้เดินทางมาถึงเจดีย์ภูเขาทองที่จังหวัดพระนครศรีอยุธยา ...",
    ],
    contenttwo: [
      "บัดนี้คุณได้ทำภารกิจเสร็จสิ้นแล้ว คุณจะได้กลับไปยังโลกปัจจุบัน ระหว่างการเดินทางเราได้ซึบซับทำความรู้จักคุณไปทีละนิด เราจึงมีสิ่งของที่อยากจะให้กลับไปเป็นที่ระลึก นั่นคือ...",
    ],

    buttonLabel: "Submit",
  },
];

export const findBloomQuizEn: QuizStep[] = [
  {
    id: "page-1",
    page: 1,
    type: "start",
    content: ["Welcome to the world of poetry..."],
    description:
      "Some parts of this story are inspired by real historical context, but not all of it. It was created for education and entertainment only.",
    buttonLabel: "Start",
  },

  {
    id: "page-2",
    page: 2,
    type: "story",
    content: [
      "You have traveled back to the reign of King Rama III. From now on, you must row a boat for Sunthorn Phu as he travels to pay respect at the Golden Mount pagoda in Phra Nakhon Si Ayutthaya.",
      "",
      "",
    ],
    imageSrc: "/bloom/42ebc04c5987d293.png",
    imageAlt: "Boat journey scene",
    contenttwo: [],
    buttonLabel: "Next",
  },

  {
    id: "page-3",
    page: 3,
    type: "story",
    content: [
      "Do not worry. We have a way to take you back to the present. Do your duty well, and fate will lead the way...",
    ],
    imageSrc: "/bloom/img1.png",
    imageAlt: "Boat journey scene",
    contenttwo: [],
    buttonLabel: "Next",
  },

  {
    id: "page-4",
    page: 4,
    type: "question",
    content: [""],
    question:
      "A bright light appears before you and slowly fades away. When you open your eyes, the place before you is no longer the present. You will...",
    choices: [
      {
        id: "page-4-choice-1",
        label: "Feel anxious, but manage to stay calm",
        answerType: "sadness",
      },
      {
        id: "page-4-choice-2",
        label: "Feel confused for a while, then go along with the situation",
        answerType: "family",
      },
      {
        id: "page-4-choice-3",
        label: "Slowly observe your surroundings and yourself",
        answerType: "family",
      },
      {
        id: "page-4-choice-4",
        label: "Look for someone friendly and ask right away",
        answerType: "love",
      },
      {
        id: "page-4-choice-5",
        label: "Immediately explore the area around you",
        answerType: "warning",
      },
    ],
    buttonLabel: "Next",
  },

  {
    id: "page-5",
    page: 5,
    type: "question",
    content: [""],
    question:
      "A middle-aged man's voice calls to you. He wants you to row the boat. Remembering advice you once heard, you realize that the voice may belong to the poet Sunthorn Phu, so you follow along. Before setting off, you feel curious and decide to ask the person before you...",
    choices: [
      {
        id: "page-5-choice-1",
        label: "Where are you going?",
        answerType: "love",
      },
      {
        id: "page-5-choice-2",
        label: "Why must I be the one to row the boat for you?",
        answerType: "warning",
      },
      {
        id: "page-5-choice-3",
        label: "Where is this place?",
        answerType: "sadness",
      },
      {
        id: "page-5-choice-4",
        label: "Are you Sunthorn Phu?",
        answerType: "family",
      },
      {
        id: "page-5-choice-5",
        label: "Are we the only travelers here?",
        answerType: "warning",
      },
    ],
    buttonLabel: "Next",
  },

  {
    id: "page-6",
    page: 6,
    type: "story",
    imageSrc: "/bloom/7730ecf29e2808e46cadcc79353063c050e05d8a.png",
    imageAlt: "Boat journey scene",
    content: [
      "Sunthorn Phu is surprised by your question, but he assumes you may be tired and absent-minded, so he does not take offense. He explains, \"At this hour, we are rowing north to pay respect at the Golden Mount pagoda in Ayutthaya. Either way, this is already your duty.\" You begin to understand the situation and your role, so you decide to follow along.",
    ],
    contenttwo: [],
    buttonLabel: "Next",
  },

  {
    id: "page-7",
    page: 7,
    type: "question",
    poemRows: [
      {
        left: "Even if earth, sky, and ocean end",
        right: "true love will never fade away",
      },
      {
        left: "If I am born beneath the heavens again",
        right: "may we meet in love and never part",
      },
    ],
    question:
      "As the journey slowly continues, you hear Sunthorn Phu compose these lines. How do you feel after listening?",
    choices: [
      {
        id: "page-7-choice-1",
        label: "Think of your own loved one",
        answerType: "love",
      },
      {
        id: "page-7-choice-2",
        label: "Remember old moments",
        answerType: "sadness",
      },
      {
        id: "page-7-choice-3",
        label: "Want to return to the present",
        answerType: "warning",
      },
      {
        id: "page-7-choice-4",
        label: "Understand the poet's feelings",
        answerType: "family",
      },
      {
        id: "page-7-choice-5",
        label: "Feel deeply moved",
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
        left: "What love could compare with my beloved?",
        right: "This beloved is the dearest of all",
      },
      {
        left: "I wish to make her the one and only",
        right: "No one else could be so dear to me",
      },
    ],
    question:
      "As the journey slowly continues, Sunthorn Phu notices your interest and shows you some lines he has written.<br>What do you think after reading them?",
    choices: [
      {
        id: "page-8-choice-1",
        label: "So sweet it almost melts",
        answerType: "love",
      },
      {
        id: "page-8-choice-2",
        label: "Feel shy",
        answerType: "sadness",
      },
      {
        id: "page-8-choice-3",
        label: "That is impressive",
        answerType: "family",
      },
      {
        id: "page-8-choice-4",
        label: "How did Sunthorn Phu write this so quickly?",
        answerType: "sadness",
      },
      {
        id: "page-8-choice-5",
        label: "Wonder about the words he chose",
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
        left: "He taught: do not trust human hearts",
        right: "they are deeper than one can measure",
      },
      {
        left: "Though vines twist and coil around",
        right: "they are not as crooked as the human mind",
      },
    ],
    question:
      "As the journey slowly continues, the sun now rests at the edge of the sky, close to disappearing.<br>How do you feel after hearing these lines?",
    choices: [
      {
        id: "page-9-choice-1",
        label: "It teaches a lesson",
        answerType: "warning",
      },
      {
        id: "page-9-choice-2",
        label: "Agree with it",
        answerType: "family",
      },
      {
        id: "page-9-choice-3",
        label: "Find it profound",
        answerType: "love",
      },
      {
        id: "page-9-choice-4",
        label: "Notice its fine detail",
        answerType: "sadness",
      },
      {
        id: "page-9-choice-5",
        label: "Feel touched by it",
        answerType: "sadness",
      },
    ],
    buttonLabel: "Next",
  },

  {
    id: "page-10",
    page: 10,
    type: "story",
    imageSrc: "/bloom/e34110572ef7321ff7b4a009ae384f2b0603781f.png",
    imageAlt: "Boat journey scene",
    content: [
      "The sun sets, and its light fades away. The bright colors of the sky turn deep and dark, signaling that dusk has arrived. You and Sunthorn Phu have now reached the Golden Mount pagoda in Phra Nakhon Si Ayutthaya...",
    ],
    contenttwo: [
      "Your mission is now complete, and you will return to the present. Along the journey, we have slowly learned about you, bit by bit. There is something we would like to give you as a keepsake. It is...",
    ],
    buttonLabel: "Submit",
  },
];

export const findBloomQuizByLanguage: Record<QuizLanguage, QuizStep[]> = {
  th: findBloomQuiz,
  en: findBloomQuizEn,
};
