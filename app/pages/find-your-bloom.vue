<script setup lang="ts">
import NavigationBar from "~/layouts/NavigationBar.vue";
import {
  answerTypes,
  findBloomQuizByLanguage,
} from "~/data/findBloomQuiz";
import type { AnswerType, QuizLanguage } from "~/data/findBloomQuiz";

const route = useRoute();
const {
  isEnabled: isBackgroundMusicEnabled,
  enableQuizBackgroundMusic,
  disableBackgroundMusic,
} = useBackgroundMusic();

const answers = useState<Record<string, string>>(
  "find-bloom-answers",
  () => ({})
);

const finalResultType = useState<AnswerType | null>(
  "find-bloom-result-type",
  () => null
);

const quizLanguage = useState<QuizLanguage>(
  "find-bloom-language",
  () => "th"
);

const quizLanguageOptions: { value: QuizLanguage; label: string }[] = [
  { value: "th", label: "ไทย" },
  { value: "en", label: "EN" },
];

const activeQuiz = computed(() => {
  return findBloomQuizByLanguage[quizLanguage.value];
});

const musicToggleLabel = computed(() => {
  if (quizLanguage.value === "en") {
    return isBackgroundMusicEnabled.value
      ? "Turn music off"
      : "Turn music on";
  }

  return isBackgroundMusicEnabled.value ? "ปิดเพลง" : "เปิดเพลง";
});

const quizButtonClass =
  "flower-card-mobile-button bg-[#E76A87] text-white font-readmore cursor-pointer border border-black rounded-full shadow-md hover:brightness-90 active:brightness-75 transition-colors duration-150";

function parseStepIndex(step: unknown) {
  const rawStep = Array.isArray(step) ? step[0] : step;

  if (typeof rawStep !== "string" || rawStep.trim() === "") {
    return 0;
  }

  const parsedStep = Number(rawStep);

  if (
    !Number.isInteger(parsedStep) ||
    parsedStep < 0 ||
    parsedStep >= activeQuiz.value.length
  ) {
    return 0;
  }

  return parsedStep;
}

const currentIndex = computed(() => {
  return parseStepIndex(route.query.step);
});

const currentStep = computed(() => {
  return activeQuiz.value[currentIndex.value];
});

async function goToStep(index: number) {
  const nextIndex =
    index >= 0 && index < activeQuiz.value.length ? index : 0;

  await navigateTo({
    path: "/find-your-bloom",
    query: { step: String(nextIndex) },
  });
}

watchEffect(() => {
  const rawStep = Array.isArray(route.query.step)
    ? route.query.step[0]
    : route.query.step;
  const normalizedStep = parseStepIndex(route.query.step);
  const normalizedRawStep = String(normalizedStep);

  if (rawStep !== normalizedRawStep) {
    navigateTo(
      {
        path: "/find-your-bloom",
        query: { step: normalizedRawStep },
      },
      { replace: true }
    );
  }
});

function setQuizLanguage(language: QuizLanguage) {
  if (quizLanguage.value === language) {
    return;
  }

  quizLanguage.value = language;
  answers.value = {};
  finalResultType.value = null;
}

function toggleBackgroundMusic() {
  if (isBackgroundMusicEnabled.value) {
    disableBackgroundMusic();
    return;
  }

  enableQuizBackgroundMusic();
}

const selectedChoiceId = computed(() => {
  const step = currentStep.value;

  if (!step || step.type !== "question") {
    return "";
  }

  return answers.value[step.id] ?? "";
});

const canNext = computed(() => {
  const step = currentStep.value;

  if (!step) {
    return false;
  }

  if (step.type !== "question") {
    return true;
  }

  return Boolean(answers.value[step.id]);
});

function selectChoice(choiceId: string) {
  const step = currentStep.value;

  if (!step || step.type !== "question") {
    return;
  }

  answers.value = {
    ...answers.value,
    [step.id]: choiceId,
  };
}

function formatTextWithBreaks(text: string) {
  return text.replace(/<br\s*\/?>/gi, "\n");
}

function createEmptyTypeCount(): Record<AnswerType, number> {
  return {
    love: 0,
    warning: 0,
    sadness: 0,
    family: 0,
  };
}

