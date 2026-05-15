import { defineRouting } from "next-intl/routing";

/**
 * Locale routing. English is the default and is served without a URL
 * prefix; other locales are prefixed (e.g. /pt-BR). Adding `es` or
 * `fr` later is a one-line change here plus a messages file.
 */
export const routing = defineRouting({
  locales: ["en", "pt-BR"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
