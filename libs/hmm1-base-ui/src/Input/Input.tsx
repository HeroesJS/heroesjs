import {type ChangeEvent, useCallback} from 'react';
import styled from 'styled-components';

import {PositionedComponent, type PositionProps} from '../PositionedComponent';

interface Props extends PositionProps {
  readonly background: string;
  readonly label?: string;
  readonly onChange?: (value: string) => void;
  readonly value?: string;
  readonly width: number;
}

export const Input = ({background, label, width, onChange, value, x, y}: Props) => {
  const handlerChange = useCallback((e: ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value), [onChange]);

  return (
    <Root
      aria-label={label}
      as="input"
      background={background}
      onChange={handlerChange}
      type="text"
      value={value}
      width={width}
      x={x}
      y={y}
    />
  );
};

const Root = styled(PositionedComponent)<Pick<Props, 'background' | 'width'>>(({background, width}) => ({
  background: `url(${background})`,
  border: 'none',
  color: '#fff',
  fontFamily: "'Heroes 1'",
  fontSize: 13,
  lineHeight: '16px',
  outline: 0,
  padding: 0,
  paddingTop: 1,
  textAlign: 'center',
  width,
}));
