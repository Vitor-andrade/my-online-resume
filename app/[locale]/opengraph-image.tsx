import { ImageResponse } from "next/og";
import { getProfile } from "@/content";
import type { Locale } from "@/i18n/routing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Vitor Cavalcante — Senior Fullstack Engineer";

/** Dynamic Open Graph image, generated per locale, in the site's
 *  "GitHub-green dark" identity. */
export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const profile = getProfile(locale as Locale);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        background: "linear-gradient(135deg, #0a0a0f 0%, #0a3d1c 100%)",
        color: "#e6edf3",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, color: "#39d353" }}>
        {profile.role}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700 }}>
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 34,
            color: "#8b949e",
            maxWidth: 900,
          }}
        >
          {profile.headline}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 24,
          color: "#39d353",
          fontFamily: "monospace",
        }}
      >
        {profile.email}
      </div>
    </div>,
    { ...size },
  );
}
