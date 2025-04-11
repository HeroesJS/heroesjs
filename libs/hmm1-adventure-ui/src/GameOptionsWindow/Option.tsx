import type {MouseEvent} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

import {Checkbox, type CheckboxAssets, PositionedComponent, type PositionProps, Text} from '@heroesjs/hmm1-base-ui';

interface Props extends PositionProps {
  readonly assets: CheckboxAssets;
  readonly checked?: boolean;
  readonly heading: string;
  readonly onChange?: (checked: boolean) => void;
  readonly onClick?: () => void;
  readonly onMouseDown?: (e: MouseEvent) => void;
  readonly valueLabel?: string;
}

export const Option = ({assets, checked = false, heading, onChange, onClick, onMouseDown, valueLabel, x, y}: Props) => {
  const {t} = useTranslation(['adventure', 'core'], {keyPrefix: 'component.gameOptionsWindow'});

  return (
    <Root aria-label={heading} role="option" x={x} y={y}>
      <Heading align="center" size="small" width={80} y={0}>
        {heading}
      </Heading>
      <Checkbox
        assets={assets}
        checked={checked}
        label={heading}
        onChange={onChange}
        onClick={onClick}
        onMouseDown={onMouseDown}
      />
      <Label align="center" size="small" width={66} y={0}>
        {valueLabel || t(`core:onOff.${checked}`)}
      </Label>
    </Root>
  );
};

const Root = styled(PositionedComponent)({
  height: 65,
  width: 65,
});

const Heading = styled(Text)({
  transform: 'translateY(-100%) translateY(-1px) translateX(-8px)',
});

const Label = styled(Text)({
  bottom: 0,
  transform: 'translateY(100%) translateX(-1px)',
});
