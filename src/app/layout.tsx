import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WebTools - Utility Hub",
  description:
    "Discover a comprehensive collection of web and PC utilities designed to enhance your productivity and streamline your tasks.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
