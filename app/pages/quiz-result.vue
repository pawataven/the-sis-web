<script setup lang="ts">
import NavigationBar from "~/layouts/NavigationBar.vue";
import { quizResultsByLanguage } from "@/data/quizResultData";
import { answerTypes, findBloomQuizByLanguage } from "~/data/findBloomQuiz";
import type { AnswerType, QuizLanguage } from "~/data/findBloomQuiz";

definePageMeta({
  scrollToTop: true,
});

const answers = useState<Record<string, string>>(
  "find-bloom-answers",
  () => ({}),
);

const finalResultType = useState<AnswerType | null>(
  "find-bloom-result-type",
  () => null,
);

const quizLanguage = useFindBloomLanguage();
const resultSaveImageByLanguage: Record<QuizLanguage, Record<AnswerType, string>> = {
  th: {
    love: "/Result/result love 1.png",
    sadness: "/Result/result sad 1.png",
    family: "/Result/result fam 1.png",
    warning: "/Result/result warn 1.png",
  },
  // Replace these paths with dedicated English result cards when they are available.
  en: {
    love: "/Result/result love 1.png",
    sadness: "/Result/result sad 1.png",
    family: "/Result/result fam 1.png",
    warning: "/Result/result warn 1.png",
  },
};

const activeQuiz = computed(() => {
  return findBloomQuizByLanguage[quizLanguage.value];
});

const activeQuizResults = computed(() => {
  return quizResultsByLanguage[quizLanguage.value];
});

const resultByType = computed(() => {
  return Object.fromEntries(
    activeQuizResults.value.map((result) => [result.id, result]),
  ) as Record<AnswerType, (typeof activeQuizResults.value)[number]>;
});

if (!finalResultType.value) {
  await navigateTo({
    path: "/find-your-bloom",
    query: { step: "0" },
  });
}

const result = computed(() => {
  if (!finalResultType.value) {
    return null;
  }

  return resultByType.value[finalResultType.value] ?? null;
});

const saveImagePath = computed(() => {
  if (!result.value) {
    return "";
  }

  return (
    resultSaveImageByLanguage[quizLanguage.value]?.[result.value.id] ??
    result.value.flowerImage
  );
});

const saveImageLabel = computed(() => {
  return quizLanguage.value === "en" ? "Save as image" : "บันทึกเป็นภาพ";
});

const resultPageText = computed(() => {
  if (quizLanguage.value === "en") {
    return {
      playAgain: "Play again",
      missingResult: "No quiz result found",
      restart: "Back to quiz",
    };
  }

  return {
    playAgain: "เล่นใหม่",
    missingResult: "ไม่พบผลลัพธ์ของแบบทดสอบ",
    restart: "กลับไปทำแบบทดสอบ",
  };
});

function createEmptyTypeCount(): Record<AnswerType, number> {
  return {
    love: 0,
    warning: 0,
    sadness: 0,
    family: 0,
  };
}

const answerTypeCount = computed(() => {
  const count = createEmptyTypeCount();

  for (const step of activeQuiz.value) {
    if (step.type !== "question") {
      continue;
    }

    const selectedChoiceId = answers.value[step.id];

    if (!selectedChoiceId) {
      continue;
    }

    const selectedChoice = step.choices.find((choice) => {
      return choice.id === selectedChoiceId;
    });

    if (!selectedChoice) {
      continue;
    }

    count[selectedChoice.answerType] += 1;
  }

  return count;
});

function logResultSummary() {
  if (!finalResultType.value) {
    return;
  }

  console.log("[Find Your Bloom] answer counts");
  console.table(
    answerTypes.map((type) => ({
      type,
      count: answerTypeCount.value[type],
    })),
  );
  console.log("[Find Your Bloom] final result type:", finalResultType.value);
}

onMounted(() => {
  logResultSummary();
});

watch(
  () => finalResultType.value,
  () => {
    logResultSummary();
  },
);

async function playAgain() {
  answers.value = {};
  finalResultType.value = null;

  await navigateTo({
    path: "/find-your-bloom",
    query: { step: "0" },
  });
}

function createResultImageFilename(
  answerType: AnswerType,
  language: QuizLanguage,
  imagePath: string,
) {
  const extensionMatch = imagePath.match(/\.([a-zA-Z0-9]+)(?:$|\?)/);
  const extension = extensionMatch?.[1] ?? "png";

  return `find-your-bloom-${answerType}-${language}.${extension}`;
}

