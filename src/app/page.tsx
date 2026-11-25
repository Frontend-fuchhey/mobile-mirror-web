import { Navbar } from "@/components/Navbar";
import { HeroShowcase } from "@/components/HeroShowcase";
import { BentoFeatures } from "@/components/BentoFeatures";
import { SetupGuide } from "@/components/SetupGuide";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import {
  AllPlatformsDownloadRow,
  HeroPlatformDownload,
} from "@/components/PlatformDownload";
import { SITE_CONFIG } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <Navbar />

      <main>
        {/* Asymmetric Split Hero */}
        <section className="mx-auto max-w-[1220px] px-6 pt-12 pb-20 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:gap-12">
            {/* Left Copy Column */}
            <div>
              <p className="font-mono text-xs text-[#6b7280]">
                {SITE_CONFIG.platform} · Free &amp; open source · {SITE_CONFIG.version}
              </p>

              <h1 className="mt-4 text-[36px] leading-[1.06] font-medium tracking-[-0.025em] text-[#111827] sm:text-[44px] lg:text-[48px] lg:tracking-[-0.03em]">
                Mirror Android &amp; iOS screens at{" "}
                <span className="whitespace-nowrap">120 FPS</span>
              </h1>

              <p className="mt-5 max-w-[32rem] text-[17px] leading-[1.55] font-normal text-[#4b5563]">
                A native desktop app for Windows, macOS, and Linux built with Rust, SDL3, and
                FFmpeg. Mirror Android over USB or iPhone via AirPlay &amp; USB, and write lossless
                MP4 recordings straight to disk.
              </p>

              <HeroPlatformDownload />
            </div>

            {/* Right White Native App Window Preview */}
            <HeroShowcase />
          </div>
        </section>

        {/* Hardware Pipeline & Spec Bench */}
        <BentoFeatures />

        {/* 3-Step Setup Ledger */}
        <SetupGuide />

        {/* FAQ & Troubleshooting */}
        <FaqSection />

        {/* Bottom Download Strip */}
        <section className="border-t border-[#111827]/8 bg-[#f7f8fa]">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center lg:px-8 lg:py-20">
            <div className="max-w-xl">
              <p className="font-mono text-xs text-[#6b7280]">
                Latest GitHub release · {SITE_CONFIG.version}
              </p>
              <h2 className="mt-2 text-3xl leading-[1.15] font-medium tracking-[-0.02em] text-[#111827] sm:text-4xl">
                Install once on Windows, macOS, or Linux
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#4b5563]">
                No accounts, watermarks, or subscriptions. Press{" "}
                <kbd className="keycap mx-0.5">R</kbd> anytime to record lossless H.264 and audio
                straight to MP4.
              </p>
            </div>

            <AllPlatformsDownloadRow />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
