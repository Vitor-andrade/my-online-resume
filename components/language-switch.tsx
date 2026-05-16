"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { type Locale, routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LABELS: Record<Locale, string> = {
  en: "EN",
  "pt-BR": "PT",
};

/** Locale switcher — links to the current page in each available locale. */
export function LanguageSwitch() {
  const activeLocale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("nav");

  return (
    <div
      role="group"
      aria-label={t("selectLanguage")}
      className="border-border flex items-center rounded-md border p-0.5"
    >
      {routing.locales.map((locale) => {
        const isActive = locale === activeLocale;
        return (
          <Link
            key={locale}
            href={pathname}
            locale={locale}
            scroll={false}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "rounded px-1.5 py-0.5 font-mono text-xs transition-colors",
              isActive
                ? "bg-brand text-brand-foreground font-semibold"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {LABELS[locale]}
          </Link>
        );
      })}
    </div>
  );
}
