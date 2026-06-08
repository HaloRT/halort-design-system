"use client";

import { cn } from "@halort/utils";
import { useTheme } from "@halort/themes";
import { COMPANY } from "../../config/company.js";

const LOGO_ASPECT = {
  full: 501 / 458,
  icon: 299 / 241,
} as const;

export const LOGO_SRC = {
  full: "/halort-logo.png",
  icon: "/halort-logo-only.png",
} as const;

type LogoProps = {
  height?: number;
  variant?: "full" | "icon";
  className?: string;
  priority?: boolean;
  href?: string;
  onClick?: () => void;
};

export function Logo({
  height = 40,
  variant = "full",
  className,
  href,
  onClick,
}: LogoProps) {
  const width = Math.round(height * LOGO_ASPECT[variant]);
  const src = LOGO_SRC[variant];

  const image = (
    <img
      src={src}
      alt={`${COMPANY.name} Platform`}
      width={width}
      height={height}
      className={cn("logo-image object-contain", className)}
    />
  );

  if (href) {
    return (
      <a href={href} className="inline-flex shrink-0 transition-opacity hover:opacity-90">
        {image}
      </a>
    );
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className="inline-flex shrink-0">
        {image}
      </button>
    );
  }

  return image;
}

export function LogoSpotlight({
  children,
  variant = "light",
  className,
}: {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        variant === "light" ? "logo-spotlight-light" : "logo-spotlight-dark",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function HeaderLogo() {
  return <Logo href="/" variant="icon" height={44} />;
}

export function FooterLogo() {
  return (
    <LogoSpotlight variant="dark">
      <Logo variant="icon" height={52} />
    </LogoSpotlight>
  );
}

export function HeroLogo() {
  const { theme } = useTheme();

  return (
    <LogoSpotlight variant={theme === "light" ? "light" : "dark"}>
      <Logo height={220} />
    </LogoSpotlight>
  );
}

export function ContactLogo() {
  const { theme } = useTheme();

  return (
    <LogoSpotlight variant={theme === "light" ? "light" : "dark"} className="mx-auto">
      <Logo height={120} />
    </LogoSpotlight>
  );
}
