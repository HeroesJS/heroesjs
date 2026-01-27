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

export const ViewWorldInfo: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.pointer({
      target: canvas.getByRole('button', { name: /^view world$/i }),
      keys: '[MouseRight>]',
    });
  },
};
