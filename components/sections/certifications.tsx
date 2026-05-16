import { ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/composed/section";
import { Cluster, Stack } from "@/components/layout";
import { certifications } from "@/content";
import { cn } from "@/lib/utils";

/** Certifications section — each entry links to its certificate. */
export async function Certifications() {
  const t = await getTranslations("sections.certifications");

  return (
    <Section id="certifications" eyebrow={t("eyebrow")} title={t("title")}>
      <Stack as="ul" gap="sm">
        {certifications.map((cert) => {
          const card = (
            <Cluster
              justify="between"
              align="start"
              gap="sm"
              className={cn(
                "bg-card rounded-lg border p-4",
                cert.credentialUrl &&
                  "group hover:border-brand/40 transition-colors",
              )}
            >
              <Stack gap="none">
                <span className="font-medium">{cert.name}</span>
                <span className="text-muted-foreground text-sm">
                  {cert.issuer}
                </span>
              </Stack>
              <Cluster gap="sm">
                <span className="text-muted-foreground font-mono text-xs">
                  {cert.year}
                </span>
                {cert.credentialUrl ? (
                  <ExternalLink
                    aria-hidden
                    className="text-muted-foreground group-hover:text-brand size-4 shrink-0 transition-colors"
                  />
                ) : null}
              </Cluster>
            </Cluster>
          );

          return (
            <li key={cert.name}>
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-visible:ring-ring block rounded-lg focus-visible:ring-2 focus-visible:outline-none"
                >
                  {card}
                </a>
              ) : (
                card
              )}
            </li>
          );
        })}
      </Stack>
    </Section>
  );
}
