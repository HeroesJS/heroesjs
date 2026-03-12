import { useTranslation } from 'react-i18next';

import { Button, Menu, MenuItem, useModal } from '@heroesjs/hmm1-core-ui';

import { noConfig, withConfig } from './assets';

interface ModemGameMenuProps {
  readonly allowConfiguration?: boolean;
  readonly onCancelClick?: () => void;
  readonly onConfigClick?: () => void;
  readonly onGuestClick?: () => void;
  readonly onHostClick?: () => void;
  readonly x?: number;
  readonly y?: number;
}

export function ModemGameMenu({
  allowConfiguration,
  onCancelClick,
  onConfigClick,
  onGuestClick,
  onHostClick,
  x,
  y,
}: ModemGameMenuProps) {
  const { t } = useTranslation('main', { keyPrefix: 'component.modemGameMenu' });

  const { cancel, guest, host } = allowConfiguration ? withConfig : noConfig;

  const configButton = allowConfiguration && (
    <Button assets={withConfig.config} label={t(($) => $.config.label)} onClick={onConfigClick} />
  );

  const [HostInfoModal, hostInfoModal] = useModal();
  const [GuestInfoModal, guestInfoModal] = useModal();
  const [CancelInfoModal, cancelInfoModal] = useModal();

  return (
    <Menu label={t(($) => $.label)} x={x} y={y}>
      <MenuItem>
        <Button
          assets={host}
          label={t(($) => $.host.label)}
          onClick={onHostClick}
          onMouseDown={hostInfoModal.onMouseDown}
        />
        <HostInfoModal>{t(($) => $.host.info)}</HostInfoModal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={guest}
          label={t(($) => $.guest.label)}
          onClick={onGuestClick}
          onMouseDown={guestInfoModal.onMouseDown}
        />
        <GuestInfoModal>{t(($) => $.guest.info)}</GuestInfoModal>
      </MenuItem>
      <MenuItem>{configButton}</MenuItem>
      <MenuItem />
      <MenuItem>
        <Button
          assets={cancel}
          label={t(($) => $.cancel.label)}
          onClick={onCancelClick}
          onMouseDown={cancelInfoModal.onMouseDown}
        />
        <CancelInfoModal>{t(($) => $.cancel.info)}</CancelInfoModal>
      </MenuItem>
    </Menu>
  );
}
