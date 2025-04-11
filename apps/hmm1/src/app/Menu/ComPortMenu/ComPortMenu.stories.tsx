import type {Meta, StoryObj} from '@storybook/react';

import {ComPortMenu} from './ComPortMenu';

const meta: Meta<typeof ComPortMenu> = {
  component: ComPortMenu,
};

export default meta;

type Story = StoryObj<typeof ComPortMenu>;

export const Primary: Story = {};
