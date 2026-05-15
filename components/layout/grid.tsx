import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

const grid = cva("grid", {
  variants: {
    gap: {
      none: "gap-0",
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-8",
      xl: "gap-12",
    },
    columns: {
      1: "grid-cols-1",
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    },
  },
  defaultVariants: { gap: "md", columns: 2 },
});

type GridProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof grid> & { as?: ElementType };

/** Responsive grid primitive — columns collapse on smaller breakpoints. */
export function Grid({
  as: Tag = "div",
  gap,
  columns,
  className,
  ...props
}: GridProps) {
  return <Tag className={cn(grid({ gap, columns }), className)} {...props} />;
}
