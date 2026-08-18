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
  logoHref?: string;
  logoAlt?: string;
  footerLine?: string;
};

function EmailLayout({
  preview,
  title,
  children,
  logoUrl,
  assetBaseUrl = baseUrl,
  logoHref = baseUrl,
  logoAlt,
  footerLine = `© ${EMAIL_ASSETS.companyName} · halort.com`,
}: EmailLayoutProps) {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          <EmailLogo
            logoUrl={logoUrl}
            baseUrl={assetBaseUrl}
            href={logoHref}
            alt={logoAlt}
          />
          <Heading style={heading}>{title}</Heading>
          {children}
          <Hr style={hr} />
          <Text style={footer}>{footerLine}</Text>
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

export function MagicLinkEmail({
  loginUrl = `${baseUrl}/login`,
  tenantName = "Komunitas Anda",
  expiresMinutes = 15,
  logoUrl,
  assetBaseUrl,
}: {
  loginUrl?: string;
  tenantName?: string;
  expiresMinutes?: number;
} & EmailOptions) {
  return (
    <EmailLayout
      preview={`Tautan masuk ke ${tenantName}`}
      title={`Masuk ke ${tenantName}`}
      logoUrl={logoUrl}
      assetBaseUrl={assetBaseUrl}
    >
      <Text style={paragraph}>Halo,</Text>
      <Text style={paragraph}>
        Klik tombol di bawah untuk masuk ke portal <strong>{tenantName}</strong> di
        HaloRT — tanpa kata sandi, cukup sekali klik.
      </Text>
      <Section style={btnContainer}>
        <Button style={button} href={loginUrl}>
          Masuk Sekarang
        </Button>
      </Section>
      <Text style={finePrint}>
        Tautan berlaku {expiresMinutes} menit dan hanya bisa dipakai sekali. Jika tombol
        tidak berfungsi, salin tautan ini ke peramban Anda:
      </Text>
      <Text style={linkText}>{loginUrl}</Text>
      <Text style={finePrint}>
        Jika Anda tidak meminta email ini, abaikan pesan ini.
      </Text>
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

export function CommunityRegistrationPendingEmail({
  communityName = "RT 10 Golden Park 2",
  slug = "gp2-rt10",
  registrantName = "Budi Santoso",
  registrantEmail = "budi@example.com",
  topic = "",
  logoUrl,
  assetBaseUrl,
}: {
  communityName?: string;
  slug?: string;
  registrantName?: string;
  registrantEmail?: string;
  topic?: string;
} & EmailOptions) {
  return (
    <EmailLayout
      preview={`Pendaftaran ${communityName} telah kami terima`}
      title="Pendaftaran komunitas diterima"
      logoUrl={logoUrl}
      assetBaseUrl={assetBaseUrl}
    >
      <Text style={paragraph}>Halo {registrantName},</Text>
      <Text style={paragraph}>
        Terima kasih telah mendaftarkan <strong>{communityName}</strong> di HaloRT.
        Pendaftaran Anda dengan email {registrantEmail} kini sedang{" "}
        <strong>menunggu persetujuan HaloRT</strong>
        {topic ? ` untuk ${topic}` : ""}.
      </Text>
      <Text style={paragraph}>
        Setelah disetujui, portal komunitas Anda akan aktif di subdomain{" "}
        <strong>{slug}.halort.com</strong>. Kami akan mengirimkan email
        konfirmasi begitu proses persetujuan selesai.
      </Text>
      <Text style={finePrint}>
        Proses tinjauan biasanya memakan waktu 1-2 hari kerja. Mohon
        ditunggu ya.
      </Text>
    </EmailLayout>
  );
}

export function CommunityRegistrationApprovedEmail({
  communityName = "RT 10 Golden Park 2",
  slug = "gp2-rt10",
  portalUrl = `https://${slug}.halort.com`,
  registrantName = "Budi Santoso",
  logoUrl,
  assetBaseUrl,
}: {
  communityName?: string;
  slug?: string;
  portalUrl?: string;
  registrantName?: string;
} & EmailOptions) {
  return (
    <EmailLayout
      preview={`${communityName} telah disetujui di HaloRT`}
      title="Komunitas Anda disetujui"
      logoUrl={logoUrl}
      assetBaseUrl={assetBaseUrl}
    >
      <Text style={paragraph}>Halo {registrantName},</Text>
      <Text style={paragraph}>
        Selamat! Pendaftaran <strong>{communityName}</strong> telah{" "}
        <strong>disetujui</strong> oleh tim HaloRT. Portal komunitas Anda
        kini sudah aktif dan siap digunakan.
      </Text>
      <Section style={btnContainer}>
        <Button style={button} href={portalUrl}>
          Masuk ke Portal
        </Button>
      </Section>
      <Text style={finePrint}>
        Jika tombol tidak berfungsi, salin tautan ini ke peramban Anda:
      </Text>
      <Text style={linkText}>{portalUrl}</Text>
    </EmailLayout>
  );
}

export function CommunityRegistrationRejectedEmail({
  communityName = "RT 10 Golden Park 2",
  slug = "gp2-rt10",
  registrantName = "Budi Santoso",
  reviewNote = "",
  logoUrl,
  assetBaseUrl,
}: {
  communityName?: string;
  slug?: string;
  registrantName?: string;
  reviewNote?: string;
} & EmailOptions) {
  const note = reviewNote.trim();
  return (
    <EmailLayout
      preview={`Update pendaftaran ${communityName}`}
      title="Pendaftaran belum dapat disetujui"
      logoUrl={logoUrl}
      assetBaseUrl={assetBaseUrl}
    >
      <Text style={paragraph}>Halo {registrantName},</Text>
      <Text style={paragraph}>
        Terima kasih telah mendaftarkan <strong>{communityName}</strong>{" "}
        (<strong>{slug}</strong>) di HaloRT. Setelah ditinjau, pendaftaran
        ini <strong>belum dapat kami setujui</strong> saat ini.
      </Text>
      {note ? <ContactDetail label="Catatan dari tim HaloRT" value={note} /> : null}
      <Text style={paragraph}>
        Anda dapat mendaftar ulang dengan data yang diperbaiki, atau hubungi
        kami jika membutuhkan bantuan.
      </Text>
    </EmailLayout>
  );
}

const MARKETPILOT_APP_URL = "https://marketpilot.suherman.net";

export function MarketPilotProductShareEmail({
  productName = "MarketPilot product",
  sharedByName = "A teammate",
  shareUrl = `${MARKETPILOT_APP_URL}/share/sample`,
  language = "en",
  logoUrl = `${MARKETPILOT_APP_URL}/logo.png`,
  assetBaseUrl = MARKETPILOT_APP_URL,
}: {
  productName?: string;
  sharedByName?: string;
  shareUrl?: string;
  language?: string;
} & EmailOptions) {
  const isId = language === "id";
  const preview = isId
    ? `${sharedByName} membagikan ${productName} di MarketPilot`
    : `${sharedByName} shared ${productName} on MarketPilot`;
  const title = isId ? "Produk dibagikan dengan Anda" : "A product was shared with you";

  return (
    <EmailLayout
      preview={preview}
      title={title}
      logoUrl={logoUrl}
      assetBaseUrl={assetBaseUrl}
      logoHref={MARKETPILOT_APP_URL}
      logoAlt="MarketPilot"
      footerLine="© MarketPilot · marketpilot.suherman.net"
    >
      <Text style={paragraph}>
        {isId ? "Halo," : "Hi,"}
      </Text>
      <Text style={paragraph}>
        {isId ? (
          <>
            <strong>{sharedByName}</strong> membagikan produk{" "}
            <strong>{productName}</strong> dengan Anda di MarketPilot. Buka tautan
            ini untuk melihatnya di akun Anda.
          </>
        ) : (
          <>
            <strong>{sharedByName}</strong> shared the product{" "}
            <strong>{productName}</strong> with you on MarketPilot. Open the link
            to view it on your account.
          </>
        )}
      </Text>
      <Section style={btnContainer}>
        <Button style={marketPilotButton} href={shareUrl}>
          {isId ? "Buka produk" : "Open shared product"}
        </Button>
      </Section>
      <Text style={finePrint}>
        {isId
          ? "Jika Anda belum punya akun, buat akun dari tautan itu dan produk akan terbuka sesudahnya. Jika tombol tidak berfungsi, salin tautan ini:"
          : "If you do not have an account yet, create one from that link and the product will open afterwards. If the button does not work, copy this link:"}
      </Text>
      <Text style={linkText}>{shareUrl}</Text>
    </EmailLayout>
  );
}

function ContactDetail({ label, value }: { label: string; value: string }) {
  return (
    <Text style={detailRow}>
      <strong style={detailLabel}>{label}</strong>
      <br />
      {value}
    </Text>
  );
}

export function ContactInquiryEmail({
  name = "Pengunjung",
  email = "pengunjung@example.com",
  phone = "",
  communityName = "",
  topic = "Konsultasi",
  message = "Saya tertarik dengan HaloRT.",
  logoUrl,
  assetBaseUrl,
}: {
  name?: string;
  email?: string;
  phone?: string;
  communityName?: string;
  topic?: string;
  message?: string;
} & EmailOptions) {
  return (
    <EmailLayout
      preview={`Pesan kontak: ${topic} — ${name}`}
      title="Pesan Kontak Baru"
      logoUrl={logoUrl}
      assetBaseUrl={assetBaseUrl}
    >
      <Text style={paragraph}>
        Ada pesan baru dari formulir kontak website HaloRT.
      </Text>
      <ContactDetail label="Nama" value={name} />
      <ContactDetail label="Email" value={email} />
      {phone ? <ContactDetail label="Telepon" value={phone} /> : null}
      {communityName ? (
        <ContactDetail label="Nama komunitas" value={communityName} />
      ) : null}
      <ContactDetail label="Topik" value={topic} />
      <ContactDetail label="Pesan" value={message} />
    </EmailLayout>
  );
}

export function ContactAutoReplyEmail({
  name = "Pengunjung",
  topic = "Konsultasi",
  logoUrl,
  assetBaseUrl,
}: {
  name?: string;
  topic?: string;
} & EmailOptions) {
  return (
    <EmailLayout
      preview="Terima kasih — kami telah menerima pesan Anda"
      title="Terima Kasih Telah Menghubungi HaloRT"
      logoUrl={logoUrl}
      assetBaseUrl={assetBaseUrl}
    >
      <Text style={paragraph}>Halo {name},</Text>
      <Text style={paragraph}>
        Terima kasih telah menghubungi HaloRT mengenai{" "}
        <strong>{topic}</strong>. Tim kami telah menerima pesan Anda dan akan
        segera menindaklanjuti.
      </Text>
      <Text style={paragraph}>
        Jika ada informasi tambahan, balas saja email ini atau tulis ke{" "}
        <strong>halortpojokan@gmail.com</strong>.
      </Text>
      <Text style={paragraph}>Salam hangat,<br />Tim HaloRT</Text>
    </EmailLayout>
  );
}

export function SubscriptionInvoicePaidEmail({
  tenantName = "Komunitas Anda",
  planLabel = "Starter",
  amount = "Rp 99.000",
  months = "1",
  invoiceId = "hrt…",
  paidAt = "19 Agu 2026",
  activeUntil = "19 Sep 2026",
  portalUrl = baseUrl,
  logoUrl,
  assetBaseUrl,
}: {
  tenantName?: string;
  planLabel?: string;
  amount?: string;
  months?: string;
  invoiceId?: string;
  paidAt?: string;
  activeUntil?: string;
  portalUrl?: string;
} & EmailOptions) {
  return (
    <EmailLayout
      preview={`Pembayaran perpanjangan berhasil — ${tenantName}`}
      title="Perpanjangan Layanan Berhasil"
      logoUrl={logoUrl}
      assetBaseUrl={assetBaseUrl}
    >
      <Text style={paragraph}>
        Pembayaran perpanjangan layanan HaloRT untuk{" "}
        <strong>{tenantName}</strong> sudah berhasil. Berikut ringkasan invoice
        Anda.
      </Text>
      <ContactDetail label="Paket" value={planLabel} />
      <ContactDetail label="Jumlah" value={amount} />
      <ContactDetail label="Durasi" value={`${months} bulan`} />
      <ContactDetail label="Nomor invoice" value={invoiceId} />
      <ContactDetail label="Tanggal bayar" value={paidAt} />
      <ContactDetail label="Aktif sampai" value={activeUntil} />
      <Section style={btnContainer}>
        <Button style={button} href={portalUrl}>
          Buka Portal Pengurus
        </Button>
      </Section>
      <Text style={finePrint}>
        Simpan email ini sebagai bukti pembayaran. Jika tombol tidak berfungsi,
        buka tautan berikut:
      </Text>
      <Text style={linkText}>{portalUrl}</Text>
    </EmailLayout>
  );
}

export function SubscriptionRenewalDueEmail({
  tenantName = "Komunitas Anda",
  planLabel = "Starter",
  amount = "Rp 99.000",
  months = "1",
  invoiceId = "hrt…",
  activeUntil = "19 Sep 2026",
  paymentUrl = baseUrl,
  portalUrl = baseUrl,
  logoUrl,
  assetBaseUrl,
}: {
  tenantName?: string;
  planLabel?: string;
  amount?: string;
  months?: string;
  invoiceId?: string;
  activeUntil?: string;
  paymentUrl?: string;
  portalUrl?: string;
} & EmailOptions) {
  return (
    <EmailLayout
      preview={`Tagihan perpanjangan HaloRT — ${tenantName}`}
      title="Tagihan Perpanjangan Layanan"
      logoUrl={logoUrl}
      assetBaseUrl={assetBaseUrl}
    >
      <Text style={paragraph}>
        Masa aktif layanan HaloRT untuk <strong>{tenantName}</strong> akan
        berakhir pada <strong>{activeUntil}</strong>. Tagihan otomatis sudah
        dibuat agar layanan tidak terpengaruh suspend.
      </Text>
      <ContactDetail label="Paket" value={planLabel} />
      <ContactDetail label="Jumlah" value={amount} />
      <ContactDetail label="Durasi" value={`${months} bulan`} />
      <ContactDetail label="Nomor invoice" value={invoiceId} />
      <ContactDetail label="Aktif sampai" value={activeUntil} />
      <Section style={btnContainer}>
        <Button style={button} href={paymentUrl}>
          Bayar Sekarang
        </Button>
      </Section>
      <Text style={finePrint}>
        Setelah bayar, status perpanjangan akan diperbarui otomatis. Pantau juga
        di portal pengurus:
      </Text>
      <Text style={linkText}>{portalUrl}</Text>
    </EmailLayout>
  );
}

export function PengaduanSubmittedEmail({
  tenantName = "Komunitas Anda",
  categoryLabel = "Keluhan",
  title = "Judul pengaduan",
  senderLabel = "Warga",
  adminUrl = `${baseUrl}/admin/pengaduan`,
  logoUrl,
  assetBaseUrl,
}: {
  tenantName?: string;
  categoryLabel?: string;
  title?: string;
  senderLabel?: string;
  adminUrl?: string;
} & EmailOptions) {
  return (
    <EmailLayout
      preview={`Pengaduan baru: ${title}`}
      title="Pengaduan Baru"
      logoUrl={logoUrl}
      assetBaseUrl={assetBaseUrl}
    >
      <Text style={paragraph}>
        Ada pengaduan baru di <strong>{tenantName}</strong> yang menunggu
        tanggapan pengurus.
      </Text>
      <ContactDetail label="Kategori" value={categoryLabel} />
      <ContactDetail label="Judul" value={title} />
      <ContactDetail label="Dari" value={senderLabel} />
      <Section style={btnContainer}>
        <Button style={button} href={adminUrl}>
          Tanggapi di Portal Admin
        </Button>
      </Section>
      <Text style={finePrint}>
        Jika tombol tidak berfungsi, buka tautan ini di peramban Anda:
      </Text>
      <Text style={linkText}>{adminUrl}</Text>
    </EmailLayout>
  );
}

export function PengaduanRespondedEmail({
  tenantName = "Komunitas Anda",
  userName = "Warga",
  title = "Judul pengaduan",
  response = "Tanggapan pengurus",
  portalUrl = baseUrl,
  logoUrl,
  assetBaseUrl,
}: {
  tenantName?: string;
  userName?: string;
  title?: string;
  response?: string;
  portalUrl?: string;
} & EmailOptions) {
  return (
    <EmailLayout
      preview={`Tanggapan pengaduan — ${tenantName}`}
      title="Tanggapan Pengaduan"
      logoUrl={logoUrl}
      assetBaseUrl={assetBaseUrl}
    >
      <Text style={paragraph}>Halo {userName},</Text>
      <Text style={paragraph}>
        Pengurus <strong>{tenantName}</strong> telah menanggapi pengaduan Anda:{" "}
        <strong>{title}</strong>.
      </Text>
      <ContactDetail label="Tanggapan" value={response} />
      <Section style={btnContainer}>
        <Button style={button} href={portalUrl}>
          Lihat di Portal
        </Button>
      </Section>
      <Text style={finePrint}>
        Jika tombol tidak berfungsi, buka tautan ini di peramban Anda:
      </Text>
      <Text style={linkText}>{portalUrl}</Text>
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
const marketPilotButton = {
  backgroundColor: "#0057ff",
  borderRadius: "8px",
  color: "#ffffff",
  fontSize: "15px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "12px 28px",
  border: "1px solid #003dcc",
  display: "inline-block",
};
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
const finePrint = {
  color: emailTheme.footer,
  fontSize: "13px",
  lineHeight: "20px",
  margin: "0 0 12px",
};
const linkText = {
  color: emailTheme.accent,
  fontSize: "13px",
  lineHeight: "20px",
  wordBreak: "break-all" as const,
  margin: "0 0 16px",
};
const detailRow = {
  ...paragraph,
  margin: "0 0 12px",
};
const detailLabel = {
  color: emailTheme.foreground,
  fontWeight: "600" as const,
};

export const emailTemplates = {
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
  CommunityRegistrationRejectedEmail,
  SubscriptionInvoicePaidEmail,
  SubscriptionRenewalDueEmail,
  PengaduanSubmittedEmail,
  PengaduanRespondedEmail,
  MarketPilotProductShareEmail,
};

export { EMAIL_ASSETS, getLogoUrl, EMAIL_LOGO_DISPLAY, LOGO_DIMENSIONS } from "./constants.js";
export { EmailLogo } from "./email-logo.js";
export { emailTheme } from "./theme.js";
