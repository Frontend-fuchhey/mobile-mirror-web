import { Navbar } from "@/components/Navbar";
import { HeroShowcase } from "@/components/HeroShowcase";
import { HowItWorks } from "@/components/HowItWorks";
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
    <div className="min-h-screen bg-white text-[#171717]">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="mx-auto max-w-[1380px] px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-20 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:gap-10">
            {/* Left Copy Column */}
            <div>
              <p className="font-mono text-xs text-[#737373]">
                {SITE_CONFIG.platform}
              </p>

              <h1 className="hero-heading mt-3 font-semibold text-[#171717]">
                Your phone screen.
                <br />
                On your computer.
              </h1>

              <p className="mt-4 max-w-md text-base leading-relaxed text-[#737373] sm:text-[17px]">
                Mirror your Android or iPhone, and record your screen directly from your desktop.
              </p>

              <HeroPlatformDownload />
            </div>

            {/* Right Desktop App Preview */}
            <div className="min-w-0">
              <HeroShowcase />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <HowItWorks />

        {/* Features */}
        <BentoFeatures />

        {/* Setup Guide */}
        <SetupGuide />

        {/* Download Section */}
        <section className="border-t border-[#e5e5e5] bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-xl">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#171717] sm:text-3xl">
                Download Mobile Mirror
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#737373] sm:text-base">
                Latest release {SITE_CONFIG.version} for Windows, macOS, and Linux.
              </p>
            </div>

            <AllPlatformsDownloadRow />
          </div>
        </section>

        {/* FAQ */}
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
}
