import type { Meta, StoryObj } from "@storybook/react-vite";
import { colors, spacing, radius, typography } from "@halort/tokens";

const meta: Meta = {
  title: "Foundations/Colors",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj;

const swatches = Object.entries(colors);

export const BrandColors: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {swatches.map(([name, value]) => (
        <div key={name} className="overflow-hidden rounded-xl border border-border">
          <div className="h-20" style={{ backgroundColor: value }} />
          <div className="space-y-1 p-3">
            <p className="text-sm font-semibold capitalize">{name}</p>
            <p className="font-mono text-xs text-muted">{value}</p>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const SemanticTokens: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {[
        "background",
        "foreground",
        "primary",
        "accent",
        "surface",
        "muted",
        "border",
        "success",
        "warning",
        "danger",
      ].map((token) => (
        <div key={token} className="overflow-hidden rounded-xl border border-border">
          <div className={`h-16 bg-${token}`} style={{ backgroundColor: `var(--${token})` }} />
          <p className="p-3 text-sm font-medium">--{token}</p>
        </div>
      ))}
    </div>
  ),
};

export const SpacingScale: Story = {
  render: () => (
    <div className="space-y-3">
      {Object.entries(spacing).map(([key, value]) => (
        <div key={key} className="flex items-center gap-4">
          <span className="w-8 text-sm text-muted">{key}</span>
          <div className="h-4 rounded bg-primary" style={{ width: value }} />
          <span className="font-mono text-xs text-muted">{value}</span>
        </div>
      ))}
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div className="space-y-4">
      {Object.entries(typography.fontSize).map(([key, value]) => (
        <p key={key} style={{ fontSize: value }}>
          {key} — {value} — The quick brown fox
        </p>
      ))}
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {Object.entries(radius).map(([key, value]) => (
        <div
          key={key}
          className="flex h-16 w-16 items-center justify-center border border-border bg-surface-muted text-xs"
          style={{ borderRadius: value }}
        >
          {key}
        </div>
      ))}
    </div>
  ),
};
