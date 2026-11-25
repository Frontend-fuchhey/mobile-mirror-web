"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { AppleIcon } from "@/components/Icons";

function AndroidRobotIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 56"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Antennae */}
      <path
        d="M16.5 10.5L13.2 5.2M31.5 10.5L34.8 5.2"
        stroke="#57C057"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Head */}
      <path
        d="M11 20.5C11 13.6 16.8 8.5 24 8.5C31.2 8.5 37 13.6 37 20.5V21.5H11V20.5Z"
        fill="#57C057"
      />
      {/* Eyes */}
      <circle cx="18.5" cy="15.5" r="1.6" fill="#FFFFFF" />
      <circle cx="29.5" cy="15.5" r="1.6" fill="#FFFFFF" />
      {/* Body */}
      <path
        d="M11 23.5H37V39.5C37 41.7 35.2 43.5 33 43.5H15C12.8 43.5 11 41.7 11 39.5V23.5Z"
        fill="#57C057"
      />
      {/* Arms */}
      <rect x="3.5" y="23.5" width="5.5" height="16.5" rx="2.75" fill="#57C057" />
      <rect x="39" y="23.5" width="5.5" height="16.5" rx="2.75" fill="#57C057" />
      {/* Legs */}
      <rect x="16" y="42.5" width="5.5" height="10.5" rx="2.75" fill="#57C057" />
      <rect x="26.5" y="42.5" width="5.5" height="10.5" rx="2.75" fill="#57C057" />
    </svg>
  );
}

function AndroidPhoneVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative h-[138px] w-[88px] shrink-0 overflow-hidden rounded-t-[16px] border-[3px] border-b-0 border-[#1e293b] bg-[#1e3a5f] shadow-[0_8px_20px_-6px_rgba(15,23,42,0.22)]"
    >
      {/* Top camera / notch bar */}
      <div className="absolute top-0 left-1/2 z-10 h-2.5 w-8 -translate-x-1/2 rounded-b-md bg-[#1e293b]" />
      {/* Wallpaper SVG */}
      <svg
        viewBox="0 0 88 138"
        fill="none"
        className="h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="androidBg" x1="0" y1="0" x2="88" y2="138" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e3a63" />
            <stop offset="55%" stopColor="#2c4e7c" />
            <stop offset="100%" stopColor="#162b4d" />
          </linearGradient>
          <linearGradient id="androidWave" x1="10" y1="138" x2="88" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#bae6fd" />
          </linearGradient>
        </defs>
        <rect width="88" height="138" fill="url(#androidBg)" />
        <path
          d="M0 112 C28 110, 52 90, 88 54 L88 138 L0 138 Z"
          fill="url(#androidWave)"
        />
        <path
          d="M12 138 C42 126, 62 104, 88 78 L88 138 Z"
          fill="#0284c7"
          fillOpacity="0.45"
        />
      </svg>
    </div>
  );
}

function IPhoneVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative h-[138px] w-[88px] shrink-0 overflow-hidden rounded-t-[18px] border-[3px] border-b-0 border-[#0f172a] bg-[#0b1026] shadow-[0_8px_20px_-6px_rgba(15,23,42,0.28)]"
    >
      {/* iPhone notch */}
      <div className="absolute top-0 left-1/2 z-10 h-3 w-10 -translate-x-1/2 rounded-b-lg bg-[#0f172a]" />
      {/* Wallpaper SVG */}
      <svg
        viewBox="0 0 88 138"
        fill="none"
        className="h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="iosBase" x1="0" y1="0" x2="88" y2="138" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#090d24" />
            <stop offset="50%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          <linearGradient id="iosRibbonLeft" x1="0" y1="10" x2="50" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="55%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="iosRibbonRight" x1="88" y1="20" x2="36" y2="138" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="45%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        <rect width="88" height="138" fill="url(#iosBase)" />
        <path
          d="M0 12 C28 18, 46 42, 44 82 C30 62, 16 44, 0 38 Z"
          fill="url(#iosRibbonLeft)"
          fillOpacity="0.9"
        />
        <path
          d="M88 16 C60 22, 44 48, 44 88 C60 72, 74 62, 88 60 Z"
          fill="url(#iosRibbonLeft)"
          fillOpacity="0.7"
        />
        <path
          d="M0 138 C16 98, 42 74, 88 54 L88 138 Z"
          fill="url(#iosRibbonRight)"
          fillOpacity="0.88"
        />
        <path
          d="M44 138 C52 106, 68 88, 88 80 L88 138 Z"
          fill="#0f172a"
          fillOpacity="0.65"
        />
      </svg>
    </div>
  );
}

