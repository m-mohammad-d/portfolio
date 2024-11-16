import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./i18next/en.json";
import translationFA from "./i18next/fa.json";

const resources = {
  en: {
    translation: translationEN,
  },
  fa: {
    translation: translationFA,
  },
};

// تغییر زبان و direction
const updateDirection = (lng: string) => {
  const htmlTag = document.documentElement;
  if (lng === "fa") {
    htmlTag.setAttribute("dir", "rtl");
  } else {
    htmlTag.setAttribute("dir", "ltr");
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  updateDirection(lng);
});

updateDirection(i18n.language);

export default i18n;
