import type { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { Menu, MenuButton, Modal, type PositionProps, useModal, type UseModalResult } from '@heroesjs/hmm1-base-ui';
import { Campaign } from '@heroesjs/hmm1-core';

import * as assets from './assets';

const campaigns = [Campaign.LordIronfist, Campaign.LordSlayer, Campaign.QueenLamanda, Campaign.LordAlamar] as const;

interface Props extends PositionProps {
  readonly onCampaignClick?: (value: Campaign) => void;
  readonly onCancelClick?: () => void;
}

export const CampaignMenu = ({ onCampaignClick, onCancelClick, x, y }: Props) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.campaignMenu' });

  const playLordIronfistInfo = useModal();
  const playLordSlayerInfo = useModal();
  const playQueenLamandaInfo = useModal();
  const playLordAlamarInfo = useModal();

  const infoModals: Record<Campaign, UseModalResult> = {
    [Campaign.LordAlamar]: playLordAlamarInfo,
    [Campaign.LordIronfist]: playLordIronfistInfo,
    [Campaign.LordSlayer]: playLordSlayerInfo,
    [Campaign.QueenLamanda]: playQueenLamandaInfo,
  };

  const cancelInfo = useModal();

  return (
    <>
      <Menu label={t('title')} x={x} y={y}>
        {campaigns.map((campaign) => (
          <Item {...infoModals[campaign].handlers} key={campaign} onClick={onCampaignClick} value={campaign} />
        ))}
        <MenuButton {...cancelInfo.handlers} assets={assets.cancelButton} label={t('cancel')} onClick={onCancelClick} />
      </Menu>
      {campaigns.map((campaign) => (
        <Modal key={campaign} open={infoModals[campaign]['isOpen']} x={177} y={29}>
          {t(`${campaign}-info`)}
        </Modal>
      ))}
      <Modal open={cancelInfo.isOpen} x={177} y={29}>
        {t('cancelInfo')}
      </Modal>
    </>
  );
};

interface ItemProps {
  readonly onClick?: (value: Campaign) => void;
  readonly onMouseDown?: (e: MouseEvent) => void;
  readonly value: Campaign;
}

const Item = ({ onClick, onMouseDown, value }: ItemProps) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.campaignMenu' });

  const handleClick = () => onClick?.(value);

  return (
    <MenuButton
      assets={assets.campaignButtons[value]}
      label={t(value)}
      onClick={handleClick}
      onMouseDown={onMouseDown}
    />
  );
};
