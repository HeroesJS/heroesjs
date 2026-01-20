import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextInput } from './TextInput';

const meta = {
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {};
