import { getLocale, getTranslations } from "next-intl/server";
import { Section } from "@/components/composed/section";
import { ProjectCard } from "@/components/composed/project-card";
import { Grid, Stack } from "@/components/layout";
import { getProjects } from "@/content";
import type { Locale } from "@/i18n/routing";
import { getTopRepositories } from "@/lib/github";

/**
 * Featured projects section. Curated entries are augmented with the
 * user's top public GitHub repositories, fetched server-side with ISR.
 */
export async function Projects() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("sections.projects");
  const projects = getProjects(locale);
  const repos = await getTopRepositories(4);

  return (
    <Section
      id="projects"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
    >
      <Grid columns={2} gap="md">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </Grid>

      {repos.length > 0 ? (
        <Stack gap="md">
          <h3 className="text-muted-foreground font-mono text-sm">
            {t("latestOnGithub")}
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
