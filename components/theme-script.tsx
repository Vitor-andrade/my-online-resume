/* eslint-disable @next/next/no-before-interactive-script-outside-document --
   This IS the App Router root layout; the rule targets the legacy
   pages/_document.js and does not apply here. */
import Script from "next/script";

// Resolves a stored theme (falling back to the OS preference) and
// applies it to <html> before first paint, so there is no flash.
const THEME_SCRIPT = `(function(){try{var e=localStorage.getItem('theme'),d=e==='dark'||(e!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches),r=document.documentElement;r.classList.toggle('dark',d);r.style.colorScheme=d?'dark':'light';}catch(e){}})();`;

/**
 * Injects the pre-paint theme script via next/script's
 * `beforeInteractive` strategy. Unlike a raw <script> element, this is
 * not reconciled into the React tree, so a client navigation (e.g. a
 * locale switch) never re-renders it and React 19 raises no warning.
 */
export function ThemeScript() {
  return (
    <Script id="theme-init" strategy="beforeInteractive">
      {THEME_SCRIPT}
    </Script>
  );
}
