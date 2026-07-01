import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  WelcomeEmail,
  PasswordResetEmail,
  MagicLinkEmail,
  VerificationEmail,
  PaymentReminderEmail,
  AnnouncementEmail,
  CommunityEventEmail,
  MaintenanceNoticeEmail,
  FundraisingCampaignEmail,
  VisitorApprovalEmail,
  PackageArrivalEmail,
} from "@halort/email";
import { EmailPreview } from "./EmailPreview.js";

const meta: Meta = { title: "Emails/Templates", parameters: { layout: "padded" } };
export default meta;
type Story = StoryObj;

export const Welcome: Story = {
  render: () => <EmailPreview><WelcomeEmail name="Budi" /></EmailPreview>,
};

export const PasswordReset: Story = {
  render: () => <EmailPreview><PasswordResetEmail /></EmailPreview>,
};

export const MagicLink: Story = {
  render: () => (
    <EmailPreview>
      <MagicLinkEmail
        tenantName="Golden Park 2"
        loginUrl="https://gp2.halort.com/auth/callback?token=sample"
      />
    </EmailPreview>
  ),
};

export const Verification: Story = {
  render: () => <EmailPreview><VerificationEmail /></EmailPreview>,
};

export const PaymentReminder: Story = {
  render: () => <EmailPreview><PaymentReminderEmail /></EmailPreview>,
};

export const Announcement: Story = {
  render: () => <EmailPreview><AnnouncementEmail /></EmailPreview>,
};

export const CommunityEvent: Story = {
  render: () => <EmailPreview><CommunityEventEmail /></EmailPreview>,
};

export const MaintenanceNotice: Story = {
  render: () => <EmailPreview><MaintenanceNoticeEmail /></EmailPreview>,
};

export const Fundraising: Story = {
  render: () => <EmailPreview><FundraisingCampaignEmail /></EmailPreview>,
};

export const VisitorApproval: Story = {
  render: () => <EmailPreview><VisitorApprovalEmail /></EmailPreview>,
};

export const PackageArrival: Story = {
  render: () => <EmailPreview><PackageArrivalEmail /></EmailPreview>,
};
