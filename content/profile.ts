import { profileSchema } from "./schema";

export const profile = profileSchema.parse({
  name: "Vitor Cavalcante",
  role: "Senior Fullstack Engineer",
  headline:
    "Senior Fullstack Engineer building scalable, cloud-native web and mobile platforms.",
  location: "Brasília, Brazil",
  email: "vitor.andradecavalcante@gmail.com",
  phone: "+55 61 99975-7431",
  summary: [
    "Senior Fullstack Engineer with 6+ years designing and scaling cloud-native web and mobile solutions with a microservices architecture in React, Next.js, React Native, Node.js, NestJS, TypeScript and AWS.",
    "Led the internationalization of a platform serving over 1 million users, reducing support tickets by 30% and enabling market expansion into Europe and the US.",
    "Delivered full-stack refactors 20% ahead of schedule with targeted performance tuning, boosting user engagement 40% and conversions by 4%.",
    "Skilled in CI/CD automation, observability and secure-by-design practices, accelerating delivery speed by 30% and reducing production issues by 20%.",
  ],
  socials: [
    {
      platform: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/vitor-andrade-cavalcante/",
    },
    {
      platform: "github",
      label: "GitHub",
      url: "https://github.com/Vitor-andrade",
    },
    {
      platform: "email",
      label: "Email",
      url: "mailto:vitor.andradecavalcante@gmail.com",
    },
  ],
  languages: [
    { name: "English", level: "C1 — Advanced" },
    { name: "Portuguese", level: "Native" },
    { name: "Spanish", level: "B1 — Intermediate" },
    { name: "French", level: "A1 — Beginner" },
  ],
  resumePdf: "/Vitor_Cavalcante_FullStack_Eng.pdf",
});
