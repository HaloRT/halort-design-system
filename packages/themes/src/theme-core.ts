export type ThemeMode = "dark" | "light";

export type TenantThemeId =
  | "halort-default"
  | "cluster"
  | "apartment"
  | "developer"
  | "corporate";

export interface TenantTheme {
  id: TenantThemeId;
  name: string;
  description: string;
  className: string;
}

export const BRAND = {
  dark: {
    background: "#000000",
    surface: "#0a0a0a",
    foreground: "#ffffff",
    muted: "#a3a3a3",
    primary: "#22c55e",
    accent: "#f97316",
  },
  light: {
    background: "#f8f6f3",
    surface: "#ffffff",
    foreground: "#363535",
    muted: "#6b6b6b",
    primary: "#fe8400",
    accent: "#6d9c24",
  },
} as const;

export const TENANT_THEMES: TenantTheme[] = [
  {
    id: "halort-default",
    name: "Default HaloRT",
    description: "Default brand theme for HaloRT platform.",
    className: "theme-halort-default",
  },
  {
    id: "cluster",
    name: "Cluster Theme",
    description: "For gated cluster and housing estates.",
    className: "theme-cluster",
  },
  {
    id: "apartment",
    name: "Apartment Theme",
    description: "For high-rise apartment communities.",
    className: "theme-apartment",
  },
  {
    id: "developer",
    name: "Developer Theme",
    description: "For property developer white-label deployments.",
    className: "theme-developer",
  },
  {
    id: "corporate",
    name: "Corporate Theme",
    description: "For enterprise and corporate housing.",
    className: "theme-corporate",
  },
];

export const THEME_STORAGE_KEY = "halort-theme";
export const TENANT_STORAGE_KEY = "halort-tenant-theme";

export const THEME_COLORS: Record<ThemeMode, string> = {
  dark: BRAND.dark.background,
  light: BRAND.light.background,
};

export function getStoredTheme(): ThemeMode {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light") return "light";
  return "dark";
}

export function getStoredTenantTheme(): TenantThemeId {
  if (typeof window === "undefined") return "halort-default";
  const stored = localStorage.getItem(TENANT_STORAGE_KEY);
  return (TENANT_THEMES.find((t) => t.id === stored)?.id ??
    "halort-default") as TenantThemeId;
}

const themeListeners = new Set<() => void>();

export function subscribeTheme(onStoreChange: () => void) {
  themeListeners.add(onStoreChange);

  const onStorage = (event: StorageEvent) => {
    if (event.key === THEME_STORAGE_KEY || event.key === TENANT_STORAGE_KEY) {
      onStoreChange();
    }
  };

  window.addEventListener("storage", onStorage);

  return () => {
    themeListeners.delete(onStoreChange);
    window.removeEventListener("storage", onStorage);
  };
}

export function notifyThemeChange() {
  themeListeners.forEach((listener) => listener());
}

export function applyTheme(theme: ThemeMode, tenantId: TenantThemeId = "halort-default") {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.dataset.tenant = tenantId;

  TENANT_THEMES.forEach(({ className }) => root.classList.remove(className));
  const tenant = TENANT_THEMES.find((t) => t.id === tenantId);
  if (tenant) {
    root.classList.add(tenant.className);
  }

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", THEME_COLORS[theme]);
  }
}

export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");var n=localStorage.getItem("${TENANT_STORAGE_KEY}");document.documentElement.dataset.theme=t==="light"?"light":"dark";document.documentElement.dataset.tenant=n||"halort-default";}catch(e){document.documentElement.dataset.theme="dark";document.documentElement.dataset.tenant="halort-default";}})();`;
