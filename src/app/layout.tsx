import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WebTool Stack - Utility Hub",
  description:
    "Discover a comprehensive collection of web and PC utilities designed to enhance your productivity and streamline your tasks.",
  verification: {
    other: {
      "naver-site-verification": [process.env.NEXT_PUBLIC_NAVERID || ""],
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
