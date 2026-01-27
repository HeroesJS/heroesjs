import { Window } from '@heroesjs/hmm1-core-ui';

import { background } from './assets';

interface AdventureOptionsWindowProps {
  readonly open: boolean;
  readonly x?: number;
  readonly y?: number;
}

export function AdventureOptionsWindow({ open, x, y }: AdventureOptionsWindowProps) {
  return (
    <Window background={background} height={236} label="Adventure Options Window" open={open} width={322} x={x} y={y} />
  );
}
