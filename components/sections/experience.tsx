import { getLocale, getTranslations } from "next-intl/server";
import { ExperienceCard } from "@/components/composed/experience-card";
import { Section } from "@/components/composed/section";
import { Stack } from "@/components/layout";
import { getExperience } from "@/content";
import type { Locale } from "@/i18n/routing";

/** Work-experience section. */
export async function Experience() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("sections.experience");
  const experience = getExperience(locale);

  return (
    <Section
      id="experience"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
    >
      <Stack gap="md">
        {experience.map((entry) => (
          <ExperienceCard key={`${entry.company}-${entry.start}`} {...entry} />
        ))}
      </Stack>
    </Section>
  );
}
