import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(initReactI18next)
  // loads translations from files
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(Backend)
  // init i18next
  .init({
    load: "languageOnly",
    backend: {
      //! may have to change that for deployment
      loadPath: "/portfolio/locales/{{lng}}/{{ns}}.json",
    },
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    returnObjects: true,
  });

export default i18n;
