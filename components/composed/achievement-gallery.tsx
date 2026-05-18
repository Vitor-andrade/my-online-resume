"use client";

import Autoplay from "embla-carousel-autoplay";
import { useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/** Turns an asset path into readable alt text:
 *  "/Fest/App/show_page_asset.JPG" → "Show page". */
function altFromPath(path: string): string {
  const base = (path.split("/").pop() ?? "")
    .replace(/\.[^.]+$/, "")
    .replace(/_asset$/, "")
    .replace(/[_-]+/g, " ")
    .trim();
  return base.charAt(0).toUpperCase() + base.slice(1);
}

/** A single screenshot — opens the full image in a new tab. */
function GalleryImage({ src }: { src: string }) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-muted focus-visible:ring-ring relative block aspect-[4/3] overflow-hidden rounded-lg border focus-visible:ring-2 focus-visible:outline-none"
    >
      <Image
        src={src}
        alt={altFromPath(src)}
        fill
        sizes="(min-width: 768px) 56rem, 100vw"
        className="object-contain"
      />
    </a>
  );
}

/**
 * Screenshot carousel. Auto-advances every 4s, but pauses on hover or
 * focus and does not auto-advance at all for visitors who prefer
 * reduced motion (WCAG 2.2.2). Each slide opens full size in a new tab.
 */
export function AchievementGallery({ images }: { images: string[] }) {
  const prefersReducedMotion = useReducedMotion();
  // Lazy state init — the plugin instance is created exactly once.
  const [autoplay] = useState(() =>
    Autoplay({ delay: 4000, stopOnMouseEnter: true, stopOnInteraction: false }),
  );
  const plugins = useMemo(
    () => (prefersReducedMotion ? [] : [autoplay]),
    [prefersReducedMotion, autoplay],
  );

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  if (images.length === 0) return null;
  if (images.length === 1) return <GalleryImage src={images[0]} />;

  return (
    <Carousel setApi={setApi} opts={{ loop: true }} plugins={plugins}>
      <CarouselContent>
        {images.map((src) => (
          <CarouselItem key={src}>
            <GalleryImage src={src} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3" />
      <CarouselNext className="right-3" />
      <div className="bg-background/80 text-muted-foreground absolute right-3 bottom-3 rounded-full border px-2.5 py-0.5 font-mono text-xs backdrop-blur">
        {current + 1} / {images.length}
      </div>
    </Carousel>
  );
}
