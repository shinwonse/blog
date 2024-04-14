import type { Meta, StoryObj } from '@storybook/react';

import PostPreview from './PostPreview';

const meta: Meta<typeof PostPreview> = {
  component: PostPreview,
};

export default meta;
type Story = StoryObj<typeof PostPreview>;

export const Primary: Story = {
  args: {
    author: 'John Doe',
    coverImage: 'https://source.unsplash.com/random/100x100',
    title: 'Hello, world!',
  },
};
