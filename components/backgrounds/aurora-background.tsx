/**
 * Aurora borealis — soft green light streaked across the top of the
 * page. Two stacked repeating-gradients are layered: the green
 * `--aurora-gradient` ribbon and a `--aurora-streaks` layer whose
 * opaque bands match the page background, so only its transparent gaps
 * reveal the green — that is what cuts the glow into aurora-like
 * ribbons rather than a solid wash. An animated `::after` copy at a
 * different scale scrolls via the `aurora` keyframe and blends against
 * the static base to make the ribbons shimmer and shift; a radial mask
 * anchors the whole effect to the top of the viewport.
 *
 * Pure CSS (GPU-cheap, no JS), theme-aware (the streak layer tracks
 * `--background`) and paused for reduced-motion users.
 */
const TOP_MASK =
  "radial-gradient(ellipse 120% 100% at 50% 0%, black 8%, transparent 85%)";

export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        style={{ maskImage: TOP_MASK, WebkitMaskImage: TOP_MASK }}
        className={[
          "absolute -inset-[10px] opacity-50 blur-[10px]",
          "[will-change:background-position]",
          "[background-image:var(--aurora-streaks),var(--aurora-gradient)]",
          "[background-size:300%,_200%]",
          "[background-position:50%_50%,50%_50%]",
          'after:absolute after:inset-0 after:content-[""]',
          "after:[background-image:var(--aurora-streaks),var(--aurora-gradient)]",
          "after:[background-size:200%,_100%]",
          "after:[background-attachment:fixed]",
          "after:[mix-blend-mode:var(--aurora-blend)]",
          "after:animate-aurora",
        ].join(" ")}
      />
    </div>
  );
}
