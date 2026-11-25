import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[#111827]/8 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center lg:px-8">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-[#111827]/10 bg-white">
            <Image
              src="/images/app.png"
              alt="Mobile Mirror icon"
              fill
              sizes="32px"
              className="scale-110 object-cover"
            />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-medium text-[#111827]">
                {SITE_CONFIG.name}
              </span>
              <span className="font-mono text-xs text-[#6b7280]">
                {SITE_CONFIG.version}
              </span>
            </div>
            <p className="text-xs text-[#6b7280]">
              Built by {SITE_CONFIG.githubUsername} · MIT / Apache-2.0
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-[#4b5563]">
          <a
            href="#features"
            className="transition-colors duration-150 hover:text-[#111827]"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="transition-colors duration-150 hover:text-[#111827]"
          >
            Setup
          </a>
          <a
            href="#faq"
            className="transition-colors duration-150 hover:text-[#111827]"
          >
            FAQ
          </a>
          <a
            href={SITE_CONFIG.releasesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition-colors duration-150 hover:text-[#111827]"
          >
            Releases
            <ArrowUpRight className="h-3.5 w-3.5 text-[#6b7280]" strokeWidth={1.5} />
          </a>
          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition-colors duration-150 hover:text-[#111827]"
          >
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5 text-[#6b7280]" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
