import styled from 'styled-components';

import { Button, PositionedComponent } from '@heroesjs/hmm1-base-ui';

import { adventureOptions, endTurn, gameOptions, kingdomOverview, move, nextHero } from './assets';

interface Props {
  readonly moveDisabled?: boolean;
  readonly nextHeroDisabled?: boolean;
  readonly onAdventureOptionsClick?: () => void;
  readonly onEndTurnClick?: () => void;
  readonly onGameOptionsClick?: () => void;
  readonly onKingdomOverviewClick?: () => void;
  readonly onMoveClick?: () => void;
  readonly onNextHeroClick?: () => void;
}

export const AdventureButtons = ({
  moveDisabled,
  nextHeroDisabled,
  onAdventureOptionsClick,
  onEndTurnClick,
  onGameOptionsClick,
  onKingdomOverviewClick,
  onMoveClick,
  onNextHeroClick,
}: Props) => (
  <Root>
    <Button assets={nextHero} disabled={nextHeroDisabled} label="Next Hero" onClick={onNextHeroClick} />
    <Button assets={move} disabled={moveDisabled} label="Move" onClick={onMoveClick} />
    <Button assets={kingdomOverview} label="Kingdom Overview" onClick={onKingdomOverviewClick} />
    <Button assets={endTurn} label="End Turn" onClick={onEndTurnClick} />
    <Button assets={adventureOptions} label="Adventure Options" onClick={onAdventureOptionsClick} />
    <Button assets={gameOptions} label="Game Options" onClick={onGameOptionsClick} />
  </Root>
);

const Root = styled(PositionedComponent)({
  display: 'inline-block',
  width: 3 * 48,
});
