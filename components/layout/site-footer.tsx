import { getLocale, getTranslations } from "next-intl/server";
import { ShareButton } from "@/components/composed/share-button";
import { SocialLinks } from "@/components/composed/social-links";
import { Cluster, Container, Stack } from "@/components/layout";
import { getProfile } from "@/content";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";

/** Site footer — identity, social links and build attribution. */
export async function SiteFooter() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("footer");
  const profile = getProfile(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/60 mt-20 border-t">
      <Container size="lg" className="py-10">
        <Stack gap="lg">
          <Cluster justify="between">
            <Stack gap="xs">
              <span className="font-semibold">{profile.name}</span>
              <span className="text-muted-foreground text-sm">
                {profile.role}
              </span>
            </Stack>
            <Cluster gap="sm" className="items-center">
              <ShareButton
                variant="ghost"
                size="sm"
                linkedInUrl={
                  profile.socials.find((s) => s.platform === "linkedin")?.url
                }
              />
              <SocialLinks links={profile.socials} />
            </Cluster>
          </Cluster>
          <Cluster
            justify="between"
            className="text-muted-foreground text-xs"
            gap="sm"
          >
            <span>
              © {year} {profile.name}. {t("rights")}
            </span>
            <Cluster gap="md">
              <Link
                href="/cv"
                className="hover:text-foreground transition-colors"
              >
                {t("printResume")}
              </Link>
              <Link
                href="/design-system"
                className="hover:text-foreground transition-colors"
              >
                {t("designSystem")}
              </Link>
              <span>{t("builtWith")}</span>
            </Cluster>
          </Cluster>
        </Stack>
      </Container>
    </footer>
  );
}
