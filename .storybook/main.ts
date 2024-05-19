import type { StorybookConfig } from '@storybook/nextjs';

import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@chromatic-com/storybook'
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },

  docs: {},

  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ];
    }
    return config;
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },
};

export default config;
