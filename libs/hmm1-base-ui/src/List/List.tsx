import styled from 'styled-components';

import { PositionedComponent, type PositionProps } from '../PositionedComponent';
import { Text } from '../Text';

const itemHeight = 14;

interface Props extends PositionProps {
  readonly items?: readonly string[];
  readonly itemsPerColumn?: number;
  readonly label?: string;
  readonly width: number;
}

export const List = ({ items = [], itemsPerColumn, label, width, x, y }: Props) => {
  return (
    <Root
      aria-label={label}
      as="ul"
      height={itemsPerColumn ? itemsPerColumn * itemHeight : undefined}
      width={width}
      x={x}
      y={y}
    >
      {items.map((item, i) => (
        <Item key={i}>
          <Text shadow size="large">
            {item}
          </Text>
        </Item>
      ))}
    </Root>
  );
};

const Root = styled(PositionedComponent)<Pick<Props, 'width'> & { readonly height?: number }>(({ height, width }) => ({
  columnGap: 4,
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  height,
  lineHeight: '13px',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  textAlign: 'center',
  width,
}));

const Item = styled.li({
  height: itemHeight,
});
