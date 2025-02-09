import { useTranslation } from 'react-i18next';
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
}: Props) => {
  const { t } = useTranslation('adventure', { keyPrefix: 'component.adventureButtons' });

  return (
    <Root>
      <Button assets={nextHero} disabled={nextHeroDisabled} label={t('nextHero')} onClick={onNextHeroClick} />
      <Button assets={move} disabled={moveDisabled} label={t('move')} onClick={onMoveClick} />
      <Button assets={kingdomOverview} label={t('kingdomOverview')} onClick={onKingdomOverviewClick} />
      <Button assets={endTurn} label={t('endTurn')} onClick={onEndTurnClick} />
      <Button assets={adventureOptions} label={t('adventureOptions')} onClick={onAdventureOptionsClick} />
      <Button assets={gameOptions} label={t('gameOptions')} onClick={onGameOptionsClick} />
    </Root>
  );
};

const Root = styled(PositionedComponent)({
  display: 'inline-block',
  width: 3 * 48,
});
