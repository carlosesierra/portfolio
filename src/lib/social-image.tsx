import { ImageResponse } from "next/og";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageContentType = "image/png";

type SocialImageOptions = {
  eyebrow: string;
  title: string;
  description: string;
  accent: string;
};

export function createSocialImage({
  eyebrow,
  title,
  description,
  accent,
}: SocialImageOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(244,240,235,1) 100%)",
          color: "#1f1a15",
          display: "flex",
          height: "100%",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: accent,
            height: 630,
            position: "absolute",
            right: 0,
            top: 0,
            width: 24,
          }}
        />
        <div
          style={{
            border: "1px solid rgba(51,51,51,0.08)",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            margin: 36,
            padding: 56,
          }}
        >
          <div
            style={{
              color: "#4f4a44",
              display: "flex",
              fontFamily: "Avenir Next, Segoe UI, Helvetica Neue, sans-serif",
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              maxWidth: 880,
            }}
          >
            <div
              style={{
                display: "flex",
                fontFamily: "Iowan Old Style, Palatino Linotype, Book Antiqua, serif",
                fontSize: 82,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
              }}
            >
              {title}
            </div>
            <div
              style={{
                color: "#4f4a44",
                display: "flex",
                fontFamily: "Avenir Next, Segoe UI, Helvetica Neue, sans-serif",
                fontSize: 31,
                lineHeight: 1.35,
                maxWidth: 900,
              }}
            >
              {description}
            </div>
          </div>

          <div
            style={{
              color: "#4f4a44",
              display: "flex",
              fontFamily: "Avenir Next, Segoe UI, Helvetica Neue, sans-serif",
              fontSize: 24,
              justifyContent: "space-between",
            }}
          >
            <span>Carlos Sierra</span>
            <span>carlosesierra.com.au</span>
          </div>
        </div>
      </div>
    ),
    socialImageSize,
  );
}

