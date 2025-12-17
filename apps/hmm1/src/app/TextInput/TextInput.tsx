import { camelCase } from 'lodash';
import { type ChangeEvent, type KeyboardEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { PositionedComponent, type PositionProps } from '../PositionedComponent';

const Caret = '@';

interface TextInputProps extends PositionProps {
  readonly className?: string;
  readonly label?: string;
  readonly onChange?: (value: string) => void;
  readonly value?: string;
}

export function TextInput({ className, label, onChange, value = '', x, y }: TextInputProps) {
  const ref = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [innerValue, setInnerValue] = useState(value);

  useEffect(() => {
    ref.current?.setSelectionRange(innerValue.length, innerValue.length);
  });

  useEffect(() => {
    if (!isFocused) {
      ref.current?.blur();
    }
  }, [isFocused]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const handleBlur = () => {
    if (isFocused) {
      ref.current?.focus();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInnerValue(e.target.value.replace(new RegExp(`${Caret}$`), ''));

  const handleClick = () => ref.current?.setSelectionRange(innerValue.length, innerValue.length);

  const handleFocus = () => setIsFocused(true);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.code)) {
      e.preventDefault();
    }

    if (e.code === 'Escape') {
      setInnerValue(value);

      setIsFocused(false);
    }

    if (e.code === 'Enter') {
      onChange?.(innerValue);

      setIsFocused(false);
    }
  };

  return (
    <Root
      aria-label={label}
      as="input"
      className={className}
      maxLength={23}
      name={camelCase(label)}
      onBlur={handleBlur}
      onChange={handleChange}
      onClick={handleClick}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      ref={ref}
      value={innerValue + (isFocused ? Caret : '')}
      x={x}
      y={y}
    />
  );
}

const Root = styled(PositionedComponent)({
  background: 'transparent',
  border: 'none',
  boxSizing: 'border-box',
  caretColor: 'transparent',
  color: '#fff',
  fontFamily: '"Heroes 1"',
  outline: 0,
  paddingBottom: 4,
  textAlign: 'center',
  '-webkit-font-smoothing': 'none',
});
