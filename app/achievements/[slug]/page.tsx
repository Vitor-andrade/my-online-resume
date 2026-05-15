import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metric } from "@/components/composed/metric";
import { Cluster, Container, Stack } from "@/components/layout";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Badge } from "@/components/ui/badge";
import { achievements, getAchievementBySlug } from "@/content";

// Only the known achievement slugs are valid; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return achievements.map((achievement) => ({ slug: achievement.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const achievement = getAchievementBySlug(slug);
  if (!achievement) return {};
  return { title: achievement.title, description: achievement.summary };
}

export default async function AchievementPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const achievement = getAchievementBySlug(slug);
  if (!achievement) notFound();

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
                All achievements
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
              <h2 className="text-xl font-semibold">Overview</h2>
              <p className="text-muted-foreground">{achievement.summary}</p>
            </Stack>

            <Stack as="section" gap="sm">
              <h2 className="text-xl font-semibold">Impact</h2>
              <p className="text-muted-foreground">{achievement.impact}</p>
            </Stack>

            <Stack as="section" gap="sm">
              <h2 className="text-xl font-semibold">Tech</h2>
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
