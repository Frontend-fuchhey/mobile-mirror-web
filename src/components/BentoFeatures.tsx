"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Gauge,
  Mic,
  HardDriveDownload,
  PlugZap,
  CheckCircle2,
} from "lucide-react";

const FPS_OPTIONS = [
  { fps: 30, frameTime: "33.3 ms", label: "Battery Saver" },
  { fps: 60, frameTime: "16.7 ms", label: "Standard Smooth" },
  { fps: 90, frameTime: "11.1 ms", label: "Fluid Gaming" },
  { fps: 120, frameTime: "8.3 ms", label: "Pro Ultra-Low" },
] as const;

const DECODERS = ["NVDEC", "D3D11VA", "DXVA2"] as const;

export function BentoFeatures() {
  const [selectedFps, setSelectedFps] = useState<number>(120);
  const [selectedDecoder, setSelectedDecoder] = useState<(typeof DECODERS)[number]>("NVDEC");
  const activeFpsMeta =
    FPS_OPTIONS.find((item) => item.fps === selectedFps) ?? FPS_OPTIONS[3];

  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="font-mono text-xs font-medium tracking-wider text-[#5b92ff] uppercase">
          Engineered in Rust + SDL3 + FFmpeg
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Native desktop performance without compromises.
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-400">
          Every stage of the pipeline — from Android&apos;s hardware MediaCodec to Windows GPU
          decoding and direct MP4 muxing — is built for minimal latency and zero frame drops.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6">
        {/* Card 1: Hardware-Accelerated Engine (4 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="bento-card flex flex-col justify-between rounded-2xl p-6 transition-colors md:col-span-4"
        >
          <div>
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#246bfd]/30 bg-[#246bfd]/15 text-[#7aa8ff]">
                <Cpu className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-1 rounded-lg border border-white/[0.08] bg-[#080b11] p-1">
                {DECODERS.map((dec) => (
                  <button
                    key={dec}
                    type="button"
                    onClick={() => setSelectedDecoder(dec)}
                    className={`rounded-md px-2.5 py-1 font-mono text-[11px] font-medium transition-colors ${
                      selectedDecoder === dec
                        ? "bg-[#246bfd] text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {dec}
                  </button>
                ))}
              </div>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">
              Hardware-Accelerated Engine
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
              Decodes incoming H.264 frames directly on your NVIDIA, AMD, or Intel GPU using{" "}
              <span className="text-slate-200 font-medium">NVDEC, DXVA2, or D3D11VA</span>.
              Frames render straight to an SDL3 GPU YUV texture with zero software copy bottlenecks.
            </p>
          </div>

          {/* Pipeline Telemetry Strip */}
          <div className="mt-6 grid grid-cols-3 gap-2 rounded-xl border border-white/[0.07] bg-[#080b11] p-3">
            <div>
              <div className="text-[11px] text-slate-500">Active Backend</div>
              <div className="mt-0.5 font-mono text-sm font-semibold text-white">
                {selectedDecoder}
              </div>
            </div>
            <div>
              <div className="text-[11px] text-slate-500">Glass-to-Glass</div>
              <div className="mt-0.5 font-mono text-sm font-semibold text-emerald-400">
                &lt;50 ms
              </div>
            </div>
            <div>
              <div className="text-[11px] text-slate-500">Bitrate Mode</div>
              <div className="mt-0.5 font-mono text-sm font-semibold text-slate-200">
                4–24 Mbps CBR
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: High Refresh Rates (2 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="bento-card flex flex-col justify-between rounded-2xl p-6 transition-colors md:col-span-2"
        >
          <div>
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#246bfd]/30 bg-[#246bfd]/15 text-[#7aa8ff]">
              <Gauge className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">
              High Refresh Rates
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Native 30, 60, 90, and 120 FPS streaming with live encoder reconfiguration.
            </p>
          </div>

          <div className="mt-6">
            <div className="grid grid-cols-4 gap-1 rounded-lg border border-white/[0.08] bg-[#080b11] p-1">
              {FPS_OPTIONS.map((opt) => (
                <button
                  key={opt.fps}
                  type="button"
                  onClick={() => setSelectedFps(opt.fps)}
                  className={`rounded-md py-1.5 font-mono text-xs font-semibold transition-colors ${
                    selectedFps === opt.fps
                      ? "bg-[#246bfd] text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {opt.fps}
                </button>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between text-xs">
              <span className="text-slate-400">{activeFpsMeta.label}</span>
              <span className="font-mono font-medium text-[#7aa8ff]">
                {activeFpsMeta.frameTime} / frame
              </span>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Voice Isolation DSP (2 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bento-card flex flex-col justify-between rounded-2xl p-6 transition-colors md:col-span-2"
        >
          <div>
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#246bfd]/30 bg-[#246bfd]/15 text-[#7aa8ff]">
              <Mic className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">
              Voice Isolation DSP
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Captures phone microphone audio with real-time background noise suppression and
              optional PC speaker playback.
            </p>
          </div>

          {/* Clean static audio level meter visual */}
          <div className="mt-6 flex h-12 items-end gap-1.5 rounded-xl border border-white/[0.07] bg-[#080b11] px-4 py-2.5">
            {[28, 52, 74, 44, 88, 65, 92, 54, 70, 38, 60, 30].map((height, idx) => (
              <div
                key={idx}
                style={{ height: `${height}%` }}
                className="flex-1 rounded-full bg-gradient-to-t from-[#246bfd]/40 to-[#5b92ff]"
              />
            ))}
          </div>
        </motion.div>

        {/* Card 4: Zero-CPU MP4 Muxer (2 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="bento-card flex flex-col justify-between rounded-2xl p-6 transition-colors md:col-span-2"
        >
          <div>
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/15 text-red-400">
              <HardDriveDownload className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">
              Zero-CPU MP4 Muxer
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Direct H.264 + AAC stream capture straight to disk without re-encoding lag. Hit{" "}
              <kbd className="rounded border border-white/15 bg-white/[0.06] px-1.5 py-0.5 font-mono text-[11px] text-slate-200">
                R
              </kbd>{" "}
              anytime for lossless recordings.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-white/[0.07] bg-[#080b11] px-3.5 py-2.5 font-mono text-xs text-slate-300">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Re-encode CPU</span>
              <span className="font-semibold text-emerald-400">0.0%</span>
            </div>
            <div className="mt-1.5 flex items-center justify-between">
              <span className="text-slate-400">Container</span>
              <span className="text-slate-200">ISO MP4 (H.264 + AAC)</span>
            </div>
          </div>
        </motion.div>

        {/* Card 5: Instant Plug & Play (2 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bento-card flex flex-col justify-between rounded-2xl p-6 transition-colors md:col-span-2"
        >
          <div>
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/15 text-emerald-400">
              <PlugZap className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">
              Instant Plug &amp; Play
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Auto-connects the second your USB cable is plugged in. ADB, SDL3, FFmpeg, and the
              Android server come pre-bundled inside the installer.
            </p>
          </div>

          <div className="mt-6 space-y-1.5 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              No Android SDK or Java required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              No terminal commands needed
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
