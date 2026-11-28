"use client";

import { useState, useSyncExternalStore } from "react";
import { Check, Copy, Download, Star, Terminal } from "lucide-react";
import { AppleIcon, GitHubIcon, LinuxIcon, WindowsIcon } from "@/components/Icons";
import {
  PLATFORM_DOWNLOADS,
  SITE_CONFIG,
  getDownloadUrl,
  type PlatformId,
} from "@/lib/constants";

function PlatformIcon({
  platform,
  className,
}: {
  platform: PlatformId;
  className?: string;
}) {
  if (platform === "macos") return <AppleIcon className={className} />;
  if (platform === "linux") return <LinuxIcon className={className} />;
  return <WindowsIcon className={className} />;
}

function detectPlatform(): PlatformId {
  if (typeof navigator === "undefined") return "windows";
  const ua = (navigator.userAgent || "").toLowerCase();
  if (ua.includes("mac os") || ua.includes("macintosh")) return "macos";
  if (ua.includes("linux") && !ua.includes("android")) return "linux";
  return "windows";
}

const emptySubscribe = () => () => {};

function useDetectedPlatform(): PlatformId {
  return useSyncExternalStore(
    emptySubscribe,
    detectPlatform,
    () => "windows" as PlatformId
  );
}

export function HeroPlatformDownload() {
  const autoDetected = useDetectedPlatform();
  const [manualPlatform, setManualPlatform] = useState<PlatformId | null>(null);
  const detected = manualPlatform ?? autoDetected;

  const current = PLATFORM_DOWNLOADS[detected];
  const primaryUrl = getDownloadUrl(detected);
  const allPlatforms: PlatformId[] = ["windows", "macos", "linux"];

  return (
    <div className="mt-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <a
          href={primaryUrl}
          download={current.filename}
          className="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#171717] px-5 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#262626] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
        >
          <PlatformIcon platform={detected} className="h-4 w-4 shrink-0" />
          {current.label}
        </a>

        <a
          href={SITE_CONFIG.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-[#e5e5e5] bg-white px-5 text-sm font-medium text-[#171717] transition-colors duration-150 hover:border-[#d4d4d4] hover:bg-[#f8fafc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
        >
          <GitHubIcon className="h-4 w-4 shrink-0 text-[#171717]" />
          <span>Star on GitHub</span>
          <Star className="h-3.5 w-3.5 shrink-0 fill-amber-400 text-amber-500" />
        </a>
      </div>

      {/* Live GitHub Stars social proof + Platform Selector */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {allPlatforms.map((id) => {
          const info = PLATFORM_DOWNLOADS[id];
          const isActive = detected === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setManualPlatform(id)}
              className={`inline-flex h-8 items-center gap-1.5 rounded-md border px-2.5 text-xs font-medium transition-colors duration-150 ${
                isActive
                  ? "border-[#171717] bg-[#171717]/5 text-[#171717]"
                  : "border-[#e5e5e5] bg-white text-[#737373] hover:border-[#d4d4d4] hover:text-[#171717]"
              }`}
            >
              <PlatformIcon platform={id} className="h-3.5 w-3.5 shrink-0" />
              <span>{info.shortLabel}</span>
            </button>
          );
        })}
        <a
          href="#download"
          className="hover-underline ml-1 text-xs font-medium text-[#2563eb] hover:text-[#1d4ed8]"
        >
          All downloads
        </a>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2.5">
        <p className="font-mono text-xs text-[#737373]">
          Free · Open source · {current.filename}
        </p>
        <a
          href={SITE_CONFIG.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mobile Mirror GitHub stars"
          className="inline-flex items-center transition-opacity duration-150 hover:opacity-85"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SITE_CONFIG.githubStarsBadgeUrl}
            alt="GitHub stars"
            className="h-5 w-auto"
          />
        </a>
      </div>
    </div>
  );
}

const DOWNLOAD_CARDS: Array<{
  id: PlatformId;
  title: string;
  primaryLabel: string;
  packageMeta: string;
  requirements: string;
}> = [
  {
    id: "macos",
    title: "macOS",
    primaryLabel: "Download for macOS",
    packageMeta: "Apple Silicon · .dmg",
    requirements: "macOS 13 or later (Apple Silicon M1–M4).",
  },
  {
    id: "windows",
    title: "Windows",
    primaryLabel: "Download for Windows",
    packageMeta: "Windows 64-bit · .exe",
    requirements: "Windows 10 version 1903 or Windows 11 (64-bit).",
  },
  {
    id: "linux",
    title: "Linux",
    primaryLabel: "Download .deb (Ubuntu/Debian)",
    packageMeta: "Linux x86_64 · .deb / .tar.gz",
    requirements: "Ubuntu 22.04+, Debian, Fedora, Arch, or equivalent x86_64 Linux.",
  },
];

export function AllPlatformsDownloadRow() {
  const autoDetected = useDetectedPlatform();
  const [hovered, setHovered] = useState<PlatformId | null>(null);
  const [copiedWinget, setCopiedWinget] = useState(false);
  const selected = hovered ?? autoDetected;
  const wingetCommand = "winget install Frontend-fuchhey.MobileMirror";

  const copyWinget = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(wingetCommand).catch(() => {});
      setCopiedWinget(true);
      setTimeout(() => setCopiedWinget(false), 2000);
    }
  };

  return (
    <div id="download" className="w-full">
      <div className="overflow-hidden rounded-xl border border-[#e5e5e5] bg-white">
        <div className="grid grid-cols-1 divide-y divide-[#e5e5e5] lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {DOWNLOAD_CARDS.map((card) => {
            const info = PLATFORM_DOWNLOADS[card.id];
            const isPrimary = selected === card.id;
            return (
              <div
                key={card.id}
                onMouseEnter={() => setHovered(card.id)}
                className="flex flex-col justify-between p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <PlatformIcon
                      platform={card.id}
                      className="h-8 w-8 text-[#171717]"
                    />
                    <span className="font-mono text-xs text-[#737373]">
                      {card.packageMeta}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-medium tracking-[-0.02em] text-[#171717]">
                    {card.title}
                  </h3>

                  <div className="mt-5 flex flex-col gap-2.5">
                    <a
                      href={getDownloadUrl(card.id)}
                      download={info.filename}
                      className={`inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] ${
                        isPrimary
                          ? "bg-[#171717] text-white hover:bg-[#262626]"
                          : "border border-[#e5e5e5] bg-white text-[#171717] hover:border-[#d4d4d4] hover:bg-[#f8fafc]"
                      }`}
                    >
                      <Download className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                      {card.primaryLabel}
                    </a>
                    {info.secondaryUrl && (
                      <a
                        href={info.secondaryUrl}
                        download={info.secondaryFilename}
                        className="inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-lg border border-[#e5e5e5] bg-[#f8fafc] px-3 text-xs font-medium text-[#525252] transition-colors duration-150 hover:border-[#d4d4d4] hover:text-[#171717]"
                      >
                        <Download className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                        {info.secondaryLabel}
                      </a>
                    )}
                  </div>
                </div>

                <div className="mt-7 border-t border-[#e5e5e5] pt-4 text-xs leading-relaxed text-[#737373]">
                  <p className="font-medium text-[#171717]">
                    Minimum Requirements
                  </p>
                  <p className="mt-0.5">{card.requirements}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Windows Package Manager (winget) zero-warning install bar */}
      <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-xl border border-[#e5e5e5] bg-[#f8fafc] px-5 py-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5 text-xs text-[#525252]">
          <Terminal className="h-4 w-4 shrink-0 text-[#171717]" />
          <span>Install on Windows via terminal (no SmartScreen prompt):</span>
        </div>
        <div className="flex w-full items-center justify-between gap-2 rounded-lg border border-[#e5e5e5] bg-white px-3 py-1.5 sm:w-auto">
          <code className="font-mono text-xs text-[#171717]">
            {wingetCommand}
          </code>
          <button
            type="button"
            onClick={copyWinget}
            aria-label="Copy winget install command"
            className="inline-flex h-6 items-center gap-1 rounded px-1.5 text-xs font-medium text-[#737373] transition-colors hover:bg-[#f5f5f5] hover:text-[#171717]"
          >
            {copiedWinget ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-600" />
                <span className="text-emerald-600">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* GitHub Source Code & All Releases row */}
      <div className="mt-6 flex flex-col items-center justify-between gap-3 rounded-xl border border-[#e5e5e5] bg-white px-5 py-4 sm:flex-row">
        <div className="flex items-center gap-2.5 text-sm text-[#737373]">
          <GitHubIcon className="h-4 w-4 shrink-0 text-[#171717]" />
          <span>
            Want to build from source or inspect previous releases ({SITE_CONFIG.version})?
          </span>
        </div>
        <div className="flex items-center gap-5 text-sm font-medium">
          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-underline text-[#171717] hover:text-[#2563eb]"
          >
            GitHub Source Code
          </a>
          <a
            href={SITE_CONFIG.releasesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-underline text-[#2563eb] hover:text-[#1d4ed8]"
          >
            Browse all releases
          </a>
        </div>
      </div>
    </div>
  );
}
