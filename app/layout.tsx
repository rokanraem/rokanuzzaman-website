import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/content/portfolio";
import "./globals.css";

// The mock uses `font-stretch: 110%` on display type, so the `wdth` axis has
// to come along with the variable font.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description:
    "23 years designing, securing, and running the systems enterprises depend on. Cloud architecture, cybersecurity, IT infrastructure, ITSM and enterprise architecture consulting.",
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description:
      "Cloud architecture, cybersecurity and enterprise architecture consulting.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F27E63",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
