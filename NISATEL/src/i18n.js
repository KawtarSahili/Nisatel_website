import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      fr: { translation: translationFR },
    },
    fallbackLng: "fr",
    supportedLngs: ["en", "fr"], // ✅ Force les seules langues supportées
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "lang", // ✅ Précise le nom de la clé à lire dans localStorage
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
