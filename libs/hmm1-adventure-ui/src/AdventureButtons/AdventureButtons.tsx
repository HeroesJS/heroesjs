import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

import {Button, Modal, PositionedComponent, useModal} from '@heroesjs/hmm1-base-ui';

import {adventureOptions, endTurn, gameOptions, kingdomOverview, move, nextHero} from './assets';

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
  const {t} = useTranslation('adventure', {keyPrefix: 'component.adventureButtons'});

  const nextHeroInfoModal = useModal();
  const moveInfoModal = useModal();
  const kingdomOverviewInfoModal = useModal();
  const endTurnInfoModal = useModal();
  const adventureOptionsInfoModal = useModal();
  const gameOptionsInfoModal = useModal();

  return (
    <Root>
      <Button
        assets={nextHero}
        disabled={nextHeroDisabled}
        label={t('nextHero')}
        onClick={onNextHeroClick}
        onMouseDown={nextHeroInfoModal.onMouseDown}
      />
      <Modal open={nextHeroInfoModal.isOpen} x={97} y={29}>
        {t('nextHeroInfo')}
      </Modal>
      <Button
        assets={move}
        disabled={moveDisabled}
        label={t('move')}
        onClick={onMoveClick}
        onMouseDown={moveInfoModal.onMouseDown}
      />
      <Modal open={moveInfoModal.isOpen} size={1} x={97} y={29}>
        {t('moveInfo')}
      </Modal>
      <Button
        assets={kingdomOverview}
        label={t('kingdomOverview')}
        onClick={onKingdomOverviewClick}
        onMouseDown={kingdomOverviewInfoModal.onMouseDown}
      />
      <Modal open={kingdomOverviewInfoModal.isOpen} size={1} x={97} y={29}>
        {t('kingdomOverviewInfo')}
      </Modal>
      <Button
        assets={endTurn}
        label={t('endTurn')}
        onClick={onEndTurnClick}
        onMouseDown={endTurnInfoModal.onMouseDown}
      />
      <Modal open={endTurnInfoModal.isOpen} size={1} x={97} y={29}>
        {t('endTurnInfo')}
      </Modal>
      <Button
        assets={adventureOptions}
        label={t('adventureOptions')}
        onClick={onAdventureOptionsClick}
        onMouseDown={adventureOptionsInfoModal.onMouseDown}
      />
      <Modal open={adventureOptionsInfoModal.isOpen} size={1} x={97} y={29}>
        {t('adventureOptionsInfo')}
      </Modal>
      <Button
        assets={gameOptions}
        label={t('gameOptions')}
        onClick={onGameOptionsClick}
        onMouseDown={gameOptionsInfoModal.onMouseDown}
      />
      <Modal open={gameOptionsInfoModal.isOpen} size={1} x={97} y={29}>
        {t('gameOptionsInfo')}
      </Modal>
    </Root>
  );
};

const Root = styled(PositionedComponent)({
  display: 'inline-block',
  width: 3 * 48,
});
