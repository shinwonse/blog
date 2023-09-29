import type { Meta, StoryObj } from '@storybook/react';

import Section from './Section';

export default {
  component: Section,
} as Meta<typeof Section>;

type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    title: 'Section',
  },
};
