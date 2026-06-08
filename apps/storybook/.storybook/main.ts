import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(ts|tsx)"],
  addons: [getAbsolutePath("@storybook/addon-docs"), getAbsolutePath("@storybook/addon-a11y")],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        dedupe: ["react", "react-dom"],
      },
    };
  },
  staticDirs: ["../public"],
  docs: {
    defaultName: "Documentation",
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
