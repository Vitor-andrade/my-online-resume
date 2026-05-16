import { createElement } from "react";
import { Badge } from "@/components/ui/badge";
import { getSkillIcon } from "@/lib/skill-icons";

/** A technology tag — shows the brand icon (green) when one exists. */
export function TechBadge({ name }: { name: string }) {
  const icon = getSkillIcon(name);
  return (
    <Badge variant="secondary" className="gap-1.5">
      {icon
        ? createElement(icon, { className: "text-brand size-[0.9625rem]" })
        : null}
      {name}
    </Badge>
  );
}
