import { useTranslation } from 'react-i18next';

import { Menu, MenuButton, MenuSeparator, Modal, type PositionProps, useModal } from '@heroesjs/hmm1-base-ui';

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
  const { t } = useTranslation('main', { keyPrefix: 'component.gameTypeMenu' });

  const { closeStandardGameInfo, openStandardGameInfo, standardGameInfoIsOpen } = useModal('standardGameInfo');
  const { campaignGameInfoIsOpen, closeCampaignGameInfo, openCampaignGameInfo } = useModal('campaignGameInfo');
  const { closeMultiPlayerGameInfo, multiPlayerGameInfoIsOpen, openMultiPlayerGameInfo } =
    useModal('multiPlayerGameInfo');
  const { cancelInfoIsOpen, closeCancelInfo, openCancelInfo } = useModal('cancelInfo');

  return (
    <>
      <Menu label={t('title')} x={x} y={y}>
        <MenuButton
          assets={assets.standardGameButton}
          label={t('standardGame')}
          onClick={onStandardGameClick}
          onRightButtonDown={openStandardGameInfo}
          onRightButtonUp={closeStandardGameInfo}
        />
        <MenuButton
          assets={assets.campaignGameButton}
          label={t('campaignGame')}
          onClick={onCampaignGameClick}
          onRightButtonDown={openCampaignGameInfo}
          onRightButtonUp={closeCampaignGameInfo}
        />
        <MenuButton
          assets={assets.multiPlayerGameButton}
          label={t('multiPlayerGame')}
          onClick={onMultiPlayerGameClick}
          onRightButtonDown={openMultiPlayerGameInfo}
          onRightButtonUp={closeMultiPlayerGameInfo}
        />
        <MenuSeparator />
        <MenuButton
          assets={assets.cancelButton}
          label={t('cancel')}
          onClick={onCancelClick}
          onRightButtonDown={openCancelInfo}
          onRightButtonUp={closeCancelInfo}
        />
      </Menu>
      <Modal open={standardGameInfoIsOpen} x={177} y={29}>
        {t('standardGameInfo')}
      </Modal>
      <Modal open={campaignGameInfoIsOpen} x={177} y={29}>
        {t('campaignGameInfo')}
      </Modal>
      <Modal open={multiPlayerGameInfoIsOpen} size={1} x={177} y={29}>
        {t('multiPlayerGameInfo')}
      </Modal>
      <Modal open={cancelInfoIsOpen} x={177} y={29}>
        {t('cancelInfo')}
      </Modal>
    </>
  );
};
