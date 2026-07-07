import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';

// Adding a language later = add its JSON import + one entry here + register it in `resources` below.
export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English' },
];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
    },
    fallbackLng: 'en',
    // Collapse region codes (e.g. en-US) to their base code (en) for detection/resolution,
    // so i18n.language always matches a SUPPORTED_LANGUAGES entry.
    load: 'languageOnly',
    interpolation: {
      escapeValue: false, // React already escapes output.
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
