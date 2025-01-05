import type { Meta, StoryObj } from '@storybook/react';

import Carousel from './carousel';

const meta: Meta<typeof Carousel> = {
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Primary: Story = {
  args: {},
};
