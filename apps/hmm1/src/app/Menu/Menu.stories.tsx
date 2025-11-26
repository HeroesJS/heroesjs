import type { Meta, StoryObj } from '@storybook/react';
import { range } from 'lodash';

import { Button } from '../Button';
import { Menu } from './Menu';
import { button } from './storyAssets';

const meta = {
  args: {
    label: 'Menu',
  },
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof Menu>;

export const Primary: Story = {
  args: {
    children: <Button assets={button} label="Item" />,
  },
};

export const Empty: Story = {};

export const Full: Story = {
  args: {
    children: range(5).map((i) => <Button assets={button} label={`Item ${i}`} />),
  },
};
