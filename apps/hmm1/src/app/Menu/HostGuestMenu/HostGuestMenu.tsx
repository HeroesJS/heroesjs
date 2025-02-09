import { Menu, MenuButton, MenuSeparator, type PositionProps } from '@heroesjs/hmm1-base-ui';

import * as assets from './assets';

interface Props extends PositionProps {
  readonly detailed?: boolean;
  readonly onCancelClick?: () => void;
  readonly onGuestClick?: () => void;
  readonly onHostClick?: () => void;
}

export const HostGuestMenu = ({ detailed, onCancelClick, onGuestClick, onHostClick, x, y }: Props) => (
  <Menu label="Host/Guest Menu" x={x} y={y}>
    <MenuButton
      assets={detailed ? assets.hostDialsButton : assets.hostButton}
      label={detailed ? 'Host (Dials)' : 'Host'}
      onClick={onHostClick}
    />
    <MenuButton
      assets={detailed ? assets.guestAnswersButton : assets.guestButton}
      label={detailed ? 'Guest (Answers)' : 'Guest'}
      onClick={onGuestClick}
    />
    <MenuSeparator />
    <MenuSeparator />
    <MenuButton assets={assets.cancelButton} label="Cancel" onClick={onCancelClick} />
  </Menu>
);
