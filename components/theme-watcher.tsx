"use client";

import { useEffect, useLayoutEffect } from "react";

// Layout effect on the client (before paint, so no flash); falls back
// to useEffect during SSR to avoid the no-op warning.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Re-applies the theme from storage after every render of the layout.
 * The `dark` class lives on <html> imperatively; a locale navigation
 * re-renders the root layout and would otherwise drop it. This keeps
 * the theme stable across navigation without a flash.
 */
export function ThemeWatcher() {
  useIsomorphicLayoutEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark =
      stored === "dark" ||
      (stored !== "light" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    root.style.colorScheme = isDark ? "dark" : "light";
  });

  return null;
}
