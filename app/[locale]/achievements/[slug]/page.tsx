import { ArrowLeft, Check } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AchievementGallery } from "@/components/composed/achievement-gallery";
import { Metric } from "@/components/composed/metric";
import { TechBadge } from "@/components/composed/tech-badge";
import { Cluster, Container, Stack } from "@/components/layout";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
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
  return {
    title: achievement.title,
    description: achievement.summary,
    openGraph: { images: [achievement.cover] },
  };
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

            <div className="bg-muted relative aspect-video overflow-hidden rounded-lg border">
              <Image
                src={achievement.cover}
                alt=""
                fill
                priority
                sizes="(min-width: 768px) 48rem, 100vw"
                className="object-contain"
              />
            </div>

            <p className="text-foreground/90 text-lg">{achievement.summary}</p>

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

            {achievement.chapters.map((chapter) => (
              <Stack as="section" key={chapter.title ?? "main"} gap="lg">
                {chapter.title ? (
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {chapter.title}
                  </h2>
                ) : null}
                {chapter.summary ? (
                  <p className="text-muted-foreground">{chapter.summary}</p>
                ) : null}

                <Stack as="ul" gap="sm">
                  {chapter.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-muted-foreground flex gap-2.5 text-sm"
                    >
                      <span
                        className="bg-brand mt-2 size-1.5 shrink-0 rounded-full"
                        aria-hidden
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </Stack>

                <Stack gap="sm">
                  <h3 className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
                    {t("impact")}
                  </h3>
                  <Stack as="ul" gap="sm">
                    {chapter.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-2.5 text-sm">
                        <Check
                          aria-hidden
                          className="text-brand mt-0.5 size-4 shrink-0"
                        />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </Stack>
                </Stack>

                <AchievementGallery images={chapter.gallery} />
              </Stack>
            ))}

            <Stack as="section" gap="sm">
              <h2 className="text-xl font-semibold">{t("tech")}</h2>
              <Cluster as="ul" gap="sm">
                {achievement.tech.map((item) => (
                  <li key={item}>
                    <TechBadge name={item} size="lg" />
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
