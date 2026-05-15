import { SiGithub } from "@icons-pack/react-simple-icons";
import { Lock } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Cluster, Stack } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/content";
import { cn } from "@/lib/utils";

/** Card for a featured project. Links to GitHub when the repo is public. */
export async function ProjectCard({
  name,
  description,
  githubUrl,
  stack,
  year,
}: Project) {
  const t = await getTranslations("projectCard");
  const body = (
    <Stack gap="md" className="h-full">
      <Stack gap="xs">
        <Cluster justify="between" align="start" gap="sm">
          <h3 className="text-lg font-semibold">{name}</h3>
          {githubUrl ? (
            <SiGithub
              aria-hidden
              className="text-muted-foreground group-hover:text-brand size-5 shrink-0 transition-colors"
            />
          ) : (
            <Lock
              aria-label={t("privateRepo")}
              className="text-muted-foreground size-4 shrink-0"
            />
          )}
        </Cluster>
        {year ? (
          <span className="text-muted-foreground font-mono text-xs">
            {year}
          </span>
        ) : null}
      </Stack>

      <p className="text-muted-foreground flex-1 text-sm">{description}</p>

      <Cluster as="ul" gap="xs">
        {stack.map((tech) => (
          <li key={tech}>
            <Badge variant="secondary">{tech}</Badge>
          </li>
        ))}
      </Cluster>
    </Stack>
  );

  const className = cn(
    "bg-card block rounded-lg border p-5 sm:p-6",
    githubUrl &&
      "group hover:border-brand/40 focus-visible:ring-ring transition-colors focus-visible:ring-2 focus-visible:outline-none",
  );

  return githubUrl ? (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
}
