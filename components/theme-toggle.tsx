"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

/** Light/dark theme switch. The theme lives entirely on the document
 *  (the `dark` class) — no React state, no provider — so it stays in
 *  sync with the pre-paint theme script. Icons swap via the `dark`
 *  Tailwind variant. */
export function ThemeToggle() {
  const t = useTranslations("nav");

  function toggleTheme() {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    root.style.colorScheme = isDark ? "dark" : "light";
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // Ignore storage being unavailable (private mode, etc.).
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={t("toggleTheme")}
      onClick={toggleTheme}
    >
      <Sun aria-hidden className="hidden dark:block" />
      <Moon aria-hidden className="block dark:hidden" />
    </Button>
  );
}
