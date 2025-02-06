import type { Meta, StoryObj } from '@storybook/react';

import { SystemButton } from './SystemButton';

const meta: Meta<typeof SystemButton> = {
  component: SystemButton,
};

export default meta;

type Story = StoryObj<typeof SystemButton>;

export const Primary: Story = {};
