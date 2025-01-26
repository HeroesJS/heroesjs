import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Button, type ButtonAssets, PositionedComponent, type PositionProps, Text } from '@heroesjs/hmm1-base-ui';

import background from './assets/background.jpg';
import cancelDisabled from './assets/cancel/disabled.png';
import cancelEnabled from './assets/cancel/enabled.png';
import inputBackground from './assets/input-background.jpg';
import okayDisabled from './assets/okay/disabled.png';
import okayEnabled from './assets/okay/enabled.png';
import { ScenarioDetail, type ScenarioInfo } from './ScenarioDetail';

const okayButtonAssets: ButtonAssets = {
  disabled: okayDisabled,
  enabled: okayEnabled,
};

const cancelButtonAssets: ButtonAssets = {
  disabled: cancelDisabled,
  enabled: cancelEnabled,
};

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
  const { t } = useTranslation('main', { keyPrefix: 'fileSelectorWindow' });

  return (
    <Root aria-label={t('title')} role="dialog" showScenarioInfo={showScenarioInfo} x={x} y={y}>
      <Text heading size="large" x={111} y={19}>
        {t('loadTitle')}:
      </Text>
      <List items={items} onItemClick={onItemClick} selectedItem={selectedItem} x={59} y={42} />
      <Input value={selectedItem} x={48} y={253} />
      <Button
        assets={okayButtonAssets}
        disabled={!selectedItem}
        label={t('confirmLabel')}
        onClick={onConfirmClick}
        x={36}
        y={280}
      />
      <Button assets={cancelButtonAssets} label={t('cancelLabel')} onClick={onCancelClick} x={189} y={280} />
      {showScenarioInfo && <ScenarioDetail {...scenarioInfo} y={318} />}
    </Root>
  );
};

const Root = styled(PositionedComponent)<Pick<Props, 'showScenarioInfo'>>(({ showScenarioInfo }) => ({
  background: `url(${background})`,
  height: showScenarioInfo ? 380 : 331,
  width: 320,
}));

interface ListProps extends PositionProps {
  readonly items?: readonly string[];
  readonly onItemClick?: (value: string) => void;
  readonly selectedItem?: string;
}

const List = ({ items = [], onItemClick, selectedItem, x, y }: ListProps) => {
  const { t } = useTranslation('main', { keyPrefix: 'fileSelectorWindow' });

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
  const { t } = useTranslation('main', { keyPrefix: 'fileSelectorWindow' });

  return (
    <InputRoot aria-label={t('fileName')} role="textbox" x={x} y={y}>
      <Text align="center" size="large" width={224} x={0} y={1}>
        {value}
      </Text>
    </InputRoot>
  );
};

const InputRoot = styled(PositionedComponent)({
  background: `url(${inputBackground})`,
  height: 19,
  width: 225,
});
