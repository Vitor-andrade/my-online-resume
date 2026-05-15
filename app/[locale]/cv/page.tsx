import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PrintButton } from "@/components/composed/print-button";
import { Cluster, Container, Stack } from "@/components/layout";
import {
  certifications,
  getAchievements,
  getEducation,
  getExperience,
  getProfile,
  getSkills,
} from "@/content";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { formatDateRange } from "@/lib/format";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const profile = getProfile(locale as Locale);
  const t = await getTranslations({ locale, namespace: "cv" });
  return {
    title: t("title"),
    description: `${profile.name} — ${profile.role}.`,
  };
}

function DocSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Stack as="section" gap="sm">
      <h2 className="border-border border-b pb-1 text-sm font-semibold tracking-widest uppercase">
        {title}
      </h2>
      {children}
    </Stack>
  );
}

export default async function CvPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("cv");
  const profile = getProfile(locale as Locale);
  const experience = getExperience(locale as Locale);
  const achievements = getAchievements(locale as Locale);
  const skills = getSkills(locale as Locale);
  const education = getEducation(locale as Locale);

  return (
    <main className="flex-1">
      <Container size="md" className="py-10 print:py-0">
        <Stack gap="lg">
          <Cluster justify="between" data-print-hidden>
            <Link
              href="/"
              className="text-muted-foreground hover:text-brand inline-flex items-center gap-1.5 text-sm transition-colors"
            >
              <ArrowLeft aria-hidden className="size-4" />
              {t("backToSite")}
            </Link>
            <PrintButton />
          </Cluster>

          <Stack as="article" gap="lg">
            <Stack gap="xs">
              <h1 className="text-3xl font-semibold tracking-tight">
                {profile.name}
              </h1>
              <p className="text-brand">{profile.headline}</p>
              <p className="text-muted-foreground text-sm">
                {profile.email} · {profile.phone} · {profile.location}
              </p>
              <p className="text-muted-foreground text-sm">
                {profile.socials
                  .filter((social) => social.platform !== "email")
                  .map((social) => social.url.replace(/^https?:\/\//, ""))
                  .join(" · ")}
              </p>
            </Stack>

            <DocSection title={t("summary")}>
              <Stack gap="xs">
                {profile.summary.map((paragraph) => (
                  <p key={paragraph} className="text-muted-foreground text-sm">
                    {paragraph}
                  </p>
                ))}
              </Stack>
            </DocSection>

            <DocSection title={t("experience")}>
              <Stack gap="md">
                {experience.map((entry) => (
                  <Stack key={`${entry.company}-${entry.start}`} gap="xs">
                    <Cluster justify="between" align="start" gap="sm">
                      <span className="font-semibold">
                        {entry.role} — {entry.company}
                      </span>
                      <span className="text-muted-foreground shrink-0 font-mono text-xs">
                        {formatDateRange(entry.start, entry.end)}
                      </span>
                    </Cluster>
                    <span className="text-muted-foreground text-xs">
                      {entry.location}
                    </span>
                    <Stack as="ul" gap="xs">
                      {entry.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-muted-foreground flex gap-2 text-sm"
                        >
                          <span aria-hidden>–</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </DocSection>

            <DocSection title={t("achievements")}>
              <Stack gap="sm">
                {achievements.map((achievement) => (
                  <Stack key={achievement.slug} gap="xs">
                    <Cluster justify="between" align="start" gap="sm">
                      <span className="font-semibold">{achievement.title}</span>
                      <span className="text-muted-foreground shrink-0 font-mono text-xs">
                        {achievement.organization} · {achievement.period}
                      </span>
                    </Cluster>
                    <p className="text-muted-foreground text-sm">
                      {achievement.impact}
                    </p>
                  </Stack>
                ))}
              </Stack>
            </DocSection>

            <DocSection title={t("skills")}>
              <Stack gap="xs">
                {skills.map((category) => (
                  <p key={category.name} className="text-sm">
                    <span className="font-medium">{category.name}: </span>
                    <span className="text-muted-foreground">
                      {category.skills.join(" · ")}
                    </span>
                  </p>
                ))}
              </Stack>
            </DocSection>

            <DocSection title={t("education")}>
              <Stack gap="sm">
                {education.map((entry) => (
                  <Cluster
                    key={`${entry.institution}-${entry.start}`}
                    justify="between"
                    align="start"
                    gap="sm"
                  >
                    <Stack gap="none">
                      <span className="text-sm font-semibold">
                        {entry.degree}
                        {entry.field ? ` — ${entry.field}` : ""}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {entry.institution}
                      </span>
                    </Stack>
                    <span className="text-muted-foreground shrink-0 font-mono text-xs">
                      {formatDateRange(entry.start, entry.end)}
                    </span>
                  </Cluster>
                ))}
              </Stack>
            </DocSection>

            <DocSection title={t("certifications")}>
              <Stack as="ul" gap="xs">
                {certifications.map((cert) => (
                  <li key={cert.name} className="text-muted-foreground text-sm">
                    {cert.name} — {cert.issuer}, {cert.year}
                  </li>
                ))}
              </Stack>
            </DocSection>

            <DocSection title={t("languages")}>
              <p className="text-muted-foreground text-sm">
                {profile.languages
                  .map((language) => `${language.name} (${language.level})`)
                  .join(" · ")}
              </p>
            </DocSection>
          </Stack>
        </Stack>
      </Container>
    </main>
  );
}
