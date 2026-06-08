import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  WelcomeEmail,
  PasswordResetEmail,
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
