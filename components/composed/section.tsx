import { Container, Stack } from "@/components/layout";
import { SectionHeader } from "./section-header";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

/** Standard landing-page section — anchor target, header and content. */
export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <Container
      as="section"
      id={id}
      size="lg"
      className="scroll-mt-20 py-16"
      aria-labelledby={`${id}-title`}
    >
      <Stack gap="lg">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          titleId={`${id}-title`}
        />
        {children}
      </Stack>
    </Container>
  );
}
