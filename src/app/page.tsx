import { Check, ShieldCheck } from "lucide-react";
import { GitHubIcon, WindowsIcon } from "@/components/Icons";
import { Navbar } from "@/components/Navbar";
import { HeroShowcase } from "@/components/HeroShowcase";
import { BentoFeatures } from "@/components/BentoFeatures";
import { SetupGuide } from "@/components/SetupGuide";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { SITE_CONFIG, getDownloadUrl } from "@/lib/constants";

export default function HomePage() {
  const downloadUrl = getDownloadUrl();

  return (
    <div className="min-h-screen bg-[#07090e] text-[#f4f7fb]">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
          {/* Subtle architectural top glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-1/2 h-[420px] w-[780px] -translate-x-1/2 rounded-full bg-[#246bfd]/[0.11] blur-[120px]"
          />

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              {/* Version & Open Source Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="font-mono text-[#7aa8ff]">{SITE_CONFIG.version}</span>
                <span className="text-slate-500">•</span>
                <span>Free &amp; Open Source</span>
              </div>

              {/* Headline */}
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
                Ultra-Low Latency Android Screen Mirroring &amp; Lossless Recording
              </h1>

              {/* Subtitle */}
              <p className="mt-5 font-mono text-sm text-slate-300 sm:text-base">
                &lt;50ms latency • 60–120 FPS • Voice-Isolated Audio • Zero-CPU Overhead
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={downloadUrl}
                  download={SITE_CONFIG.installerFilename}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#246bfd] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_28px_-6px_rgba(36,107,253,0.65),inset_0_1px_0_rgba(255,255,255,0.25)] transition-all hover:bg-[#1b5ee8] active:scale-[0.99] sm:w-auto sm:text-base"
                >
                  <WindowsIcon className="h-4 w-4 shrink-0" />
                  <span>Download for Windows (64-bit)</span>
                </a>

                <a
                  href={SITE_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/12 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-white/20 hover:bg-white/[0.08] sm:w-auto sm:text-base"
                >
                  <GitHubIcon className="h-4 w-4" />
                  View on GitHub
                </a>
              </div>

              {/* Trust / Installer Meta */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  {SITE_CONFIG.platform}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  Single {SITE_CONFIG.installerSize} installer (ADB + FFmpeg + SDL3 included)
                </span>
              </div>
            </div>

            {/* Interactive Desktop App Showcase */}
            <HeroShowcase />
          </div>
        </section>

        {/* Interactive Bento Grid Features */}
        <BentoFeatures />

        {/* Casual 3-Step Setup Guide */}
        <SetupGuide />

        {/* FAQ & Troubleshooting */}
        <FaqSection />

        {/* Bottom Download Banner */}
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="bento-card relative overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-12 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[520px] -translate-x-1/2 rounded-full bg-[#246bfd]/20 blur-3xl"
            />
            <div className="relative mx-auto max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                Always pulls the latest GitHub Release automatically
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready to mirror your Android screen at 120 FPS?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                Install once, plug in your USB cable, and start mirroring or recording lossless
                MP4 video with zero CPU overhead.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={downloadUrl}
                  download={SITE_CONFIG.installerFilename}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#246bfd] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_28px_-6px_rgba(36,107,253,0.65)] transition-all hover:bg-[#1b5ee8] sm:w-auto sm:text-base"
                >
                  <WindowsIcon className="h-4 w-4" />
                  Download {SITE_CONFIG.installerFilename}
                </a>
                <a
                  href={SITE_CONFIG.releasesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/[0.08] sm:w-auto sm:text-base"
                >
                  All Releases ({SITE_CONFIG.version})
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
