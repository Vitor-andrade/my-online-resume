import { getLocale, getTranslations } from "next-intl/server";
import { AchievementCard } from "@/components/composed/achievement-card";
import { Section } from "@/components/composed/section";
import { Grid } from "@/components/layout";
import { getAchievements } from "@/content";
import type { Locale } from "@/i18n/routing";

/** Key achievements section — each card opens a dedicated case study. */
export async function Achievements() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("sections.achievements");
  const achievements = getAchievements(locale);

  return (
    <Section
      id="achievements"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
    >
      <Grid columns={3} gap="md">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.slug} {...achievement} />
        ))}
      </Grid>
    </Section>
  );
}
