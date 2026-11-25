"use client";

import { useState } from "react";
import { Mic, Usb, Check } from "lucide-react";

const FPS_OPTIONS = [
  { fps: 30, ms: 33.3, label: "Battery saver" },
  { fps: 60, ms: 16.7, label: "Standard" },
  { fps: 90, ms: 11.1, label: "High refresh" },
  { fps: 120, ms: 8.3, label: "Low-latency capture" },
] as const;

const DECODERS = [
  { id: "NVDEC", vendor: "NVIDIA GPU" },
  { id: "D3D11VA", vendor: "Direct3D 11" },
  { id: "DXVA2", vendor: "Intel / AMD" },
] as const;

export function BentoFeatures() {
  const [selectedFps, setSelectedFps] = useState<number>(120);
  const [selectedDecoder, setSelectedDecoder] = useState<(typeof DECODERS)[number]["id"]>("NVDEC");

  const activeFps = FPS_OPTIONS.find((o) => o.fps === selectedFps) ?? FPS_OPTIONS[3];
  const activeDecoder = DECODERS.find((d) => d.id === selectedDecoder) ?? DECODERS[0];

  return (
    <section
      id="features"
      className="border-t border-[#111827]/8 bg-[#f7f8fa] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs text-[#6b7280]">
            Rust · SDL3 · FFmpeg
          </p>
          <h2 className="mt-2 text-3xl leading-[1.15] font-medium tracking-[-0.02em] text-[#111827] sm:text-4xl">
            Hardware pipeline from Android to disk
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#4b5563]">
            Every stage stays in native code—from Android MediaCodec over USB to Windows GPU YUV
            decoding and direct MP4 muxing.
          </p>
        </div>

        {/* Row 1: Asymmetric 7/5 Light Hardware Instrument + MP4 Muxer Spec */}
        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Wide Interactive Decode & Frame-Pacing Instrument (White surface) */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#111827]/10 bg-white p-6 lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-medium text-[#111827]">
                    GPU decoding and frame pacing
                  </h3>
                  <p className="mt-1 text-sm text-[#4b5563]">
                    Decodes H.264 directly onto an SDL3 GPU YUV texture with no CPU copy.
                  </p>
                </div>

                {/* Decoder Switcher */}
                <div className="flex items-center gap-1 rounded-lg bg-[#f7f8fa] p-1">
                  {DECODERS.map((dec) => (
                    <button
                      key={dec.id}
                      type="button"
                      onClick={() => setSelectedDecoder(dec.id)}
                      className={`h-7 rounded-md px-2.5 font-mono text-xs transition-colors duration-150 ${
                        selectedDecoder === dec.id
                          ? "bg-white font-medium text-[#111827] shadow-[0_1px_2px_rgba(17,24,39,0.08)]"
                          : "text-[#6b7280] hover:text-[#111827]"
                      }`}
                    >
                      {dec.id}
                    </button>
                  ))}
                </div>
              </div>

              {/* Calibrated Frame-Time Bar Comparison */}
              <div className="mt-6 rounded-xl border border-[#111827]/8 bg-[#f7f8fa] p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="text-[#4b5563]">
                    Frame budget by target refresh rate
                  </span>
                  <span className="font-mono tabular-nums text-[#111827]">
                    {activeFps.fps} fps · {activeFps.ms.toFixed(1)} ms ({activeFps.label})
                  </span>
                </div>

                <div className="mt-4 space-y-2.5">
                  {FPS_OPTIONS.map((opt) => {
                    const isSelected = opt.fps === selectedFps;
                    const widthPct = Math.round((opt.ms / 33.3) * 100);
                    return (
                      <button
                        key={opt.fps}
                        type="button"
                        onClick={() => setSelectedFps(opt.fps)}
                        className="group grid w-full grid-cols-[56px_1fr_64px] items-center gap-3 text-left"
                      >
                        <span
                          className={`font-mono text-xs tabular-nums transition-colors duration-150 ${
                            isSelected
                              ? "font-medium text-[#111827]"
                              : "text-[#6b7280] group-hover:text-[#111827]"
                          }`}
                        >
                          {opt.fps} fps
                        </span>
                        <div className="h-2.5 w-full overflow-hidden rounded bg-[#e5e7eb]">
                          <div
                            style={{ width: `${widthPct}%` }}
                            className={`h-full rounded transition-colors duration-150 ${
                              isSelected ? "bg-[#2563eb]" : "bg-[#cbd5e1] group-hover:bg-[#94a3b8]"
                            }`}
                          />
                        </div>
                        <span
                          className={`text-right font-mono text-xs tabular-nums transition-colors duration-150 ${
                            isSelected ? "font-medium text-[#111827]" : "text-[#6b7280]"
                          }`}
                        >
                          {opt.ms.toFixed(1)} ms
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Telemetry Row */}
            <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-[#111827]/8 pt-4 text-xs">
              <div>
                <dt className="text-[#6b7280]">Active backend</dt>
                <dd className="mt-1 font-mono text-[#111827]">
                  {activeDecoder.id} ({activeDecoder.vendor})
                </dd>
              </div>
              <div>
                <dt className="text-[#6b7280]">Glass-to-glass</dt>
                <dd className="mt-1 font-mono tabular-nums text-[#15803d]">
                  &lt;50 ms
                </dd>
              </div>
              <div>
                <dt className="text-[#6b7280]">Bitrate mode</dt>
                <dd className="mt-1 font-mono tabular-nums text-[#111827]">
                  4–24 Mbps CBR
                </dd>
              </div>
            </dl>
          </div>

          {/* Narrow Spec Card: Zero-CPU MP4 Muxer */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#111827]/10 bg-white p-6 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 font-mono text-xs text-[#6b7280]">
                  <span className="h-2 w-2 rounded-full bg-[#dc2626]" />
                  Direct stream muxer
                </span>
                <kbd className="keycap">R</kbd>
              </div>

              <h3 className="mt-4 text-lg font-medium text-[#111827]">
                Zero-CPU MP4 recording
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4b5563]">
                Writes the incoming H.264 video and AAC audio packets straight to an MP4 container
                without re-encoding, so recording never drops mirror frames.
              </p>
            </div>

            <dl className="mt-6 divide-y divide-[#111827]/8 border-y border-[#111827]/8 text-sm">
              <div className="flex items-center justify-between py-2.5">
                <dt className="text-[#4b5563]">Re-encode CPU</dt>
                <dd className="font-mono font-medium tabular-nums text-[#15803d]">
                  0.0%
                </dd>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <dt className="text-[#4b5563]">Video track</dt>
                <dd className="font-mono text-xs text-[#111827]">
                  H.264 passthrough
                </dd>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <dt className="text-[#4b5563]">Audio track</dt>
                <dd className="font-mono text-xs text-[#111827]">
                  AAC · voice DSP
                </dd>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <dt className="text-[#4b5563]">Output file</dt>
                <dd className="font-mono text-xs text-[#111827]">
                  ISO MP4
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Row 2: Two Equal Supporting Capabilities */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Voice Isolation DSP */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#111827]/10 bg-white p-6">
            <div>
              <div className="flex items-center gap-2.5 text-[#4b5563]">
                <Mic className="h-4 w-4 text-[#6b7280]" strokeWidth={1.5} />
                <h3 className="text-base font-medium text-[#111827]">
                  Voice isolation DSP
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#4b5563]">
                Captures phone microphone audio with real-time background noise suppression and
                optional monitoring through your PC speakers.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 rounded-xl border border-[#111827]/8 bg-[#f7f8fa] px-4 py-3 font-mono text-xs text-[#4b5563]">
              <span className="text-[#111827]">Phone mic</span>
              <span aria-hidden="true">→</span>
              <span className="text-[#111827]">Noise suppression DSP</span>
              <span aria-hidden="true">→</span>
              <span className="text-[#111827]">PC audio &amp; MP4</span>
            </div>
          </div>

          {/* Instant Plug & Play */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#111827]/10 bg-white p-6">
            <div>
              <div className="flex items-center gap-2.5 text-[#4b5563]">
                <Usb className="h-4 w-4 text-[#6b7280]" strokeWidth={1.5} />
                <h3 className="text-base font-medium text-[#111827]">
                  Auto-connect over USB
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#4b5563]">
                Detects your Android phone the moment you plug in a data cable. ADB, WinUSB DLLs,
                SDL3, FFmpeg, and the Android server ship inside the installer.
              </p>
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-2 border-t border-[#111827]/8 pt-4 text-sm text-[#4b5563] sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-[#6b7280]" strokeWidth={1.5} />
                No Android SDK or Java
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-[#6b7280]" strokeWidth={1.5} />
                No terminal commands
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
