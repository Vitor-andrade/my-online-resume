import { Section } from "@/components/composed/section";
import { SkillCategory } from "@/components/composed/skill-category";
import { Grid } from "@/components/layout";
import { skills } from "@/content";

/** Skills section — the featured AI category leads, full width. */
export function Skills() {
  const featured = skills.filter((category) => category.featured);
  const rest = skills.filter((category) => !category.featured);

  return (
    <Section
      id="skills"
      eyebrow="what i work with"
      title="Skills & Tech Stack"
      description="Six-plus years across frontend, backend, mobile and cloud — with a growing focus on AI-assisted engineering."
    >
      {featured.map((category) => (
        <SkillCategory key={category.name} {...category} />
      ))}
      <Grid columns={3} gap="md">
        {rest.map((category) => (
          <SkillCategory key={category.name} {...category} />
        ))}
      </Grid>
    </Section>
  );
}
