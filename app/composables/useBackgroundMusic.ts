const QUIZ_BACKGROUND_MUSIC_SRC = "/audio/Khamwan.mp3";

export function useBackgroundMusic() {
  const source = useState<string>("background-music-source", () => QUIZ_BACKGROUND_MUSIC_SRC);
  const isEnabled = useState<boolean>("background-music-enabled", () => false);

  function enableQuizBackgroundMusic() {
    source.value = QUIZ_BACKGROUND_MUSIC_SRC;
    isEnabled.value = true;
  }

  function disableBackgroundMusic() {
    isEnabled.value = false;
  }

  return {
    isEnabled,
    source,
    enableQuizBackgroundMusic,
    disableBackgroundMusic,
  };
}
