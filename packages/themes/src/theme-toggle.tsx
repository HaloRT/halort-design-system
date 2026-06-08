"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider.js";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
      aria-label={theme === "dark" ? "Switch to bright theme" : "Switch to dark theme"}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
