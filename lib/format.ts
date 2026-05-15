const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/** Formats a "YYYY-MM" value as "Mon YYYY", e.g. "2025-07" → "Jul 2025". */
export function formatMonthYear(value: string): string {
  const [year, month] = value.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

/** Formats a date range; a null end renders as "Present". */
export function formatDateRange(start: string, end: string | null): string {
  return `${formatMonthYear(start)} – ${end ? formatMonthYear(end) : "Present"}`;
}
