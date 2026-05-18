import Image from "next/image";

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

/** Responsive screenshot gallery — each thumbnail opens the full
 *  image in a new tab. */
export function AchievementGallery({ images }: { images: string[] }) {
  if (images.length === 0) return null;

  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {images.map((src) => (
        <li key={src}>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-muted hover:border-brand/40 focus-visible:ring-ring relative block aspect-[4/3] overflow-hidden rounded-md border transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            <Image
              src={src}
              alt={altFromPath(src)}
              fill
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 30vw, 45vw"
              className="object-contain"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
