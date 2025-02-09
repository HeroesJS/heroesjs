import { useTranslation } from 'react-i18next';

import { Menu, MenuButton, MenuSeparator, type PositionProps } from '@heroesjs/hmm1-base-ui';

import * as assets from './assets';

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
        assets={detailed ? assets.hostDialsButton : assets.hostButton}
        label={t(detailed ? 'hostDetail' : 'host')}
        onClick={onHostClick}
      />
      <MenuButton
        assets={detailed ? assets.guestAnswersButton : assets.guestButton}
        label={t(detailed ? 'guestDetail' : 'guest')}
        onClick={onGuestClick}
      />
      <MenuSeparator />
      <MenuSeparator />
      <MenuButton assets={assets.cancelButton} label={t('cancel')} onClick={onCancelClick} />
    </Menu>
  );
};
