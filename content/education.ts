import type { Locale } from "@/i18n/routing";
import { type Education, educationSchema } from "./schema";

const educationByLocale = {
  en: [
    {
      institution: "UniCEUB",
      degree: "Postgraduate (Lato Sensu)",
      field: "Information Technology — Cybersecurity",
      start: "2023-02",
      end: "2023-10",
    },
    {
      institution: "UniCEUB",
      degree: "Bachelor of Engineering",
      field: "Computer Engineering",
      start: "2015-01",
      end: "2020-06",
    },
  ],
  "pt-BR": [
    {
      institution: "UniCEUB",
      degree: "Pós-graduação (Lato Sensu)",
      field: "Tecnologia da Informação — Cibersegurança",
      start: "2023-02",
      end: "2023-10",
    },
    {
      institution: "UniCEUB",
      degree: "Bacharelado em Engenharia",
      field: "Engenharia de Computação",
      start: "2015-01",
      end: "2020-06",
    },
  ],
} satisfies Record<Locale, unknown[]>;

const parsed = {
  en: educationByLocale.en.map((entry) => educationSchema.parse(entry)),
  "pt-BR": educationByLocale["pt-BR"].map((entry) =>
    educationSchema.parse(entry),
  ),
} satisfies Record<Locale, Education[]>;

export function getEducation(locale: Locale): Education[] {
  return parsed[locale];
}
