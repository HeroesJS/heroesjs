import type { Meta, StoryObj } from '@storybook/react-vite';

import { DialingTelephoneNumberModal } from './DialingTelephoneNumberModal';

const meta = {
  args: {
    open: true,
  },
  component: DialingTelephoneNumberModal,
} satisfies Meta<typeof DialingTelephoneNumberModal>;

export default meta;

type Story = StoryObj<typeof DialingTelephoneNumberModal>;

export const Primary: Story = {};
