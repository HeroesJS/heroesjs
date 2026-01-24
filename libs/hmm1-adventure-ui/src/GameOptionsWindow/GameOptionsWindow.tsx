import { Window } from '@heroesjs/hmm1-core-ui';

import { background } from './assets';

interface GameOptionsWindowProps {
  readonly open: boolean;
  readonly x?: number;
  readonly y?: number;
}

export function GameOptionsWindow({ x, y }: GameOptionsWindowProps) {
  return (
    <Window background={background} label="Game Options Window" height={459} open width={322} x={x} y={y}></Window>
  );
}
