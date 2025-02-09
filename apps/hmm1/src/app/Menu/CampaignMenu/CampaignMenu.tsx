import { Menu, MenuButton, type PositionProps } from '@heroesjs/hmm1-base-ui';
import { Campaign } from '@heroesjs/hmm1-core';

import * as assets from './assets';

const campaigns = [Campaign.LordIronfist, Campaign.LordSlayer, Campaign.QueenLamanda, Campaign.LordAlamar] as const;

const labels: Record<Campaign, string> = {
  [Campaign.LordAlamar]: 'Play Lord Alamar',
  [Campaign.LordIronfist]: 'Play Lord Ironfist',
  [Campaign.LordSlayer]: 'Play Lord Slayer',
  [Campaign.QueenLamanda]: 'Play Queen Lamanda',
};

interface Props extends PositionProps {
  readonly onCampaignClick?: (value: Campaign) => void;
  readonly onCancelClick?: () => void;
}

export const CampaignMenu = ({ onCampaignClick, onCancelClick, x, y }: Props) => (
  <Menu label="Campaign Menu" x={x} y={y}>
    {campaigns.map((campaign) => (
      <Item key={campaign} onClick={onCampaignClick} value={campaign} />
    ))}
    <MenuButton assets={assets.cancelButton} label="Cancel" onClick={onCancelClick} />
  </Menu>
);

interface ItemProps {
  readonly onClick?: (value: Campaign) => void;
  readonly value: Campaign;
}

const Item = ({ onClick, value }: ItemProps) => {
  const handleClick = () => onClick?.(value);

  return <MenuButton assets={assets.campaignButtons[value]} label={labels[value]} onClick={handleClick} />;
};
