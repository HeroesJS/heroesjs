import { AdventureButtons, AdventureScreen as Screen } from '@heroesjs/hmm1-adventure-ui';

export function AdventureScreen() {
  return (
    <Screen>
      <AdventureButtons x={480} y={320} />
    </Screen>
  );
}
