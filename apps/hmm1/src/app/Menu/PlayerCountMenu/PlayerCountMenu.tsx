import {range} from 'lodash';
import {Fragment, type MouseEvent} from 'react';
import {useTranslation} from 'react-i18next';

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

export const PlayerCountMenu = ({onCancelClick, onCountClick, x, y}: Props) => {
  const {t} = useTranslation('main', {keyPrefix: 'component.playerCountMenu'});

  const twoPlayerInfoModal = useModal();
  const threePlayerInfoModal = useModal();
  const fourPlayerInfoModal = useModal();

  const infoModals: Record<number, UseModalResult> = {
    2: twoPlayerInfoModal,
    3: threePlayerInfoModal,
    4: fourPlayerInfoModal,
  };

  const cancelInfoModal = useModal();

  return (
    <Menu label={t('title')} x={x} y={y}>
      {range(2, 5).map((count) => (
        <Fragment key={count}>
          <Item onClick={onCountClick} onMouseDown={infoModals[count].onMouseDown} value={count} />
          <Modal open={infoModals[count].isOpen} x={177} y={29}>
            {t(`playerCountInfo_${count as 2 | 3 | 4}`)}
          </Modal>
        </Fragment>
      ))}
      <MenuSeparator />
      <MenuButton
        assets={assets.cancelButton}
        label={t('cancel')}
        onClick={onCancelClick}
        onMouseDown={cancelInfoModal.onMouseDown}
      />
      <Modal open={cancelInfoModal.isOpen} x={177} y={29}>
        {t('cancelInfo')}
      </Modal>
    </Menu>
  );
};

interface ItemProps {
  readonly onClick?: (value: number) => void;
  readonly onMouseDown?: (e: MouseEvent) => void;
  readonly value: number;
}

const Item = ({onClick, onMouseDown, value}: ItemProps) => {
  const {t} = useTranslation('main', {keyPrefix: 'component.playerCountMenu'});

  const handleClick = () => onClick?.(value);

  return (
    <MenuButton
      assets={assets.playerCountButtons[value]}
      label={t('playerCount', {count: value})}
      onClick={handleClick}
      onMouseDown={onMouseDown}
    />
  );
};
