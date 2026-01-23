import { Screen } from '@heroesjs/hmm1-core-ui';

import { AdventureButtons } from '../AdventureButtons';
import { background } from './assets';

export function AdventureScreen() {
  return (
    <Screen background={background} label="Adventure Screen">
      <AdventureButtons x={480} y={320} />
    </Screen>
  );
}
