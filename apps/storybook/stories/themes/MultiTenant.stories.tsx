import type { Meta, StoryObj } from "@storybook/react-vite";
import { TENANT_THEMES } from "@halort/themes";
import { Button, Card, CardTitle } from "@halort/web";

const meta: Meta = { title: "Themes/Multi-Tenant" };
export default meta;
type Story = StoryObj;

export const TenantThemes: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {TENANT_THEMES.map((theme) => (
        <Card key={theme.id}>
          <CardTitle>{theme.name}</CardTitle>
          <p className="mt-2 text-sm text-muted">{theme.description}</p>
          <p className="mt-3 font-mono text-xs text-muted">{theme.className}</p>
          <Button className="mt-4" size="sm">
            Preview Theme
          </Button>
        </Card>
      ))}
    </div>
  ),
};

export const DarkLightModes: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-muted">
        Use the toolbar above to switch between <strong>Dark</strong> and{" "}
        <strong>Light</strong> modes. Theme preference persists via localStorage key{" "}
        <code className="rounded bg-surface-muted px-1">halort-theme</code>.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button>Primary Action</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="warm">Warm CTA</Button>
      </div>
    </div>
  ),
};
