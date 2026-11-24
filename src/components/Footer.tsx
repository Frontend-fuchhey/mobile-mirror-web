import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#06080c]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-white/15">
            <Image
              src="/images/app.png"
              alt="Mobile Mirror logo"
              fill
              sizes="32px"
              className="object-cover scale-110"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              {SITE_CONFIG.name}
              <span className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] text-slate-400">
                {SITE_CONFIG.version}
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Built by {SITE_CONFIG.githubUsername} • MIT / Apache-2.0 License
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-slate-400">
          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub Repository
          </a>
          <a
            href={SITE_CONFIG.releasesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-white"
          >
            Releases
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a href="#features" className="transition-colors hover:text-white">
            Features
          </a>
          <a href="#how-it-works" className="transition-colors hover:text-white">
            Setup Guide
          </a>
          <a href="#faq" className="transition-colors hover:text-white">
            FAQ
          </a>
        </div>
      </div>
    </footer>
  );
}
