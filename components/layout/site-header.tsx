import { getLocale, getTranslations } from "next-intl/server";
import { ShareButton } from "@/components/composed/share-button";
import { Cluster, Container } from "@/components/layout";
import { MobileNav } from "@/components/layout/mobile-nav";
import { LanguageSwitch } from "@/components/language-switch";
import { ThemeToggle } from "@/components/theme-toggle";
import { getProfile } from "@/content";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";

// Each key is both the section anchor id and the nav translation key.
const NAV_KEYS = [
  "skills",
  "experience",
  "achievements",
  "projects",
  "contact",
] as const;

/** Sticky site header — brand, anchor navigation, language and theme. */
export async function SiteHeader() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("nav");
  const profile = getProfile(locale);

  const navItems = NAV_KEYS.map((key) => ({
    href: `/#${key}`,
    label: t(key),
  }));

  const linkedInUrl = profile.socials.find(
    (s) => s.platform === "linkedin",
  )?.url;

  return (
    <header className="border-border/60 bg-background/80 sticky top-0 z-40 border-b backdrop-blur">
      <Container size="lg" className="py-3">
        <Cluster justify="between">
          <Link href="/" className="font-mono text-sm font-semibold">
            {profile.name}
          </Link>

          <Cluster gap="lg" className="hidden md:flex">
            <nav>
              <Cluster as="ul" gap="lg">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </Cluster>
            </nav>
            <Cluster gap="xs">
              <ShareButton
                variant="outline"
                size="icon"
                linkedInUrl={linkedInUrl}
              />
              <LanguageSwitch />
              <ThemeToggle />
            </Cluster>
          </Cluster>

          <Cluster gap="xs" className="md:hidden">
            <ShareButton
              variant="outline"
              size="icon"
              linkedInUrl={linkedInUrl}
            />
            <LanguageSwitch />
            <ThemeToggle />
            <MobileNav items={navItems} />
          </Cluster>
        </Cluster>
      </Container>
    </header>
  );
}
