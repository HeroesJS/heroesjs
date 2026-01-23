import type { Meta, StoryObj } from '@storybook/react-vite';

import { AdventureButtons } from './AdventureButtons';

const meta = {
  component: AdventureButtons,
} satisfies Meta<typeof AdventureButtons>;

export default meta;

type Story = StoryObj<typeof AdventureButtons>;

export const Primary: Story = {};
