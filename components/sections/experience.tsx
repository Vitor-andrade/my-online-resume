import { Section } from "@/components/composed/section";
import { ExperienceCard } from "@/components/composed/experience-card";
import { Stack } from "@/components/layout";
import { experience } from "@/content";

/** Work-experience section. */
export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="where i've worked"
      title="Work Experience"
      description="Senior roles building and scaling production web and mobile platforms."
    >
      <Stack gap="md">
        {experience.map((entry) => (
          <ExperienceCard key={`${entry.company}-${entry.start}`} {...entry} />
        ))}
      </Stack>
    </Section>
  );
}
