import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';
import { assets } from './storyAssets';

const meta = {
  args: {
    assets,
  },
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};
