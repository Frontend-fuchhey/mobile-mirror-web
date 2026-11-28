"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Download } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Setup", href: "#setup" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e5e5] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1380px] items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
        {/* Left: Logo + Name + Version */}
        <a
          href="#"
          className="flex min-w-0 items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563eb] sm:gap-2.5"
        >
          <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-md border border-[#e5e5e5] bg-white">
            <Image
              src="/images/app.png"
              alt="Mobile Mirror logo"
              fill
              sizes="28px"
              className="scale-110 object-cover"
              priority
            />
          </div>
          <span className="truncate text-sm font-semibold tracking-[-0.015em] text-[#171717] sm:text-[15px]">
            {SITE_CONFIG.name}
          </span>
          <span className="hidden font-mono text-xs text-[#737373] sm:inline">
            {SITE_CONFIG.version}
          </span>
        </a>

        {/* Center: Primary Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover-underline text-sm font-medium text-[#737373] transition-colors duration-150 hover:text-[#171717] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563eb]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: GitHub + Live Stars Badge + Download */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Star Mobile Mirror on GitHub"
            className="inline-flex h-9 items-center gap-2 rounded-lg border border-[#e5e5e5] bg-white px-3 text-sm font-medium text-[#171717] transition-colors duration-150 hover:border-[#d4d4d4] hover:bg-[#f8fafc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
          >
            <GitHubIcon className="h-4 w-4 shrink-0 text-[#171717]" />
            <span>GitHub</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SITE_CONFIG.githubStarsBadgeUrl}
              alt="GitHub stars"
              className="h-5 w-auto"
            />
          </a>
          <a
            href="#download"
            className="inline-flex h-9 items-center gap-2 rounded-lg bg-[#171717] px-4 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#262626] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
          >
            <Download className="h-3.5 w-3.5" strokeWidth={1.75} />
            Download
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:hidden">
          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Star Mobile Mirror on GitHub"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white text-[#171717] transition-colors duration-150 hover:bg-[#f8fafc] sm:h-9 sm:w-9"
          >
            <GitHubIcon className="h-4 w-4 shrink-0" />
          </a>
          <a
            href="#download"
            className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[#171717] px-2.5 text-xs font-medium text-white transition-colors duration-150 hover:bg-[#262626] sm:h-9 sm:px-3"
          >
            <Download className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
            Download
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white text-[#171717] transition-colors duration-150 hover:bg-[#f8fafc]"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" strokeWidth={1.75} />
            ) : (
              <Menu className="h-4 w-4" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Collapsible Menu */}
      {mobileOpen && (
        <div className="border-t border-[#e5e5e5] bg-white px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex h-11 items-center rounded-lg px-3 text-sm font-medium text-[#171717] transition-colors duration-150 hover:bg-[#f8fafc]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex h-11 items-center justify-between rounded-lg px-3 text-sm font-medium text-[#171717] transition-colors duration-150 hover:bg-[#f8fafc]"
            >
              <span className="inline-flex items-center gap-2">
                <GitHubIcon className="h-4 w-4 shrink-0" />
                Star on GitHub
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={SITE_CONFIG.githubStarsBadgeUrl}
                alt="GitHub stars"
                className="h-5 w-auto"
              />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
