import { describe, expect, it } from "vitest";
import { formatDateRange, formatMonthYear } from "@/lib/format";

describe("formatMonthYear", () => {
  it("formats a year-month into a short month and year", () => {
    expect(formatMonthYear("2025-07")).toBe("Jul 2025");
    expect(formatMonthYear("2020-01")).toBe("Jan 2020");
    expect(formatMonthYear("2024-12")).toBe("Dec 2024");
  });
});

describe("formatDateRange", () => {
  it("joins a start and end month", () => {
    expect(formatDateRange("2023-11", "2024-11")).toBe("Nov 2023 – Nov 2024");
  });

  it("renders an ongoing role as 'Present'", () => {
    expect(formatDateRange("2025-07", null)).toBe("Jul 2025 – Present");
  });
});
