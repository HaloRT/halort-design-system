export const COMPANY = {
  name: "HaloRT",
  legalName: "HaloRT Platform",
  tagline: "Digital operating system untuk komunitas residensial Indonesia",
  description:
    "HaloRT membangun platform manajemen komunitas untuk RT, RW, cluster perumahan, apartemen, dan organisasi warga di seluruh Indonesia.",
  domain: "halort.com",
  email: "halortpojokan@gmail.com",
  location: "Indonesia",
} as const;

export const PRODUCTS = [
  {
    id: "platform",
    name: "HaloRT Platform",
    description:
      "Multi-tenant SaaS untuk manajemen warga, pengumuman, iuran, crowdfunding, fasilitas, surat, aduan, acara, dan transparansi keuangan.",
    status: "In Development",
  },
  {
    id: "mobile",
    name: "HaloRT Mobile",
    description:
      "Aplikasi mobile untuk warga dan pengurus — notifikasi, pembayaran iuran, aduan, dan booking fasilitas.",
    status: "Planned",
  },
  {
    id: "admin",
    name: "HaloRT Admin",
    description:
      "Portal super-admin untuk provisioning tenant, billing, support, dan analytics operasional SaaS.",
    status: "Planned",
  },
  {
    id: "ai",
    name: "HaloRT AI",
    description:
      "Layanan AI untuk dukungan warga, insight komunitas, generasi dokumen, dan analitik lingkungan.",
    status: "Planned",
  },
] as const;

export const COMMUNITY_TYPES = [
  "RT / RW",
  "Cluster Perumahan",
  "Apartemen",
  "Kawasan Hunian",
  "Komunitas Warga",
] as const;

export const CAPABILITIES = [
  {
    title: "Data Warga & KK",
    description:
      "Registrasi rumah tangga, anggota keluarga, dan peta hunian dalam satu database terpusat.",
  },
  {
    title: "Iuran & Keuangan",
    description:
      "Tagihan bulanan, verifikasi pembayaran, kas, anggaran, dan laporan transparan.",
  },
  {
    title: "Crowdfunding",
    description:
      "Kampanye donasi komunitas dengan tracking real-time dan notifikasi otomatis.",
  },
  {
    title: "Surat & Aduan",
    description:
      "Permohonan surat administrasi, pengaduan warga, dan alur persetujuan digital.",
  },
  {
    title: "Agenda & Fasilitas",
    description:
      "Manajemen acara komunitas dan booking fasilitas bersama.",
  },
  {
    title: "Multi-Tenant SaaS",
    description:
      "Setiap komunitas mendapat portal digital sendiri — terpusat, aman, dan siap scale nasional.",
  },
] as const;
