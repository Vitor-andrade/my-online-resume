"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Triggers the browser print dialog so the page can be saved as PDF. */
export function PrintButton() {
  return (
    <Button onClick={() => window.print()}>
      <Printer aria-hidden />
      Print / Save as PDF
    </Button>
  );
}
