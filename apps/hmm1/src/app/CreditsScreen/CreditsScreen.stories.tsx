import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { CreditsScreen } from './CreditsScreen';

const meta: Meta<typeof CreditsScreen> = {
  argTypes: {
    onClick: { action: 'Click' },
  },
  component: CreditsScreen,
};

export default meta;

type Story = StoryObj<typeof CreditsScreen>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByRole('heading', { name: /credits/i })).toBeInTheDocument();
  },
};