const typeCount = computed(() => {
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

const resultType = computed<AnswerType>(() => {
  return answerTypes.reduce((bestType, currentType) => {
    return typeCount.value[currentType] > typeCount.value[bestType]
      ? currentType
      : bestType;
  }, answerTypes[0]);
});

async function next() {
  if (!canNext.value) {
    return;
  }

  if (currentIndex.value < activeQuiz.value.length - 1) {
    await goToStep(currentIndex.value + 1);
    return;
  }

  finalResultType.value = resultType.value;

  await navigateTo("/quiz-result");
}
</script>

<template>
  <div
    class="min-h-screen flex flex-col page-bg-fixed"
  >
    <!-- Navbar -->
    <div
      class="relative z-50 px-[5vw] md:px-0 scale-[0.85] md:scale-100 origin-top"
    >
      <NavigationBar />
    </div>

    <!-- Main content -->
    <main class="flex-1 flex flex-col items-center pt-[40vw] sm:pt-[20vw] md:pt-[20vw] lg:pt-[5vw] pb-[8vw] md:pb-[6vw] px-[6vw] sm:px-[5vw]">
      <!-- Page Start -->
      <template v-if="currentStep?.type === 'start'">
        <!-- Title + vase section -->
        <div class="flex justify-center py-[2vw]">
          <div class="relative">
            <img
              src="/bloom/Find-your-Bloom.png"
              alt="Find your Bloom"
              class="h-auto select-none"
              style="width: clamp(200px, 35vw, 520px)"
            />
          </div>
        </div>

        <!-- Scene / main image -->
        <div class="mb-[2vw]">
          <img
            src="/bloom/bloom-bg.png"
            alt="scene"
            class="h-auto"
            style="width: clamp(300px, 59vw, 856px)"
          />
        </div>

        <!-- Welcome text + Start button -->
        <div class="text-center px-[6vw] max-w-[680px] mt-[57px] mb-[3vw]">
          <p
            v-for="text in currentStep.content"
            :key="text"
            class="text-[#472809] font-kanit text-[clamp(16px,2vw,28px)] whitespace-pre-line mb-[1.5vw]"
          >
            {{ formatTextWithBreaks(text) }}
          </p>

          <div class="mt-[18px] flex justify-center">
            <div
              class="inline-flex h-[30px] items-center gap-0.5 rounded-full border border-[#B99781] bg-white/70 pl-1 pr-0 shadow-none backdrop-blur-sm sm:h-[42px] sm:gap-2 sm:bg-white/80 sm:pl-2 sm:shadow-sm"
              aria-label="Choose quiz language"
            >
              <span
                class="flex h-[18px] w-[18px] items-center justify-center rounded-full text-[#6B4A34] sm:h-[28px] sm:w-[28px]"
                aria-hidden="true"
              >
                <svg
                  class="h-[12px] w-[12px] sm:h-[17px] sm:w-[17px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 0 20" />
                  <path d="M12 2a15.3 15.3 0 0 0 0 20" />
                </svg>
              </span>

              <div class="flex rounded-full bg-[#F7EFEA] p-[1px] sm:p-[2px]">
                <button
                  v-for="option in quizLanguageOptions"
                  :key="option.value"
                  type="button"
                  class="h-[19px] min-w-[30px] rounded-full px-1.5 font-readmore text-[9px] leading-none transition-colors duration-150 sm:h-[26px] sm:min-w-[46px] sm:px-3 sm:text-[12px]"
                  :class="
                    quizLanguage === option.value
                      ? 'bg-[#E86686] text-white shadow-sm'
                      : 'text-[#6B4A34] hover:bg-white/80'
                  "
                  :aria-pressed="quizLanguage === option.value"
                  @click="setQuizLanguage(option.value)"
                >
                  {{ option.label }}
                </button>
              </div>

              <button
                type="button"
                class="relative flex h-[28px] w-[28px] items-center justify-center rounded-full border border-[#D8BCAF] bg-white text-[#6B4A34] shadow-sm transition-colors duration-150 hover:bg-[#FFF6F7] active:scale-95 sm:h-[40px] sm:w-[40px]"
                :class="{
                  'border-[#E86686] bg-[#FFE8EE] text-[#E86686]':
                    isBackgroundMusicEnabled,
                }"
                :aria-label="musicToggleLabel"
                :aria-pressed="isBackgroundMusicEnabled"
                :title="musicToggleLabel"
                @click="toggleBackgroundMusic"
              >
                <svg
                  class="h-[13px] w-[13px] sm:h-[18px] sm:w-[18px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>

                <span
                  v-if="!isBackgroundMusicEnabled"
                  class="absolute h-[17px] w-[1.5px] rotate-45 rounded-full bg-[#6B4A34] sm:h-[24px] sm:w-[2px]"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          <button
          class="inline-flex h-[26px] w-[72px] mt-[20px] items-center font-readmore justify-center rounded-full border border-black bg-[#E86686] text-xs leading-none text-white hover:brightness-90 active:brightness-75 transition-colors duration-150 sm:h-[36px] sm:w-[104px] sm:text-[1rem] lg:h-[37px] lg:w-[108px] lg:text-lg"
            type="button"
            :class="quizButtonClass"
            @click="next"
          >
            {{ currentStep.buttonLabel }}
          </button>

          <p
            v-if="currentStep.description"
            class="text-[#4728097A] mt-[51px] font-kanit mx-auto w-full px-0 font-serif text-[clamp(16px,1.1vw,20px)] leading-relaxed"
          >
            {{ currentStep.description }}
          </p>
        </div>
      </template>

      <!-- Page Story -->
      <template v-else-if="currentStep?.type === 'story'">
        <div
          class="flex-1 flex flex-col items-center justify-center text-center px-[1vw] max-w-[1040px]"
        >
          <div class="mb-[2vw]">
            <p
              v-for="text in currentStep.content"
              :key="text"
              class="text-[#472809] font-kanit font-medium text-[clamp(16px,1.6vw,24px)] leading-relaxed whitespace-pre-line"
            >
              {{ formatTextWithBreaks(text) }}
            </p>
          </div>

          <div class="mb-[2vw]">
            <p
              v-for="text in currentStep.contenttwo"
              :key="text"
              class="text-[#472809] mt-[1vw] font-kanit font-medium text-[clamp(16px,1.6vw,24px)] leading-relaxed whitespace-pre-line"
            >
              {{ formatTextWithBreaks(text) }}
            </p>
          </div>

          <div
            v-if="currentStep.imageSrc"
            class="mb-[2vw]"
          >
            <img
              :src="currentStep.imageSrc"
              :alt="currentStep.imageAlt ?? 'scene'"
              class="h-auto"
              style="width: clamp(300px, 59vw, 856px)"
            />
          </div>

          <button
          class="inline-flex h-[26px] w-[72px] mt-[30px] items-center font-readmore justify-center rounded-full border border-black bg-[#E86686] text-xs leading-none text-white hover:brightness-90 active:brightness-75 transition-colors duration-150 sm:h-[36px] sm:w-[104px] sm:text-[1rem] lg:h-[37px] lg:w-[108px] lg:text-lg"
            type="button"
            :class="quizButtonClass"
            @click="next"
          >
            {{ currentStep.buttonLabel }}
          </button>
        </div>
      </template>

      <!-- Question -->
      <template v-else-if="currentStep?.type === 'question'">
        <div
          class="flex-1 flex flex-col items-center  justify-center text-center px-[1vw] max-w-[1040px]"
        >
          <div
            v-if="currentStep.content?.length"
            class="mb-[2vw]"
          >
            <p
              v-for="text in currentStep.content"
              :key="text"
              class="text-[#472809] font-kanit font-medium text-[clamp(15px,1.4vw,24px)] leading-relaxed whitespace-pre-line"
            >
              {{ formatTextWithBreaks(text) }}
            </p>
          </div>

          <div
            v-if="currentStep.poemRows?.length"
            class="mb-[3vw] w-full max-w-[760px]"
          >
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-x-[5vw] gap-y-[0.6vw] "
            >
              <template
                v-for="(row, index) in currentStep.poemRows"
                :key="index"
              >
                <p
                  class="text-[#472809] font-kanit font-medium italic text-[clamp(16px,1.6vw,26px)] leading-relaxed text-center md:text-left md:whitespace-nowrap"
                >
                  {{ row.left }}
                </p>

                <p
                  class="text-[#472809] font-kanit font-medium italic text-[clamp(16px,1.6vw,26px)] leading-relaxed text-center md:text-left md:whitespace-nowrap"
                >
                  {{ row.right }}
                </p>
              </template>
            </div>
          </div>

          <h2
            class="w-full text-[#472809] font-kanit font-medium text-[clamp(16px,1.5vw,24px)] leading-relaxed whitespace-pre-line mb-[73px]"
          >
            {{ formatTextWithBreaks(currentStep.question) }}
          </h2>
          <div class="w-full max-w-[600px] flex flex-col gap-3 mb-[73px]">
            <button
              v-for="choice in currentStep.choices"
              :key="choice.id"
              type="button"
              class="w-full bg-white text-[#472809] font-kanit px-5 py-1.5 rounded-full border border-[#472809] cursor-pointer text-[clamp(13px,1.05vw,16px)] lg:text-[18px] hover:scale-[1.02] transition-transform"
              :style="{
                backgroundColor:
                  selectedChoiceId === choice.id ? '#E86686' : '#FFFFFF',
                color: selectedChoiceId === choice.id ? '#FFFFFF' : '#472809',
              }"
              @click="selectChoice(choice.id)"
            >
              {{ choice.label }}
            </button>
          </div>

          <button
          class="inline-flex h-[26px] w-[72px] items-center font-readmore justify-center rounded-full border border-black bg-[#E86686] text-xs leading-none text-white hover:brightness-90 active:brightness-75 transition-colors duration-150 sm:h-[36px] sm:w-[104px] sm:text-[1rem] lg:h-[37px] lg:w-[108px] lg:text-lg"
            type="button"
            :class="quizButtonClass"
            :disabled="!canNext"
            @click="next"
          >
            {{ currentStep.buttonLabel }}
          </button>
        </div>
      </template>
    </main>

    <!-- Bottom dock image -->
    <div class="w-full mt-auto">
      <img
        src="/poetry/ท่าเรือ.png"
        class="w-full h-auto -mt-[30%] object-cover pointer-events-none"
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

.find-bloom-button {
  min-width: clamp(74px, 30cqw, 112px);
  min-height: clamp(28px, 10cqw, 40px);
  padding-inline: clamp(10px, 4cqw, 18px);
  font-size: clamp(11px, 4.2cqw, 18px);
  line-height: 1.2;
}
</style>
