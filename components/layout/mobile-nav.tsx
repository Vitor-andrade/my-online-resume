"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { Stack } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavItem {
  href: string;
  label: string;
}

/** Slide-in navigation for small screens. */
export function MobileNav({ items }: { items: NavItem[] }) {
  return (
    <Sheet>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" aria-label="Open menu" />}
      >
        <Menu aria-hidden />
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <Stack as="nav" gap="xs" className="px-4 pb-4">
          {items.map((item) => (
            <SheetClose
              key={item.href}
              render={<Link href={item.href} />}
              className="hover:text-brand rounded-md py-2 text-base transition-colors"
            >
              {item.label}
            </SheetClose>
          ))}
        </Stack>
      </SheetContent>
    </Sheet>
  );
}
