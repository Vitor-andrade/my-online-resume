import { TechBadge } from "@/components/composed/tech-badge";
import { Cluster, Stack } from "@/components/layout";
import type { Experience } from "@/content";
import { formatDateRange } from "@/lib/format";

/** Card for a single work-experience entry. */
export function ExperienceCard({
  company,
  role,
  location,
  start,
  end,
  highlights,
  stack,
}: Experience) {
  return (
    <Stack
      as="article"
      gap="md"
      className="bg-card rounded-lg border p-5 sm:p-6"
    >
      <Stack gap="xs">
        <Cluster justify="between" align="start" gap="sm">
          <h3 className="text-lg font-semibold">{role}</h3>
          <span className="text-muted-foreground shrink-0 font-mono text-xs">
            {formatDateRange(start, end)}
          </span>
        </Cluster>
        <p className="text-brand text-sm">
          {company}
          <span className="text-muted-foreground"> · {location}</span>
        </p>
      </Stack>

      <Stack as="ul" gap="sm">
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="text-muted-foreground flex gap-2.5 text-sm"
          >
            <span
              className="bg-brand mt-2 size-1.5 shrink-0 rounded-full"
              aria-hidden
            />
            <span>{highlight}</span>
          </li>
        ))}
      </Stack>

      {stack.length > 0 ? (
        <Cluster as="ul" gap="xs">
          {stack.map((tech) => (
            <li key={tech}>
              <TechBadge name={tech} />
            </li>
          ))}
        </Cluster>
      ) : null}
    </Stack>
  );
}
