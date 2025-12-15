import styled from 'styled-components';

import { PositionedComponent, type PositionProps } from '../PositionedComponent';

interface TextInputProps extends PositionProps {
  readonly className?: string;
  readonly label?: string;
}

export function TextInput({ className, label, x, y }: TextInputProps) {
  return (
    <Root aria-label={label} as="input" className={className} defaultValue="@" maxLength={23} readOnly x={x} y={y} />
  );
}

const Root = styled(PositionedComponent)({
  background: 'transparent',
  border: 'none',
  boxSizing: 'border-box',
  color: '#fff',
  fontFamily: '"Heroes 1"',
  outline: 0,
  textAlign: 'center',
});
