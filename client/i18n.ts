import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import zh from "./locales/zh.json";

// Get saved language from localStorage or default to Chinese
const savedLanguage = localStorage.getItem("language") || "zh";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
    },
    lng: savedLanguage, // Default language is Chinese
    fallbackLng: "zh",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
