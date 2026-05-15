import { AchievementCard } from "@/components/composed/achievement-card";
import { Section } from "@/components/composed/section";
import { Grid } from "@/components/layout";
import { achievements } from "@/content";

/** Key achievements section — each card opens a dedicated case study. */
export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="proof of impact"
      title="Key Achievements"
      description="Selected work where engineering translated directly into business outcomes. Open one for the full case study."
    >
      <Grid columns={3} gap="md">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.slug} {...achievement} />
        ))}
      </Grid>
    </Section>
  );
}
