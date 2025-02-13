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

  const standardGameInfo = useModal();
  const campaignGameInfo = useModal();
  const multiPlayerGameInfo = useModal();
  const cancelInfo = useModal();

  return (
    <>
      <Menu label={t('title')} x={x} y={y}>
        <MenuButton
          assets={assets.standardGameButton}
          label={t('standardGame')}
          onClick={onStandardGameClick}
          onRightButtonDown={standardGameInfo.open}
          onRightButtonUp={standardGameInfo.close}
        />
        <MenuButton
          assets={assets.campaignGameButton}
          label={t('campaignGame')}
          onClick={onCampaignGameClick}
          onRightButtonDown={campaignGameInfo.open}
          onRightButtonUp={campaignGameInfo.close}
        />
        <MenuButton
          assets={assets.multiPlayerGameButton}
          label={t('multiPlayerGame')}
          onClick={onMultiPlayerGameClick}
          onRightButtonDown={multiPlayerGameInfo.open}
          onRightButtonUp={multiPlayerGameInfo.close}
        />
        <MenuSeparator />
        <MenuButton
          assets={assets.cancelButton}
          label={t('cancel')}
          onClick={onCancelClick}
          onRightButtonDown={cancelInfo.open}
          onRightButtonUp={cancelInfo.close}
        />
      </Menu>
      <Modal open={standardGameInfo.isOpen} x={177} y={29}>
        {t('standardGameInfo')}
      </Modal>
      <Modal open={campaignGameInfo.isOpen} x={177} y={29}>
        {t('campaignGameInfo')}
      </Modal>
      <Modal open={multiPlayerGameInfo.isOpen} size={1} x={177} y={29}>
        {t('multiPlayerGameInfo')}
      </Modal>
      <Modal open={cancelInfo.isOpen} x={177} y={29}>
        {t('cancelInfo')}
      </Modal>
    </>
  );
};
