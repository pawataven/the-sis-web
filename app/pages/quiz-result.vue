<script setup lang="ts">
import NavigationBar from "~/layouts/NavigationBar.vue";
import { quizResults } from "@/data/quizResultData";
import {
  answerTypes,
  findBloomQuiz,
} from "~/data/findBloomQuiz";
import type { AnswerType } from "~/data/findBloomQuiz";

const answers = useState<Record<string, string>>(
  "find-bloom-answers",
  () => ({})
);

const finalResultType = useState<AnswerType | null>(
  "find-bloom-result-type",
  () => null
);

const resultByType = Object.fromEntries(
  quizResults.map((result) => [result.id, result])
) as Record<AnswerType, (typeof quizResults)[number]>;

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

  return resultByType[finalResultType.value] ?? null;
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

  for (const step of findBloomQuiz) {
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
    }))
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
  }
);

async function playAgain() {
  answers.value = {};
  finalResultType.value = null;

  await navigateTo({
    path: "/find-your-bloom",
    query: { step: "0" },
  });
}
</script>

<template>
  <div
    class="flex flex-col min-h-screen"
    style="
      background-image: url('/Learnmore/painted-relief-texture (1).jpg');
      background-size: cover;
      background-position: center top;
      background-repeat: no-repeat;
      background-attachment: fixed;
    "
  >
    <!-- Navbar -->
    <div class="relative z-50 px-[5vw] md:px-0 scale-[0.85] md:scale-100 origin-top">
      <NavigationBar />
    </div>

    <main class="flex-1 flex flex-col items-center py-[6vw] px-[5vw]">
      <template v-if="result">
        <!-- Label -->
        <p
          lang="en"
          class="text-[#2c1a0e] tracking-[0.25em] text-[clamp(11px,1vw,14px)] uppercase mb-3"
        >
          {{ result.label }}
        </p>

        <!-- Title -->
        <h1
          lang="en"
          class="text-[#2c1a0e] italic font-serif text-center leading-tight mb-[3vw]"
          style="font-size: clamp(32px, 5.5vw, 80px)"
        >
          {{ result.bouquetTitle }}
        </h1>

        <!-- Bouquet Image -->
        <div class="mb-[3vw]">
          <img
            :src="result.flowerImage"
            :alt="result.bouquetTitle"
            class="h-auto pointer-events-none select-none"
            style="width: clamp(260px, 42vw, 993px)"
          />
        </div>

        <!-- Tags -->
        <div class="flex items-center gap-4 mb-[3vw]">
          <template v-for="(tag, i) in result.tags" :key="tag">
            <span class="text-[#2c1a0e] text-[clamp(13px,1.2vw,18px)] font-serif">
              {{ tag }}
            </span>
            <span
              v-if="i < result.tags.length - 1"
              class="text-[#2c1a0e] opacity-40 text-[18px]"
            >|</span>
          </template>
        </div>

        <!-- Description -->
        <div class="max-w-[700px] text-center mb-[3vw]">
          <p
            class="text-[#2c1a0e] font-serif leading-[2] text-[clamp(13px,1.1vw,16px)]"
          >
            {{ result.description }}
          </p>
        </div>

        <button
          type="button"
          class="bg-[#E76A87] text-white px-10 py-2 rounded-full border border-[#000000] cursor-pointer text-[clamp(14px,1.2vw,18px)] shadow-md hover:scale-105 transition-transform"
          @click="playAgain"
        >
          เล่นใหม่
        </button>
      </template>

      <template v-else>
        <div class="text-center">
          <p class="text-[#2c1a0e] font-serif text-[clamp(16px,1.5vw,24px)] mb-4">
            ไม่พบผลลัพธ์ของแบบทดสอบ
          </p>

          <button
            type="button"
            class="bg-[#E76A87] text-white px-10 py-2 rounded-full border border-[#000000] cursor-pointer text-[clamp(14px,1.2vw,18px)] shadow-md hover:scale-105 transition-transform"
            @click="playAgain"
          >
            กลับไปทำแบบทดสอบ
          </button>
        </div>
      </template>
    </main>

    <!-- Boat footer -->
    <div class="w-full mt-auto">
      <img
        src="/poetry/ท่าเรือ.png"
        class="w-full h-auto object-cover pointer-events-none"
      />
    </div>
  </div>
</template>
