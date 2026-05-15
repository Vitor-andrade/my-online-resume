import { Stack } from "@/components/layout";

interface SectionHeaderProps {
  /** Short mono label rendered above the title. */
  eyebrow: string;
  title: string;
  description?: string;
}

/** Consistent heading block for every landing-page section. */
export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <Stack gap="xs">
      <span className="text-brand font-mono text-sm">{eyebrow}</span>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="text-muted-foreground max-w-prose">{description}</p>
      ) : null}
    </Stack>
  );
}
