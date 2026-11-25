"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Download } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Setup", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#111827]/8 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563eb]"
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-[#111827]/10 bg-white">
            <Image
              src="/images/app.png"
              alt="Mobile Mirror icon"
              fill
              sizes="32px"
              className="scale-110 object-cover"
              priority
            />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-base font-medium tracking-[-0.01em] text-[#111827]">
              {SITE_CONFIG.name}
            </span>
            <span className="hidden font-mono text-xs text-[#6b7280] sm:inline">
              {SITE_CONFIG.version}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-normal text-[#4b5563] transition-colors duration-150 hover:text-[#111827] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563eb]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-5 md:flex">
          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-normal text-[#4b5563] transition-colors duration-150 hover:text-[#111827] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563eb]"
          >
            GitHub
          </a>
          <a
            href="#download"
            className="inline-flex h-9 items-center gap-2 rounded-lg bg-[#111827] px-4 text-sm font-medium text-white shadow-[0_1px_2px_rgba(17,24,39,0.08)] transition-[background-color,transform] duration-150 hover:bg-[#1f2937] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
          >
            <Download className="h-4 w-4" strokeWidth={1.5} />
            Download
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#111827]/12 bg-white text-[#111827] transition-colors duration-150 hover:bg-[#f7f8fa] md:hidden"
        >
          {mobileOpen ? (
            <X className="h-4 w-4" strokeWidth={1.5} />
          ) : (
            <Menu className="h-4 w-4" strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="border-t border-[#111827]/8 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex h-10 items-center rounded-lg px-3 text-sm font-normal text-[#111827] transition-colors duration-150 hover:bg-[#f7f8fa]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 items-center rounded-lg px-3 text-sm font-normal text-[#4b5563] transition-colors duration-150 hover:bg-[#f7f8fa] hover:text-[#111827]"
            >
              GitHub
            </a>
            <a
              href="#download"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#111827] px-4 text-sm font-medium text-white"
            >
              <Download className="h-4 w-4" strokeWidth={1.5} />
              Download Mobile Mirror
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
