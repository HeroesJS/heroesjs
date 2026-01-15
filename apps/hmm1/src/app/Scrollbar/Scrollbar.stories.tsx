import { Meta, StoryObj } from '@storybook/react';

import { Scrollbar } from './Scrollbar';

const meta = {
  args: {
    height: 200,
  },
  component: Scrollbar,
} satisfies Meta<typeof Scrollbar>;

export default meta;

type Story = StoryObj<typeof Scrollbar>;

export const Primary: Story = {};
