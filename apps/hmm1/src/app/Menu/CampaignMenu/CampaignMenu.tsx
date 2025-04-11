import {Fragment, type MouseEvent} from 'react';
import {useTranslation} from 'react-i18next';

import {Menu, MenuButton, Modal, type PositionProps, useModal, type UseModalResult} from '@heroesjs/hmm1-base-ui';
import {Campaign} from '@heroesjs/hmm1-core';

import * as assets from './assets';

const campaigns = [Campaign.LordIronfist, Campaign.LordSlayer, Campaign.QueenLamanda, Campaign.LordAlamar] as const;

interface Props extends PositionProps {
  readonly onCampaignClick?: (value: Campaign) => void;
  readonly onCancelClick?: () => void;
}

export const CampaignMenu = ({onCampaignClick, onCancelClick, x, y}: Props) => {
  const {t} = useTranslation('main', {keyPrefix: 'component.campaignMenu'});

  const playLordIronfistInfoModal = useModal();
  const playLordSlayerInfoModal = useModal();
  const playQueenLamandaInfoModal = useModal();
  const playLordAlamarInfoModal = useModal();

  const infoModals: Record<Campaign, UseModalResult> = {
    [Campaign.LordAlamar]: playLordAlamarInfoModal,
    [Campaign.LordIronfist]: playLordIronfistInfoModal,
    [Campaign.LordSlayer]: playLordSlayerInfoModal,
    [Campaign.QueenLamanda]: playQueenLamandaInfoModal,
  };

  const cancelInfoModal = useModal();

  return (
    <Menu label={t('title')} x={x} y={y}>
      {campaigns.map((campaign) => (
        <Fragment key={campaign}>
          <Item onClick={onCampaignClick} onMouseDown={infoModals[campaign].onMouseDown} value={campaign} />
          <Modal open={infoModals[campaign]['isOpen']} x={177} y={29}>
            {t(`${campaign}-info`)}
          </Modal>
        </Fragment>
      ))}
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

interface ItemProps {
  readonly onClick?: (value: Campaign) => void;
  readonly onMouseDown?: (e: MouseEvent) => void;
  readonly value: Campaign;
}

const Item = ({onClick, onMouseDown, value}: ItemProps) => {
  const {t} = useTranslation('main', {keyPrefix: 'component.campaignMenu'});

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
