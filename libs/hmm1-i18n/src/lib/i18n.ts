import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {locales as resources} from './locale';

export const fallbackLng = 'en';
export const defaultNS = 'core';

export {resources};

export const setupI18n = () => {
  i18n.use(initReactI18next).init({
    debug: false,
    defaultNS,
    fallbackLng,
    fallbackNS: 'core',
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

  return i18n;
};
