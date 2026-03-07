import { useTranslation } from 'react-i18next';

import type { ButtonAssets } from '@heroesjs/hmm1-core-ui';
import { Button, Menu, MenuItem } from '@heroesjs/hmm1-core-ui';

import { noConfig, withConfig } from './assets';

interface DirectConnectGameMenuProps {
  readonly allowConfiguration?: boolean;
  readonly onCancelClick?: () => void;
  readonly onConfigClick?: () => void;
  readonly onGuestClick?: () => void;
  readonly onHostClick?: () => void;
  readonly x?: number;
  readonly y?: number;
}

export function DirectConnectGameMenu({
  allowConfiguration,
  onCancelClick,
  onConfigClick,
  onGuestClick,
  onHostClick,
  x,
  y,
}: DirectConnectGameMenuProps) {
  const { t } = useTranslation('main', { keyPrefix: 'component.directConnectGameMenu' });

  const { cancel, guest, host } = allowConfiguration ? withConfig : noConfig;

  const configButton = allowConfiguration && (
    <Button assets={withConfig.config as ButtonAssets} label={t('config.label')} onClick={onConfigClick} />
  );

  return (
    <Menu label={t('label')} x={x} y={y}>
      <MenuItem>
        <Button assets={host} label={t('host.label')} onClick={onHostClick} />
      </MenuItem>
      <MenuItem>
        <Button assets={guest} label={t('guest.label')} onClick={onGuestClick} />
      </MenuItem>
      <MenuItem>{configButton}</MenuItem>
      <MenuItem />
      <MenuItem>
        <Button assets={cancel} label={t('cancel.label')} onClick={onCancelClick} />
      </MenuItem>
    </Menu>
  );
}
