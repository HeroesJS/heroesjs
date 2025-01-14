import { useCallback } from 'react';
import styled from 'styled-components';

import { Button, type PositionProps, Text, withPosition } from '../base';

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
    <Root className={className}>
      <Text size="large" x={111} y={19}>
        File to Load:
      </Text>
      {items.map((item, i) => (
        <Item key={i} onClick={onItemClick} selected={item === selectedItem} value={item} x={59} y={42 + i * 20} />
      ))}
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

const Root = styled.div<Pick<Props, 'scenarioInfo'>>(({ scenarioInfo }) => ({
  background: `url(${background})`,
  height: scenarioInfo ? 380 : 331,
  width: 320,
}));

interface ItemProps extends PositionProps {
  readonly onClick?: (value: string) => void;
  readonly selected?: boolean;
  readonly value: string;
}

const Item = ({ onClick, selected, value, x, y }: ItemProps) => {
  const handleClick = useCallback(() => onClick?.(value), [onClick, value]);

  return (
    <Text align="center" onClick={handleClick} selected={selected} size="large" width={200} x={x} y={y}>
      {value}
    </Text>
  );
};

interface InputProps {
  readonly className?: string;
  readonly value?: string;
}

const Input = withPosition(({ className, value }: InputProps) => (
  <InputRoot className={className}>
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
