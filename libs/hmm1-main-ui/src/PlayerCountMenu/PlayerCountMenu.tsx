import { useTranslation } from 'react-i18next';

import { Button, Menu, MenuItem, useModal } from '@heroesjs/hmm1-core-ui';

import { cancel, countAssets } from './assets';

interface PlayerCountMenuProps {
  readonly onCancelClick?: () => void;
  readonly onValueClick?: (value: number) => void;
  readonly x?: number;
  readonly y?: number;
}

export function PlayerCountMenu({ onCancelClick, onValueClick, x, y }: PlayerCountMenuProps) {
  const { t } = useTranslation('main', { keyPrefix: 'component.playerCountMenu' });

  const infoModals: Readonly<Record<number, ReturnType<typeof useModal>>> = {
    2: useModal(),
    3: useModal(),
    4: useModal(),
  };

  const [CancelInfoModal, cancelInfoModal] = useModal();

  return (
    <Menu label={t('label')} x={x} y={y}>
      {[2, 3, 4].map((count) => {
        const [InfoModal, infoModal] = infoModals[count];

        return (
          <MenuItem key={count}>
            <Button
              assets={countAssets[count]}
              label={t('count.label', { count })}
              onClick={() => onValueClick?.(count)}
              onMouseDown={infoModal.onMouseDown}
            />
            <InfoModal>{t(`count.info_${count}`)}</InfoModal>
          </MenuItem>
        );
      })}
      <MenuItem />
      <MenuItem>
        <Button
          assets={cancel}
          label={t('cancel.label')}
          onClick={onCancelClick}
          onMouseDown={cancelInfoModal.onMouseDown}
        />
        <CancelInfoModal>{t('cancel.info')}</CancelInfoModal>
      </MenuItem>
    </Menu>
  );
}
