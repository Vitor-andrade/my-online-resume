import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

const cluster = cva("flex flex-row", {
  variants: {
    gap: {
      none: "gap-0",
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-8",
      xl: "gap-12",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      baseline: "items-baseline",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
    wrap: { true: "flex-wrap", false: "flex-nowrap" },
  },
  defaultVariants: {
    gap: "md",
    align: "center",
    justify: "start",
    wrap: true,
  },
});

type ClusterProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof cluster> & { as?: ElementType };

/** Horizontal layout primitive — lays children in a row with wrapping. */
export function Cluster({
  as: Tag = "div",
  gap,
  align,
  justify,
  wrap,
  className,
  ...props
}: ClusterProps) {
  return (
    <Tag
      className={cn(cluster({ gap, align, justify, wrap }), className)}
      {...props}
    />
  );
}
