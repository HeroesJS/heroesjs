import type { Meta, StoryObj } from '@storybook/react';
import { range } from 'lodash';

import { Placeholder } from '../Placeholder';

import { Menu, MenuItem } from './Menu';

const menu: Meta<typeof Menu> = {
  component: Menu,
};

export default menu;

type Story = StoryObj<typeof Menu>;

export const Primary: Story = {
  args: {
    children: range(5).map((i) => (
      <MenuItem>
        <Placeholder label={`Item ${i}`} />
      </MenuItem>
    )),
  },
};
