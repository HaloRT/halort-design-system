import { Img, Link, Section } from "@react-email/components";
import {
  EMAIL_ASSETS,
  EMAIL_LOGO_DISPLAY,
  getLogoUrl,
} from "./constants.js";

export function EmailLogo({
  logoUrl,
  baseUrl = EMAIL_ASSETS.baseUrl,
  href = baseUrl,
  alt = EMAIL_ASSETS.companyName,
}: {
  logoUrl?: string;
  baseUrl?: string;
  href?: string;
  alt?: string;
}) {
  const src = logoUrl ?? getLogoUrl(baseUrl, "full");

  return (
    <Section style={logoSection}>
      <Link href={href} style={logoLink}>
        <Img
          src={src}
          alt={alt}
          width={EMAIL_LOGO_DISPLAY.width}
          height={EMAIL_LOGO_DISPLAY.height}
          style={logoImage}
        />
      </Link>
    </Section>
  );
}

const logoSection = {
  textAlign: "center" as const,
  marginBottom: "24px",
};

const logoLink = {
  display: "inline-block",
  textDecoration: "none",
};

const logoImage = {
  display: "block",
  margin: "0 auto",
};
