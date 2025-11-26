import type { Meta, StoryObj } from '@storybook/react';

import { MainMenu } from './MainMenu';

const meta = {
  component: MainMenu,
} satisfies Meta<typeof MainMenu>;

export default meta;

type Story = StoryObj<typeof MainMenu>;

export const Primary: Story = {};
