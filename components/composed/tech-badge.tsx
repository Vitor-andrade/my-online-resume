import { createElement } from "react";
import { Badge } from "@/components/ui/badge";
import { getSkillIcon } from "@/lib/skill-icons";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  /** "lg" enlarges the badge — used on the achievement detail page. */
  size?: "default" | "lg";
}

/** A technology tag — shows the brand icon (green) when one exists. */
export function TechBadge({ name, size = "default" }: TechBadgeProps) {
  const icon = getSkillIcon(name);
  const isLarge = size === "lg";

  return (
    <Badge
      variant="secondary"
      className={cn("gap-1.5", isLarge && "gap-2 px-3 py-1 text-sm")}
    >
      {icon
        ? createElement(icon, {
            className: cn(
              "text-brand",
              isLarge ? "size-[1.15rem]" : "size-[0.9625rem]",
            ),
          })
        : null}
      {name}
    </Badge>
  );
}
