import type { Meta, StoryObj } from '@storybook/react-vite';

import { AdventureOptionsWindow } from './AdventureOptionsWindow';

const meta = {
  args: {
    open: true,
  },
  component: AdventureOptionsWindow,
} satisfies Meta<typeof AdventureOptionsWindow>;

export default meta;

type Story = StoryObj<typeof AdventureOptionsWindow>;

export const Primary: Story = {};
