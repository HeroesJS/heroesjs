import type {defaultNS, fallbackLng, resources} from './i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)[typeof fallbackLng];
  }
}
