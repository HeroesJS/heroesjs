import type { Meta, StoryObj } from '@storybook/react-vite';

import { CreditsScreen } from './CreditsScreen';

const meta = {
  component: CreditsScreen,
} satisfies Meta<typeof CreditsScreen>;

export default meta;

type Story = StoryObj<typeof CreditsScreen>;

export const Primary: Story = {};
