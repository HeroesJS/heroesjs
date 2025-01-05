import type { Meta, StoryObj } from '@storybook/react';

import { NewGameWindow } from './NewGameWindow';

const meta: Meta<typeof NewGameWindow> = {
  args: {
    open: true,
  },
  component: NewGameWindow,
};

export default meta;

type Story = StoryObj<typeof NewGameWindow>;

export const Preview: Story = {};
