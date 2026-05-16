import { ExternalLink } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Section } from "@/components/composed/section";
import { Cluster, Stack } from "@/components/layout";
import { getEducation } from "@/content";
import type { Locale } from "@/i18n/routing";
import { formatDateRange } from "@/lib/format";
import { cn } from "@/lib/utils";

/** Education section — each degree links to its diploma. */
export async function Education() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("sections.education");
  const education = getEducation(locale);

  return (
    <Section
      id="education"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
    >
      <Stack gap="md">
        {education.map((entry) => {
          const card = (
            <Stack
              gap="xs"
              className={cn(
                "bg-card rounded-lg border p-5",
                entry.credentialUrl &&
                  "group hover:border-brand/40 transition-colors",
              )}
            >
              <Cluster justify="between" align="start" gap="sm">
                <h3 className="font-semibold">{entry.degree}</h3>
                <Cluster gap="sm">
                  <span className="text-muted-foreground font-mono text-xs">
                    {formatDateRange(entry.start, entry.end)}
                  </span>
                  {entry.credentialUrl ? (
                    <ExternalLink
                      aria-hidden
                      className="text-muted-foreground group-hover:text-brand size-4 shrink-0 transition-colors"
                    />
                  ) : null}
                </Cluster>
              </Cluster>
              {entry.field ? (
                <p className="text-muted-foreground text-sm">{entry.field}</p>
              ) : null}
              <p className="text-brand text-sm">{entry.institution}</p>
            </Stack>
          );

          return (
            <article key={`${entry.institution}-${entry.start}`}>
              {entry.credentialUrl ? (
                <a
                  href={entry.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-visible:ring-ring block rounded-lg focus-visible:ring-2 focus-visible:outline-none"
                >
                  {card}
                </a>
              ) : (
                card
              )}
            </article>
          );
        })}
      </Stack>
    </Section>
  );
}
