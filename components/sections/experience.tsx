import { getLocale, getTranslations } from "next-intl/server";
import { ExperienceCard } from "@/components/composed/experience-card";
import { Section } from "@/components/composed/section";
import { getExperience } from "@/content";
import type { Locale } from "@/i18n/routing";

/** Work-experience section, laid out as a vertical timeline. */
export async function Experience() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("sections.experience");
  const experience = getExperience(locale);

  return (
    <Section
      id="experience"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
    >
      <ol className="relative">
        {experience.map((entry) => (
          <li
            key={`${entry.company}-${entry.start}`}
            className="border-border relative border-l pb-8 pl-8 last:pb-0"
          >
            <span
              aria-hidden
              className="absolute top-6 left-0 size-3 -translate-x-1/2"
            >
              <span className="bg-brand absolute inline-flex size-full animate-ping rounded-full opacity-60" />
              <span className="bg-brand ring-background relative inline-flex size-full rounded-full ring-4" />
            </span>
            <ExperienceCard {...entry} />
          </li>
        ))}
      </ol>
    </Section>
  );
}
