"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
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

export function HeroPlatformDownload() {
  const [selected, setSelected] = useState<PlatformId>("windows");

  useEffect(() => {
    setSelected(detectPlatform());
  }, []);

  const current = PLATFORM_DOWNLOADS[selected];
  const primaryUrl = getDownloadUrl(selected);

  return (
    <div className="mt-8">
      {/* OS Switcher Pills */}
      <div
        className="inline-flex items-center gap-1 rounded-lg border border-[#111827]/10 bg-[#f7f8fa] p-1"
        role="tablist"
        aria-label="Choose operating system"
      >
        {(["windows", "macos", "linux"] as const).map((id) => {
          const item = PLATFORM_DOWNLOADS[id];
          const active = selected === id;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setSelected(id)}
              className={`inline-flex h-8 items-center gap-1.5 rounded-md px-3 text-xs font-medium transition-colors duration-150 ${
                active
                  ? "bg-white text-[#111827] shadow-[0_1px_2px_rgba(17,24,39,0.08)]"
                  : "text-[#4b5563] hover:text-[#111827]"
              }`}
            >
              <PlatformIcon platform={id} className="h-3.5 w-3.5 shrink-0" />
              {item.shortLabel}
            </button>
          );
        })}
      </div>

      {/* Primary & Secondary Actions */}
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href={primaryUrl}
          download={current.filename}
          className="inline-flex h-11 items-center justify-center gap-2.5 rounded-lg bg-[#111827] px-5 text-sm font-medium text-white shadow-[0_1px_2px_rgba(17,24,39,0.1)] transition-[background-color,transform] duration-150 hover:bg-[#1f2937] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
        >
          <PlatformIcon platform={selected} className="h-4 w-4 shrink-0" />
          {current.label}
        </a>

        <a
          href={SITE_CONFIG.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#111827]/14 bg-white px-5 text-sm font-medium text-[#111827] shadow-[0_1px_2px_rgba(17,24,39,0.04)] transition-[background-color,border-color,transform] duration-150 hover:border-[#111827]/24 hover:bg-[#f7f8fa] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
        >
          <GitHubIcon className="h-4 w-4 shrink-0 text-[#4b5563]" />
          View on GitHub
        </a>
      </div>

      {/* Selected Platform Specs */}
      <dl className="mt-7 grid max-w-md grid-cols-2 gap-4 border-t border-[#111827]/8 pt-5 text-xs">
        <div>
          <dt className="text-[#6b7280]">Package ({current.shortLabel})</dt>
          <dd className="mt-1 font-mono text-[#111827]">
            {current.packageType}
          </dd>
        </div>
        <div>
          <dt className="text-[#6b7280]">Mobile support</dt>
          <dd className="mt-1 font-mono text-[#111827]">
            Android USB · iOS AirPlay
          </dd>
        </div>
      </dl>
    </div>
  );
}

export function AllPlatformsDownloadRow() {
  return (
    <div id="download" className="flex flex-wrap items-center gap-2.5">
      {(["windows", "macos", "linux"] as const).map((id) => {
        const info = PLATFORM_DOWNLOADS[id];
        return (
          <a
            key={id}
            href={getDownloadUrl(id)}
            download={info.filename}
            className={`inline-flex h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium transition-[background-color,border-color,transform] duration-150 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] ${
              id === "windows"
                ? "bg-[#111827] text-white shadow-[0_1px_2px_rgba(17,24,39,0.1)] hover:bg-[#1f2937]"
                : "border border-[#111827]/14 bg-white text-[#111827] shadow-[0_1px_2px_rgba(17,24,39,0.04)] hover:border-[#111827]/24 hover:bg-[#f7f8fa]"
            }`}
          >
            <PlatformIcon platform={id} className="h-4 w-4 shrink-0" />
            {info.shortLabel}
          </a>
        );
      })}
      <a
        href={SITE_CONFIG.releasesUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-11 items-center gap-1.5 px-2 text-sm font-medium text-[#4b5563] transition-colors duration-150 hover:text-[#111827]"
      >
        All releases
        <ArrowUpRight className="h-4 w-4 text-[#6b7280]" strokeWidth={1.5} />
      </a>
    </div>
  );
}
