import { Screen } from '@heroesjs/hmm1-core-ui';

import { background } from './assets';
import { AdventureButtons } from '../AdventureButtons';

export function AdventureScreen() {
  return (
    <Screen background={background} label="Adventure Screen">
      <AdventureButtons x={480} y={320} />
    </Screen>
  );
}
