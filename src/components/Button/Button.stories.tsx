import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Default Button Text',
    loading: false,
    disabled: false,
  },
  argTypes: {
    loading: {
      control: 'boolean',
      description: 'Is button in loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Is button disabled',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
