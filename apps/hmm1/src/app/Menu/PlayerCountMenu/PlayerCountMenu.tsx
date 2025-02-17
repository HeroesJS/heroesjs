import { range } from 'lodash';
import { useTranslation } from 'react-i18next';

import {
  Menu,
  MenuButton,
  MenuSeparator,
  Modal,
  type PositionProps,
  useModal,
  type UseModalResult,
} from '@heroesjs/hmm1-base-ui';

import * as assets from './assets';

interface Props extends PositionProps {
  readonly onCancelClick?: () => void;
  readonly onCountClick?: (value: number) => void;
}

export const PlayerCountMenu = ({ onCancelClick, onCountClick, x, y }: Props) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.playerCountMenu' });

  const twoPlayerInfo = useModal();
  const threePlayerInfo = useModal();
  const fourPlayerInfo = useModal();

  const infoModals: Record<number, UseModalResult> = {
    2: twoPlayerInfo,
    3: threePlayerInfo,
    4: fourPlayerInfo,
  };

  const handleRightButtonDown = (value: number) => infoModals[value].open();

  const handleRightButtonUp = (value: number) => infoModals[value].close();

  const cancelInfo = useModal();

  return (
    <>
      <Menu label={t('title')} x={x} y={y}>
        {range(2, 5).map((count) => (
          <Item
            key={count}
            onClick={onCountClick}
            onRightButtonDown={handleRightButtonDown}
            onRightButtonUp={handleRightButtonUp}
            value={count}
          />
        ))}
        <MenuSeparator />
        <MenuButton
          assets={assets.cancelButton}
          label={t('cancel')}
          onClick={onCancelClick}
          onRightButtonDown={cancelInfo.open}
          onRightButtonUp={cancelInfo.close}
        />
      </Menu>
      {range(2, 5).map((count) => (
        <Modal key={count} open={infoModals[count].isOpen} x={177} y={29}>
          {t(`playerCountInfo_${count as 2 | 3 | 4}`)}
        </Modal>
      ))}
      <Modal open={cancelInfo.isOpen} x={177} y={29}>
        {t('cancelInfo')}
      </Modal>
    </>
  );
};

interface ItemProps {
  readonly onClick?: (value: number) => void;
  readonly onRightButtonDown?: (value: number) => void;
  readonly onRightButtonUp?: (value: number) => void;
  readonly value: number;
}

const Item = ({ onClick, onRightButtonDown, onRightButtonUp, value }: ItemProps) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.playerCountMenu' });

  const handleClick = () => onClick?.(value);

  const handleRightButtonDown = () => onRightButtonDown?.(value);

  const handleRightButtonUp = () => onRightButtonUp?.(value);

  return (
    <MenuButton
      assets={assets.playerCountButtons[value]}
      label={t('playerCount', { count: value })}
      onClick={handleClick}
      onRightButtonDown={handleRightButtonDown}
      onRightButtonUp={handleRightButtonUp}
    />
  );
};
