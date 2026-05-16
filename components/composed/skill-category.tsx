import { Cluster, Stack } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import type { SkillCategory as SkillCategoryData } from "@/content";
import { getSkillIcon } from "@/lib/skill-icons";
import { cn } from "@/lib/utils";

/** Card listing one skill category as a set of badges. */
export function SkillCategory({
  name,
  skills,
  featured,
  focusLabel,
}: SkillCategoryData & { focusLabel: string }) {
  return (
    <Stack
      gap="sm"
      className={cn(
        "bg-card rounded-lg border p-5",
        featured && "border-brand/40 ring-brand/15 ring-1",
      )}
    >
      <Cluster gap="sm">
        <h3 className="font-medium">{name}</h3>
        {featured ? (
          <Badge
            variant="outline"
            className="border-brand/40 text-brand font-mono"
          >
            {focusLabel}
          </Badge>
        ) : null}
      </Cluster>
      <Cluster as="ul" gap="xs">
        {skills.map((skill) => {
          const Icon = getSkillIcon(skill);
          return (
            <li key={skill}>
              <Badge variant="secondary" className="gap-1.5">
                {Icon ? <Icon className="size-3.5" /> : null}
                {skill}
              </Badge>
            </li>
          );
        })}
      </Cluster>
    </Stack>
  );
}
