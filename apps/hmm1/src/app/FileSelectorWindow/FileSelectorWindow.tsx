import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Button, PositionedComponent, type PositionProps, Text, Window } from '@heroesjs/hmm1-base-ui';

import * as assets from './assets';
import { ScenarioDetail, type ScenarioInfo } from './ScenarioDetail';

interface Props extends PositionProps {
  readonly items?: readonly string[];
  readonly onCancelClick?: () => void;
  readonly onConfirmClick?: () => void;
  readonly onItemClick?: (item: string) => void;
  readonly scenarioInfo?: ScenarioInfo;
  readonly selectedItem?: string;
  readonly showScenarioInfo?: boolean;
}

export const FileSelectorWindow = ({
  items = [],
  onCancelClick,
  onConfirmClick,
  onItemClick,
  scenarioInfo,
  selectedItem,
  showScenarioInfo,
  x,
  y,
}: Props) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.fileSelectorWindow' });

  return (
    <Window
      background={assets.background}
      height={showScenarioInfo ? 380 : 331}
      label={t('title')}
      width={320}
      x={x}
      y={y}
    >
      <Text heading size="large" x={111} y={19}>
        {t('loadTitle')}:
      </Text>
      <List items={items} onItemClick={onItemClick} selectedItem={selectedItem} x={59} y={42} />
      <Input value={selectedItem} x={48} y={253} />
      <Button
        assets={assets.okayButton}
        disabled={!selectedItem}
        label={t('confirmLabel')}
        onClick={onConfirmClick}
        x={36}
        y={280}
      />
      <Button assets={assets.cancelButton} label={t('cancelLabel')} onClick={onCancelClick} x={189} y={280} />
      {showScenarioInfo && <ScenarioDetail {...scenarioInfo} y={318} />}
    </Window>
  );
};

interface ListProps extends PositionProps {
  readonly items?: readonly string[];
  readonly onItemClick?: (value: string) => void;
  readonly selectedItem?: string;
}

const List = ({ items = [], onItemClick, selectedItem, x, y }: ListProps) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.fileSelectorWindow' });

  return (
    <PositionedComponent aria-label={t('itemsHeading')} as="div" role="listbox" x={x} y={y}>
      {items.map((item, i) => (
        <Item key={i} onClick={onItemClick} selected={item === selectedItem} value={item} y={i * 20} />
      ))}
    </PositionedComponent>
  );
};

interface ItemProps extends PositionProps {
  readonly onClick?: (value: string) => void;
  readonly selected?: boolean;
  readonly value: string;
}

const Item = ({ onClick, selected, value, x, y }: ItemProps) => {
  const handleClick = useCallback(() => onClick?.(value), [onClick, value]);

  return (
    <ItemRoot aria-selected={selected} as="button" onClick={handleClick} role="option" x={x} y={y}>
      <Text selected={selected} size="large">
        {value}
      </Text>
    </ItemRoot>
  );
};

const ItemRoot = styled(PositionedComponent)({
  textAlign: 'center',
  width: 200,
});

interface InputProps extends PositionProps {
  readonly value?: string;
}

const Input = ({ value, x, y }: InputProps) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.fileSelectorWindow' });

  return (
    <InputRoot aria-label={t('fileName')} role="textbox" x={x} y={y}>
      <Text align="center" size="large" width={224} x={0} y={1}>
        {value}
      </Text>
    </InputRoot>
  );
};

const InputRoot = styled(PositionedComponent)({
  background: `url(${assets.inputBackground})`,
  height: 19,
  width: 225,
});
