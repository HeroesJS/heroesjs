import { Window } from '@heroesjs/hmm1-core-ui';

import { background } from './assets';

interface ScenarioInfoWindowProps {
  readonly open: boolean;
  readonly x?: number;
  readonly y?: number;
}

export function ScenarioInfoWindow({ open, x, y }: ScenarioInfoWindowProps) {
  return <Window background={background} height={459} label="Scenario Info" open={open} width={322} x={x} y={y} />;
}
