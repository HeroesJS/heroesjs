import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

import { Screen } from '@heroesjs/hmm1-core-ui';

import { background } from './assets';

interface MainScreenProps {
  readonly label?: string;
}

export function MainScreen({ children, label }: PropsWithChildren<MainScreenProps>) {
  const { t } = useTranslation('main', { keyPrefix: 'component.mainScreen' });

  return (
    <Screen background={background} label={label || t(($) => $.title)}>
      {children}
    </Screen>
  );
}
