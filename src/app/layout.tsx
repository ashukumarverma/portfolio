import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data";

export const metadata: Metadata = {
  title: `${profile.displayName || profile.name} — ${profile.role}`,
  description: profile.bio || profile.tagline,
  keywords: [
    "portfolio",
    "developer",
    "software engineer",
    "SDE",
    "full stack",
    "next.js",
    "typescript",
    "react",
    profile.name,
    profile.displayName,
  ].filter(Boolean) as string[],
  authors: [{ name: profile.displayName || profile.name }],
  openGraph: {
    title: `${profile.displayName || profile.name} — Portfolio`,
    description: profile.tagline || profile.bio,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
