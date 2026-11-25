import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Mobile Mirror — Android & iOS Screen Mirroring for Windows, macOS & Linux",
  description:
    "Free, open-source desktop app for Windows, macOS, and Linux. Mirror Android over USB or iPhone via AirPlay at up to 120 FPS with lossless MP4 recording.",
  keywords: [
    "Android screen mirroring",
    "iOS AirPlay receiver",
    "low latency screen mirror",
    "USB screen mirroring Windows macOS Linux",
    "lossless MP4 recording",
    "SDL3",
    "scrcpy alternative",
    "Mobile Mirror",
  ],
  openGraph: {
    title: "Mobile Mirror — Android & iOS Screen Mirroring for Windows, macOS & Linux",
    description:
      "Under 50ms latency, 60–120 FPS hardware decoding, AirPlay 1 & 2, voice-isolated audio, and direct MP4 recording for Windows, macOS, and Linux.",
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
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#ffffff] text-[#111827] selection:bg-[#2563eb]/15 selection:text-[#111827]">
        {children}
      </body>
    </html>
  );
}
