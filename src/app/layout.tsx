import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WebTool Stack - Utility Hub",
  description: "Discover a range of web and PC tools to boost productivity and simplify tasks.",
  verification: {
    other: {
      "naver-site-verification": [process.env.NEXT_PUBLIC_NAVERID || ""],
    },
  },
  metadataBase: new URL("https://webtoolstack.com/"),
  openGraph: {
    type: "website",
    url: "https://webtoolstack.com",
    title: "Web Tool Stack",
    description: "Discover a range of web and PC tools to boost productivity and simplify tasks.",
    siteName: "Web Tool Stack",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
