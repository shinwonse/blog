import type { Meta, StoryObj } from '@storybook/react';

import TimeLine from './TimeLine';

export default {
  component: TimeLine,
} as Meta<typeof TimeLine>;

type Story = StoryObj<typeof TimeLine>;

export const Default: Story = {
  args: {},
};
