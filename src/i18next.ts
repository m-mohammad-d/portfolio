
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./i18next/en.json";
import translationFA from "./i18next/fa.json";
import translationES from "./i18next/es.json";
import translationCN from "./i18next/CN.json";


const resources = {
  en: {
    translation: translationEN,
  },
  fa: {
    translation: translationFA,
  },
  ES: {
    translation: translationES,
  },
  CN: {
    translation: translationCN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
