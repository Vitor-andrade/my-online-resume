import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Metric } from "@/components/composed/metric";
import { Cluster, Container, Stack } from "@/components/layout";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Badge } from "@/components/ui/badge";
import { achievementSlugs, getAchievementBySlug } from "@/content";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

// Only the known achievement slugs are valid; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return achievementSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const achievement = getAchievementBySlug(locale as Locale, slug);
  if (!achievement) return {};
  return { title: achievement.title, description: achievement.summary };
}

export default async function AchievementPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const achievement = getAchievementBySlug(locale as Locale, slug);
  if (!achievement) notFound();

  const t = await getTranslations("achievement");

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Container as="article" size="md" className="py-16">
          <Stack gap="xl">
            <Stack gap="lg">
              <Link
                href="/#achievements"
                className="text-muted-foreground hover:text-brand inline-flex items-center gap-1.5 text-sm transition-colors"
              >
                <ArrowLeft aria-hidden className="size-4" />
                {t("back")}
              </Link>
              <Stack gap="sm">
                <span className="text-brand font-mono text-sm">
                  {achievement.organization} · {achievement.period}
                </span>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {achievement.title}
                </h1>
              </Stack>
            </Stack>

            {achievement.metrics.length > 0 ? (
              <Cluster
                as="ul"
                gap="xl"
                className="border-border/60 border-y py-6"
              >
                {achievement.metrics.map((metric) => (
                  <li key={metric.label}>
                    <Metric {...metric} />
                  </li>
                ))}
              </Cluster>
            ) : null}

            <Stack as="section" gap="sm">
              <h2 className="text-xl font-semibold">{t("overview")}</h2>
              <p className="text-muted-foreground">{achievement.summary}</p>
            </Stack>

            <Stack as="section" gap="sm">
              <h2 className="text-xl font-semibold">{t("impact")}</h2>
              <p className="text-muted-foreground">{achievement.impact}</p>
            </Stack>

            <Stack as="section" gap="sm">
              <h2 className="text-xl font-semibold">{t("tech")}</h2>
              <Cluster as="ul" gap="xs">
                {achievement.tech.map((item) => (
                  <li key={item}>
                    <Badge variant="secondary">{item}</Badge>
                  </li>
                ))}
              </Cluster>
            </Stack>
          </Stack>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
