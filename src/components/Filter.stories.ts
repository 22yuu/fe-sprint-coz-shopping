import { Meta, StoryObj } from '@storybook/react';

import Filter from './Filter';
import { useState } from 'react';

const meta: Meta<typeof Filter> = {
  title: 'components/Filter',
  component: Filter,
};

export default meta;

type Story = StoryObj<typeof Filter>;

export const Default: Story = {
  args: {
    filter: 'All',
    onChangeFilter: () => {
      console.log('hello');
    },
  },
};
