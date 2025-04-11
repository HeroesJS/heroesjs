import type {Meta, StoryObj} from '@storybook/react';

import {HostGuestMenu} from './HostGuestMenu';

const meta: Meta<typeof HostGuestMenu> = {
  component: HostGuestMenu,
};

export default meta;

type Story = StoryObj<typeof HostGuestMenu>;

export const Primary: Story = {};

export const Detailed: Story = {
  args: {
    detailed: true,
  },
};
