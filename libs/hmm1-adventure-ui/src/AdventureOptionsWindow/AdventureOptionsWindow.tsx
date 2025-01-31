import { Button, type PositionProps, Window } from '@heroesjs/hmm1-base-ui';

import { background, castSpell, dig, okay, viewPuzzle, viewWorld } from './assets';

interface Props extends PositionProps {
  readonly onCastSpellClick?: () => void;
  readonly onConfirmClick?: () => void;
  readonly onDigClick?: () => void;
  readonly onViewPuzzleClick?: () => void;
  readonly onViewWorldClick?: () => void;
}

export const AdventureOptionsWindow = ({
  onCastSpellClick,
  onConfirmClick,
  onDigClick,
  onViewPuzzleClick,
  onViewWorldClick,
  x,
  y,
}: Props) => (
  <Window background={background} height={236} label="Adventure Options Window" shadow width={322} x={x} y={y}>
    <Button assets={viewWorld} label="View World" onClick={onViewWorldClick} x={46} y={31} />
    <Button assets={viewPuzzle} label="View Puzzle" onClick={onViewPuzzleClick} x={179} y={31} />
    <Button assets={castSpell} label="Cast Spell" onClick={onCastSpellClick} x={46} y={107} />
    <Button assets={dig} label="Dig" onClick={onDigClick} x={179} y={107} />
    <Button assets={okay} label="Okay" onClick={onConfirmClick} x={112} y={184} />
  </Window>
);
