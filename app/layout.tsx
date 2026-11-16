import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Global Hearts Foundation | Empowering People, Strengthening Communities",
  description: siteContent.description,
  openGraph: {
    title: "Global Hearts Foundation | Empowering People, Strengthening Communities",
    description: siteContent.description,
    type: "website",
    images: [
      {
        url: siteContent.photos.hero.src,
        width: 1800,
        height: 1200,
        alt: siteContent.photos.hero.alt,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#faf9f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
