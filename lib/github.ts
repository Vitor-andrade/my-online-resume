import { z } from "zod";
import type { Project } from "@/content";
import { serverEnv } from "@/lib/env";

const GITHUB_USER = "Vitor-andrade";

const pinnedRepoSchema = z.object({
  name: z.string(),
  description: z.string().nullable(),
  url: z.url(),
  primaryLanguage: z.object({ name: z.string() }).nullable(),
  repositoryTopics: z.object({
    nodes: z.array(z.object({ topic: z.object({ name: z.string() }) })),
  }),
});

const pinnedResponseSchema = z.object({
  data: z.object({
    user: z.object({
      pinnedItems: z.object({ nodes: z.array(pinnedRepoSchema) }),
    }),
  }),
});

const PINNED_REPOS_QUERY = `
  query {
    user(login: "${GITHUB_USER}") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            primaryLanguage { name }
            repositoryTopics(first: 5) {
              nodes { topic { name } }
            }
          }
        }
      }
    }
  }
`;

/**
 * Fetches the user's pinned repositories from the GitHub GraphQL API
 * and maps them to the Project shape so the Projects section can
 * reuse ProjectCard. Pinned repos are a deliberately curated set, so
 * they are shown as-is (no sorting). Requires GITHUB_TOKEN; cached
 * with ISR. Returns an empty list on any failure — or when no token
 * is set — so the section degrades to the curated projects only.
 */
export async function getTopRepositories(): Promise<Project[]> {
  if (!serverEnv.GITHUB_TOKEN) return [];

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${serverEnv.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: PINNED_REPOS_QUERY }),
      next: { revalidate: 3600 },
    });
    if (!response.ok) return [];

    const json = pinnedResponseSchema.parse(await response.json());

    return json.data.user.pinnedItems.nodes.map((repo) => ({
      name: repo.name,
      description: repo.description ?? "",
      githubUrl: repo.url,
      stack:
        repo.repositoryTopics.nodes.length > 0
          ? repo.repositoryTopics.nodes.map((node) => node.topic.name)
          : repo.primaryLanguage
            ? [repo.primaryLanguage.name]
            : ["Repository"],
    }));
  } catch {
    return [];
  }
}
