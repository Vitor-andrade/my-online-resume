import { ArrowUpRight } from "lucide-react";
import { Cluster, Stack } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import type { Achievement } from "@/content";
import { Link } from "@/i18n/navigation";
import { Metric } from "./metric";

/** Card for a key achievement — links to its dedicated case-study route. */
export function AchievementCard({
  slug,
  title,
  organization,
  period,
  summary,
  metrics,
  tech,
}: Achievement) {
  return (
    <Link
      href={`/achievements/${slug}`}
      className="group bg-card hover:border-brand/40 focus-visible:ring-ring block rounded-lg border p-5 transition-colors focus-visible:ring-2 focus-visible:outline-none sm:p-6"
    >
      <Stack gap="md">
        <Stack gap="xs">
          <Cluster justify="between" align="start" gap="sm">
            <h3 className="text-lg font-semibold">{title}</h3>
            <ArrowUpRight
              aria-hidden
              className="text-muted-foreground group-hover:text-brand size-5 shrink-0 transition-colors"
            />
          </Cluster>
          <p className="text-brand text-sm">
            {organization}
            <span className="text-muted-foreground"> · {period}</span>
          </p>
        </Stack>

        <p className="text-muted-foreground text-sm">{summary}</p>

        {metrics.length > 0 ? (
          <Cluster as="ul" gap="lg">
            {metrics.map((metric) => (
              <li key={metric.label}>
                <Metric {...metric} />
              </li>
            ))}
          </Cluster>
        ) : null}

        <Cluster as="ul" gap="xs">
          {tech.map((item) => (
            <li key={item}>
              <Badge variant="secondary">{item}</Badge>
            </li>
          ))}
        </Cluster>
      </Stack>
    </Link>
  );
}
