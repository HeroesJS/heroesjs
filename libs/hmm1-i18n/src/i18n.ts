import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './en';

i18n.use(initReactI18next).init({
  debug: true,
  defaultNS: 'translation',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
  load: 'languageOnly',
  ns: ['main'],
  resources: {
    en,
  },
});

export { i18n };
