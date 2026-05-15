import { z } from "zod";
import type { Project } from "@/content";

const GITHUB_USER = "Vitor-andrade";

const repoSchema = z.object({
  name: z.string(),
  description: z.string().nullable(),
  html_url: z.url(),
  language: z.string().nullable(),
  topics: z.array(z.string()).default([]),
  fork: z.boolean(),
  archived: z.boolean(),
  stargazers_count: z.number(),
});

const reposSchema = z.array(repoSchema);

/**
 * Fetches the user's public repositories from the GitHub REST API and
 * maps them to the Project shape so the Projects section can reuse
 * ProjectCard. Unauthenticated (no token, no cost); cached with ISR.
 * Returns an empty list on any failure so the section degrades to the
 * curated projects only.
 */
export async function getTopRepositories(limit = 4): Promise<Project[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      },
    );
    if (!response.ok) return [];

    const repos = reposSchema.parse(await response.json());

    return repos
      .filter((repo) => !repo.fork && !repo.archived && repo.description)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, limit)
      .map((repo) => ({
        name: repo.name,
        description: repo.description ?? "",
        githubUrl: repo.html_url,
        stack:
          repo.topics.length > 0
            ? repo.topics.slice(0, 5)
            : repo.language
              ? [repo.language]
              : ["Repository"],
      }));
  } catch {
    return [];
  }
}
