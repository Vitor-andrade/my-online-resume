"use client";

import { Menu } from "@base-ui/react/menu";
import { Check, Link2, Share2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { type SVGProps, useState } from "react";
import { Button } from "@/components/ui/button";

/** LinkedIn brand mark — inlined because lucide-react no longer ships
 *  brand icons (see components/composed/social-links.tsx). */
function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

interface ShareButtonProps {
  /** Absolute URL of the profile's LinkedIn page. The LinkedIn menu
   *  item is omitted when this is not provided. */
  linkedInUrl?: string;
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm";
  className?: string;
}

const ITEM_CLASS =
  "flex w-full cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none select-none data-[highlighted]:bg-muted data-[highlighted]:text-foreground [&_svg]:size-4 [&_svg]:shrink-0";

/**
 * Share-this-profile control. Opens a menu offering the OS share sheet
 * (Web Share API, mobile), a link to the LinkedIn profile and
 * copy-to-clipboard with inline "copied" feedback. The native option is
 * read straight from the browser at render — safe because the menu
 * content only renders client-side, once the menu is opened.
 */
export function ShareButton({
  linkedInUrl,
  variant = "outline",
  size = "default",
  className,
}: ShareButtonProps) {
  const t = useTranslations("share");
  const [copied, setCopied] = useState(false);

  const canNativeShare =
    typeof navigator !== "undefined" && typeof navigator.share === "function";
  const iconOnly = size === "icon" || size === "icon-sm";

  async function nativeShare() {
    try {
      await navigator.share({
        title: document.title,
        url: window.location.href,
      });
    } catch {
      // The user dismissed the share sheet — nothing to do.
    }
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (insecure context or denied permission).
    }
  }

  return (
    <Menu.Root>
      <Menu.Trigger
        render={
          <Button
            variant={variant}
            size={size}
            aria-label={t("ariaLabel")}
            className={className}
          />
        }
      >
        <Share2 aria-hidden />
        {!iconOnly && t("label")}
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner sideOffset={6} align="end" className="z-50">
          <Menu.Popup className="border-border bg-popover text-popover-foreground min-w-52 rounded-lg border p-1 shadow-md outline-none">
            {canNativeShare ? (
              <Menu.Item className={ITEM_CLASS} onClick={nativeShare}>
                <Share2 aria-hidden />
                {t("native")}
              </Menu.Item>
            ) : null}
            {linkedInUrl ? (
              <Menu.LinkItem
                className={ITEM_CLASS}
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon />
                {t("linkedin")}
              </Menu.LinkItem>
            ) : null}
            <Menu.Item
              className={ITEM_CLASS}
              closeOnClick={false}
              onClick={copyLink}
            >
              {copied ? (
                <Check aria-hidden className="text-brand" />
              ) : (
                <Link2 aria-hidden />
              )}
              {copied ? t("copied") : t("copyLink")}
            </Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
