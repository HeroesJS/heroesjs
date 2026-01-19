import type { Meta, StoryObj } from '@storybook/react-vite';

import { assets } from './storyAssets';
import { Button } from './Button';

const meta = {
  args: {
    assets,
    label: 'Label',
  },
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Position: Story = {
  args: {
    x: 40,
    y: 50,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
