import { getLocale, getTranslations } from "next-intl/server";
import { Section } from "@/components/composed/section";
import { Cluster, Stack } from "@/components/layout";
import { getEducation } from "@/content";
import type { Locale } from "@/i18n/routing";
import { formatDateRange } from "@/lib/format";

/** Education section. */
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
        {education.map((entry) => (
          <Stack
            key={`${entry.institution}-${entry.start}`}
            as="article"
            gap="xs"
            className="bg-card rounded-lg border p-5"
          >
            <Cluster justify="between" align="start" gap="sm">
              <h3 className="font-semibold">{entry.degree}</h3>
              <span className="text-muted-foreground shrink-0 font-mono text-xs">
                {formatDateRange(entry.start, entry.end)}
              </span>
            </Cluster>
            {entry.field ? (
              <p className="text-muted-foreground text-sm">{entry.field}</p>
            ) : null}
            <p className="text-brand text-sm">{entry.institution}</p>
          </Stack>
        ))}
      </Stack>
    </Section>
  );
}
