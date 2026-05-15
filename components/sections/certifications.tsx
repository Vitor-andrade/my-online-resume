import { Section } from "@/components/composed/section";
import { Cluster, Stack } from "@/components/layout";
import { certifications } from "@/content";

/** Certifications section. */
export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="continued learning"
      title="Certifications"
    >
      <Stack as="ul" gap="sm">
        {certifications.map((cert) => (
          <li key={cert.name}>
            <Cluster
              justify="between"
              align="start"
              gap="sm"
              className="bg-card rounded-lg border p-4"
            >
              <Stack gap="none">
                <span className="font-medium">{cert.name}</span>
                <span className="text-muted-foreground text-sm">
                  {cert.issuer}
                </span>
              </Stack>
              <span className="text-muted-foreground shrink-0 font-mono text-xs">
                {cert.year}
              </span>
            </Cluster>
          </li>
        ))}
      </Stack>
    </Section>
  );
}
