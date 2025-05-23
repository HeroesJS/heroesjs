import type {Meta, StoryObj} from '@storybook/react';
import {range} from 'lodash';

import {Placeholder} from '../Placeholder';

import {Menu} from './Menu';
import {MenuSeparator} from './MenuSeparator';

const meta: Meta<typeof Menu> = {
  component: Menu,
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Primary: Story = {
  args: {
    children: range(5).map((i) => (
      <MenuSeparator>
        <Placeholder label={`Item ${i}`} />
      </MenuSeparator>
    )),
  },
};
