import type { Meta, StoryObj } from '@storybook/react';
import { MainScreen } from './MainScreen';

const meta = {
  component: MainScreen,
} satisfies Meta<typeof MainScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
