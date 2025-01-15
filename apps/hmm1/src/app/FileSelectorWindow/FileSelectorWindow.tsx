import { useCallback } from 'react';
import styled from 'styled-components';

import { Button, Text, withPosition } from '../base';

import background from './assets/background.jpg';
import cancelDisabled from './assets/cancel/disabled.png';
import cancelEnabled from './assets/cancel/enabled.png';
import inputBackground from './assets/input-background.jpg';
import okayDisabled from './assets/okay/disabled.png';
import okayEnabled from './assets/okay/enabled.png';
import { ScenarioDetail, type ScenarioInfo } from './ScenarioDetail';

interface Props {
  readonly className?: string;
  readonly items?: readonly string[];
  readonly onCancelClick?: () => void;
  readonly onConfirmClick?: () => void;
  readonly onItemClick?: (item: string) => void;
  readonly scenarioInfo?: ScenarioInfo;
  readonly selectedItem?: string;
  readonly showScenarioInfo?: boolean;
}

export const FileSelectorWindow = withPosition(
  ({
    className,
    items = [],
    onCancelClick,
    onConfirmClick,
    onItemClick,
    scenarioInfo,
    selectedItem,
    showScenarioInfo,
  }: Props) => (
    <Root aria-label="File Selector Window" className={className} role="dialog" showScenarioInfo={showScenarioInfo}>
      <Text heading size="large" x={111} y={19}>
        File to Load:
      </Text>
      <List items={items} onItemClick={onItemClick} selectedItem={selectedItem} x={59} y={42} />
      <Input value={selectedItem} x={48} y={253} />
      <Button
        assets={{
          disabled: okayDisabled,
          enabled: okayEnabled,
        }}
        disabled={!selectedItem}
        label="Okay"
        onClick={onConfirmClick}
        x={36}
        y={280}
      />
      <Button
        assets={{
          disabled: cancelDisabled,
          enabled: cancelEnabled,
        }}
        label="Cancel"
        onClick={onCancelClick}
        x={189}
        y={280}
      />
      {showScenarioInfo && <ScenarioDetail {...scenarioInfo} y={318} />}
    </Root>
  ),
);

const Root = styled.div<Pick<Props, 'showScenarioInfo'>>(({ showScenarioInfo }) => ({
  background: `url(${background})`,
  height: showScenarioInfo ? 380 : 331,
  width: 320,
}));

interface ListProps {
  readonly className?: string;
  readonly items?: readonly string[];
  readonly onItemClick?: (value: string) => void;
  readonly selectedItem?: string;
}

const List = withPosition(({ className, items = [], onItemClick, selectedItem }: ListProps) => {
  return (
    <div aria-label="Items" className={className} role="listbox">
      {items.map((item, i) => (
        <Item key={i} onClick={onItemClick} selected={item === selectedItem} value={item} y={i * 20} />
      ))}
    </div>
  );
});

interface ItemProps {
  readonly className?: string;
  readonly onClick?: (value: string) => void;
  readonly selected?: boolean;
  readonly value: string;
}

const Item = withPosition(({ className, onClick, selected, value }: ItemProps) => {
  const handleClick = useCallback(() => onClick?.(value), [onClick, value]);

  return (
    <ItemRoot aria-selected={selected} className={className} onClick={handleClick} role="option">
      <Text selected={selected} size="large">
        {value}
      </Text>
    </ItemRoot>
  );
});

const ItemRoot = styled.button({
  background: 'transparent',
  border: 0,
  padding: 0,
  textAlign: 'center',
  width: 200,
});

interface InputProps {
  readonly className?: string;
  readonly value?: string;
}

const Input = withPosition(({ className, value }: InputProps) => (
  <InputRoot aria-label="File Name" className={className} role="textbox">
    <Text align="center" size="large" width={224} x={0} y={1}>
      {value}
    </Text>
  </InputRoot>
));

const InputRoot = styled.div({
  background: `url(${inputBackground})`,
  height: 19,
  width: 225,
});
