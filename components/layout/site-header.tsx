import { Cluster, Container } from "@/components/layout";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/content";

export const NAV_ITEMS = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

/** Sticky site header — brand, anchor navigation and theme toggle. */
export function SiteHeader() {
  return (
    <header className="border-border/60 bg-background/80 sticky top-0 z-40 border-b backdrop-blur">
      <Container size="lg" className="py-3">
        <Cluster justify="between">
          <a href="#top" className="font-mono text-sm font-semibold">
            {profile.name}
          </a>

          <Cluster gap="lg" className="hidden md:flex">
            <nav>
              <Cluster as="ul" gap="lg">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </Cluster>
            </nav>
            <ThemeToggle />
          </Cluster>

          <Cluster gap="xs" className="md:hidden">
            <ThemeToggle />
            <MobileNav items={NAV_ITEMS} />
          </Cluster>
        </Cluster>
      </Container>
    </header>
  );
}
