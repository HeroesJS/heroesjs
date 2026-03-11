import type { Meta, StoryObj } from '@storybook/react-vite';

import { WaitingForDirectConnectionModal } from './WaitingForDirectConnectionModal';

const meta = {
  args: {
    open: true,
  },
  component: WaitingForDirectConnectionModal,
} satisfies Meta<typeof WaitingForDirectConnectionModal>;

export default meta;

type Story = StoryObj<typeof WaitingForDirectConnectionModal>;

export const Primary: Story = {};
