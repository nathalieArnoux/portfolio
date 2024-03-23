import { useTranslation } from "react-i18next";
import frenchAudio from "/assets/french.mp3";
import englishAudio from "/assets/english.mp3";

const LanguageSelector = () => {
  // array of available languages
  const languages = [
    { code: "en", lang: "English" },
    { code: "fr", lang: "French" },
  ];
  // instance i18n
  const { i18n } = useTranslation();

  // change language based on parameter
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const frenchSound = new Audio(frenchAudio);
  const englishSound = new Audio(englishAudio);
  frenchSound.volume = 0.2;
  englishSound.volume = 0.2;

  const playLngSound = (lng) => {
    switch (lng) {
      case "en":
        englishSound.play();
        break;
      case "fr":
        frenchSound.play();
        break;
      default:
        break;
    }
  };

  const handleLanguageChange = (lng) => {
    changeLanguage(lng);
    playLngSound(lng);
  };

  return (
    <>
      {languages.map((lng) => {
        return (
          <li key={lng.code}>
            <button
              className={
                lng.code === i18n.language
                  ? "btn btn-ghost text-accent hover:scale-105 hover:bg-neutral"
                  : "btn btn-ghost hover:scale-105 hover:bg-neutral"
              }
              onClick={() => handleLanguageChange(lng.code)}
              aria-label="languages"
            >
              {lng.lang}
            </button>
          </li>
        );
      })}
    </>
  );
};

export default LanguageSelector;
