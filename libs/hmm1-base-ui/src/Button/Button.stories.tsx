import type { Meta, StoryObj } from '@storybook/react';

import { assets } from './assets';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  args: {
    assets,
  },
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
