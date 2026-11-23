"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Download } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";
import { SITE_CONFIG, getDownloadUrl } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const downloadUrl = getDownloadUrl();

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#07090e]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-white/15 bg-white/5 shadow-sm">
            <Image
              src="/images/app.png"
              alt="Mobile Mirror logo"
              fill
              sizes="36px"
              className="object-cover scale-110"
              priority
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[15px] font-semibold tracking-tight text-white">
              {SITE_CONFIG.name}
            </span>
            <span className="hidden rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[11px] text-slate-400 sm:inline-block">
              {SITE_CONFIG.version}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={downloadUrl}
            download={SITE_CONFIG.installerFilename}
            className="inline-flex items-center gap-2 rounded-lg bg-[#246bfd] px-4 py-2 text-sm font-medium text-white shadow-[0_1px_2px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all hover:bg-[#1b5ee8] active:scale-[0.99]"
          >
            <Download className="h-4 w-4" />
            Download (Windows)
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-200 md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="border-t border-white/[0.07] bg-[#0b0e15] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/[0.05]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/[0.05]"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={downloadUrl}
              download={SITE_CONFIG.installerFilename}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#246bfd] px-4 py-2.5 text-sm font-medium text-white"
            >
              <Download className="h-4 w-4" />
              Download for Windows
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
