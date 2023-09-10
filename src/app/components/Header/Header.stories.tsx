import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

export default {
  component: Header,
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};
