import type {Meta, StoryObj} from '@storybook/react';

import {CampaignMenu} from './CampaignMenu';

const meta: Meta<typeof CampaignMenu> = {
  component: CampaignMenu,
};

export default meta;

type Story = StoryObj<typeof CampaignMenu>;

export const Primary: Story = {};
