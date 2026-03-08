import { useTranslation } from 'react-i18next';

import { Button, Menu, MenuItem, useModal } from '@heroesjs/hmm1-core-ui';

import { cancel, directConnect, hotSeat, modem, network } from './assets';

interface MultiPlayerGameTypeMenuProps {
  readonly onCancelClick?: () => void;
  readonly onDirectConnectClick?: () => void;
  readonly onHotSeatClick?: () => void;
  readonly onModemClick?: () => void;
  readonly onNetworkClick?: () => void;
  readonly x?: number;
  readonly y?: number;
}

export function MultiPlayerGameTypeMenu({
  onCancelClick,
  onDirectConnectClick,
  onHotSeatClick,
  onModemClick,
  onNetworkClick,
  x,
  y,
}: MultiPlayerGameTypeMenuProps) {
  const { t } = useTranslation('main', { keyPrefix: 'component.multiPlayerGameTypeMenu' });

  const [HotSeatInfoModal, hotSeatInfoModal] = useModal();
  const [NetworkInfoModal, networkInfoModal] = useModal();
  const [ModemInfoModal, modemInfoModal] = useModal();
  const [DirectConnectInfoModal, directConnectInfoModal] = useModal();
  const [CancelInfoModal, cancelInfoModal] = useModal();

  return (
    <Menu label={t('label')} x={x} y={y}>
      <MenuItem>
        <Button
          assets={hotSeat}
          label={t('hotSeat.label')}
          onClick={onHotSeatClick}
          onMouseDown={hotSeatInfoModal.onMouseDown}
        />
        <HotSeatInfoModal size={1}>{t('hotSeat.info')}</HotSeatInfoModal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={network}
          label={t('network.label')}
          onClick={onNetworkClick}
          onMouseDown={networkInfoModal.onMouseDown}
        />
        <NetworkInfoModal size={1}>{t('network.info')}</NetworkInfoModal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={modem}
          label={t('modem.label')}
          onClick={onModemClick}
          onMouseDown={modemInfoModal.onMouseDown}
        />
        <ModemInfoModal size={1}>{t('modem.info')}</ModemInfoModal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={directConnect}
          label={t('directConnect.label')}
          onClick={onDirectConnectClick}
          onMouseDown={directConnectInfoModal.onMouseDown}
        />
        <DirectConnectInfoModal size={1}>{t('directConnect.info')}</DirectConnectInfoModal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={cancel}
          label={t('cancel.label')}
          onClick={onCancelClick}
          onMouseDown={cancelInfoModal.onMouseDown}
        />
        <CancelInfoModal>{t('cancel.info')}</CancelInfoModal>
      </MenuItem>
    </Menu>
  );
}
