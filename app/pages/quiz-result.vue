<script setup lang="ts">
import NavigationBar from "~/layouts/NavigationBar.vue";
import { quizResults } from "@/data/quizResultData";
import { answerTypes, findBloomQuiz } from "~/data/findBloomQuiz";
import type { AnswerType } from "~/data/findBloomQuiz";

const answers = useState<Record<string, string>>(
  "find-bloom-answers",
  () => ({}),
);

const finalResultType = useState<AnswerType | null>(
  "find-bloom-result-type",
  () => null,
);

const resultByType = Object.fromEntries(
  quizResults.map((result) => [result.id, result]),
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
</script>

<template>
  <div
    class="flex flex-col min-h-screen"
    style="
      background-image: url(&quot;/Learnmore/painted-relief-texture (1).jpg&quot;);
      background-size: cover;
      background-position: center top;
      background-repeat: no-repeat;
      background-attachment: fixed;
    "
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
            class="text-[#2c1a0e] font-serif leading-[1.8] sm:leading-[2] text-[13px] sm:text-[clamp(13px,1.1vw,22px)]"
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
          class="inline-flex h-[26px] w-[72px] mt-[71px] cursor-pointer items-center font-readmore justify-center rounded-full border border-black bg-[#E86686] text-xs leading-none text-white hover:brightness-90 active:brightness-75 transition-colors duration-150 sm:h-[36px] sm:w-[104px] sm:text-[1rem] lg:h-[37px] lg:w-[108px] lg:text-lg"
          @click="playAgain"
        >
          เล่นใหม่
        </button>
      </template>

      <template v-else>
        <div class="text-center">
          <p
            class="text-[#2c1a0e] font-serif text-[clamp(16px,1.5vw,24px)] mb-4"
          >
            ไม่พบผลลัพธ์ของแบบทดสอบ
          </p>

          <button
            type="button"
            class="inline-flex h-[26px] w-[72px] items-center font-readmore justify-center rounded-full border border-black bg-[#E86686] text-xs leading-none text-white hover:brightness-90 active:brightness-75 transition-colors duration-150 sm:h-[36px] sm:w-[104px] sm:text-[1rem] lg:h-[37px] lg:w-[108px] lg:text-lg"
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
        class="w-full h-auto object-cover  pointer-events-none"
      />
    </div>
  </div>
</template>
