"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Home,
  Video,
  Settings,
  Play,
  Square,
  Monitor,
  Wifi,
  Smartphone,
  Minus,
  X,
  Check,
  Mic,
  Cpu,
  FolderOpen,
} from "lucide-react";

type QualityPreset = "Auto" | "HD" | "FHD";
type NavTab = "Home" | "Recordings" | "Settings";
type DecoderOption = "NVDEC" | "D3D11VA" | "DXVA2";

interface RecordingItem {
  id: string;
  name: string;
  duration: string;
  quality: string;
  size: string;
}

const QUALITY_META: Record<
  QualityPreset,
  { subtitle: string; resolution: string; fps: string }
> = {
  Auto: {
    subtitle: "Auto • 60 FPS • Adaptive",
    resolution: "1080×2400",
    fps: "60 FPS",
  },
  HD: {
    subtitle: "720p • 90 FPS • Low Latency",
    resolution: "720×1600",
    fps: "90 FPS",
  },
  FHD: {
    subtitle: "1080p • 120 FPS • High Detail",
    resolution: "1080×2400",
    fps: "120 FPS",
  },
};

const INITIAL_RECORDINGS: RecordingItem[] = [
  {
    id: "rec-1",
    name: "MobileMirror_2026-11-25_21-14.mp4",
    duration: "00:02:18",
    quality: "720p • 90 FPS",
    size: "42.6 MB",
  },
  {
    id: "rec-2",
    name: "MobileMirror_2026-11-25_19-40.mp4",
    duration: "00:00:54",
    quality: "1080p • 120 FPS",
    size: "24.1 MB",
  },
];

