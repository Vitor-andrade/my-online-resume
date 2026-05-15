"use client";

import { Printer } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

/** Triggers the browser print dialog so the page can be saved as PDF. */
export function PrintButton() {
  const t = useTranslations("cv");

  return (
    <Button onClick={() => window.print()}>
      <Printer aria-hidden />
      {t("print")}
    </Button>
  );
}
