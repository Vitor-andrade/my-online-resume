import { ArrowDown, FileDown } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { SocialLinks } from "@/components/composed/social-links";
import { Cluster, Container, Stack } from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { getProfile } from "@/content";
import type { Locale } from "@/i18n/routing";

/** Landing hero — name, headline and the professional summary. */
export async function Hero() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("hero");
  const profile = getProfile(locale);
  const [lead, ...rest] = profile.summary;

  return (
    <Container
      as="section"
      id="top"
      size="lg"
      className="py-20 sm:py-28"
      aria-labelledby="hero-name"
    >
      <Stack gap="lg">
        <Stack gap="md">
          <span className="text-brand font-mono text-sm">
            {profile.role} · {profile.location}
          </span>
          <h1
            id="hero-name"
            className="text-4xl font-semibold tracking-tight sm:text-6xl"
          >
            {profile.name}
          </h1>
          <p className="text-foreground max-w-2xl text-xl sm:text-2xl">
            {profile.headline}
          </p>
        </Stack>

        <Stack gap="sm" className="max-w-2xl">
          <p className="text-foreground/90 text-base">{lead}</p>
          {rest.map((paragraph) => (
            <p key={paragraph} className="text-muted-foreground text-sm">
              {paragraph}
            </p>
          ))}
        </Stack>

        <Cluster gap="sm">
          <a href="#contact" className={buttonVariants({ size: "lg" })}>
            {t("getInTouch")}
            <ArrowDown aria-hidden />
          </a>
          <a
            href={profile.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            <FileDown aria-hidden />
            {t("downloadCv")}
          </a>
        </Cluster>

        <SocialLinks links={profile.socials} />
      </Stack>
    </Container>
  );
}
