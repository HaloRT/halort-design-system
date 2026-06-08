"use client";

import { ArrowRight } from "lucide-react";
import {
  Building2,
  Globe,
  Mail,
  Shield,
  Smartphone,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";
import { useTheme, ThemeToggle } from "@halort/themes";
import { ContactLogo, HeroLogo, HeaderLogo, FooterLogo } from "../brand/logo.js";
import { Button } from "../ui/button.js";
import { Badge } from "../ui/badge.js";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card.js";
import { CAPABILITIES, COMMUNITY_TYPES, COMPANY, PRODUCTS } from "../../config/company.js";

const CAPABILITY_ICONS = [Users, Wallet, Building2, Shield, Globe, Smartphone];

export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 md:h-[4.5rem]">
        <HeaderLogo />
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex [color:color-mix(in_srgb,var(--foreground)_78%,transparent)]">
          <a href="#tentang" className="transition-colors hover:text-foreground">
            Tentang
          </a>
          <a href="#produk" className="transition-colors hover:text-foreground">
            Produk
          </a>
          <a href="#layanan" className="transition-colors hover:text-foreground">
            Layanan
          </a>
          <a href="#kontak" className="transition-colors hover:text-foreground">
            Kontak
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button size="sm" asChild>
            <a href="#kontak">Hubungi Kami</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

export function HeroActions() {
  const { theme } = useTheme();

  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
      <Button size="lg" asChild>
        <a href="#produk">
          Lihat Produk Kami
          <ArrowRight className="h-4 w-4" />
        </a>
      </Button>
      <Button size="lg" variant={theme === "dark" ? "warm" : "secondary"} asChild>
        <a href="#kontak">Konsultasi Gratis</a>
      </Button>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="hero-section relative overflow-hidden px-6 py-24 md:pb-28 md:pt-16">
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <Badge className="mb-5 md:mb-6">Community Technology Company</Badge>
          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
            Digital operating system untuk{" "}
            <span className="text-gradient-highlight">komunitas residensial</span> Indonesia
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
            {COMPANY.description} Setiap RT, RW, cluster, dan apartemen layak mendapat
            infrastruktur digital yang profesional.
          </p>
          <HeroActions />
        </div>
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <HeroLogo />
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="tentang" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            Tentang Kami
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Membangun masa depan komunitas digital
          </h2>
          <p className="mt-4 leading-relaxed text-muted md:mt-5">
            HaloRT didirikan dengan visi mendigitalisasi pengelolaan komunitas residensial
            di Indonesia. Produk kami lahir dari pengalaman nyata mengelola RT 10 Golden Park 2.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Kami membangun ekosistem teknologi yang memungkinkan setiap komunitas memiliki
            portal digital sendiri, sambil tetap terhubung ke infrastruktur terpusat.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { value: "100+", label: "Komunitas target", accent: "green" },
            { value: "12+", label: "Modul fitur platform", accent: "warm" },
            { value: "1", label: "Visi nasional", accent: "green" },
            { value: "∞", label: "Dampak sosial", accent: "warm" },
          ].map((stat) => (
            <Card key={stat.label}>
              <p
                className={`text-3xl font-bold md:text-4xl ${
                  stat.accent === "green" ? "stat-value-green" : "stat-value-warm"
                }`}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-muted md:mt-2">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductsSection() {
  return (
    <section id="produk" className="section-alt px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="section-label-accent text-sm font-semibold tracking-widest uppercase">
            Produk
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Ekosistem Produk
          </h2>
          <p className="mt-4 text-lg text-muted">
            HaloRT membangun suite produk terintegrasi untuk operasional komunitas residensial.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {PRODUCTS.map((product, index) => (
            <Card key={product.id}>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <CardTitle>{product.name}</CardTitle>
                  <Badge variant={product.status === "In Development" ? "default" : "outline"}>
                    {product.status}
                  </Badge>
                </div>
                <CardDescription>{product.description}</CardDescription>
                <div
                  className={`product-accent mt-4 md:mt-5 ${
                    index % 2 === 0 ? "product-accent-green" : "product-accent-warm"
                  }`}
                />
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CapabilitiesSection() {
  return (
    <section id="layanan" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            Layanan
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Kapabilitas Platform
          </h2>
          <p className="mt-4 text-lg text-muted">
            Fitur-fitur inti yang kami kembangkan untuk transformasi digital komunitas.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((capability, index) => {
            const Icon = CAPABILITY_ICONS[index] ?? Sparkles;
            const isWarm = index % 2 === 1;
            return (
              <Card key={capability.title}>
                <CardHeader>
                  <div
                    className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg md:mb-4 md:h-11 md:w-11 md:rounded-xl ${
                      isWarm ? "capability-icon-warm" : "capability-icon-primary"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{capability.title}</CardTitle>
                  <CardDescription>{capability.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CommunitySection() {
  return (
    <section className="section-alt px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Melayani berbagai jenis komunitas
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
          Tidak terbatas pada RT saja — solusi HaloRT dirancang untuk berbagai organisasi
          lingkungan dan hunian di Indonesia.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {COMMUNITY_TYPES.map((type, index) => (
            <Badge
              key={type}
              variant={index % 2 === 0 ? "default" : "alt"}
              className="px-4 py-2 text-sm normal-case tracking-normal"
            >
              {type}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="kontak" className="px-6 py-24">
      <div className="contact-panel mx-auto max-w-3xl px-8 py-14 text-center md:py-16">
        <ContactLogo />
        <h2 className="mt-8 text-3xl font-bold text-foreground">Mari berkolaborasi</h2>
        <p className="mx-auto mt-4 max-w-lg text-muted">
          Tertarik mendigitalisasi komunitas Anda? Hubungi tim HaloRT untuk konsultasi,
          kemitraan, atau demo produk.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <a href={`mailto:${COMPANY.email}`}>
              <Mail className="h-4 w-4" />
              {COMPANY.email}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <footer className={`site-footer ${isLight ? "section-dark" : ""}`}>
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-10">
          <div className={`space-y-4 ${isLight ? "space-y-5" : ""}`}>
            <FooterLogo />
            <p
              className={`max-w-sm text-sm leading-relaxed ${isLight ? "text-zinc-300" : "text-muted"}`}
            >
              {COMPANY.description}
            </p>
          </div>
          <div className={`text-sm ${isLight ? "space-y-3 text-zinc-300" : "text-muted"}`}>
            <p className="flex items-center gap-2">
              <Mail className={`h-4 w-4 shrink-0 ${isLight ? "text-primary-light" : "text-primary"}`} />
              <a
                href={`mailto:${COMPANY.email}`}
                className={`footer-link transition-colors ${isLight ? "hover:text-white" : "hover:text-primary"}`}
              >
                {COMPANY.email}
              </a>
            </p>
            <p className={`flex items-center gap-2 ${isLight ? "" : "mt-2"}`}>
              <Globe className={`h-4 w-4 shrink-0 ${isLight ? "text-accent-light" : "text-accent"}`} />
              <span className={isLight ? "text-zinc-200" : "text-white"}>{COMPANY.domain}</span>
            </p>
          </div>
        </div>
        <p
          className={`mt-10 border-t pt-6 text-sm md:mt-12 ${
            isLight ? "border-white/10 text-zinc-500" : "border-white/8 text-muted/70"
          }`}
        >
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function MarketingLandingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <CapabilitiesSection />
        <CommunitySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