function formatTimer(total: number) {
  const hrs = Math.floor(total / 3600)
    .toString()
    .padStart(2, "0");
  const mins = Math.floor((total % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const secs = (total % 60).toString().padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

export function HeroShowcase() {
  const [activeTab, setActiveTab] = useState<NavTab>("Home");
  const [quality, setQuality] = useState<QualityPreset>("HD");
  const [airPlayEnabled, setAirPlayEnabled] = useState(true);
  const [isMirroring, setIsMirroring] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [recordings, setRecordings] = useState<RecordingItem[]>(INITIAL_RECORDINGS);

  // Settings tab state
  const [decoder, setDecoder] = useState<DecoderOption>("NVDEC");
  const [voiceDsp, setVoiceDsp] = useState(true);

  useEffect(() => {
    if (!isRecording) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [isRecording]);

  const handleToggleRecording = () => {
    if (isRecording) {
      // Save completed clip into Recordings list
      const durationStr = formatTimer(Math.max(seconds, 1));
      const newClip: RecordingItem = {
        id: `rec-${Date.now()}`,
        name: `MobileMirror_clip_${recordings.length + 1}.mp4`,
        duration: durationStr,
        quality: quality === "HD" ? "720p • 90 FPS" : quality === "FHD" ? "1080p • 120 FPS" : "Auto • 60 FPS",
        size: `${(Math.max(seconds, 1) * 0.45 + 1.2).toFixed(1)} MB`,
      };
      setRecordings((prev) => [newClip, ...prev]);
      setIsRecording(false);
      setSeconds(0);
    } else {
      setSeconds(0);
      setIsRecording(true);
    }
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (event.key.toLowerCase() === "r") {
        setIsRecording((prev) => {
          if (prev) {
            setSeconds(0);
            return false;
          }
          setSeconds(0);
          return true;
        });
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const preset = QUALITY_META[quality];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
    >
      {/* Exact Desktop App Frame */}
      <div className="overflow-hidden rounded-2xl border border-[#e2e7f0] bg-[#f4f7fc] text-[#111827] shadow-[0_20px_54px_-16px_rgba(17,24,39,0.12),0_2px_6px_rgba(17,24,39,0.04)]">
        {/* Top Windows Title Bar */}
        <div className="flex h-10 items-center justify-between border-b border-[#e8ecf4] bg-white px-3.5">
          <div className="flex items-center gap-2">
            <div className="relative h-5 w-5 overflow-hidden rounded-[5px]">
              <Image
                src="/images/app.png"
                alt="Mobile Mirror icon"
                fill
                sizes="20px"
                className="scale-110 object-cover"
              />
            </div>
            <span className="text-[13px] font-semibold tracking-[-0.01em] text-[#111827]">
              Mobile Mirror
            </span>
          </div>

          <div className="flex items-center gap-3.5 text-[#374151]" aria-hidden="true">
            <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
            <Square className="h-3 w-3" strokeWidth={1.5} />
            <X className="h-3.5 w-3.5" strokeWidth={1.5} />
          </div>
        </div>

        {/* 3-Column App Body */}
        <div className="grid grid-cols-1 gap-3 p-3 md:grid-cols-[128px_1fr_206px]">
          {/* Left Navigation Sidebar */}
          <nav
            className="flex flex-row gap-1 md:flex-col md:pt-1"
            aria-label="Mobile Mirror app navigation"
          >
            {(
              [
                { id: "Home", icon: Home },
                { id: "Recordings", icon: Video },
                { id: "Settings", icon: Settings },
              ] as const
            ).map(({ id, icon: Icon }) => {
              const active = activeTab === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTab(id)}
                  className={`relative flex h-9 flex-1 items-center gap-2.5 rounded-lg px-3 text-left text-[13px] transition-colors duration-150 md:w-full md:flex-none ${
                    active
                      ? "bg-[#e8f0fe] font-medium text-[#2563eb]"
                      : "font-normal text-[#374151] hover:bg-[#eaf0f8] hover:text-[#111827]"
                  }`}
                >
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute top-1/2 left-0 hidden h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-[#2563eb] md:block"
                    />
                  )}
                  <Icon
                    className={`h-4 w-4 shrink-0 ${
                      active ? "text-[#2563eb]" : "text-[#1f2937]"
                    }`}
                    strokeWidth={1.75}
                  />
                  <span>{id}</span>
                </button>
              );
            })}
          </nav>

          {/* Center White Canvas Card */}
          <div className="flex min-h-[372px] flex-col justify-between rounded-2xl border border-[#e5eaf2] bg-white p-4">
            {activeTab === "Home" && (
              <>
                {!isMirroring ? (
                  /* Exact Default Home Screen from Screenshot */
                  <div className="flex flex-1 flex-col items-center justify-center py-6 text-center">
                    <div className="relative h-20 w-20 overflow-hidden rounded-[20px] shadow-[0_6px_18px_rgba(37,99,235,0.14)]">
                      <Image
                        src="/images/app.png"
                        alt="Mobile Mirror app icon"
                        fill
                        sizes="80px"
                        className="scale-105 object-cover"
                      />
                    </div>

                    <h2 className="mt-3.5 text-[22px] leading-tight font-semibold tracking-[-0.02em] text-[#111827]">
                      Mobile Mirror
                    </h2>
                    <p className="mt-1.5 text-[12px] text-[#6b7280]">
                      Mirror and record your phone screen on your laptop
                    </p>

                    <button
                      type="button"
                      onClick={() => setIsMirroring(true)}
                      className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#2563eb] px-7 text-[13px] font-medium text-white shadow-[0_2px_6px_rgba(37,99,235,0.28)] transition-[background-color,transform] duration-150 hover:bg-[#1d4ed8] active:scale-[0.98]"
                    >
                      <Play className="h-3.5 w-3.5 fill-current" strokeWidth={1.5} />
                      Start Mirroring
                    </button>
                  </div>
                ) : (
                  /* Active Live Mirroring State when Start Mirroring is clicked */
                  <div className="flex flex-1 flex-col items-center justify-between py-2">
                    <div className="flex w-full items-center justify-between text-[11px]">
                      <span className="inline-flex items-center gap-1.5 font-medium text-[#111827]">
                        <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
                        Pixel 9 Pro • USB ADB
                      </span>
                      <span className="font-mono tabular-nums text-[#6b7280]">
                        {preset.resolution} • {preset.fps}
                      </span>
                    </div>

                    {/* Live Phone Screen Preview */}
                    <div className="my-3 w-[156px] rounded-[24px] border border-[#d5dce6] bg-[#f7f9fd] p-1.5 shadow-[0_8px_20px_rgba(17,24,39,0.08)]">
                      <div className="flex h-[214px] flex-col justify-between rounded-[18px] border border-[#e5eaf2] bg-white p-2.5">
                        <div className="flex items-center justify-between font-mono text-[10px] tabular-nums text-[#4b5563]">
                          <span>9:41</span>
                          <span>5G • 94%</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <div className="relative h-11 w-11 overflow-hidden rounded-xl">
                            <Image
                              src="/images/app.png"
                              alt="Live mirror active"
                              fill
                              sizes="44px"
                              className="scale-105 object-cover"
                            />
                          </div>
                          <span className="mt-2 text-[11px] font-medium text-[#111827]">
                            Mirroring Active
                          </span>
                          <span className="font-mono text-[10px] tabular-nums text-[#16a34a]">
                            18 ms • {decoder}
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-[#f4f7fc] px-2 py-1 font-mono text-[9px] tabular-nums text-[#4b5563]">
                          <span>CPU 0.4%</span>
                          <span>{voiceDsp ? "DSP On" : "DSP Off"}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsMirroring(false)}
                      className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[#e2e7f0] bg-[#f7f9fd] px-4 text-xs font-medium text-[#374151] transition-colors duration-150 hover:bg-[#edf1f7] hover:text-[#111827] active:scale-[0.98]"
                    >
                      <Square className="h-3 w-3 fill-current" strokeWidth={1.5} />
                      Stop Mirroring
                    </button>
                  </div>
                )}

                {/* Bottom Connect Info Strip (exact match to screenshot) */}
                <div className="mt-2 flex items-center justify-between gap-3 rounded-xl border border-[#e8ecf4] bg-[#f7f9fd] px-3.5 py-2.5">
                  <div className="flex items-center gap-2.5">
                    <Smartphone
                      className="h-4 w-4 shrink-0 text-[#374151]"
                      strokeWidth={1.6}
                    />
                    <div className="text-left">
                      <p className="text-[12px] leading-snug font-semibold text-[#111827]">
                        Connect your Android or iPhone
                      </p>
                      <p className="text-[11px] leading-snug text-[#6b7280]">
                        Use USB cable or connect via Wi-Fi (
                        {airPlayEnabled ? "AirPlay Ready" : "AirPlay Off"})
                      </p>
                    </div>
                  </div>
                  <a
                    href="#how-it-works"
                    className="shrink-0 text-[11px] font-semibold text-[#2563eb] transition-colors duration-150 hover:text-[#1d4ed8]"
                  >
                    Setup guide
                  </a>
                </div>
              </>
            )}

            {activeTab === "Recordings" && (
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-[#e8ecf4] pb-3">
                    <div>
                      <h3 className="text-sm font-semibold text-[#111827]">
                        Recordings
                      </h3>
                      <p className="text-[11px] text-[#6b7280]">
                        Lossless H.264 + AAC MP4 captures
                      </p>
                    </div>
                    <span className="font-mono text-[11px] tabular-nums text-[#6b7280]">
                      {recordings.length} files
                    </span>
                  </div>

                  <div className="mt-3 space-y-2">
                    {recordings.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between gap-2 rounded-xl border border-[#e8ecf4] bg-[#f7f9fd] px-3 py-2.5"
                      >
                        <div className="min-w-0">
                          <p className="truncate font-mono text-[11px] font-medium text-[#111827]">
                            {item.name}
                          </p>
                          <p className="mt-0.5 text-[10px] text-[#6b7280]">
                            {item.quality} • {item.size}
                          </p>
                        </div>
                        <span className="shrink-0 font-mono text-[11px] font-medium tabular-nums text-[#374151]">
                          {item.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between rounded-xl border border-[#e8ecf4] bg-[#f7f9fd] px-3 py-2 text-[11px] text-[#6b7280]">
                  <span className="inline-flex items-center gap-1.5">
                    <FolderOpen className="h-3.5 w-3.5" strokeWidth={1.5} />
                    Videos\MobileMirror
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveTab("Home")}
                    className="font-medium text-[#2563eb] hover:text-[#1d4ed8]"
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            )}

            {activeTab === "Settings" && (
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <div className="border-b border-[#e8ecf4] pb-3">
                    <h3 className="text-sm font-semibold text-[#111827]">
                      Settings
                    </h3>
                    <p className="text-[11px] text-[#6b7280]">
                      Hardware decoding and audio pipeline
                    </p>
                  </div>

                  <div className="mt-4 space-y-4">
                    {/* Hardware Decoder */}
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-[#111827]">
                        <Cpu className="h-3.5 w-3.5 text-[#6b7280]" strokeWidth={1.5} />
                        GPU Decoder Backend
                      </div>
                      <div className="mt-2 grid grid-cols-3 gap-1 rounded-full bg-[#eef2f7] p-1">
                        {(["NVDEC", "D3D11VA", "DXVA2"] as const).map((dec) => (
                          <button
                            key={dec}
                            type="button"
                            onClick={() => setDecoder(dec)}
                            className={`h-7 rounded-full font-mono text-[11px] font-medium transition-colors duration-150 ${
                              decoder === dec
                                ? "bg-[#2563eb] text-white"
                                : "text-[#4b5563] hover:text-[#111827]"
                            }`}
                          >
                            {dec}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Voice Isolation DSP */}
                    <div className="flex items-center justify-between rounded-xl border border-[#e8ecf4] bg-[#f7f9fd] px-3 py-2.5">
                      <div className="flex items-center gap-2">
                        <Mic className="h-4 w-4 text-[#2563eb]" strokeWidth={1.5} />
                        <div>
                          <p className="text-xs font-medium text-[#111827]">
                            Voice Isolation DSP
                          </p>
                          <p className="text-[10px] text-[#6b7280]">
                            Suppress background noise on mic capture
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={voiceDsp}
                        aria-label="Toggle Voice Isolation DSP"
                        onClick={() => setVoiceDsp((v) => !v)}
                        className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors duration-150 ${
                          voiceDsp ? "bg-[#2563eb]" : "bg-[#cbd5e1]"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-150 ${
                            voiceDsp ? "translate-x-4" : "translate-x-0.5"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between rounded-xl border border-[#e8ecf4] bg-[#f7f9fd] px-3 py-2 text-[11px] text-[#6b7280]">
                  <span className="inline-flex items-center gap-1.5 text-[#15803d]">
                    <Check className="h-3.5 w-3.5" strokeWidth={1.5} />
                    Settings saved automatically
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveTab("Home")}
                    className="font-medium text-[#2563eb] hover:text-[#1d4ed8]"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Control Column (Exact 3 cards from screenshot) */}
          <div className="flex flex-col gap-3">
            {/* 1. Recording Card */}
            <div className="rounded-2xl border border-[#e5eaf2] bg-white p-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#dc2626]" />
                  <span className="text-[12px] font-semibold text-[#111827]">
                    Recording
                  </span>
                </div>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                    isRecording
                      ? "bg-[#fdecec] text-[#dc2626]"
                      : "bg-[#eef2f7] text-[#6b7280]"
                  }`}
                >
                  {isRecording ? "On" : "Off"}
                </span>
              </div>

              <div className="mt-3 text-center">
                <div className="font-mono text-[22px] leading-none font-semibold tracking-[-0.02em] tabular-nums text-[#111827]">
                  {formatTimer(seconds)}
                </div>
                <p className="mt-1.5 text-[11px] text-[#6b7280]">
                  {isRecording
                    ? "Recording MP4 to disk"
                    : "No recording in progress"}
                </p>
              </div>

              <button
                type="button"
                onClick={handleToggleRecording}
                className={`mt-4 flex h-9 w-full items-center justify-center gap-1.5 rounded-full border text-[12px] font-semibold transition-colors duration-150 active:scale-[0.98] ${
                  isRecording
                    ? "border-[#dc2626] bg-[#dc2626] text-white hover:bg-[#b91c1c]"
                    : "border-[#f5d0d0] bg-[#fdeeee] text-[#dc2626] hover:bg-[#fbe0e0]"
                }`}
              >
                {isRecording ? (
                  <>
                    <Square className="h-3 w-3 fill-current" strokeWidth={1.5} />
                    Stop Recording
                  </>
                ) : (
                  <>
                    <span className="h-2 w-2 rounded-full bg-[#dc2626]" />
                    Start Recording
                  </>
                )}
              </button>
            </div>

            {/* 2. Mirror Quality Card */}
            <div className="rounded-2xl border border-[#e5eaf2] bg-white p-3.5">
              <div className="flex items-center gap-1.5">
                <Monitor className="h-3.5 w-3.5 text-[#374151]" strokeWidth={1.6} />
                <span className="text-[12px] font-semibold text-[#111827]">
                  Mirror Quality
                </span>
              </div>

              <div className="mt-2.5 grid grid-cols-3 gap-0.5 rounded-full bg-[#eef2f7] p-1">
                {(["Auto", "HD", "FHD"] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setQuality(mode)}
                    className={`h-7 rounded-full text-[11px] font-medium transition-colors duration-150 ${
                      quality === mode
                        ? "bg-[#2563eb] text-white shadow-[0_1px_2px_rgba(37,99,235,0.25)]"
                        : "text-[#4b5563] hover:text-[#111827]"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>

              <p className="mt-2 text-center text-[10px] tabular-nums text-[#6b7280]">
                {preset.subtitle}
              </p>
            </div>

            {/* 3. AirPlay Card */}
            <div className="flex items-center justify-between rounded-2xl border border-[#e5eaf2] bg-white px-3.5 py-3">
              <div className="flex items-center gap-2">
                <Wifi
                  className={`h-4 w-4 ${
                    airPlayEnabled ? "text-[#2563eb]" : "text-[#9ca3af]"
                  }`}
                  strokeWidth={1.75}
                />
                <span className="text-[12px] font-semibold text-[#111827]">
                  AirPlay
                </span>
              </div>

              <button
                type="button"
                role="switch"
                aria-checked={airPlayEnabled}
                aria-label="Toggle AirPlay"
                onClick={() => setAirPlayEnabled((prev) => !prev)}
                className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors duration-150 ${
                  airPlayEnabled ? "bg-[#2563eb]" : "bg-[#cbd5e1]"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-150 ${
                    airPlayEnabled ? "translate-x-4" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
