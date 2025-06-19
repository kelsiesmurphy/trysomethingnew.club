import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    // add more as needed
  ],
};

export default config;
