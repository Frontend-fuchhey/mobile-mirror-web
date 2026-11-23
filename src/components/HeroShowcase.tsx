"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Home,
  Film,
  Settings,
  Info,
  Mic,
  MicOff,
  Maximize2,
  Square,
  Circle,
  FolderOpen,
  HelpCircle,
  Usb,
  Cpu,
  Volume2,
} from "lucide-react";

type QualityPreset = "Auto" | "HD" | "FHD";

const QUALITY_META: Record<
  QualityPreset,
  { resolution: string; bitrate: string; fps: string }
> = {
  Auto: { resolution: "1080×2400", bitrate: "12 Mbps CBR", fps: "60fps" },
  HD: { resolution: "720×1600", bitrate: "8 Mbps CBR", fps: "90fps" },
  FHD: { resolution: "1080×2400", bitrate: "16 Mbps CBR", fps: "120fps" },
};

export function HeroShowcase() {
  const [activeTab, setActiveTab] = useState<"Home" | "Recordings" | "Settings" | "About">("Home");
  const [quality, setQuality] = useState<QualityPreset>("FHD");
  const [micEnabled, setMicEnabled] = useState(true);
  const [isRecording, setIsRecording] = useState(true);
  const [seconds, setSeconds] = useState(252); // 00:04:12

  useEffect(() => {
    if (!isRecording) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [isRecording]);

  const formatTimer = (total: number) => {
    const hrs = Math.floor(total / 3600)
      .toString()
      .padStart(2, "0");
    const mins = Math.floor((total % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const secs = (total % 60).toString().padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  const preset = QUALITY_META[quality];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mt-14 max-w-5xl"
    >
      {/* Subtle blue studio rim light behind window */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-6 -top-10 bottom-8 rounded-[32px] bg-[#246bfd]/[0.12] blur-3xl"
      />

      {/* Native Desktop App Window Frame */}
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0c1018] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.9)]">
        {/* Window Title Bar */}
        <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#111622] px-4 py-2.5">
          <div className="flex items-center gap-2.5">
            <div className="relative h-5 w-5 overflow-hidden rounded-md">
              <Image
                src="/images/app.png"
                alt="Mobile Mirror icon"
                fill
                sizes="20px"
                className="object-cover scale-110"
              />
            </div>
            <span className="text-xs font-semibold tracking-tight text-slate-200">
              Mobile Mirror
            </span>
            <span className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[10px] text-slate-400">
              SDL3 • NVDEC
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
            <span className="hidden items-center gap-1.5 sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              USB 3.0 • 18ms latency
            </span>
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
          </div>
        </div>

        {/* 3-Column Bento Dashboard Body */}
        <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-[200px_1fr_240px]">
          {/* Left Navigation Sidebar */}
          <div className="flex flex-col justify-between gap-4 rounded-xl border border-white/[0.07] bg-[#101521] p-3">
            <div className="space-y-1">
              {(
                [
                  { id: "Home", icon: Home },
                  { id: "Recordings", icon: Film },
                  { id: "Settings", icon: Settings },
                  { id: "About", icon: Info },
                ] as const
              ).map(({ id, icon: Icon }) => {
                const active = activeTab === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActiveTab(id)}
                    className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-xs font-medium transition-colors ${
                      active
                        ? "bg-[#246bfd]/15 text-[#7aa8ff] border border-[#246bfd]/30"
                        : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-200 border border-transparent"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {id}
                  </button>
                );
              })}
            </div>

            {/* Live Status Card */}
            <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.07] p-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[11px] font-semibold text-emerald-300">
                  Live — Connected
                </span>
              </div>
              <p className="mt-1.5 font-mono text-[10px] text-slate-300">
                {preset.resolution} • {preset.fps}
              </p>
              <p className="mt-0.5 text-[10px] text-slate-400">
                Pixel 9 Pro • USB ADB
              </p>
            </div>
          </div>

          {/* Center Stage: Live Mirror View */}
          <div className="flex flex-col items-center justify-between rounded-xl border border-white/[0.07] bg-[#090c12] p-4">
            {/* Top Stream Telemetry Strip */}
            <div className="flex w-full items-center justify-between text-[11px] text-slate-400">
              <span className="inline-flex items-center gap-1.5 font-medium text-slate-200">
                <Usb className="h-3.5 w-3.5 text-[#246bfd]" />
                {activeTab === "Home" ? "Live Mirror Stream" : `${activeTab} View`}
              </span>
              <span className="font-mono text-[10px] text-slate-400">
                H.264 • {preset.bitrate}
              </span>
            </div>

            {/* Phone Bezel & Live Display */}
            <div className="my-4 flex items-center justify-center">
              <div className="relative w-[196px] rounded-[28px] border-[3px] border-slate-700/80 bg-[#0d1424] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
                {/* Camera punch-hole */}
                <div className="mx-auto mb-2 h-1.5 w-12 rounded-full bg-slate-800" />
                {/* Screen Content */}
                <div className="relative flex h-[286px] flex-col justify-between overflow-hidden rounded-[20px] bg-gradient-to-b from-[#132a5e] via-[#0e1b3a] to-[#0a1020] p-3.5">
                  <div className="flex items-center justify-between font-mono text-[10px] text-blue-100/80">
                    <span>9:41</span>
                    <span>5G • 94%</span>
                  </div>

                  {/* Center app badge */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/20 shadow-lg">
                      <Image
                        src="/images/app.png"
                        alt="Mobile Mirror app preview"
                        fill
                        sizes="64px"
                        className="object-cover scale-110"
                      />
                    </div>
                    <p className="mt-3 text-xs font-semibold text-white">
                      Zero-Lag USB Mirror
                    </p>
                    <p className="mt-1 font-mono text-[10px] text-blue-200/80">
                      GPU NVDEC • {preset.fps}
                    </p>
                  </div>

                  {/* Bottom quick metrics inside phone */}
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="rounded-lg bg-white/[0.08] px-2 py-1.5 backdrop-blur-sm">
                      <div className="text-[9px] text-blue-200/70">Latency</div>
                      <div className="font-mono text-[11px] font-semibold text-white">
                        18 ms
                      </div>
                    </div>
                    <div className="rounded-lg bg-white/[0.08] px-2 py-1.5 backdrop-blur-sm">
                      <div className="text-[9px] text-blue-200/70">CPU Load</div>
                      <div className="font-mono text-[11px] font-semibold text-emerald-300">
                        0.4%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Mirror Control Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setMicEnabled((m) => !m)}
                className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-colors ${
                  micEnabled
                    ? "border-[#246bfd]/40 bg-[#246bfd]/15 text-[#8cb5ff]"
                    : "border-white/10 bg-white/[0.04] text-slate-400"
                }`}
              >
                {micEnabled ? (
                  <Mic className="h-3.5 w-3.5" />
                ) : (
                  <MicOff className="h-3.5 w-3.5" />
                )}
                Mic: {micEnabled ? "On" : "Off"}
              </button>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[11px] font-medium text-slate-300">
                <Volume2 className="h-3.5 w-3.5 text-slate-400" />
                DSP Active
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[11px] font-medium text-slate-300">
                <Maximize2 className="h-3.5 w-3.5 text-slate-400" />
                Expand [F]
              </span>
            </div>
          </div>

          {/* Right Control Column */}
          <div className="flex flex-col gap-3">
            {/* Recording Card */}
            <div className="rounded-xl border border-white/[0.07] bg-[#101521] p-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-200">
                  Recording
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold ${
                    isRecording
                      ? "bg-red-500/15 text-red-400 border border-red-500/30"
                      : "bg-white/[0.06] text-slate-400 border border-white/10"
                  }`}
                >
                  {isRecording ? "ON" : "Off"}
                </span>
              </div>
              <div className="mt-2.5 font-mono text-2xl font-semibold tracking-tight tabular-nums text-white">
                {formatTimer(seconds)}
              </div>
              <p className="mt-0.5 text-[10px] text-slate-400">
                Zero-CPU MP4 Muxer (H.264 + AAC)
              </p>
              <button
                type="button"
                onClick={() => setIsRecording((r) => !r)}
                className={`mt-3 flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                  isRecording
                    ? "bg-red-500/15 text-red-300 border border-red-500/30 hover:bg-red-500/25"
                    : "bg-[#246bfd] text-white hover:bg-[#1b5ee8]"
                }`}
              >
                {isRecording ? (
                  <>
                    <Square className="h-3 w-3 fill-current" />
                    Stop Recording [R]
                  </>
                ) : (
                  <>
                    <Circle className="h-3 w-3 fill-current" />
                    Start Recording [R]
                  </>
                )}
              </button>
            </div>

            {/* Mirror Quality Card */}
            <div className="rounded-xl border border-white/[0.07] bg-[#101521] p-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-200">
                  Mirror Quality
                </span>
                <Cpu className="h-3.5 w-3.5 text-slate-500" />
              </div>
              <div className="mt-2.5 grid grid-cols-3 gap-1 rounded-lg bg-[#090c12] p-1">
                {(["Auto", "HD", "FHD"] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setQuality(mode)}
                    className={`rounded-md py-1.5 text-[11px] font-semibold transition-colors ${
                      quality === mode
                        ? "bg-[#246bfd] text-white shadow-sm"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
              <p className="mt-2 font-mono text-[10px] text-slate-400">
                {preset.resolution} • {preset.bitrate}
              </p>
            </div>

            {/* Quick Tools Card */}
            <div className="rounded-xl border border-white/[0.07] bg-[#101521] p-3.5">
              <span className="text-xs font-semibold text-slate-200">
                Quick Tools
              </span>
              <div className="mt-2.5 space-y-1.5">
                <div className="flex items-center gap-2 rounded-lg bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-slate-300">
                  <FolderOpen className="h-3.5 w-3.5 text-[#246bfd]" />
                  Open Recordings
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-slate-300">
                  <HelpCircle className="h-3.5 w-3.5 text-[#246bfd]" />
                  USB Setup Guide
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