const GUIDES = [
  {
    id: "android",
    title: "Android Setup",
    summary: "Enable USB debugging and connect your device.",
    steps: [
      "Open Settings → About Phone and tap Build Number 7 times to unlock Developer Options.",
      "Open Developer Options and turn on USB Debugging.",
      "Connect your phone via USB and tap Allow on the one-time debugging prompt.",
    ],
  },
  {
    id: "iphone",
    title: "iPhone Setup",
    summary: "Use AirPlay or USB to mirror your screen.",
    steps: [
      "Connect your iPhone or iPad to the same Wi-Fi network as your computer.",
      "Open Control Center → Screen Mirroring and select Mobile Mirror.",
      "Allow Local Network / Firewall access on your computer if prompted.",
    ],
  },
] as const;

export function SetupGuide() {
  const [openGuide, setOpenGuide] = useState<string | null>(null);

  return (
    <section
      id="setup"
      className="border-t border-[#e5e5e5] bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#0f172a] sm:text-3xl">
          Setup Guide
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {GUIDES.map((guide) => {
            const isOpen = openGuide === guide.id;
            return (
              <div
                key={guide.id}
                className="overflow-hidden rounded-2xl border border-[#e5eaf2] bg-white transition-colors duration-150 hover:border-[#cbd5e1]"
              >
                {/* Top Card Row matching reference layout */}
                <div className="flex items-end justify-between gap-4 px-6 pt-6 sm:px-8 sm:pt-7">
                  <div className="flex items-start gap-5 pb-6 sm:gap-6 sm:pb-7">
                    <div className="mt-0.5 shrink-0">
                      {guide.id === "android" ? (
                        <AndroidRobotIcon className="h-12 w-10 sm:h-14 sm:w-12" />
                      ) : (
                        <AppleIcon className="h-12 w-10 text-[#0f172a] sm:h-13 sm:w-11" />
                      )}
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold tracking-[-0.015em] text-[#0f172a]">
                        {guide.title}
                      </h3>
                      <p className="mt-1.5 max-w-[230px] text-sm leading-snug text-[#64748b]">
                        {guide.summary}
                      </p>

                      <button
                        type="button"
                        onClick={() => setOpenGuide(isOpen ? null : guide.id)}
                        aria-expanded={isOpen}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#2563eb] transition-colors duration-150 hover:text-[#1d4ed8]"
                      >
                        <span>{isOpen ? "Hide Guide" : "View Guide"}</span>
                        <ArrowRight
                          className={`h-4 w-4 transition-transform duration-150 ${
                            isOpen ? "rotate-90" : ""
                          }`}
                          strokeWidth={1.75}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Right Phone Graphic */}
                  <div className="hidden self-end sm:block">
                    {guide.id === "android" ? (
                      <AndroidPhoneVisual />
                    ) : (
                      <IPhoneVisual />
                    )}
                  </div>
                </div>

                {/* Expandable Step-by-Step Instructions */}
                {isOpen && (
                  <div className="border-t border-[#e5eaf2] bg-[#f8fafc] px-6 py-5 sm:px-8">
                    <ol className="space-y-2.5 text-sm text-[#475569]">
                      {guide.steps.map((step, i) => (
                        <li key={step} className="flex items-start gap-2.5">
                          <span className="mt-0.5 font-mono text-xs font-medium text-[#2563eb]">
                            0{i + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
