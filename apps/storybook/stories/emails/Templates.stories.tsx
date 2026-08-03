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
  ContactInquiryEmail,
  ContactAutoReplyEmail,
  CommunityRegistrationPendingEmail,
  CommunityRegistrationApprovedEmail,
  PengaduanSubmittedEmail,
  PengaduanRespondedEmail,
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

export const ContactInquiry: Story = {
  render: () => (
    <EmailPreview>
      <ContactInquiryEmail
        name="Budi Santoso"
        email="budi@example.com"
        phone="081234567890"
        communityName="RT 10 Golden Park 2"
        topic="Demo produk"
        message="Kami ingin melihat demo HaloRT untuk komunitas kami."
      />
    </EmailPreview>
  ),
};

export const ContactAutoReply: Story = {
  render: () => (
    <EmailPreview>
      <ContactAutoReplyEmail name="Budi Santoso" topic="Demo produk" />
    </EmailPreview>
  ),
};

export const CommunityRegistrationPending: Story = {
  render: () => (
    <EmailPreview>
      <CommunityRegistrationPendingEmail
        communityName="RT 10 Golden Park 2"
        slug="gp2-rt10"
        registrantName="Budi Santoso"
        registrantEmail="budi@example.com"
        topic="Demo produk"
      />
    </EmailPreview>
  ),
};

export const CommunityRegistrationApproved: Story = {
  render: () => (
    <EmailPreview>
      <CommunityRegistrationApprovedEmail
        communityName="RT 10 Golden Park 2"
        slug="gp2-rt10"
        portalUrl="https://gp2-rt10.halort.com"
        registrantName="Budi Santoso"
      />
    </EmailPreview>
  ),
};

export const PengaduanSubmitted: Story = {
  render: () => (
    <EmailPreview>
      <PengaduanSubmittedEmail
        tenantName="Golden Park 2"
        categoryLabel="Keluhan"
        title="Buang sampah di depan pagar"
        senderLabel="Franki Gaol"
        adminUrl="https://gp2.halort.com/admin/pengaduan"
      />
    </EmailPreview>
  ),
};

export const PengaduanResponded: Story = {
  render: () => (
    <EmailPreview>
      <PengaduanRespondedEmail
        tenantName="Golden Park 2"
        userName="Franki Gaol"
        title="Buang sampah di depan pagar"
        response="Terima kasih laporannya. Akan kami tindaklanjuti hari ini."
        portalUrl="https://gp2.halort.com/pengaduan"
      />
    </EmailPreview>
  ),
};
