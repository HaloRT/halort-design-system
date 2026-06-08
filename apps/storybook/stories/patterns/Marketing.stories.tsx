import type { Meta, StoryObj } from "@storybook/react-vite";
import { MarketingLandingPage } from "@halort/web";

const meta: Meta = {
  title: "Patterns/Marketing Website",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const HaloRTCompanyProfile: Story = {
  render: () => <MarketingLandingPage />,
};

export const ResidentRegistration: Story = {
  render: () => (
    <div className="mx-auto max-w-lg space-y-6 p-6">
      <h2 className="text-2xl font-bold">Registrasi Warga</h2>
      <p className="text-muted">
        Alur registrasi warga baru ke portal komunitas HaloRT.
      </p>
    </div>
  ),
};

export const VisitorApproval: Story = {
  render: () => (
    <div className="mx-auto max-w-lg p-6">
      <h2 className="text-2xl font-bold">Persetujuan Tamu</h2>
      <p className="mt-2 text-muted">Workflow persetujuan kunjungan tamu oleh warga.</p>
    </div>
  ),
};

export const FundraisingCampaign: Story = {
  render: () => (
    <div className="mx-auto max-w-lg p-6">
      <h2 className="text-2xl font-bold">Kampanye Crowdfunding</h2>
      <p className="mt-2 text-muted">Pembuatan dan monitoring kampanye donasi komunitas.</p>
    </div>
  ),
};
