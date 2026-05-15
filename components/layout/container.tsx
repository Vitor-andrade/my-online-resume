import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

const container = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
  variants: {
    size: {
      prose: "max-w-prose",
      sm: "max-w-2xl",
      md: "max-w-4xl",
      lg: "max-w-5xl",
      xl: "max-w-6xl",
      full: "max-w-none",
    },
  },
  defaultVariants: { size: "xl" },
});

type ContainerProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof container> & { as?: ElementType };

/** Centered, max-width layout primitive with responsive gutters. */
export function Container({
  as: Tag = "div",
  size,
  className,
  ...props
}: ContainerProps) {
  return <Tag className={cn(container({ size }), className)} {...props} />;
}
