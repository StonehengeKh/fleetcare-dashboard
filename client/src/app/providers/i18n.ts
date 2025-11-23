import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@locales/en/translation.json";
import de from "@locales/de/translation.json";
import uk from "@locales/uk/translation.json";

const FALLBACK_LANG = "en";

const savedLang =
  typeof window !== "undefined" ? localStorage.getItem("lang") : null;

const initialLang =
  savedLang?.split("-")[0] && ["en", "de", "uk"].includes(savedLang.split("-")[0]!)
    ? savedLang.split("-")[0]
    : FALLBACK_LANG;

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
    uk: { translation: uk },
  },
  lng: initialLang,
  fallbackLng: FALLBACK_LANG,
  supportedLngs: ["en", "de", "uk"],
  nonExplicitSupportedLngs: true,
  interpolation: { escapeValue: false },
});

export default i18next;
