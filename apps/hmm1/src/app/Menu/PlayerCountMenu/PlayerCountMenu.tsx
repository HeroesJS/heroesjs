import { range } from 'lodash';
import { useTranslation } from 'react-i18next';

import { Menu, MenuButton, MenuSeparator, type PositionProps } from '@heroesjs/hmm1-base-ui';

import * as assets from './assets';

interface Props extends PositionProps {
  readonly onCancelClick?: () => void;
  readonly onCountClick?: (value: number) => void;
}

export const PlayerCountMenu = ({ onCancelClick, onCountClick, x, y }: Props) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.playerCountMenu' });

  return (
    <Menu label={t('title')} x={x} y={y}>
      {range(2, 5).map((count) => (
        <Item key={count} onClick={onCountClick} value={count} />
      ))}
      <MenuSeparator />
      <MenuButton assets={assets.cancelButton} label={t('cancel')} onClick={onCancelClick} />
    </Menu>
  );
};

interface ItemProps {
  readonly onClick?: (value: number) => void;
  readonly value: number;
}

const Item = ({ onClick, value }: ItemProps) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.playerCountMenu' });

  const handleClick = () => onClick?.(value);

  return (
    <MenuButton
      assets={assets.playerCountButtons[value]}
      label={t('playerCount', { count: value })}
      onClick={handleClick}
    />
  );
};
