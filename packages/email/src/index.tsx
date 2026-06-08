import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { EMAIL_ASSETS } from "./constants.js";
import { EmailLogo } from "./email-logo.js";
import { emailTheme } from "./theme.js";

const baseUrl = EMAIL_ASSETS.baseUrl;

type EmailLayoutProps = {
  preview: string;
  title: string;
  children: React.ReactNode;
  logoUrl?: string;
  assetBaseUrl?: string;
};

function EmailLayout({
  preview,
  title,
  children,
  logoUrl,
  assetBaseUrl = baseUrl,
}: EmailLayoutProps) {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          <EmailLogo logoUrl={logoUrl} baseUrl={assetBaseUrl} href={baseUrl} />
          <Heading style={heading}>{title}</Heading>
          {children}
          <Hr style={hr} />
          <Text style={footer}>© {EMAIL_ASSETS.companyName} · halort.com</Text>
        </Container>
      </Body>
    </Html>
  );
}

type EmailOptions = { logoUrl?: string; assetBaseUrl?: string };

export function WelcomeEmail({
  name = "Warga",
  logoUrl,
  assetBaseUrl,
}: { name?: string } & EmailOptions) {
  return (
    <EmailLayout
      preview="Selamat datang di HaloRT"
      title="Selamat Datang di HaloRT"
      logoUrl={logoUrl}
      assetBaseUrl={assetBaseUrl}
    >
      <Text style={paragraph}>Halo {name},</Text>
      <Text style={paragraph}>
        Akun Anda telah berhasil dibuat. Portal komunitas residensial HaloRT siap
        membantu pengelolaan RT/RW, cluster, dan apartemen Anda.
      </Text>
      <Section style={btnContainer}>
        <Button style={button} href={`${baseUrl}/login`}>
          Masuk ke Portal
        </Button>
      </Section>
    </EmailLayout>
  );
}

export function PasswordResetEmail({
  resetUrl = `${baseUrl}/reset`,
  logoUrl,
  assetBaseUrl,
}: { resetUrl?: string } & EmailOptions) {
  return (
    <EmailLayout
      preview="Reset password HaloRT"
      title="Reset Password"
      logoUrl={logoUrl}
      assetBaseUrl={assetBaseUrl}
    >
      <Text style={paragraph}>
        Kami menerima permintaan reset password. Klik tombol di bawah untuk membuat
        password baru.
      </Text>
      <Section style={btnContainer}>
        <Button style={button} href={resetUrl}>
          Reset Password
        </Button>
      </Section>
      <Text style={paragraph}>Link ini berlaku selama 1 jam.</Text>
    </EmailLayout>
  );
}

export function VerificationEmail({
  code = "123456",
  logoUrl,
  assetBaseUrl,
}: { code?: string } & EmailOptions) {
  return (
    <EmailLayout
      preview="Verifikasi email HaloRT"
      title="Verifikasi Email"
      logoUrl={logoUrl}
      assetBaseUrl={assetBaseUrl}
    >
      <Text style={paragraph}>Gunakan kode berikut untuk verifikasi email Anda:</Text>
      <Text style={codeStyle}>{code}</Text>
    </EmailLayout>
  );
}

export function PaymentReminderEmail({
  amount = "Rp 150.000",
  dueDate = "15 Juni 2026",
  logoUrl,
  assetBaseUrl,
}: { amount?: string; dueDate?: string } & EmailOptions) {
  return (
    <EmailLayout
      preview="Pengingat iuran komunitas"
      title="Pengingat Iuran"
      logoUrl={logoUrl}
      assetBaseUrl={assetBaseUrl}
    >
      <Text style={paragraph}>
        Iuran komunitas sebesar <strong>{amount}</strong> jatuh tempo pada {dueDate}.
      </Text>
      <Section style={btnContainer}>
        <Button style={button} href={`${baseUrl}/payments`}>
          Bayar Sekarang
        </Button>
      </Section>
    </EmailLayout>
  );
}

export function AnnouncementEmail({
  title = "Pengumuman RT",
  body = "Rapat warga akan dilaksanakan minggu depan.",
  logoUrl,
  assetBaseUrl,
}: { title?: string; body?: string } & EmailOptions) {
  return (
    <EmailLayout preview={title} title={title} logoUrl={logoUrl} assetBaseUrl={assetBaseUrl}>
      <Text style={paragraph}>{body}</Text>
    </EmailLayout>
  );
}

export function CommunityEventEmail({
  eventName = "Rapat Warga",
  date = "20 Juni 2026",
  location = "Balai RT",
  logoUrl,
  assetBaseUrl,
}: { eventName?: string; date?: string; location?: string } & EmailOptions) {
  return (
    <EmailLayout
      preview={`Acara: ${eventName}`}
      title="Acara Komunitas"
      logoUrl={logoUrl}
      assetBaseUrl={assetBaseUrl}
    >
      <Text style={paragraph}>
        <strong>{eventName}</strong>
        <br />
        {date} · {location}
      </Text>
    </EmailLayout>
  );
}

