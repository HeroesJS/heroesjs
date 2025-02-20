import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Button, Modal, PositionedComponent, useModal } from '@heroesjs/hmm1-base-ui';

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

  const nextHeroInfo = useModal();
  const moveInfo = useModal();
  const kingdomOverviewInfo = useModal();
  const endTurnInfo = useModal();
  const adventureOptionsInfo = useModal();
  const gameOptionsInfo = useModal();

  return (
    <Root>
      <Button
        {...nextHeroInfo.handlers}
        assets={nextHero}
        disabled={nextHeroDisabled}
        label={t('nextHero')}
        onClick={onNextHeroClick}
      />
      <Modal open={nextHeroInfo.isOpen} x={97} y={29}>
        {t('nextHeroInfo')}
      </Modal>
      <Button {...moveInfo.handlers} assets={move} disabled={moveDisabled} label={t('move')} onClick={onMoveClick} />
      <Modal open={moveInfo.isOpen} size={1} x={97} y={29}>
        {t('moveInfo')}
      </Modal>
      <Button
        {...kingdomOverviewInfo.handlers}
        assets={kingdomOverview}
        label={t('kingdomOverview')}
        onClick={onKingdomOverviewClick}
      />
      <Modal open={kingdomOverviewInfo.isOpen} size={1} x={97} y={29}>
        {t('kingdomOverviewInfo')}
      </Modal>
      <Button {...endTurnInfo.handlers} assets={endTurn} label={t('endTurn')} onClick={onEndTurnClick} />
      <Modal open={endTurnInfo.isOpen} size={1} x={97} y={29}>
        {t('endTurnInfo')}
      </Modal>
      <Button
        {...adventureOptionsInfo.handlers}
        assets={adventureOptions}
        label={t('adventureOptions')}
        onClick={onAdventureOptionsClick}
      />
      <Modal open={adventureOptionsInfo.isOpen} size={1} x={97} y={29}>
        {t('adventureOptionsInfo')}
      </Modal>
      <Button
        {...gameOptionsInfo.handlers}
        assets={gameOptions}
        label={t('gameOptions')}
        onClick={onGameOptionsClick}
      />
      <Modal open={gameOptionsInfo.isOpen} size={1} x={97} y={29}>
        {t('gameOptionsInfo')}
      </Modal>
    </Root>
  );
};

const Root = styled(PositionedComponent)({
  display: 'inline-block',
  width: 3 * 48,
});
