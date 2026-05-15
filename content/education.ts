import { educationSchema } from "./schema";

export const education = [
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
].map((entry) => educationSchema.parse(entry));
