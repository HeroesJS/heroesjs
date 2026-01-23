import type { PropsWithChildren } from 'react';

import { Screen } from '@heroesjs/hmm1-core-ui';

import { background } from './assets';

export function AdventureScreen({ children }: PropsWithChildren) {
  return (
    <Screen background={background} label="Adventure Screen">
      {children}
    </Screen>
  );
}
