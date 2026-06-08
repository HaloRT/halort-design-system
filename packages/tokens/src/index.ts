import tokens from "./tokens.json" with { type: "json" };

export const colors = {
  primary: tokens.color.brand.primary.value,
  secondary: tokens.color.brand.secondary.value,
  success: tokens.color.brand.success.value,
  warning: tokens.color.brand.warning.value,
  danger: tokens.color.brand.danger.value,
} as const;

export const spacing = Object.fromEntries(
  Object.entries(tokens.spacing).map(([k, v]) => [k, v.value]),
) as Record<string, string>;

export const radius = Object.fromEntries(
  Object.entries(tokens.radius).map(([k, v]) => [k, v.value]),
) as Record<string, string>;

export const typography = {
  fontFamily: {
    sans: tokens.font.family.sans.value,
    mono: tokens.font.family.mono.value,
  },
  fontSize: Object.fromEntries(
    Object.entries(tokens.font.size).map(([k, v]) => [k, v.value]),
  ) as Record<string, string>,
  fontWeight: Object.fromEntries(
    Object.entries(tokens.font.weight).map(([k, v]) => [k, Number(v.value)]),
  ) as Record<string, number>,
} as const;

export const shadows = Object.fromEntries(
  Object.entries(tokens.shadow).map(([k, v]) => [k, v.value]),
) as Record<string, string>;

export const breakpoints = Object.fromEntries(
  Object.entries(tokens.breakpoint).map(([k, v]) => [k, v.value]),
) as Record<string, string>;

export const animations = {
  duration: Object.fromEntries(
    Object.entries(tokens.animation.duration).map(([k, v]) => [k, v.value]),
  ) as Record<string, string>,
  easing: {
    default: tokens.animation.easing.default.value,
  },
} as const;

export type ThemeMode = "dark" | "light";

export { tokens };
