import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

import { Screen } from '@heroesjs/hmm1-core-ui';

import { background } from './assets';

export function AdventureScreen({ children }: PropsWithChildren) {
  const { t } = useTranslation('adventure', { keyPrefix: 'component.adventureScreen' });

  return (
    <Screen background={background} label={t(($) => $.title)}>
      {children}
    </Screen>
  );
}
