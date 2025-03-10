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
    <Menu label={t('title')} x={x} y={y}>
      <MenuButton
        assets={assets.standardGameButton}
        label={t('standardGame')}
        onClick={onStandardGameClick}
        onMouseDown={standardGameInfo.onMouseDown}
      />
      <Modal open={standardGameInfo.isOpen} x={177} y={29}>
        {t('standardGameInfo')}
      </Modal>
      <MenuButton
        assets={assets.campaignGameButton}
        label={t('campaignGame')}
        onClick={onCampaignGameClick}
        onMouseDown={campaignGameInfo.onMouseDown}
      />
      <Modal open={campaignGameInfo.isOpen} x={177} y={29}>
        {t('campaignGameInfo')}
      </Modal>
      <MenuButton
        assets={assets.multiPlayerGameButton}
        label={t('multiPlayerGame')}
        onClick={onMultiPlayerGameClick}
        onMouseDown={multiPlayerGameInfo.onMouseDown}
      />
      <Modal open={multiPlayerGameInfo.isOpen} size={1} x={177} y={29}>
        {t('multiPlayerGameInfo')}
      </Modal>
      <MenuSeparator />
      <MenuButton
        assets={assets.cancelButton}
        label={t('cancel')}
        onClick={onCancelClick}
        onMouseDown={cancelInfo.onMouseDown}
      />
      <Modal open={cancelInfo.isOpen} x={177} y={29}>
        {t('cancelInfo')}
      </Modal>
    </Menu>
  );
};
