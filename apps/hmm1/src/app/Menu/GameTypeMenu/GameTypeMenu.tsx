import { useTranslation } from 'react-i18next';

import { Menu, MenuButton, MenuSeparator, type PositionProps } from '@heroesjs/hmm1-base-ui';

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

  return (
    <Menu label={t('title')} x={x} y={y}>
      <MenuButton assets={assets.standardGameButton} label={t('standardGame')} onClick={onStandardGameClick} />
      <MenuButton assets={assets.campaignGameButton} label={t('campaignGame')} onClick={onCampaignGameClick} />
      <MenuButton assets={assets.multiPlayerGameButton} label={t('multiPlayerGame')} onClick={onMultiPlayerGameClick} />
      <MenuSeparator />
      <MenuButton assets={assets.cancelButton} label={t('cancel')} onClick={onCancelClick} />
    </Menu>
  );
};
