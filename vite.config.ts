import { defineConfig, mergeConfig, type UserConfig } from 'vite';

const baseConfig = defineConfig({
  test: {
    coverage: {
      exclude: ['**/.storybook', 'src/**/*.stories.tsx', '**/storybook-static'],
    },
  },
});

export const mergeWithBaseConfig = (config: UserConfig) => mergeConfig(baseConfig, config);

export default baseConfig;