import styled from 'styled-components';

import type { PositionProps } from '../core';

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

interface Props extends PositionProps {
  readonly onClick?: () => void;
  readonly value: PlayerColor;
}

export const BannerColor = ({ onClick, value, x, y }: Props) => (
  <Root onClick={onClick} src={assets[value]} x={x} y={y} />
);

const Root = styled.img<Pick<Props, 'x' | 'y'>>(({ x, y }) => ({
  position: 'absolute',
  top: y,
  left: x,
}));
