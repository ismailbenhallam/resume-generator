import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { default as Backend, default as HttpApi } from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: [
        "querystring",
        "navigator",
        "localStorage",
        "htmlTag",
        "path",
        "subdomain",
      ],
      lookupQuerystring: "lang",
      caches: ["localStorage"],
      react: {
        bindI18n: "languageChanged",
      },
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    //TODO: remove
    debug: true,
  });

export default i18n;
