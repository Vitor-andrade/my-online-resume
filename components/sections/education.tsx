import { Section } from "@/components/composed/section";
import { Cluster, Stack } from "@/components/layout";
import { education } from "@/content";
import { formatDateRange } from "@/lib/format";

/** Education section. */
export function Education() {
  return (
    <Section
      id="education"
      eyebrow="how i got here"
      title="Education"
      description="Formal background in computer engineering and cybersecurity."
    >
      <Stack gap="md">
        {education.map((entry) => (
          <Stack
            key={`${entry.institution}-${entry.start}`}
            as="article"
            gap="xs"
            className="bg-card rounded-lg border p-5"
          >
            <Cluster justify="between" align="start" gap="sm">
              <h3 className="font-semibold">{entry.degree}</h3>
              <span className="text-muted-foreground shrink-0 font-mono text-xs">
                {formatDateRange(entry.start, entry.end)}
              </span>
            </Cluster>
            {entry.field ? (
              <p className="text-muted-foreground text-sm">{entry.field}</p>
            ) : null}
            <p className="text-brand text-sm">{entry.institution}</p>
          </Stack>
        ))}
      </Stack>
    </Section>
  );
}
