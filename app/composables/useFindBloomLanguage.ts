import type { Ref } from "vue";
import { quizLanguages } from "~/data/findBloomQuiz";
import type { QuizLanguage } from "~/data/findBloomQuiz";

const QUIZ_LANGUAGE_STORAGE_KEY = "find-bloom-language";
const DEFAULT_QUIZ_LANGUAGE: QuizLanguage = "th";

function isQuizLanguage(value: string): value is QuizLanguage {
  return quizLanguages.includes(value as QuizLanguage);
}

export function useFindBloomLanguage(): Ref<QuizLanguage> {
  const quizLanguage = useState<QuizLanguage>(
    "find-bloom-language",
    () => DEFAULT_QUIZ_LANGUAGE,
  );

  if (import.meta.client) {
    const storedLanguage = sessionStorage.getItem(QUIZ_LANGUAGE_STORAGE_KEY);
    const normalizedLanguage =
      storedLanguage && isQuizLanguage(storedLanguage)
        ? storedLanguage
        : DEFAULT_QUIZ_LANGUAGE;

    if (quizLanguage.value !== normalizedLanguage) {
      quizLanguage.value = normalizedLanguage;
    }

    if (storedLanguage !== normalizedLanguage) {
      sessionStorage.setItem(QUIZ_LANGUAGE_STORAGE_KEY, normalizedLanguage);
    }

    watch(
      quizLanguage,
      (language) => {
        sessionStorage.setItem(QUIZ_LANGUAGE_STORAGE_KEY, language);
      },
      {
        immediate: true,
        flush: "sync",
      },
    );
  }

  return quizLanguage;
}
