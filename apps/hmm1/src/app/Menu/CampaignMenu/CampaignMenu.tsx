import { useTranslation } from 'react-i18next';

import { Menu, MenuButton, type PositionProps } from '@heroesjs/hmm1-base-ui';
import { Campaign } from '@heroesjs/hmm1-core';

import * as assets from './assets';

const campaigns = [Campaign.LordIronfist, Campaign.LordSlayer, Campaign.QueenLamanda, Campaign.LordAlamar] as const;

interface Props extends PositionProps {
  readonly onCampaignClick?: (value: Campaign) => void;
  readonly onCancelClick?: () => void;
}

export const CampaignMenu = ({ onCampaignClick, onCancelClick, x, y }: Props) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.campaignMenu' });

  return (
    <Menu label={t('title')} x={x} y={y}>
      {campaigns.map((campaign) => (
        <Item key={campaign} onClick={onCampaignClick} value={campaign} />
      ))}
      <MenuButton assets={assets.cancelButton} label={t('cancel')} onClick={onCancelClick} />
    </Menu>
  );
};

interface ItemProps {
  readonly onClick?: (value: Campaign) => void;
  readonly value: Campaign;
}

const Item = ({ onClick, value }: ItemProps) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.campaignMenu' });

  const handleClick = () => onClick?.(value);

  return <MenuButton assets={assets.campaignButtons[value]} label={t(value)} onClick={handleClick} />;
};
