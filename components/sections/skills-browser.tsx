"use client";

import { useState } from "react";
import { SkillCategory } from "@/components/composed/skill-category";
import { Cluster, Grid, Stack } from "@/components/layout";
import type { SkillCategory as SkillCategoryData } from "@/content";
import { cn } from "@/lib/utils";

interface SkillsBrowserProps {
  categories: SkillCategoryData[];
  focusLabel: string;
  allLabel: string;
}

/** Filterable skills view — a pill bar narrows the cards to one
 *  category; "All" restores the full layout (featured card first). */
export function SkillsBrowser({
  categories,
  focusLabel,
  allLabel,
}: SkillsBrowserProps) {
  const [active, setActive] = useState<string | null>(null);

  const visible = active
    ? categories.filter((category) => category.name === active)
    : categories;
  const featured = visible.filter((category) => category.featured);
  const rest = visible.filter((category) => !category.featured);

  const filters: { key: string | null; label: string }[] = [
    { key: null, label: allLabel },
    ...categories.map((category) => ({
      key: category.name,
      label: category.name,
    })),
  ];

  return (
    <Stack gap="lg">
      <Cluster as="ul" gap="xs">
        {filters.map((filter) => {
          const isActive = active === filter.key;
          return (
            <li key={filter.label}>
              <button
                type="button"
                onClick={() => setActive(filter.key)}
                aria-pressed={isActive}
                className={cn(
                  "focus-visible:ring-ring rounded-full border px-3 py-1 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none",
                  isActive
                    ? "border-brand/40 bg-accent text-accent-foreground"
                    : "border-border text-muted-foreground hover:text-foreground",
                )}
              >
                {filter.label}
              </button>
            </li>
          );
        })}
      </Cluster>

      {active ? (
        visible.map((category) => (
          <SkillCategory
            key={category.name}
            {...category}
            focusLabel={focusLabel}
          />
        ))
      ) : (
        <>
          {featured.map((category) => (
            <SkillCategory
              key={category.name}
              {...category}
              focusLabel={focusLabel}
            />
          ))}
          {rest.length > 0 ? (
            <Grid columns={3} gap="md">
              {rest.map((category) => (
                <SkillCategory
                  key={category.name}
                  {...category}
                  focusLabel={focusLabel}
                />
              ))}
            </Grid>
          ) : null}
        </>
      )}
    </Stack>
  );
}
