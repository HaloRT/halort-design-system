/** Logo paths aligned with halort-web public assets */
export const EMAIL_ASSETS = {
  /** Canonical host — halort.com redirects here (307) */
  baseUrl: "https://www.halort.com",
  logoFull: "/halort-logo.png",
  logoIcon: "/halort-logo-only.png",
  companyName: "HaloRT Platform",
} as const;

export const LOGO_DIMENSIONS = {
  full: { width: 501, height: 458 },
  icon: { width: 299, height: 241 },
} as const;

export function getLogoUrl(
  baseUrl: string = EMAIL_ASSETS.baseUrl,
  variant: "full" | "icon" = "full",
) {
  const path = variant === "full" ? EMAIL_ASSETS.logoFull : EMAIL_ASSETS.logoIcon;
  return `${baseUrl}${path}`;
}

/** Display size for email header (maintains full logo aspect ratio) */
export const EMAIL_LOGO_DISPLAY = {
  width: 160,
  height: Math.round(160 * (LOGO_DIMENSIONS.full.height / LOGO_DIMENSIONS.full.width)),
} as const;
