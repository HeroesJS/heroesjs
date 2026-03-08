import { range } from 'lodash';
import { useTranslation } from 'react-i18next';

import { Button, Menu, MenuItem } from '@heroesjs/hmm1-core-ui';

import { cancel, portAssets } from './assets';

interface ComPortMenuProps {
  readonly onCancelClick?: () => void;
  readonly onValueClick?: (value: number) => void;
  readonly x?: number;
  readonly y?: number;
}

export function ComPortMenu({ onCancelClick, onValueClick, x, y }: ComPortMenuProps) {
  const { t } = useTranslation('main', { keyPrefix: 'component.comPortMenu' });

  return (
    <Menu label={t('label')} x={x} y={y}>
      {range(1, 5).map((port) => (
        <MenuItem key={port}>
          <Button assets={portAssets[port]} label={t('port.label', { port })} onClick={() => onValueClick?.(port)} />
        </MenuItem>
      ))}
      <MenuItem>
        <Button assets={cancel} label={t('cancel.label')} onClick={onCancelClick} />
      </MenuItem>
    </Menu>
  );
}
