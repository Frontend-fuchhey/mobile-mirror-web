import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mobile Mirror — Ultra-Low Latency Android Screen Mirroring & Lossless Recording",
  description:
    "<50ms latency, 60–120 FPS hardware-accelerated Android USB screen mirroring, voice-isolated audio capture, and zero-CPU MP4 recording for Windows.",
  keywords: [
    "Android screen mirroring",
    "low latency screen mirror",
    "USB screen mirroring Windows",
    "lossless MP4 recording",
    "NVDEC",
    "SDL3",
    "scrcpy alternative",
    "Mobile Mirror",
  ],
  openGraph: {
    title: "Mobile Mirror — Ultra-Low Latency Android Screen Mirroring",
    description:
      "<50ms latency • 60–120 FPS • Voice-Isolated Audio • Zero-CPU Overhead. Free & open-source Windows desktop app.",
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
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-[#07090e] text-[#f4f7fb] selection:bg-[#246bfd]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
