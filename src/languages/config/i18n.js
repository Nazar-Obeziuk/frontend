import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ua from "../ua/translation.json";
import en from "../en/translation.json";

i18n.use(initReactI18next).init({
  debug: false,
  fallbackLng: "ua",
  lng: "ua",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ua: {
      translation: ua,
    },
    en: {
      translation: en,
    },
  },
});

export default i18n;
