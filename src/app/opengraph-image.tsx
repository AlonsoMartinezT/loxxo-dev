import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0d0c09 0%, #1c1a14 100%)",
          color: "#f6f3ea",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#f4c430",
          }}
        >
          {site.role}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            marginTop: 24,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            marginTop: 24,
            maxWidth: 900,
            color: "#948d78",
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
