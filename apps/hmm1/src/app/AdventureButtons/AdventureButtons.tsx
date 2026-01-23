import styled from 'styled-components';

import { Button, PositionedComponent } from '@heroesjs/hmm1-core-ui';

import { adventureOptions, endTurn, gameOptions, kingdomOverview, move, nextHero } from './assets';

interface AdventureButtonsProps {
  readonly moveDisabled?: boolean;
  readonly nextHeroDisabled?: boolean;
  readonly onAdventureOptionsClick?: () => void;
  readonly onEndTurnClick?: () => void;
  readonly onGameOptionsClick?: () => void;
  readonly onKingdomOverview?: () => void;
  readonly onMoveClick?: () => void;
  readonly onNextHeroClick?: () => void;
  readonly x?: number;
  readonly y?: number;
}

export function AdventureButtons({
  moveDisabled,
  nextHeroDisabled,
  onAdventureOptionsClick,
  onEndTurnClick,
  onGameOptionsClick,
  onKingdomOverview,
  onMoveClick,
  onNextHeroClick,
  x,
  y,
}: AdventureButtonsProps) {
  return (
    <Root x={x} y={y}>
      <Button assets={nextHero} disabled={nextHeroDisabled} label="Next Hero" onClick={onNextHeroClick} />
      <Button assets={move} disabled={moveDisabled} label="Move" onClick={onMoveClick} />
      <Button assets={kingdomOverview} label="Kingdom Overview" onClick={onKingdomOverview} />
      <Button assets={endTurn} label="End Turn" onClick={onEndTurnClick} />
      <Button assets={adventureOptions} label="Adventure Options" onClick={onAdventureOptionsClick} />
      <Button assets={gameOptions} label="Game Options" onClick={onGameOptionsClick} />
    </Root>
  );
}

const Root = styled(PositionedComponent)({
  display: 'inline-grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
});
