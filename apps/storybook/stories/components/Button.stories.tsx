import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@halort/web";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "warm", "outline", "ghost", "destructive"],
    },
    size: { control: "select", options: ["default", "sm", "lg", "icon"] },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: "Primary Button", variant: "default" },
};

export const Secondary: Story = {
  args: { children: "Secondary", variant: "secondary" },
};

export const Warm: Story = {
  args: { children: "Warm CTA", variant: "warm" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="default">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="warm">Warm</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};
