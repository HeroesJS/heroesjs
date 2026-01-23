import styled from 'styled-components';

import { Button, PositionedComponent, useModal } from '@heroesjs/hmm1-core-ui';

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
  const [NextHeroInfoModal, nextHeroInfoModal] = useModal();
  const [MoveInfoModal, moveInfoModal] = useModal();
  const [KingdomOverviewInfoModal, kingdomOverviewInfoModal] = useModal();
  const [EndTurnInfoModal, endTurnInfoModal] = useModal();
  const [AdventureOptionsInfoModal, adventureOptionsInfoModal] = useModal();
  const [GameOptionsInfoModal, gameOptionsInfoModal] = useModal();

  return (
    <Root x={x} y={y}>
      <Button
        assets={nextHero}
        disabled={nextHeroDisabled}
        label="Next Hero"
        onClick={onNextHeroClick}
        onMouseDown={nextHeroInfoModal.onMouseDown}
      />
      <NextHeroInfoModal x={97}>
        Next Hero
        <br />
        <br />
        Select the next Hero.
      </NextHeroInfoModal>
      <Button
        assets={move}
        disabled={moveDisabled}
        label="Move"
        onClick={onMoveClick}
        onMouseDown={moveInfoModal.onMouseDown}
      />
      <MoveInfoModal size={1} x={97}>
        Continue Movement
        <br />
        <br />
        Continue the Hero's movement along his current path.
      </MoveInfoModal>
      <Button
        assets={kingdomOverview}
        label="Kingdom Overview"
        onClick={onKingdomOverview}
        onMouseDown={kingdomOverviewInfoModal.onMouseDown}
      />
      <KingdomOverviewInfoModal size={1} x={97}>
        Kingdom Summary
        <br />
        <br />
        View a summary of your kingdom.
      </KingdomOverviewInfoModal>
      <Button assets={endTurn} label="End Turn" onClick={onEndTurnClick} onMouseDown={endTurnInfoModal.onMouseDown} />
      <EndTurnInfoModal size={1} x={97}>
        End Turn
        <br />
        <br />
        End your turn and let the computer take its turn.
      </EndTurnInfoModal>
      <Button
        assets={adventureOptions}
        label="Adventure Options"
        onClick={onAdventureOptionsClick}
        onMouseDown={adventureOptionsInfoModal.onMouseDown}
      />
      <AdventureOptionsInfoModal size={1} x={97}>
        Adventure Options
        <br />
        <br />
        Bring up the adventure options menu.
      </AdventureOptionsInfoModal>
      <Button
        assets={gameOptions}
        label="Game Options"
        onClick={onGameOptionsClick}
        onMouseDown={gameOptionsInfoModal.onMouseDown}
      />
      <GameOptionsInfoModal size={1} x={97}>
        Game Options
        <br />
        <br />
        Bring up the game options menu.
      </GameOptionsInfoModal>
    </Root>
  );
}

const Root = styled(PositionedComponent)({
  display: 'inline-grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
});
