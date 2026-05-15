import { certificationSchema } from "./schema";

export const certifications = [
  {
    name: "Apache Airflow — The Hands-On Guide",
    issuer: "Udemy",
    year: 2024,
  },
  {
    name: "Secure Developer Professional",
    issuer: "CECyber",
    year: 2022,
  },
  {
    name: "React Native: Working with Function Components",
    issuer: "Alura",
    year: 2020,
  },
].map((entry) => certificationSchema.parse(entry));
