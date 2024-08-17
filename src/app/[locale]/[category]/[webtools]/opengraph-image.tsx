import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image metadata
export const alt = "WebTool Stack - WebTool Image";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }: { params: { locale: string; category: string; webtools: string } }) {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 96,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>Web Tool Stack</p>
        <p>{params.webtools}</p>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
