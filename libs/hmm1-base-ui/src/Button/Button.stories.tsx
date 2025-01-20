import type { Meta, StoryObj } from '@storybook/react';

import disabledImage from './assets/disabled.jpg';
import enabledImage from './assets/enabled.jpg';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  args: {
    assets: {
      disabled: disabledImage,
      enabled: enabledImage,
    },
  },
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
