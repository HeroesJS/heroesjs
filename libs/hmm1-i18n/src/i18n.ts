import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './en';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'app';
    enableSelector: 'optimize';
    resources: typeof en;
  }
}

i18n.use(initReactI18next).init({
  debug: true,
  defaultNS: 'app',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
  load: 'languageOnly',
  resources: {
    en,
  },
});

export { i18n };
