import { z } from "zod";
import type { Project } from "@/content";

const GITHUB_USER = "Vitor-andrade";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const pinnedRepoSchema = z.object({
  name: z.string(),
  description: z.string().nullable(),
  url: z.url(),
  languages: z.object({
    nodes: z.array(z.object({ name: z.string() })),
  }),
  repositoryTopics: z.object({
    nodes: z.array(z.object({ topic: z.object({ name: z.string() }) })),
  }),
});

const pinnedItemsResponseSchema = z.object({
  data: z.object({
    user: z.object({
      pinnedItems: z.object({
        nodes: z.array(pinnedRepoSchema),
      }),
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
            languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
              nodes { name }
            }
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
 * Fetches the user's pinned repositories from the GitHub GraphQL API and
 * maps them to the Project shape so the Projects section can reuse
 * ProjectCard. Requires a GITHUB_TOKEN environment variable.
 * Cached with ISR (1 hour). Returns an empty list on any failure so the
 * section degrades gracefully to the curated projects only.
 */
export async function getTopRepositories(): Promise<Project[]> {
  if (!GITHUB_TOKEN) return [];

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: PINNED_REPOS_QUERY }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) return [];

    const json = pinnedItemsResponseSchema.parse(await response.json());
    const nodes = json.data.user.pinnedItems.nodes;
    return nodes.map((repo) => ({
      name: repo.name,
      description: repo.description ?? "",
      githubUrl: repo.url,
      stack:
        repo.repositoryTopics.nodes.length > 0
          ? repo.repositoryTopics.nodes.map((n) => n.topic.name)
          : repo.languages.nodes.length > 0
            ? repo.languages.nodes.map((l) => l.name)
            : ["Repository"],
    }));
  } catch {
    return [];
  }
}
