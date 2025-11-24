import { PropsWithChildren } from 'react';

import { Screen } from '../Screen';
import { background } from './assets';

export function MainScreen({ children }: PropsWithChildren) {
  return (
    <Screen background={background} label="Main Screen">
      {children}
    </Screen>
  );
}
