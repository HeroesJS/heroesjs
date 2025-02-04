import type { Meta, StoryObj } from '@storybook/react';

import { GameOptionsWindow } from './GameOptionsWindow';

const meta: Meta<typeof GameOptionsWindow> = {
  component: GameOptionsWindow,
};

export default meta;

type Story = StoryObj<typeof GameOptionsWindow>;

export const Primary: Story = {};
