import {useTranslation} from 'react-i18next';

import {Menu, MenuButton, MenuSeparator, Modal, type PositionProps, useModal} from '@heroesjs/hmm1-base-ui';

import * as assets from './assets';

interface Props extends PositionProps {
  readonly onCampaignGameClick?: () => void;
  readonly onCancelClick?: () => void;
  readonly onMultiPlayerGameClick?: () => void;
  readonly onStandardGameClick?: () => void;
}

export const GameTypeMenu = ({
  onCampaignGameClick,
  onCancelClick,
  onMultiPlayerGameClick,
  onStandardGameClick,
  x,
  y,
}: Props) => {
  const {t} = useTranslation('main', {keyPrefix: 'component.gameTypeMenu'});

  const standardGameInfoModal = useModal();
  const campaignGameInfoModal = useModal();
  const multiPlayerGameInfoModal = useModal();
  const cancelInfoModal = useModal();

  return (
    <Menu label={t('title')} x={x} y={y}>
      <MenuButton
        assets={assets.standardGameButton}
        label={t('standardGame')}
        onClick={onStandardGameClick}
        onMouseDown={standardGameInfoModal.onMouseDown}
      />
      <Modal open={standardGameInfoModal.isOpen} x={177} y={29}>
        {t('standardGameInfo')}
      </Modal>
      <MenuButton
        assets={assets.campaignGameButton}
        label={t('campaignGame')}
        onClick={onCampaignGameClick}
        onMouseDown={campaignGameInfoModal.onMouseDown}
      />
      <Modal open={campaignGameInfoModal.isOpen} x={177} y={29}>
        {t('campaignGameInfo')}
      </Modal>
      <MenuButton
        assets={assets.multiPlayerGameButton}
        label={t('multiPlayerGame')}
        onClick={onMultiPlayerGameClick}
        onMouseDown={multiPlayerGameInfoModal.onMouseDown}
      />
      <Modal open={multiPlayerGameInfoModal.isOpen} size={1} x={177} y={29}>
        {t('multiPlayerGameInfo')}
      </Modal>
      <MenuSeparator />
      <MenuButton
        assets={assets.cancelButton}
        label={t('cancel')}
        onClick={onCancelClick}
        onMouseDown={cancelInfoModal.onMouseDown}
      />
      <Modal open={cancelInfoModal.isOpen} x={177} y={29}>
        {t('cancelInfo')}
      </Modal>
    </Menu>
  );
};
