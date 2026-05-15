import { FileDown } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Section } from "@/components/composed/section";
import { SocialLinks } from "@/components/composed/social-links";
import { ContactForm } from "@/components/contact-form";
import { Cluster, Stack } from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { getProfile } from "@/content";
import type { Locale } from "@/i18n/routing";

/** Contact section — a working contact form plus direct links. */
export async function Contact() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("sections.contact");
  const tForm = await getTranslations("contactForm");
  const tHero = await getTranslations("hero");
  const profile = getProfile(locale);

  return (
    <Section
      id="contact"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
    >
      <Stack gap="xl">
        <ContactForm />

        <Stack gap="sm">
          <span className="text-muted-foreground text-sm">
            {tForm("directIntro")}
          </span>
          <Cluster gap="sm" align="center">
            <a
              href={profile.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              <FileDown aria-hidden />
              {tHero("downloadCv")}
            </a>
            <SocialLinks links={profile.socials} />
          </Cluster>
        </Stack>
      </Stack>
    </Section>
  );
}
