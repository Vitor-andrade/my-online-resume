import { FileDown, Mail } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Section } from "@/components/composed/section";
import { SocialLinks } from "@/components/composed/social-links";
import { Cluster, Stack } from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { getProfile } from "@/content";
import type { Locale } from "@/i18n/routing";

/** Contact section. A working contact form replaces the CTAs in Phase 6. */
export async function Contact() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("sections.contact");
  const tHero = await getTranslations("hero");
  const profile = getProfile(locale);

  return (
    <Section
      id="contact"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
    >
      <Stack gap="lg">
        <Cluster gap="sm">
          <a
            href={`mailto:${profile.email}`}
            className={buttonVariants({ size: "lg" })}
          >
            <Mail aria-hidden />
            {t("emailMe")}
          </a>
          <a
            href={profile.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            <FileDown aria-hidden />
            {tHero("downloadCv")}
          </a>
        </Cluster>
        <SocialLinks links={profile.socials} />
      </Stack>
    </Section>
  );
}
