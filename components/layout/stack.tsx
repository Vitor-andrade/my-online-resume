import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

const stack = cva("flex flex-col", {
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
      stretch: "items-stretch",
    },
  },
  defaultVariants: { gap: "md", align: "stretch" },
});

type StackProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof stack> & { as?: ElementType };

/** Vertical layout primitive — stacks children with a consistent gap. */
export function Stack({
  as: Tag = "div",
  gap,
  align,
  className,
  ...props
}: StackProps) {
  return <Tag className={cn(stack({ gap, align }), className)} {...props} />;
}
