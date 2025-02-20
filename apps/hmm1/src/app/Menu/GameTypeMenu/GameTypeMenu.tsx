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
          {...standardGameInfo.handlers}
          assets={assets.standardGameButton}
          label={t('standardGame')}
          onClick={onStandardGameClick}
        />
        <MenuButton
          {...campaignGameInfo.handlers}
          assets={assets.campaignGameButton}
          label={t('campaignGame')}
          onClick={onCampaignGameClick}
        />
        <MenuButton
          {...multiPlayerGameInfo.handlers}
          assets={assets.multiPlayerGameButton}
          label={t('multiPlayerGame')}
          onClick={onMultiPlayerGameClick}
        />
        <MenuSeparator />
        <MenuButton {...cancelInfo.handlers} assets={assets.cancelButton} label={t('cancel')} onClick={onCancelClick} />
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
