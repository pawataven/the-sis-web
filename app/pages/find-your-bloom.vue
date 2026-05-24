<script setup lang="ts">
import NavigationBar from "~/layouts/NavigationBar.vue";
import {
  answerTypes,
  findBloomQuiz,
} from "~/data/findBloomQuiz";
import type { AnswerType } from "~/data/findBloomQuiz";

const route = useRoute();

const answers = useState<Record<string, string>>(
  "find-bloom-answers",
  () => ({})
);

const finalResultType = useState<AnswerType | null>(
  "find-bloom-result-type",
  () => null
);

function parseStepIndex(step: unknown) {
  const rawStep = Array.isArray(step) ? step[0] : step;

  if (typeof rawStep !== "string" || rawStep.trim() === "") {
    return 0;
  }

  const parsedStep = Number(rawStep);

  if (
    !Number.isInteger(parsedStep) ||
    parsedStep < 0 ||
    parsedStep >= findBloomQuiz.length
  ) {
    return 0;
  }

  return parsedStep;
}

const currentIndex = computed(() => {
  return parseStepIndex(route.query.step);
});

const currentStep = computed(() => {
  return findBloomQuiz[currentIndex.value];
});

async function goToStep(index: number) {
  const nextIndex =
    index >= 0 && index < findBloomQuiz.length ? index : 0;

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

  if (currentIndex.value < findBloomQuiz.length - 1) {
    await goToStep(currentIndex.value + 1);
    return;
  }

  finalResultType.value = resultType.value;

  await navigateTo("/quiz-result");
}
</script>

<template>
  <div
    class="min-h-screen flex flex-col"
    style="
      background-image: url('/Learnmore/painted-relief-texture (1).jpg');
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

    <!-- Main content -->
    <main class="flex-1 flex flex-col items-center">
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
        <div class="text-center px-[5vw] max-w-[600px] mt-[57px] mb-[3vw]">
          <p
            v-for="text in currentStep.content"
            :key="text"
            class="text-[#472809] font-serif text-[clamp(16px,2vw,28px)] mb-[1.5vw]"
          >
            {{ text }}
          </p>

          <button
            type="button"
            class="bg-[#E76A87] text-white font-readmore px-10 py-2 mt-[19px] rounded-full border border-[#000000] cursor-pointer text-[clamp(14px,1.2vw,18px)] shadow-md hover:scale-105 transition-transform mb-[2vw]"
            @click="next"
          >
            {{ currentStep.buttonLabel }}
          </button>

          <p
            v-if="currentStep.description"
            class="text-[#4728097A] mt-[51px] font-serif text-[clamp(12px,1.1vw,16px)] leading-relaxed"
          >
            {{ currentStep.description }}
          </p>
        </div>
      </template>

      <!-- Page Story -->
      <template v-else-if="currentStep?.type === 'story'">
        <div
          class="flex-1 flex flex-col items-center justify-center text-center pt-[2vw] px-[5vw] max-w-[900px]"
        >
          <div class="mb-[12vw]">
            <p
              v-for="text in currentStep.content"
              :key="text"
              class="text-[#472809] font-serif font-medium text-[clamp(16px,1.6vw,24px)] leading-relaxed"
            >
              {{ text }}
            </p>
          </div>

          <button
            type="button"
            class="bg-[#E76A87] text-white font-readmore px-10 py-2 rounded-full border border-[#000000] cursor-pointer text-[clamp(14px,1.2vw,18px)] shadow-md hover:scale-105 transition-transform mb-[2vw]"
            @click="next"
          >
            {{ currentStep.buttonLabel }}
          </button>
        </div>
      </template>

      <!-- Question -->
      <template v-else-if="currentStep?.type === 'question'">
        <div
          class="flex-1 flex flex-col items-center justify-center text-center px-[5vw] max-w-[900px]"
        >
          <div
            v-if="currentStep.content?.length"
            class="mb-[2vw]"
          >
            <p
              v-for="text in currentStep.content"
              :key="text"
              class="text-[#472809] font-serif font-medium text-[clamp(15px,1.4vw,24px)] leading-relaxed"
            >
              {{ text }}
            </p>
          </div>

          <div
            v-if="currentStep.poemRows?.length"
            class="mb-[3vw] w-full max-w-[760px]"
          >
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-x-[5vw] gap-y-[0.6vw]"
            >
              <template
                v-for="(row, index) in currentStep.poemRows"
                :key="index"
              >
                <p
                  class="text-[#472809] font-serif font-medium italic text-[clamp(16px,1.6vw,26px)] leading-relaxed text-center md:text-left md:whitespace-nowrap"
                >
                  {{ row.left }}
                </p>

                <p
                  class="text-[#472809] font-serif font-medium italic text-[clamp(16px,1.6vw,26px)] leading-relaxed text-center md:text-left md:whitespace-nowrap"
                >
                  {{ row.right }}
                </p>
              </template>
            </div>
          </div>

          <h2
            class="text-[#472809] font-serif font-medium text-[clamp(16px,1.5vw,24px)] leading-relaxed mb-[2vw]"
          >
            {{ currentStep.question }}
          </h2>
          <div class="w-full max-w-[600px] flex flex-col gap-3 mb-[2vw]">
            <button
              v-for="choice in currentStep.choices"
              :key="choice.id"
              type="button"
              class="w-full bg-white text-[#472809] px-6 py-2 rounded-full border border-[#472809] cursor-pointer font-serif text-[clamp(14px,1.2vw,18px)] hover:scale-[1.02] transition-transform"
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
            type="button"
            class="bg-[#E76A87] text-white px-10 py-2 font-readmore rounded-full border border-[#000000] cursor-pointer text-[clamp(14px,1.2vw,18px)] shadow-md hover:scale-105 transition-transform mb-[2vw] disabled:opacity-50 disabled:cursor-not-allowed"
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
