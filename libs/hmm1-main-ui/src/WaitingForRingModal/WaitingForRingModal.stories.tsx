import type { Meta, StoryObj } from '@storybook/react-vite';

import { WaitingForRingModal } from './WaitingForRingModal';

const meta = {
  args: {
    open: true,
  },
  component: WaitingForRingModal,
} satisfies Meta<typeof WaitingForRingModal>;

export default meta;

type Story = StoryObj<typeof WaitingForRingModal>;

export const Primary: Story = {};
