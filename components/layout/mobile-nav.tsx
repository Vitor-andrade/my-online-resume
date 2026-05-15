"use client";

import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { Stack } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
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
  const t = useTranslations("nav");

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" aria-label={t("openMenu")} />
        }
      >
        <Menu aria-hidden />
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>{t("navigation")}</SheetTitle>
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
