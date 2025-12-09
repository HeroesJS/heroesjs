import type { Meta, StoryObj } from '@storybook/react';

import { CampaignMenu } from './CampaignMenu';

const meta = {
  component: CampaignMenu,
} satisfies Meta<typeof CampaignMenu>;

export default meta;

type Story = StoryObj<typeof CampaignMenu>;

export const Primary: Story = {};
