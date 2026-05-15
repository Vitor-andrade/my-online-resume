import { Stack } from "@/components/layout";
import type { Metric as MetricData } from "@/content";

/** Big-number display for a single quantified result. */
export function Metric({ value, label }: MetricData) {
  return (
    <Stack gap="none">
      <span className="text-brand text-2xl font-semibold sm:text-3xl">
        {value}
      </span>
      <span className="text-muted-foreground text-xs">{label}</span>
    </Stack>
  );
}
