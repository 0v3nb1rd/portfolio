import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        color: "#f8fafc",
      }}
    >
      <div style={{ fontSize: 84, fontWeight: 700 }}>{siteConfig.name}</div>
      <div style={{ fontSize: 40, color: "#94a3b8" }}>{siteConfig.title}</div>
      <div style={{ fontSize: 28, color: "#64748b", marginTop: 24 }}>ovbi.dev</div>
    </div>,
    size
  );
}
