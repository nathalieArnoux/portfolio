import { useTranslation } from "react-i18next";

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

  return (
    <div>
      {languages.map((lng) => {
        return (
          <button
            key={lng.code}
            className="btn"
            onClick={() => changeLanguage(lng.code)}
            aria-label="languages"
          >
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
