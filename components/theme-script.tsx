// Server Component — the inline script is rendered into the SSR HTML
// and runs before first paint, so there is no flash of the wrong
// theme and no client-rendered <script> for React 19 to warn about.
// It applies a stored preference, falling back to the OS setting.
const THEME_SCRIPT = `(function(){try{var e=localStorage.getItem('theme'),d=e==='dark'||(e!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches),r=document.documentElement;r.classList.toggle('dark',d);r.style.colorScheme=d?'dark':'light';}catch(e){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />;
}
