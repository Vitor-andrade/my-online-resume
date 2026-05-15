import { Section } from "@/components/composed/section";
import { ProjectCard } from "@/components/composed/project-card";
import { Grid } from "@/components/layout";
import { projects } from "@/content";

/** Featured projects section. */
export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="things i've built"
      title="Projects"
      description="Selected public work. Private client projects are shown without a repository link."
    >
      <Grid columns={2} gap="md">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </Grid>
    </Section>
  );
}
