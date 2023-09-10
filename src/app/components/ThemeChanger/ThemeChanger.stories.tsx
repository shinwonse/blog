import type { Meta, StoryObj } from '@storybook/react';

import ThemeChanger from './ThemeChanger';

export default {
  component: ThemeChanger,
} as Meta<typeof ThemeChanger>;

type Story = StoryObj<typeof ThemeChanger>;

export const Default: Story = {
  args: {},
};
