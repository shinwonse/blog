import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';

export default {
  component: Card,
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    className: 'max-w-xs',
    description: '안녕하세요. 프론트엔드 개발자 신원세입니다.',
    title: '개발자 신원세',
  },
};