function triggerImageDownload(imageUrl: string, filename: string) {
  const link = document.createElement("a");

  link.href = imageUrl;
  link.download = filename;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

async function saveResultAsImage() {
  if (!import.meta.client || !result.value || !saveImagePath.value) {
    return;
  }

  const encodedImagePath = encodeURI(saveImagePath.value);
  const filename = createResultImageFilename(
    result.value.id,
    quizLanguage.value,
    encodedImagePath,
  );

  try {
    const response = await fetch(encodedImagePath);

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status}`);
    }

    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);

    triggerImageDownload(objectUrl, filename);

    setTimeout(() => {
      URL.revokeObjectURL(objectUrl);
    }, 0);
  } catch (error) {
    console.error("[Find Your Bloom] Unable to download result image.", error);
    triggerImageDownload(encodedImagePath, filename);
  }
}
</script>

<template>
  <div
    class="flex flex-col min-h-screen page-bg-fixed"
  >
    <!-- Navbar -->
    <div
      class="relative z-50 px-[5vw] md:px-0 scale-[0.85] md:scale-100 origin-top"
    >
      <NavigationBar />
    </div>

    <main class="flex-1 flex flex-col items-center pt-[40vw] sm:pt-[20vw] md:pt-[20vw] lg:pt-[5vw] pb-[8vw] md:pb-[6vw] px-[6vw] sm:px-[5vw]">
      <template v-if="result">
        <!-- Bouquet Image -->
        <div class="mb-[3vw] sm:mb-[2vw] md:mb-[1vw]">
          <img
            :src="result.flowerImage"
            :alt="result.id"
            class="w-[70vw] sm:w-[55vw] md:w-[42vw] lg:w-[36vw] max-w-[993px] h-auto pointer-events-none select-none"
          />
        </div>

        <!-- Tags — อยู่ในรูปแล้ว
        <div class="flex items-center justify-center flex-wrap">
          <template v-for="(tag, i) in result.tags" :key="tag">
            <span class="text-[#472809] font-medium text-[clamp(14px,1.2vw,24px)]">
              {{ tag }}
            </span>
            <span
              v-if="i < result.tags.length - 1"
              aria-hidden="true"
              class="mx-[1.8vw] inline-block h-[20px] w-[2px] bg-[#472809]"
            >
            </span>
          </template>
        </div> -->

        <!-- Description -->
        <div class="max-w-[90vw] sm:max-w-[700px] text-center mt-[40px] sm:mt-[60px] md:mt-[83px] px-2 sm:px-0">
          <p
            class="text-[#2c1a0e] font-kanit leading-[1.8] sm:leading-[2] text-[13px] sm:text-[clamp(13px,1.1vw,22px)]"
          >
            {{ result.description }}
          </p>
        </div>

        <!-- Flowers -->
        <!-- <div class="flex items-center justify-center flex-wrap mb-[3vw]">
          <template v-for="(flower, i) in result.flowers" :key="flower">
            <span class="text-[#472809] font-serif font-medium tracking-[0.15em] uppercase text-[clamp(12px,1vw,18px)]">
              {{ flower }}
            </span>
            <span
              v-if="i < result.flowers.length - 1"
              aria-hidden="true"
              class="mx-[1.5vw] inline-block h-[18px] w-[2px] bg-[#472809]"
            >
            </span>
          </template>
        </div> -->

        <button
          type="button"
          class="inline-flex h-[26px] w-[148px] mt-[71px] cursor-pointer items-center justify-center rounded-full border border-black bg-[#E86686] font-readmore text-xs leading-none text-white hover:brightness-90 active:brightness-75 transition-colors duration-150 sm:h-[36px] sm:w-[172px] sm:text-[1rem] lg:h-[37px] lg:w-[184px] lg:text-lg"
          @click="playAgain"
        >
          {{ resultPageText.playAgain }}
        </button>

        <button
          type="button"
          class="inline-flex h-[26px] w-[148px] mt-[20px] cursor-pointer items-center justify-center gap-1.5 rounded-full border border-black bg-[#E86686] font-readmore text-xs leading-none text-white hover:brightness-90 active:brightness-75 transition-colors duration-150 sm:h-[36px] sm:w-[172px] sm:text-[1rem] lg:h-[37px] lg:w-[184px] lg:text-lg"
          :aria-label="saveImageLabel"
          :title="saveImageLabel"
          @click="saveResultAsImage"
        >
          <span>{{ saveImageLabel }}</span>
          <svg
            class="h-[13px] w-[13px] sm:h-[18px] sm:w-[18px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <rect x="3.5" y="4.5" width="17" height="11" rx="2" />
            <circle cx="8" cy="8.5" r="1" />
            <path d="m6.5 13 2.7-2.7a1 1 0 0 1 1.4 0l2.4 2.4" />
            <path d="m12.5 13 1.7-1.7a1 1 0 0 1 1.4 0l1.9 1.9" />
            <path d="M12 17v3.5" />
            <path d="m9.75 18.75 2.25 2.25 2.25-2.25" />
          </svg>
        </button>
      </template>

      <template v-else>
        <div class="text-center">
          <p
            class="text-[#2c1a0e] font-serif text-[clamp(16px,1.5vw,24px)] mb-4"
          >
            {{ resultPageText.missingResult }}
          </p>

          <button
            type="button"
            class="inline-flex h-[26px] w-[72px] items-center font-readmore justify-center rounded-full border border-black bg-[#E86686] text-xs leading-none text-white hover:brightness-90 active:brightness-75 transition-colors duration-150 sm:h-[36px] sm:w-[104px] sm:text-[1rem] lg:h-[37px] lg:w-[108px] lg:text-lg"
            @click="playAgain"
          >
            {{ resultPageText.restart }}
          </button>
        </div>
      </template>
    </main>

    <!-- Boat footer -->
    <div class="w-full mt-auto md:mt-auto sm:-mt-auto lg:-mt-110">
      <img
        src="/poetry/ท่าเรือ.png"
        class="w-full h-auto object-cover  pointer-events-none"
      />
    </div>
  </div>
</template>

<style scoped>
.page-bg-fixed {
  position: relative;
  background-image: url('/Learnmore/painted-relief-texture (1).jpg');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
}

.page-bg-fixed::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: -1;
  background-image: url('/Learnmore/painted-relief-texture (1).jpg');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  pointer-events: none;
}
</style>
