import { getLocale, getTranslations } from "next-intl/server";
import { Section } from "@/components/composed/section";
import { SkillsBrowser } from "@/components/sections/skills-browser";
import { getSkills } from "@/content";
import type { Locale } from "@/i18n/routing";

/** Skills section — a filterable browser of the tech stack. */
export async function Skills() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("sections.skills");

  return (
    <Section
      id="skills"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
    >
      <SkillsBrowser
        categories={getSkills(locale)}
        focusLabel={t("focus")}
        allLabel={t("all")}
      />
    </Section>
  );
}
