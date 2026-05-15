import { getLocale, getTranslations } from "next-intl/server";
import { Section } from "@/components/composed/section";
import { SkillCategory } from "@/components/composed/skill-category";
import { Grid } from "@/components/layout";
import { getSkills } from "@/content";
import type { Locale } from "@/i18n/routing";

/** Skills section — the featured AI category leads, full width. */
export async function Skills() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("sections.skills");
  const skills = getSkills(locale);
  const featured = skills.filter((category) => category.featured);
  const rest = skills.filter((category) => !category.featured);
  const focusLabel = t("focus");

  return (
    <Section
      id="skills"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
    >
      {featured.map((category) => (
        <SkillCategory
          key={category.name}
          focusLabel={focusLabel}
          {...category}
        />
      ))}
      <Grid columns={3} gap="md">
        {rest.map((category) => (
          <SkillCategory
            key={category.name}
            focusLabel={focusLabel}
            {...category}
          />
        ))}
      </Grid>
    </Section>
  );
}
