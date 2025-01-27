import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { locales } from './locale';

export const setupI18n = () => {
  i18n.use(initReactI18next).init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: locales,
  });

  return i18n;
};
