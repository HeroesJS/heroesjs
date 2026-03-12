import { useTranslation } from 'react-i18next';

import { Button, Menu, MenuItem, useModal } from '@heroesjs/hmm1-core-ui';

import { cancel, guest, host } from './assets';

interface NetworkGameMenuProps {
  readonly onCancelClick?: () => void;
  readonly onGuestClick?: () => void;
  readonly onHostClick?: () => void;
  readonly x?: number;
  readonly y?: number;
}

export function NetworkGameMenu({ onCancelClick, onGuestClick, onHostClick, x, y }: NetworkGameMenuProps) {
  const { t } = useTranslation('main', { keyPrefix: 'component.networkGameMenu' });

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
        <GuestInfoModal size={1}>{t(($) => $.guest.info)}</GuestInfoModal>
      </MenuItem>
      <MenuItem />
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
