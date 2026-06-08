import type { Preview } from "@storybook/react-vite";
import { ThemeProvider, themeInitScript, applyTheme } from "@halort/themes";
import "../src/styles.css";

if (typeof document !== "undefined") {
  try {
    eval(themeInitScript);
  } catch {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.dataset.tenant = "halort-default";
  }
}

const preview: Preview = {
  parameters: {
    layout: "padded",
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    docs: { toc: true },
    a11y: { test: "todo" },
    options: {
      storySort: {
        order: [
          "Foundations",
          "Components",
          "Domain",
          "Patterns",
          "Mobile",
          "Emails",
          "Themes",
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = (context.globals.theme ?? "dark") as "dark" | "light";
      const tenant = (context.globals.tenant ?? "halort-default") as
        | "halort-default"
        | "cluster"
        | "apartment"
        | "developer"
        | "corporate";

      if (typeof document !== "undefined") {
        applyTheme(theme, tenant);
      }

      return (
        <ThemeProvider>
          <div className="min-h-screen bg-background font-sans text-foreground antialiased">
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
  globalTypes: {
    theme: {
      description: "Color mode",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "dark", icon: "moon", title: "Dark" },
          { value: "light", icon: "sun", title: "Light" },
        ],
        dynamicTitle: true,
      },
    },
    tenant: {
      description: "Tenant theme",
      toolbar: {
        title: "Tenant",
        icon: "paintbrush",
        items: [
          { value: "halort-default", title: "Default HaloRT" },
          { value: "cluster", title: "Cluster" },
          { value: "apartment", title: "Apartment" },
          { value: "developer", title: "Developer" },
          { value: "corporate", title: "Corporate" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "dark",
    tenant: "halort-default",
  },
};

export default preview;
