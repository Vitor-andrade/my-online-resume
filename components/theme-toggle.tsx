"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

/** Light/dark theme switch. Both icons are rendered and toggled via
 *  the `dark` class, so there is no hydration mismatch and no need
 *  to gate rendering on a mounted flag. */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations("nav");

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={t("toggleTheme")}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun aria-hidden className="hidden dark:block" />
      <Moon aria-hidden className="block dark:hidden" />
    </Button>
  );
}
