import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Card, CardTitle, CardDescription, Input } from "@halort/web";
import { ThemeToggle } from "@halort/themes";

const meta: Meta = { title: "Mobile/Mobile Screens", parameters: { layout: "centered" } };
export default meta;
type Story = StoryObj;

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[375px] overflow-hidden rounded-[2rem] border-4 border-border bg-background shadow-xl">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="text-sm font-semibold">HaloRT</span>
        <ThemeToggle />
      </div>
      {children}
    </div>
  );
}

export const MobileLogin: Story = {
  render: () => (
    <PhoneFrame>
      <div className="space-y-4 p-6">
        <CardTitle>Masuk</CardTitle>
        <CardDescription>Portal warga HaloRT Mobile</CardDescription>
        <Input label="Email / No. HP" placeholder="nama@email.com" />
        <Input label="Password" type="password" placeholder="••••••••" />
        <Button className="w-full">Masuk</Button>
      </div>
    </PhoneFrame>
  ),
};

export const MobileDashboard: Story = {
  render: () => (
    <PhoneFrame>
      <div className="grid gap-3 p-4">
        <Card>
          <CardTitle>Iuran Juni</CardTitle>
          <CardDescription>Rp 150.000 · Jatuh tempo 15 Jun</CardDescription>
        </Card>
        <Card>
          <CardTitle>Pengumuman Terbaru</CardTitle>
          <CardDescription>Rapat warga Sabtu pukul 19:00</CardDescription>
        </Card>
      </div>
    </PhoneFrame>
  ),
};

export const ResidentProfile: Story = {
  render: () => (
    <PhoneFrame>
      <div className="space-y-3 p-4">
        <Card>
          <CardTitle>Budi Santoso</CardTitle>
          <CardDescription>Unit A-12 · Ketua RT</CardDescription>
        </Card>
      </div>
    </PhoneFrame>
  ),
};

export const CommunityNews: Story = {
  render: () => (
    <PhoneFrame>
      <div className="space-y-3 p-4">
        {["Rapat Warga", "Maintenance Lift", "Kampanye Taman"].map((title) => (
          <Card key={title}>
            <CardTitle>{title}</CardTitle>
            <CardDescription>2 jam yang lalu</CardDescription>
          </Card>
        ))}
      </div>
    </PhoneFrame>
  ),
};
