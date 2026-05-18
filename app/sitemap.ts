import type { MetadataRoute } from "next";
import { achievementSlugs } from "@/content";
import { routing } from "@/i18n/routing";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vitor-cavalcante.vercel.app/";

/** Builds a path for a locale — the default locale has no prefix. */
function localized(locale: string, path: string): string {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/cv",
    ...achievementSlugs.map((slug) => `/achievements/${slug}`),
  ];

  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: localized(locale, path),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, localized(l, path)]),
        ),
      },
    })),
  );
}
