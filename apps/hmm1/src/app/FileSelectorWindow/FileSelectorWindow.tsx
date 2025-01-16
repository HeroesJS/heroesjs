import { useCallback } from 'react';
import styled from 'styled-components';

import { Button, PositionedComponent, type PositionProps, Text } from '../base';

import background from './assets/background.jpg';
import cancelDisabled from './assets/cancel/disabled.png';
import cancelEnabled from './assets/cancel/enabled.png';
import inputBackground from './assets/input-background.jpg';
import okayDisabled from './assets/okay/disabled.png';
import okayEnabled from './assets/okay/enabled.png';
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
}: Props) => (
  <Root aria-label="File Selector Window" role="dialog" showScenarioInfo={showScenarioInfo} x={x} y={y}>
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
);

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
  return (
    <PositionedComponent aria-label="Items" as="div" role="listbox" x={x} y={y}>
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
  background: 'transparent',
  border: 0,
  padding: 0,
  textAlign: 'center',
  width: 200,
});

interface InputProps extends PositionProps {
  readonly value?: string;
}

const Input = ({ value, x, y }: InputProps) => (
  <InputRoot aria-label="File Name" role="textbox" x={x} y={y}>
    <Text align="center" size="large" width={224} x={0} y={1}>
      {value}
    </Text>
  </InputRoot>
);

const InputRoot = styled(PositionedComponent)({
  background: `url(${inputBackground})`,
  height: 19,
  width: 225,
});
