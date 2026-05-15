import Link from "next/link";
import { SocialLinks } from "@/components/composed/social-links";
import { Cluster, Container, Stack } from "@/components/layout";
import { profile } from "@/content";

/** Site footer — identity, social links and build attribution. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/60 mt-20 border-t">
      <Container size="lg" className="py-10">
        <Stack gap="lg">
          <Cluster justify="between">
            <Stack gap="xs">
              <span className="font-semibold">{profile.name}</span>
              <span className="text-muted-foreground text-sm">
                {profile.role}
              </span>
            </Stack>
            <SocialLinks links={profile.socials} />
          </Cluster>
          <Cluster
            justify="between"
            className="text-muted-foreground text-xs"
            gap="sm"
          >
            <span>
              © {year} {profile.name}. All rights reserved.
            </span>
            <Cluster gap="md">
              <Link
                href="/design-system"
                className="hover:text-foreground transition-colors"
              >
                Design System
              </Link>
              <span>Built with Next.js · Crafted with Claude + Cursor</span>
            </Cluster>
          </Cluster>
        </Stack>
      </Container>
    </footer>
  );
}
