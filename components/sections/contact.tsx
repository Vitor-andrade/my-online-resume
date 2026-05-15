import { FileDown, Mail } from "lucide-react";
import { Section } from "@/components/composed/section";
import { SocialLinks } from "@/components/composed/social-links";
import { Cluster, Stack } from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/content";

/** Contact section. A working contact form replaces the CTAs in Phase 6. */
export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="get in touch"
      title="Let's build something"
      description="Have an engineering challenge, an architecture question or a collaboration in mind? The fastest way to reach me is email."
    >
      <Stack gap="lg">
        <Cluster gap="sm">
          <a
            href={`mailto:${profile.email}`}
            className={buttonVariants({ size: "lg" })}
          >
            <Mail aria-hidden />
            Email me
          </a>
          <a
            href={profile.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            <FileDown aria-hidden />
            Download CV
          </a>
        </Cluster>
        <SocialLinks links={profile.socials} />
      </Stack>
    </Section>
  );
}
