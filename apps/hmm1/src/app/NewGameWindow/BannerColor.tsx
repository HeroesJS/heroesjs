import styled from 'styled-components';

import { PositionedComponent, type PositionProps } from '@heroesjs/hmm1-base-ui';

import blue from './assets/bannerColor/blue.png';
import green from './assets/bannerColor/green.png';
import red from './assets/bannerColor/red.png';
import yellow from './assets/bannerColor/yellow.png';

export enum PlayerColor {
  Blue = 'blue',
  Green = 'green',
  Red = 'red',
  Yellow = 'yellow',
}

export const playerColors: readonly PlayerColor[] = [
  PlayerColor.Blue,
  PlayerColor.Green,
  PlayerColor.Red,
  PlayerColor.Yellow,
];

const assets: Record<PlayerColor, string> = {
  [PlayerColor.Blue]: blue,
  [PlayerColor.Green]: green,
  [PlayerColor.Red]: red,
  [PlayerColor.Yellow]: yellow,
};

const labels: Record<PlayerColor, string> = {
  [PlayerColor.Blue]: 'Blue',
  [PlayerColor.Green]: 'Green',
  [PlayerColor.Red]: 'Red',
  [PlayerColor.Yellow]: 'Yellow',
};

interface Props extends PositionProps {
  readonly onClick?: () => void;
  readonly value: PlayerColor;
}

export const BannerColor = ({ onClick, value, x, y }: Props) => (
  <Root x={x} y={y}>
    <span aria-label="Banner Color" role="radiogroup">
      {playerColors.map((color) => (
        <span aria-checked={color === value} key={color} role="radio">
          {labels[color]}
        </span>
      ))}
    </span>
    <button aria-label="Change Banner Color" onClick={onClick}>
      <img alt="" src={assets[value]} />
    </button>
  </Root>
);

const Root = styled(PositionedComponent)({
  fontSize: 0,
});
