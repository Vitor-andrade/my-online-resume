"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

interface RoleTyperProps {
  roles: string[];
}

/**
 * Typewriter that cycles through job titles — types a role, pauses,
 * deletes it, moves to the next. Reserves the width of the longest
 * role so neighbouring text never shifts. For visitors who prefer
 * reduced motion it shows the first role statically, and screen
 * readers always get that stable label.
 */
export function RoleTyper({ roles }: RoleTyperProps) {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const role = roles[index];
    const atFull = !deleting && text === role;
    const atEmpty = deleting && text === "";
    const delay = atFull ? 2200 : atEmpty ? 500 : deleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (atFull) {
        setDeleting(true);
      } else if (atEmpty) {
        setDeleting(false);
        setIndex((current) => (current + 1) % roles.length);
      } else {
        setText(role.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, roles, prefersReducedMotion]);

  const longestRole = roles.reduce((a, b) => (b.length > a.length ? b : a));

  return (
    <span className="relative inline-block">
      {/* Invisible sizer — reserves the widest role's width. */}
      <span className="invisible" aria-hidden>
        {longestRole}
      </span>
      <span className="absolute inset-0">
        <span className="sr-only">{roles[0]}</span>
        <span aria-hidden>
          {prefersReducedMotion ? roles[0] : text}
          {prefersReducedMotion ? null : (
            <span className="ml-0.5 inline-block animate-pulse">|</span>
          )}
        </span>
      </span>
    </span>
  );
}
