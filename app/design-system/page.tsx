import type { Metadata } from "next";
import { Cluster, Container, Grid, Stack } from "@/components/layout";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Design System",
  description:
    "Living documentation of the design tokens, layout primitives and components behind this résumé.",
};

const PRINCIPLES = [
  {
    title: "Token-driven",
    body: "Components consume semantic tokens, never literal colors. Theming is a one-layer swap.",
  },
  {
    title: "Composition over configuration",
    body: "Small primitives that combine, rather than components with large prop surfaces.",
  },
  {
    title: "Accessibility-first",
    body: "Keyboard, screen reader and contrast come before visual polish. WCAG 2.1 AA is the floor.",
  },
  {
    title: "Mobile-first responsive",
    body: "Every layout is authored from the smallest breakpoint up.",
  },
  {
    title: "Performance budget",
    body: "LCP ≤ 1.5s, CLS ≤ 0.1, first-load JS ≤ 100KB.",
  },
];

const SEMANTIC_COLORS: { name: string; className: string }[] = [
  { name: "background", className: "bg-background" },
  { name: "foreground", className: "bg-foreground" },
  { name: "card", className: "bg-card" },
  { name: "primary", className: "bg-primary" },
  { name: "secondary", className: "bg-secondary" },
  { name: "muted", className: "bg-muted" },
  { name: "accent", className: "bg-accent" },
  { name: "brand", className: "bg-brand" },
  { name: "border", className: "bg-border" },
  { name: "ring", className: "bg-ring" },
  { name: "destructive", className: "bg-destructive" },
];

const BUTTON_VARIANTS = [
  "default",
  "outline",
  "secondary",
  "ghost",
  "destructive",
  "link",
] as const;

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <Stack as="section" gap="lg">
      <Stack gap="xs">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="text-muted-foreground max-w-prose text-sm">
          {description}
        </p>
      </Stack>
      {children}
    </Stack>
  );
}

export default function DesignSystemPage() {
  return (
    <Container size="lg" className="py-12 sm:py-16">
      <Stack gap="xl">
        <Stack as="header" gap="md">
          <Cluster justify="between" align="start">
            <span className="text-brand font-mono text-sm">design system</span>
            <ThemeToggle />
          </Cluster>
          <Stack gap="xs">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Design System
            </h1>
            <p className="text-muted-foreground max-w-prose">
              Living documentation of the tokens, layout primitives and
              components behind this résumé. It renders from the same tokens the
              site uses, so it is always in sync.
            </p>
          </Stack>
        </Stack>

        <Section
          title="Principles"
          description="The rules every component in this system is held to."
        >
          <Grid columns={2} gap="md">
            {PRINCIPLES.map((principle) => (
              <Stack
                key={principle.title}
                gap="xs"
                className="bg-card rounded-lg border p-4"
              >
                <h3 className="font-medium">{principle.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {principle.body}
                </p>
              </Stack>
            ))}
          </Grid>
        </Section>

        <Section
          title="Color — semantic tokens"
          description="Intent-named tokens that components consume. Each maps to a primitive and flips with the theme."
        >
          <Grid columns={4} gap="md">
            {SEMANTIC_COLORS.map((color) => (
              <Stack key={color.name} gap="xs">
                <div
                  className={`${color.className} h-16 w-full rounded-lg border`}
                />
                <span className="font-mono text-xs">{color.name}</span>
              </Stack>
            ))}
          </Grid>
        </Section>

        <Section
          title="Layout primitives"
          description="Stack, Cluster, Container and Grid give layout a semantic vocabulary."
        >
          <Stack gap="md">
            <Stack gap="xs">
              <span className="text-muted-foreground font-mono text-xs">
                Cluster
              </span>
              <Cluster gap="sm" className="bg-card rounded-lg border p-4">
                {["one", "two", "three", "four"].map((item) => (
                  <span
                    key={item}
                    className="bg-muted rounded-md px-3 py-1 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </Cluster>
            </Stack>
            <Stack gap="xs">
              <span className="text-muted-foreground font-mono text-xs">
                Grid (columns=3)
              </span>
              <Grid columns={3} gap="sm">
                {["a", "b", "c"].map((item) => (
                  <div
                    key={item}
                    className="bg-card rounded-lg border p-4 text-sm"
                  >
                    {item}
                  </div>
                ))}
              </Grid>
            </Stack>
          </Stack>
        </Section>

        <Section
          title="Button"
          description="The first component primitive — six variants, accessible focus states."
        >
          <Cluster gap="sm">
            {BUTTON_VARIANTS.map((variant) => (
              <Button key={variant} variant={variant}>
                {variant}
              </Button>
            ))}
          </Cluster>
        </Section>
      </Stack>
    </Container>
  );
}
