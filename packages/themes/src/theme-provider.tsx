"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import {
  applyTheme,
  getStoredTenantTheme,
  getStoredTheme,
  notifyThemeChange,
  subscribeTheme,
  TENANT_STORAGE_KEY,
  TENANT_THEMES,
  THEME_STORAGE_KEY,
  type TenantThemeId,
  type ThemeMode,
} from "./theme-core.js";

type ThemeContextValue = {
  theme: ThemeMode;
  tenantTheme: TenantThemeId;
  setTheme: (theme: ThemeMode) => void;
  setTenantTheme: (tenant: TenantThemeId) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getServerTheme(): ThemeMode {
  return "dark";
}

function getServerTenantTheme(): TenantThemeId {
  return "halort-default";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getStoredTheme,
    getServerTheme,
  );

  const tenantTheme = useSyncExternalStore(
    subscribeTheme,
    getStoredTenantTheme,
    getServerTenantTheme,
  );

  useLayoutEffect(() => {
    applyTheme(theme, tenantTheme);
  }, [theme, tenantTheme]);

  const setTheme = useCallback(
    (next: ThemeMode) => {
      localStorage.setItem(THEME_STORAGE_KEY, next);
      applyTheme(next, tenantTheme);
      notifyThemeChange();
    },
    [tenantTheme],
  );

  const setTenantTheme = useCallback(
    (next: TenantThemeId) => {
      localStorage.setItem(TENANT_STORAGE_KEY, next);
      applyTheme(theme, next);
      notifyThemeChange();
    },
    [theme],
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [setTheme, theme]);

  const value = useMemo(
    () => ({ theme, tenantTheme, setTheme, setTenantTheme, toggleTheme }),
    [theme, tenantTheme, setTheme, setTenantTheme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

export function useTenantTheme() {
  const { tenantTheme, setTenantTheme } = useTheme();
  const tenant = TENANT_THEMES.find((t) => t.id === tenantTheme);
  return { tenantTheme, tenant, setTenantTheme, themes: TENANT_THEMES };
}
