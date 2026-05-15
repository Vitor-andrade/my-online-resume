import { Section } from "@/components/composed/section";
import { ProjectCard } from "@/components/composed/project-card";
import { Grid, Stack } from "@/components/layout";
import { projects } from "@/content";
import { getTopRepositories } from "@/lib/github";

/**
 * Featured projects section. Curated entries are augmented with the
 * user's top public GitHub repositories, fetched server-side with ISR.
 */
export async function Projects() {
  const repos = await getTopRepositories(4);

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

      {repos.length > 0 ? (
        <Stack gap="md">
          <h3 className="text-muted-foreground font-mono text-sm">
            latest on github
          </h3>
          <Grid columns={2} gap="md">
            {repos.map((repo) => (
              <ProjectCard key={repo.name} {...repo} />
            ))}
          </Grid>
        </Stack>
      ) : null}
    </Section>
  );
}
