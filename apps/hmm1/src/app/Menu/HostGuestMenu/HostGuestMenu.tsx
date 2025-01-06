import { Button, Menu, MenuItem, type PositionProps } from '../../base';

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

interface Props extends PositionProps {
  readonly detailed?: boolean;
  readonly onCancelClick?: () => void;
  readonly onGuestClick?: () => void;
  readonly onHostClick?: () => void;
}

export const HostGuestMenu = ({ detailed, onCancelClick, onGuestClick, onHostClick, x, y }: Props) => (
  <Menu label="Host/Guest Menu" x={x} y={y}>
    <MenuItem>
      <Button
        assets={
          detailed
            ? {
                disabled: hostDialsDisabled,
                enabled: hostDialsEnabled,
              }
            : {
                disabled: hostDisabled,
                enabled: hostEnabled,
              }
        }
        label={detailed ? 'Host (Dials)' : 'Host'}
        onClick={onHostClick}
      />
    </MenuItem>
    <MenuItem>
      <Button
        assets={
          detailed
            ? {
                disabled: guestAnswersDisabled,
                enabled: guestAnswersEnabled,
              }
            : {
                disabled: guestDisabled,
                enabled: guestEnabled,
              }
        }
        label={detailed ? 'Guest (Answers)' : 'Guest'}
        onClick={onGuestClick}
      />
    </MenuItem>
    <MenuItem />
    <MenuItem />
    <MenuItem>
      <Button
        assets={{
          disabled: cancelDisabled,
          enabled: cancelEnabled,
        }}
        label="Cancel"
        onClick={onCancelClick}
      />
    </MenuItem>
  </Menu>
);
