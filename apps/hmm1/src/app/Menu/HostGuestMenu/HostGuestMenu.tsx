import { useTranslation } from 'react-i18next';

import { type ButtonAssets, Menu, MenuButton, MenuSeparator, type PositionProps } from '@heroesjs/hmm1-base-ui';

import cancelDisabled from './assets/cancel/disabled.png';
import cancelEnabled from './assets/cancel/enabled.png';
import guestDisabled from './assets/guest/disabled.png';
import guestEnabled from './assets/guest/enabled.png';
import guestAnswersDisabled from './assets/guest-answers/disabled.png';
import guestAnswersEnabled from './assets/guest-answers/enabled.png';
import hostDisabled from './assets/host/disabled.png';
import hostEnabled from './assets/host/enabled.png';
import hostDialsDisabled from './assets/host-dials/disabled.png';
import hostDialsEnabled from './assets/host-dials/enabled.png';

const hostButtonAssets: ButtonAssets = {
  disabled: hostDisabled,
  enabled: hostEnabled,
};

const guestButtonAssets: ButtonAssets = {
  disabled: guestDisabled,
  enabled: guestEnabled,
};

const hostDialsButtonAssets: ButtonAssets = {
  disabled: hostDialsDisabled,
  enabled: hostDialsEnabled,
};

const guestAnswersButtonAssets: ButtonAssets = {
  disabled: guestAnswersDisabled,
  enabled: guestAnswersEnabled,
};

const cancelButtonAssets: ButtonAssets = {
  disabled: cancelDisabled,
  enabled: cancelEnabled,
};

interface Props extends PositionProps {
  readonly detailed?: boolean;
  readonly onCancelClick?: () => void;
  readonly onGuestClick?: () => void;
  readonly onHostClick?: () => void;
}

export const HostGuestMenu = ({ detailed, onCancelClick, onGuestClick, onHostClick, x, y }: Props) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.hostGuestMenu' });

  return (
    <Menu label={t('title')} x={x} y={y}>
      <MenuButton
        assets={detailed ? hostDialsButtonAssets : hostButtonAssets}
        label={t(detailed ? 'hostDetail' : 'host')}
        onClick={onHostClick}
      />
      <MenuButton
        assets={detailed ? guestAnswersButtonAssets : guestButtonAssets}
        label={t(detailed ? 'guestDetail' : 'guest')}
        onClick={onGuestClick}
      />
      <MenuSeparator />
      <MenuSeparator />
      <MenuButton assets={cancelButtonAssets} label={t('cancel')} onClick={onCancelClick} />
    </Menu>
  );
};
