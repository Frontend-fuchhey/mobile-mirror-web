import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Mobile Mirror — Android & iOS Screen Mirroring for Windows, macOS & Linux",
  description:
    "Free, open-source desktop app for Windows, macOS, and Linux. Mirror your Android or iPhone and record your screen directly from your computer.",
  keywords: [
    "Android screen mirroring",
    "iOS AirPlay receiver",
    "low latency screen mirror",
    "USB screen mirroring Windows macOS Linux",
    "lossless MP4 recording",
    "SDL3",
    "Mobile Mirror",
  ],
  openGraph: {
    title: "Mobile Mirror — Your phone screen. On your computer.",
    description:
      "Mirror your Android or iPhone, and record your screen directly from your desktop on Windows, macOS, and Linux.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-[#171717] selection:bg-[#2563eb]/15 selection:text-[#171717]">
        {children}
      </body>
    </html>
  );
}
