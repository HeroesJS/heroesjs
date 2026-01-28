import type { PropsWithChildren } from 'react';

import { Screen } from '@heroesjs/hmm1-core-ui';

import { background } from './assets';

interface MainScreenProps {
  readonly label?: string;
}

export function MainScreen({ children, label = 'Main Screen' }: PropsWithChildren<MainScreenProps>) {
  return (
    <Screen background={background} label={label}>
      {children}
    </Screen>
  );
}
