import styled from 'styled-components';

import { Button, PositionedComponent, type PositionProps } from '@heroesjs/hmm1-base-ui';

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
  <Root aria-label="Adventure Options Window" role="dialog" x={x} y={y}>
    <Button assets={viewWorld} label="View World" onClick={onViewWorldClick} x={46} y={31} />
    <Button assets={viewPuzzle} label="View Puzzle" onClick={onViewPuzzleClick} x={179} y={31} />
    <Button assets={castSpell} label="Cast Spell" onClick={onCastSpellClick} x={46} y={107} />
    <Button assets={dig} label="Dig" onClick={onDigClick} x={179} y={107} />
    <Button assets={okay} label="Okay" onClick={onConfirmClick} x={112} y={184} />
  </Root>
);

const Root = styled(PositionedComponent)({
  background: `url(${background})`,
  boxShadow: '17px 16px rgba(0 0 0 / 30%), 1px 0 #000',
  height: 236,
  width: 322,
});
