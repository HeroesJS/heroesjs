import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation('adventure', { keyPrefix: 'component.adventureButtons' });

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
        label={t(($) => $.nextHero.label)}
        onClick={onNextHeroClick}
        onMouseDown={nextHeroInfoModal.onMouseDown}
      />
      <NextHeroInfoModal x={97}>{t(($) => $.nextHero.info)}</NextHeroInfoModal>
      <Button
        assets={move}
        disabled={moveDisabled}
        label={t(($) => $.move.label)}
        onClick={onMoveClick}
        onMouseDown={moveInfoModal.onMouseDown}
      />
      <MoveInfoModal size={1} x={97}>
        {t(($) => $.move.info)}
      </MoveInfoModal>
      <Button
        assets={kingdomOverview}
        label={t(($) => $.kingdomOverview.label)}
        onClick={onKingdomOverview}
        onMouseDown={kingdomOverviewInfoModal.onMouseDown}
      />
      <KingdomOverviewInfoModal size={1} x={97}>
        {t(($) => $.kingdomOverview.info)}
      </KingdomOverviewInfoModal>
      <Button
        assets={endTurn}
        label={t(($) => $.endTurn.label)}
        onClick={onEndTurnClick}
        onMouseDown={endTurnInfoModal.onMouseDown}
      />
      <EndTurnInfoModal size={1} x={97}>
        {t(($) => $.endTurn.info)}
      </EndTurnInfoModal>
      <Button
        assets={adventureOptions}
        label={t(($) => $.adventureOptions.label)}
        onClick={onAdventureOptionsClick}
        onMouseDown={adventureOptionsInfoModal.onMouseDown}
      />
      <AdventureOptionsInfoModal size={1} x={97}>
        {t(($) => $.adventureOptions.info)}
      </AdventureOptionsInfoModal>
      <Button
        assets={gameOptions}
        label={t(($) => $.gameOptions.label)}
        onClick={onGameOptionsClick}
        onMouseDown={gameOptionsInfoModal.onMouseDown}
      />
      <GameOptionsInfoModal size={1} x={97}>
        {t(($) => $.gameOptions.info)}
      </GameOptionsInfoModal>
    </Root>
  );
}

const Root = styled(PositionedComponent)({
  display: 'inline-grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
});
