import type { Meta, StoryObj } from '@storybook/react-vite';

import { EnterTelephoneNumberModal } from './EnterTelephoneNumberModal';

const meta = {
  args: {
    open: true,
  },
  component: EnterTelephoneNumberModal,
} satisfies Meta<typeof EnterTelephoneNumberModal>;

export default meta;

type Story = StoryObj<typeof EnterTelephoneNumberModal>;

export const Primary: Story = {};
