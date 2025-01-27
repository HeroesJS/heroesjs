import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';

import { setupI18n } from './i18n';

const i18n = setupI18n();

export const withI18next = (Story: any) => {
  return (
    // This catches the suspense from components not yet ready (still loading translations)
    // Alternative: set useSuspense to false on i18next.options.react when initializing i18next
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
