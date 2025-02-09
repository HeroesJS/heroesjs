import { range } from 'lodash';
import { useTranslation } from 'react-i18next';

import { Menu, MenuButton, type PositionProps } from '@heroesjs/hmm1-base-ui';

import * as assets from './assets';

interface Props extends PositionProps {
  readonly onCancelClick?: () => void;
  readonly onPortClick?: (value: number) => void;
}

export const ComPortMenu = ({ onCancelClick, onPortClick, x, y }: Props) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.comPortMenu' });

  return (
    <Menu label={t('title')} x={x} y={y}>
      {range(1, 5).map((i) => (
        <Item key={i} onClick={onPortClick} value={i} />
      ))}
      <MenuButton assets={assets.cancelButton} label={t('cancel')} onClick={onCancelClick} />
    </Menu>
  );
};

interface ItemProps {
  readonly onClick?: (value: number) => void;
  readonly value: number;
}

const Item = ({ value, onClick }: ItemProps) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.comPortMenu' });

  const handleClick = () => onClick?.(value);

  return (
    <MenuButton assets={assets.comPortButtons[value]} label={t('port', { number: value })} onClick={handleClick} />
  );
};