export function MaintenanceNoticeEmail({
  area = "Lift Tower A",
  schedule = "10-12 Juni 2026",
  logoUrl,
  assetBaseUrl,
}: { area?: string; schedule?: string } & EmailOptions) {
  return (
    <EmailLayout
      preview="Pemberitahuan maintenance"
      title="Pemberitahuan Maintenance"
      logoUrl={logoUrl}
      assetBaseUrl={assetBaseUrl}
    >
      <Text style={paragraph}>
        Maintenance {area} dijadwalkan pada {schedule}. Mohon maaf atas ketidaknyamanannya.
      </Text>
    </EmailLayout>
  );
}

export function FundraisingCampaignEmail({
  campaign = "Renovasi Taman",
  target = "Rp 50.000.000",
  logoUrl,
  assetBaseUrl,
}: { campaign?: string; target?: string } & EmailOptions) {
  return (
    <EmailLayout
      preview={`Kampanye: ${campaign}`}
      title="Kampanye Crowdfunding"
      logoUrl={logoUrl}
      assetBaseUrl={assetBaseUrl}
    >
      <Text style={paragraph}>
        Bergabunglah dalam kampanye <strong>{campaign}</strong> dengan target {target}.
      </Text>
      <Section style={btnContainer}>
        <Button style={button} href={`${baseUrl}/fundraising`}>
          Donasi Sekarang
        </Button>
      </Section>
    </EmailLayout>
  );
}

export function VisitorApprovalEmail({
  visitor = "Budi Santoso",
  hostUnit = "A-12",
  logoUrl,
  assetBaseUrl,
}: { visitor?: string; hostUnit?: string } & EmailOptions) {
  return (
    <EmailLayout
      preview="Permintaan persetujuan tamu"
      title="Persetujuan Tamu"
      logoUrl={logoUrl}
      assetBaseUrl={assetBaseUrl}
    >
      <Text style={paragraph}>
        {visitor} meminta akses kunjungan ke Unit {hostUnit}. Silakan setujui atau tolak
        melalui portal warga.
      </Text>
    </EmailLayout>
  );
}

export function PackageArrivalEmail({
  recipient = "Unit B-05",
  courier = "JNE",
  logoUrl,
  assetBaseUrl,
}: { recipient?: string; courier?: string } & EmailOptions) {
  return (
    <EmailLayout
      preview="Paket telah tiba"
      title="Paket Telah Tiba"
      logoUrl={logoUrl}
      assetBaseUrl={assetBaseUrl}
    >
      <Text style={paragraph}>
        Paket untuk {recipient} telah diterima di pos satpam ({courier}). Silakan ambil
        segera.
      </Text>
    </EmailLayout>
  );
}

const main = {
  backgroundColor: emailTheme.background,
  fontFamily: "Geist, Arial, sans-serif",
};
const container = {
  margin: "0 auto",
  padding: "32px 24px",
  maxWidth: "560px",
  backgroundColor: emailTheme.surface,
  borderRadius: "12px",
  border: `1px solid ${emailTheme.border}`,
  borderTop: `4px solid ${emailTheme.primary}`,
};
const heading = {
  color: emailTheme.foreground,
  fontSize: "24px",
  fontWeight: "700",
  margin: "0 0 16px",
};
const paragraph = {
  color: emailTheme.muted,
  fontSize: "15px",
  lineHeight: "24px",
  margin: "0 0 16px",
};
const btnContainer = { textAlign: "center" as const, margin: "28px 0" };
const button = {
  backgroundColor: emailTheme.primary,
  borderRadius: "8px",
  color: emailTheme.onPrimary,
  fontSize: "15px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "12px 28px",
  border: `1px solid ${emailTheme.primaryDark}`,
  display: "inline-block",
};
const hr = { borderColor: emailTheme.surfaceMuted, margin: "24px 0" };
const footer = { color: emailTheme.footer, fontSize: "12px", margin: "0" };
const codeStyle = {
  fontSize: "32px",
  fontWeight: "700",
  letterSpacing: "8px",
  textAlign: "center" as const,
  color: emailTheme.accent,
  backgroundColor: emailTheme.surfaceMuted,
  borderRadius: "8px",
  padding: "16px",
  margin: "16px 0",
};

export const emailTemplates = {
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
};

export { EMAIL_ASSETS, getLogoUrl, EMAIL_LOGO_DISPLAY, LOGO_DIMENSIONS } from "./constants.js";
export { EmailLogo } from "./email-logo.js";
export { emailTheme } from "./theme.js";
